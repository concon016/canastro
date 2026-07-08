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

// Share helper — used by each tool page's result screen
function shareResult(text) {
  const shareData = {
    title: "canastro",
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
