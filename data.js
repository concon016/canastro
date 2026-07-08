// ---- Burçlar ----
const ZODIAC_SIGNS = [
  { id: "koc", name: "Koç", symbol: "♈", range: "21 Mart - 19 Nisan", element: "ates" },
  { id: "boga", name: "Boğa", symbol: "♉", range: "20 Nisan - 20 Mayıs", element: "toprak" },
  { id: "ikizler", name: "İkizler", symbol: "♊", range: "21 Mayıs - 20 Haziran", element: "hava" },
  { id: "yengec", name: "Yengeç", symbol: "♋", range: "21 Haziran - 22 Temmuz", element: "su" },
  { id: "aslan", name: "Aslan", symbol: "♌", range: "23 Temmuz - 22 Ağustos", element: "ates" },
  { id: "basak", name: "Başak", symbol: "♍", range: "23 Ağustos - 22 Eylül", element: "toprak" },
  { id: "terazi", name: "Terazi", symbol: "♎", range: "23 Eylül - 22 Ekim", element: "hava" },
  { id: "akrep", name: "Akrep", symbol: "♏", range: "23 Ekim - 21 Kasım", element: "su" },
  { id: "yay", name: "Yay", symbol: "♐", range: "22 Kasım - 21 Aralık", element: "ates" },
  { id: "oglak", name: "Oğlak", symbol: "♑", range: "22 Aralık - 19 Ocak", element: "toprak" },
  { id: "kova", name: "Kova", symbol: "♒", range: "20 Ocak - 18 Şubat", element: "hava" },
  { id: "balik", name: "Balık", symbol: "♓", range: "19 Şubat - 20 Mart", element: "su" },
];

const HOROSCOPE_POOLS = {
  genel: [
    "Bugün sezgilerine her zamankinden daha çok güvenmelisin, iç sesin seni doğru yere götürüyor.",
    "Çevrendekilerle kurduğun bağlar bugün beklenmedik bir şekilde güçlenebilir.",
    "Küçük bir değişiklik, gün içinde büyük bir fark yaratacak.",
    "Bugün sabırlı olman gereken bir konu ortaya çıkabilir, aceleye getirme.",
    "Enerjini doğru yöne kanalize edersen gün senin lehine dönebilir.",
    "Geçmişte bıraktığın bir mesele bugün tekrar gündeme gelebilir, bu senin için bir fırsat.",
    "Bugün yalnız kalmaya değil, paylaşmaya ihtiyacın olabilir.",
    "Kendine ayırdığın zaman, bugün sana en çok iyi gelecek şey olacak.",
    "Bir karar vermeden önce bir kez daha düşünmen faydana olacak.",
    "Bugün şans senden yana, ama fırsatı yakalamak sana kalmış.",
    "İçindeki huzursuzluk, aslında bir değişim isteğinin işareti olabilir.",
    "Bugün çevrenden gelecek küçük bir jest, moralini yükseltecek.",
  ],
  ask: [
    "Aşk hayatında beklenmedik bir gelişme seni şaşırtabilir, açık fikirli ol.",
    "Bugün duygularını ifade etmekten çekinme, karşındaki bunu takdir edecek.",
    "Bekar olanlar için gün, tanışma ihtimali yüksek bir gün.",
    "İlişkinde küçük bir yanlış anlaşılma varsa, bugün konuşarak çözebilirsin.",
    "Kalbin bugün sana ne istediğini çok net söylüyor, dinlemeye değer.",
    "Geçmişten biri bugün aklına gelebilir, ama bu bir işaret olmak zorunda değil.",
    "Bugün partnerine göstereceğin küçük bir ilgi, ilişkinizi güçlendirecek.",
    "Yalnız olmak bugün seni rahatsız etmiyor, kendinle barışıksın.",
    "Aşk konusunda bugün risk almak sana yakışacak.",
    "Duygusal olarak biraz hassas olabilirsin, kendine nazik davran.",
    "Bugün biriyle kurduğun sohbet, beklediğinden daha anlamlı olabilir.",
    "İlişkinde uzun zamandır ertelediğin bir konuşmayı yapmak için uygun bir gün.",
  ],
  kariyer: [
    "İş hayatında attığın adımlar kısa sürede karşılığını verecek.",
    "Bugün bir teklif ya da fırsatla karşılaşabilirsin, dikkatli değerlendir.",
    "Ekip içinde liderlik etmen gereken bir an ortaya çıkabilir.",
    "Finansal konularda bugün temkinli davranman senin yararına olacak.",
    "Uzun zamandır ertelediğin bir işi bitirmek için enerjin yerinde.",
    "Bugün yeni bir fikir aklına gelebilir, not almayı unutma.",
    "İş yerinde biriyle yaşadığın gerginlik bugün çözüme kavuşabilir.",
    "Emeğinin karşılığını görmek için sabırlı olman gerekebilir.",
    "Bugün küçük bir risk, kariyerinde büyük bir kapı açabilir.",
    "Odaklanman gereken bir gün, dikkatini dağıtan şeylerden uzak dur.",
    "Bugün aldığın bir karar, ileride seni haklı çıkaracak.",
    "Yeni bir iş birliği ya da ortaklık teklifi gündemine girebilir.",
  ],
  enerji: [
    "Bugün enerjin yüksek, bunu değerlendirmek için doğru zaman.",
    "Bedeninin sana verdiği sinyalleri dinle, dinlenmeye ihtiyacın olabilir.",
    "Küçük bir yürüyüş bile bugün zihnini çok rahatlatacak.",
    "Bugün kendine iyi bakmak, yapabileceğin en değerli şey.",
    "İçindeki huzursuzluk hareket ederek dağılabilir.",
    "Uykuna dikkat etmen gereken bir dönemdesin.",
    "Bugün pozitif enerjin çevrene de yayılacak.",
    "Biraz yavaşlamak, bugün sana daha çok iyi gelecek.",
    "Ruhsal olarak kendini yenilemek için iyi bir gün.",
    "Bugün doğayla ya da açık havayla bağlantı kurmak sana iyi gelecek.",
    "İçsel dengeyi bulmak için bugün küçük bir mola yeterli olabilir.",
    "Enerjini korumak için bugün 'hayır' demeyi öğrenmelisin.",
  ],
};

// ---- Burç uyumu ----
const ELEMENT_BASE = {
  "ates-ates": 82, "ates-hava": 88, "ates-toprak": 45, "ates-su": 40,
  "hava-hava": 78, "hava-su": 48, "toprak-toprak": 80, "toprak-su": 90,
};

function elementPairScore(e1, e2) {
  const key1 = e1 + "-" + e2;
  const key2 = e2 + "-" + e1;
  return ELEMENT_BASE[key1] ?? ELEMENT_BASE[key2] ?? 55;
}

const COMPAT_TIERS = [
  { min: 85, label: "Kader Ortağı", text: "Aranızda kozmik bir uyum var. Enerjileriniz birbirini öyle güzel tamamlıyor ki, bu bağ tesadüf değil gibi görünüyor." },
  { min: 70, label: "Güçlü Uyum", text: "Aranızdaki bağ oldukça güçlü. Küçük farklılıklar olsa da birbirinizi dengeleme konusunda doğal bir yetenek var." },
  { min: 50, label: "Gelişime Açık", text: "İlk bakışta çok farklı görünseniz de, çaba gösterdiğinizde şaşırtıcı derecede iyi anlaşabilirsiniz." },
  { min: 0, label: "Zorlu Ama İmkansız Değil", text: "Bu eşleşme kolay değil, ama zıtlıklar bazen en öğretici bağları kurar. Sabır ve iletişim burada anahtar." },
];

function compatTier(score) {
  return COMPAT_TIERS.find((t) => score >= t.min);
}

// ---- Kişilik testi ----
const PERSONALITY_QUESTIONS = [
  {
    q: "Yeni bir haftaya başlarken hissettiğin şey genelde nedir?",
    options: [
      { text: "Heyecan, harekete geçmek için sabırsızlanırım.", type: "gunes" },
      { text: "İçimden gelen sessiz bir sezgiyle plan yaparım.", type: "ay" },
      { text: "Merak, keşfedecek yeni bir şey ararım.", type: "yildiz" },
      { text: "Sakinlik, adım adım ilerlemeyi tercih ederim.", type: "toprak" },
    ],
  },
  {
    q: "Bir arkadaş grubunda genelde nasıl bir rolün olur?",
    options: [
      { text: "Enerjiyi yükselten, ortamı canlandıran kişi.", type: "gunes" },
      { text: "Herkesin duygusal durumunu hisseden kişi.", type: "ay" },
      { text: "Yeni fikirler ve planlar öneren kişi.", type: "yildiz" },
      { text: "Herkesin güvendiği, dengeyi sağlayan kişi.", type: "toprak" },
    ],
  },
  {
    q: "Zor bir karar anında ne yaparsın?",
    options: [
      { text: "İçgüdülerimle hızlıca karar veririm.", type: "gunes" },
      { text: "Kalbimin ne dediğini dinlerim.", type: "ay" },
      { text: "Farklı olasılıkları hayal ederim.", type: "yildiz" },
      { text: "Artılarını eksilerini sakince tartarım.", type: "toprak" },
    ],
  },
  {
    q: "Boş bir günün olsa ne yapmak istersin?",
    options: [
      { text: "Dışarı çıkıp insanlarla vakit geçirmek.", type: "gunes" },
      { text: "Yalnız kalıp kendimle baş başa kalmak.", type: "ay" },
      { text: "Hiç gitmediğim bir yeri keşfetmek.", type: "yildiz" },
      { text: "Evimde huzurlu, sakin bir gün geçirmek.", type: "toprak" },
    ],
  },
  {
    q: "Başkaları seni nasıl tanımlar?",
    options: [
      { text: "Karizmatik ve enerjik.", type: "gunes" },
      { text: "Duyarlı ve derin.", type: "ay" },
      { text: "Meraklı ve özgür ruhlu.", type: "yildiz" },
      { text: "Güvenilir ve sakin.", type: "toprak" },
    ],
  },
  {
    q: "Stresli bir anda seni en çok ne rahatlatır?",
    options: [
      { text: "Hareket etmek, bir şeyler yapmak.", type: "gunes" },
      { text: "Duygularımı yazmak ya da müzik dinlemek.", type: "ay" },
      { text: "Ortamı değiştirmek, yeni bir şey denemek.", type: "yildiz" },
      { text: "Rutinime dönmek, düzeni sağlamak.", type: "toprak" },
    ],
  },
  {
    q: "Hayattan en çok neye değer verirsin?",
    options: [
      { text: "Özgürlük ve tutku.", type: "gunes" },
      { text: "Derin bağlar ve anlam.", type: "ay" },
      { text: "Keşif ve merak.", type: "yildiz" },
      { text: "Huzur ve istikrar.", type: "toprak" },
    ],
  },
  {
    q: "Bir hayalin gerçekleşse en çok ne hissedersin?",
    options: [
      { text: "Gurur ve heyecan.", type: "gunes" },
      { text: "Derin bir tatmin ve huzur.", type: "ay" },
      { text: "Yeni hayaller kurma isteği.", type: "yildiz" },
      { text: "Sakin bir minnettarlık.", type: "toprak" },
    ],
  },
];

const PERSONALITY_RESULTS = {
  gunes: {
    title: "Güneş Ruhu",
    text: "Enerjin çevrene ışık saçıyor. Doğuştan bir lidersin, insanları harekete geçirme ve ortama hayat verme konusunda özel bir yeteneğin var. Cesaretin ve tutkun, seni bulunduğun her ortamda fark edilir kılıyor.",
  },
  ay: {
    title: "Ay Rüyacısı",
    text: "Duyguların derin ve sezgilerin güçlü. Çevrendeki insanların hissettiklerini onlardan önce anlayabiliyorsun. İçe dönük ama son derece anlamlı bir dünyan var; sanat ve derin bağlar seni besliyor.",
  },
  yildiz: {
    title: "Yıldız Kaşifi",
    text: "Merakın seni hiç durmadan yeni ufuklara götürüyor. Rutinden sıkılır, keşfetmeden duramazsın. Özgür ruhun ve yaratıcılığın, çevrendekilere ilham veriyor.",
  },
  toprak: {
    title: "Toprak Bilgesi",
    text: "Sağlam ve güvenilirsin. Çevrendeki insanlar zor zamanlarında sana yönelir, çünkü sen sakinliğin ve dengenin simgesisin. Sabrın ve pratik zekân, en karmaşık durumları bile çözüme kavuşturuyor.",
  },
};

// ---- Numeroloji ----
const LIFE_PATH_MEANINGS = {
  1: "Lidersin. Bağımsız, kararlı ve öncü bir ruhun var. Kendi yolunu çizmekten korkmuyorsun.",
  2: "Denge ve uyum arayan bir ruhsun. Duyarlısın, iş birliğine yatkınsın ve ilişkilerde derinlik ararsın.",
  3: "Yaratıcılığın ve ifade gücün öne çıkıyor. Sosyalsin, iletişimin güçlü, hayata renk katıyorsun.",
  4: "Disiplinli ve güvenilirsin. Sağlam temeller kurmayı, planlı ilerlemeyi seversin.",
  5: "Özgürlüğüne düşkünsün. Değişim, macera ve yeni deneyimler seni canlı tutar.",
  6: "Şefkatli ve sorumluluk sahibisin. Ailene ve sevdiklerine karşı derin bir bağlılığın var.",
  7: "İçe dönük ve analitik bir zihnin var. Bilgeliği ve gerçeği araştırmaktan hoşlanırsın.",
  8: "Hırslısın ve maddi/manevi başarı senin için önemli. Güçlü bir irade taşıyorsun.",
  9: "Idealistsin. Şefkatin geniş bir çevreye yayılıyor, insanlığa hizmet etme arzusu taşıyorsun.",
  11: "Usta sayı 11: Güçlü bir sezgisel yeteneğin ve ilham verme gücün var. Ruhsal bir öncüsün.",
  22: "Usta sayı 22: Büyük hayalleri gerçeğe dönüştürme kapasitesine sahipsin, 'usta inşaatçı' enerjisi taşıyorsun.",
  33: "Usta sayı 33: Koşulsuz sevgi ve şefkatle çevrene ilham veren, öğretmen ruhlu bir enerjin var.",
};

const LETTER_VALUES = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 1, K: 2, L: 3, M: 4,
  N: 5, O: 6, P: 7, Q: 8, R: 9, S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8,
  Ç: 3, Ğ: 7, İ: 9, Ö: 6, Ş: 1, Ü: 3,
};

// ---- Aşk uyumu ----
const LOVE_TIERS = [
  { min: 85, label: "Kader Ortağı", text: "Bu isimler arasında kozmik bir uyum seziliyor. Aranızdaki bağ, yıldızların özel bir şekilde hizalandığı anlara işaret ediyor." },
  { min: 65, label: "Güçlü Bağ", text: "Aranızda doğal ve akıcı bir uyum var. Birbirinizi tamamlayan yönleriniz oldukça belirgin." },
  { min: 40, label: "Gelişebilir", text: "Şu an tam bir uyum olmasa da, zaman ve iletişimle bu bağ güçlenmeye çok açık." },
  { min: 0, label: "Zıt Kutuplar", text: "Çok farklı enerjiler taşıyorsunuz, ama bazen en ilginç hikayeler böyle başlar." },
];

function loveTier(score) {
  return LOVE_TIERS.find((t) => score >= t.min);
}

// ---- Rüya tabiri ----
const DREAM_DICTIONARY = {
  "su": "Berrak su görmek huzuru, bulanık su ise içinde bulunduğun karışıklığı simgeler. Duygusal durumunun bir yansıması olabilir.",
  "yılan": "Gizli bir tehdide ya da fark etmediğin bir düşmana işaret edebilir. Aynı zamanda dönüşüm ve yenilenmenin de simgesidir.",
  "uçmak": "Özgürlük arayışını ve hayatındaki kontrolü ele alma isteğini temsil eder. Genelde olumlu bir işarettir.",
  "düşmek": "Hayatında kontrolü kaybettiğin hissine ya da güvensizliğe işaret edebilir.",
  "diş dökülmesi": "Kaygı, kayıp korkusu ya da özgüven meseleleriyle ilişkilendirilir.",
  "ölüm": "Genelde gerçek bir kaybı değil, hayatındaki bir dönemin sona erip yenisinin başladığını simgeler.",
  "deniz": "Bilinçaltının derinliklerini temsil eder. Sakin deniz huzuru, dalgalı deniz iç çalkantıyı gösterir.",
  "ev": "Kendi benliğini ve iç dünyanı simgeler. Evin durumu, o an ki ruh halinle bağlantılı olabilir.",
  "araba": "Hayatındaki yönünü ve kontrolünü temsil eder. Kontrolsüz bir araba, hayatta kontrolü kaybetme korkusuna işaret edebilir.",
  "bebek": "Yeni bir başlangıcı, henüz olgunlaşmamış bir fikri ya da projeyi simgeler.",
  "düğün": "Hayatındaki iki farklı yönün birleşmesini ya da önemli bir taahhüdü temsil eder.",
  "sınav": "Kendini kanıtlama baskısı ya da bir konuda yetersizlik hissi ile ilişkilendirilir.",
  "kaybolmak": "Hayatında bir yön kaybı ya da karar verme güçlüğü yaşadığının işareti olabilir.",
  "takip edilmek": "Kaçındığın bir sorun ya da kendi duygularınla yüzleşmekten kaçtığını gösterebilir.",
  "ateş": "Tutku, öfke ya da dönüşümü simgeler. Bağlama göre yıkıcı ya da arındırıcı olabilir.",
  "para": "Öz değer duygunla ya da güvenlik ihtiyacınla ilgilidir, her zaman gerçek parayla ilgili değildir.",
  "altın": "Değerli bulduğun bir şeyi ya da içsel zenginliğini temsil eder.",
  "örümcek": "Karmaşık bir durumun içinde sıkışmış hissetmenle ya da yaratıcı enerjinle ilişkilendirilir.",
  "köpek": "Sadakat, dostluk ve güven duygularını simgeler.",
  "kedi": "Bağımsızlık, gizem ve sezgilerinle bağlantılıdır.",
  "kan": "Yaşam enerjisi ya da güçlü duygusal bir olayla ilişkilendirilir.",
  "yangın": "Kontrolden çıkan bir durum ya da bastırılmış öfkeyi simgeler.",
  "deprem": "Hayatındaki temellerin sarsıldığı, büyük bir değişim döneminde olduğun anlamına gelebilir.",
  "uçak": "Büyük hedeflere hızla ilerleme isteğini ya da hayatındaki büyük bir sıçramayı temsil eder.",
  "yol": "Hayat yolculuğunu ve şu an ki yönünü simgeler. Dolambaçlı bir yol, kararsızlığa işaret edebilir.",
  "merdiven": "Kişisel gelişim ya da hedeflerine doğru ilerleyişini temsil eder.",
  "anahtar": "Bir çözüme, fırsata ya da yeni bir kapıya açılan imkana işaret eder.",
  "ayna": "Kendini nasıl gördüğünle, öz farkındalığınla ilgilidir.",
  "saç kesimi": "Kimliğinde ya da imajında bir değişim isteğini simgeler.",
  "balık": "Bilinçaltı, bereket ve duygusal derinlikle ilişkilendirilir.",
  "hamile kalmak": "Yeni bir fikrin ya da projenin hayatında filizlenmeye başladığını gösterebilir.",
  "eski sevgili": "Genelde o kişiyle değil, o dönemde hissettiğin duygularla ilgilidir.",
  "kavga": "İçsel bir çatışmayı ya da bastırdığın bir gerilimi yansıtabilir.",
  "ağlamak": "Bastırılmış duyguların yüzeye çıkma ihtiyacını gösterir, genelde rahatlatıcıdır.",
  "gülmek": "İç huzurunu ve hayata karşı olumlu bakış açını yansıtır.",
  "uçurum": "Bilinmeyen bir riske karşı duyduğun korkuyu simgeler.",
  "karanlık": "Bilinmeyenden duyulan korkuyu ya da henüz keşfedilmemiş bir yönünü temsil eder.",
  "ışık": "Umut, netlik ve rehberliği simgeler.",
  "yolculuk": "Kişisel dönüşüm sürecinde olduğunu ve yeni bir aşamaya geçtiğini gösterir.",
  "okul": "Hayatta öğrenmeye devam ettiğin bir alanı ya da geçmişten kalan bir kaygıyı temsil eder.",
  "hırsız": "Bir şeyini kaybetme korkusu ya da güven meselesiyle ilişkilendirilir.",
  "kapı": "Yeni bir fırsatı ya da hayatındaki bir geçiş dönemini simgeler.",
  "pencere": "Dışarıya, yeni olasılıklara açılan bakış açını temsil eder.",
  "gökyüzü": "Sınırsız potansiyeli ve özgürlük arayışını simgeler.",
  "yıldız": "Umut, hedefler ve rehberlik arayışını temsil eder.",
  "ay": "Duygusal döngülerini ve bilinçaltı dünyanı simgeler.",
  "güneş": "Yaşam enerjisi, netlik ve öz güveni temsil eder.",
};
