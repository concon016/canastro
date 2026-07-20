// Star field background
(function createStarField() {
  const field = document.createElement("div");
  field.className = "star-field";
  const count = window.innerWidth < 640 ? 60 : 110;
  for (let i = 0; i < count; i++) {
    const star = document.createElement("span");
    star.className = "star";
    const size = Math.random() * 2 + 1;
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    star.style.animationDuration = 2 + Math.random() * 4 + "s";
    star.style.animationDelay = Math.random() * 4 + "s";
    field.appendChild(star);
  }
  document.body.prepend(field);
})();

// Seeded pseudo-random helpers (deterministic per string seed)
function hashSeed(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  };
}

function seededRandom(seed) {
  return hashSeed(String(seed))();
}

function seededInt(seed, min, max) {
  return Math.floor(seededRandom(seed) * (max - min + 1)) + min;
}

function seededPick(seed, arr) {
  return arr[seededInt(seed, 0, arr.length - 1)];
}

function todayKey() {
  const d = new Date();
  return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
}

// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navMobile = document.getElementById("navMobile");
if (menuToggle && navMobile) {
  menuToggle.addEventListener("click", () => {
    navMobile.classList.toggle("open");
  });
  navMobile.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navMobile.classList.remove("open"));
  });
}

// Scroll reveal
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealEls.forEach((el) => revealObserver.observe(el));

// Shareable image card — draws a branded PNG for Instagram/WhatsApp/story sharing
function wrapCanvasText(ctx, text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let line = "";
  words.forEach((word) => {
    const test = line ? line + " " + word : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  });
  if (line) lines.push(line);
  return lines;
}

function generateShareCardCanvas(text) {
  const W = 1080, H = 1080;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");

  const bgGrad = ctx.createLinearGradient(0, 0, W, H);
  bgGrad.addColorStop(0, "#0a0a0a");
  bgGrad.addColorStop(1, "#1a0509");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);

  const glow = ctx.createRadialGradient(W * 0.82, H * 0.14, 0, W * 0.82, H * 0.14, 520);
  glow.addColorStop(0, "rgba(229, 9, 20, 0.35)");
  glow.addColorStop(1, "rgba(229, 9, 20, 0)");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, W, H);

  const starGen = hashSeed("card-" + text.length + text.slice(0, 8));
  for (let i = 0; i < 70; i++) {
    const x = starGen() * W;
    const y = starGen() * H;
    const r = starGen() * 1.6 + 0.4;
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,255,255," + (starGen() * 0.5 + 0.15).toFixed(2) + ")";
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.strokeStyle = "rgba(255,255,255,0.1)";
  ctx.lineWidth = 2;
  ctx.strokeRect(28, 28, W - 56, H - 56);

  ctx.textBaseline = "alphabetic";
  ctx.font = "600 48px Arial, sans-serif";
  const w1 = ctx.measureText("astroloji").width;
  const w2 = ctx.measureText("vakti").width;
  const startX = W / 2 - (w1 + w2) / 2;
  ctx.textAlign = "left";
  ctx.fillStyle = "#f5f5f5";
  ctx.fillText("astroloji", startX, 150);
  ctx.fillStyle = "#e50914";
  ctx.fillText("vakti", startX + w1, 150);

  ctx.textAlign = "center";
  ctx.font = "44px Arial, sans-serif";
  ctx.fillStyle = "#e50914";
  ctx.fillText("✦", W / 2, 230);

  ctx.font = "700 52px Arial, sans-serif";
  ctx.fillStyle = "#f5f5f5";
  const lines = wrapCanvasText(ctx, text, W - 200);
  const lineHeight = 68;
  const blockHeight = lines.length * lineHeight;
  const startY = H / 2 - blockHeight / 2 + lineHeight / 2;
  lines.forEach((line, i) => {
    ctx.fillText(line, W / 2, startY + i * lineHeight);
  });

  ctx.strokeStyle = "rgba(255,255,255,0.12)";
  ctx.beginPath();
  ctx.moveTo(W / 2 - 90, H - 130);
  ctx.lineTo(W / 2 + 90, H - 130);
  ctx.stroke();

  ctx.font = "500 30px Arial, sans-serif";
  ctx.fillStyle = "#b3b3b3";
  ctx.fillText("astrolojivakti.com", W / 2, H - 80);

  return canvas;
}

function downloadShareCard(text) {
  if (!text) return;
  const canvas = generateShareCardCanvas(text);
  canvas.toBlob((blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "astrolojivakti-kart.png";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }, "image/png");
}

// Share helper — used by each tool page's result screen
function shareResult(text) {
  const shareData = {
    title: "astrolojivakti",
    text: text,
    url: window.location.href,
  };
  if (navigator.share) {
    navigator.share(shareData).catch(() => {});
  } else {
    const fullText = text + " — " + window.location.href;
    navigator.clipboard
      .writeText(fullText)
      .then(() => {
        const btn = document.activeElement;
        if (btn && btn.dataset) {
          const original = btn.textContent;
          btn.textContent = "Kopyalandı!";
          setTimeout(() => (btn.textContent = original), 1800);
        }
      })
      .catch(() => {
        alert(fullText);
      });
  }
}
