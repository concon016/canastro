// ---- Burçlar ----
const ELEMENT_LABELS = { ates: "Ateş", toprak: "Toprak", hava: "Hava", su: "Su" };

const ZODIAC_SIGNS = [
  {
    id: "koc", name: "Koç", symbol: "♈", range: "21 Mart - 19 Nisan", element: "ates",
    planet: "Mars", luckyColor: "Kırmızı", luckyNumber: 9, luckyDay: "Salı",
    strengths: ["Cesur", "Enerjik", "Girişken"], weaknesses: ["Sabırsız", "Aceleci"],
    compatibleWith: ["aslan", "yay"],
    trait: "Koç, zodyağın öncüsüdür — her zaman ilk adımı atmaya hazırdır. Cesareti ve kararlılığıyla çevresine ilham verir, ama bazen düşünmeden harekete geçme eğilimi başına iş açabilir. Rekabeti sever ve kazanmak onun için sadece bir sonuç değil, bir tutkudur."
  },
  {
    id: "boga", name: "Boğa", symbol: "♉", range: "20 Nisan - 20 Mayıs", element: "toprak",
    planet: "Venüs", luckyColor: "Yeşil", luckyNumber: 6, luckyDay: "Cuma",
    strengths: ["Kararlı", "Güvenilir", "Sadık"], weaknesses: ["İnatçı", "Değişime kapalı"],
    compatibleWith: ["basak", "oglak"],
    trait: "Boğa, sağlamlığın ve istikrarın simgesidir. Konfor ve güzelliğe düşkündür, hayattaki basit zevklerin kıymetini iyi bilir. Bir kez karar verdi mi geri adım atmaz; bu onu hem güvenilir hem de zaman zaman fazlasıyla inatçı yapar."
  },
  {
    id: "ikizler", name: "İkizler", symbol: "♊", range: "21 Mayıs - 20 Haziran", element: "hava",
    planet: "Merkür", luckyColor: "Sarı", luckyNumber: 5, luckyDay: "Çarşamba",
    strengths: ["Zeki", "Meraklı", "İletişimci"], weaknesses: ["Kararsız", "Dağınık"],
    compatibleWith: ["terazi", "kova"],
    trait: "İkizler'in zihni durmadan çalışır; her konuya meraklıdır ve yeni fikirlerle beslenir. Konuşma yeteneği ve zekâsıyla her ortama uyum sağlar, ama bu çok yönlülük bazen odaklanmakta zorlanmasına neden olabilir."
  },
  {
    id: "yengec", name: "Yengeç", symbol: "♋", range: "21 Haziran - 22 Temmuz", element: "su",
    planet: "Ay", luckyColor: "Gümüş", luckyNumber: 2, luckyDay: "Pazartesi",
    strengths: ["Şefkatli", "Sezgisel", "Koruyucu"], weaknesses: ["Alıngan", "Aşırı duygusal"],
    compatibleWith: ["akrep", "balik"],
    trait: "Yengeç, duygusal derinliğiyle tanınır. Sevdiklerini koruma içgüdüsü çok güçlüdür ve evi, ailesi onun için her şeyden değerlidir. Hassasiyeti onu güçlü bir empati kaynağı yapar, ama aynı zamanda kolayca incinebilir."
  },
  {
    id: "aslan", name: "Aslan", symbol: "♌", range: "23 Temmuz - 22 Ağustos", element: "ates",
    planet: "Güneş", luckyColor: "Altın", luckyNumber: 1, luckyDay: "Pazar",
    strengths: ["Karizmatik", "Cömert", "Lider ruhlu"], weaknesses: ["Kibirli", "İnatçı"],
    compatibleWith: ["koc", "yay"],
    trait: "Aslan, girdiği her ortamda kendini hissettirir. Doğal bir sahne ışığı çeker, cömertliği ve sıcaklığıyla insanları etrafında toplar. Takdir edilmeye ihtiyaç duyar ve kontrolü elden bırakmaktan hoşlanmaz."
  },
  {
    id: "basak", name: "Başak", symbol: "♍", range: "23 Ağustos - 22 Eylül", element: "toprak",
    planet: "Merkür", luckyColor: "Lacivert", luckyNumber: 5, luckyDay: "Çarşamba",
    strengths: ["Analitik", "Düzenli", "Yardımsever"], weaknesses: ["Aşırı eleştirel", "Kaygılı"],
    compatibleWith: ["boga", "oglak"],
    trait: "Başak, detaylara olan hassasiyetiyle öne çıkar. Mükemmeliyetçiliği onu güvenilir ve titiz bir çalışan yapar, çevresindekilere sessizce ama derinden yardım eder. Bazen kendine karşı fazla eleştirel olabilir."
  },
  {
    id: "terazi", name: "Terazi", symbol: "♎", range: "23 Eylül - 22 Ekim", element: "hava",
    planet: "Venüs", luckyColor: "Pastel tonlar", luckyNumber: 6, luckyDay: "Cuma",
    strengths: ["Diplomatik", "Adil", "Sosyal"], weaknesses: ["Kararsız", "Çatışmadan kaçan"],
    compatibleWith: ["ikizler", "kova"],
    trait: "Terazi, uyum ve denge arayışındadır. Estetikten ve güzellikten hoşlanır, ilişkilerinde adaleti önemser. Herkesi memnun etmeye çalışırken bazen kendi ihtiyaçlarını ikinci plana atabilir."
  },
  {
    id: "akrep", name: "Akrep", symbol: "♏", range: "23 Ekim - 21 Kasım", element: "su",
    planet: "Plüton", luckyColor: "Bordo", luckyNumber: 8, luckyDay: "Salı",
    strengths: ["Tutkulu", "Kararlı", "Sadık"], weaknesses: ["Kıskanç", "Gizemli/kapalı"],
    compatibleWith: ["yengec", "balik"],
    trait: "Akrep, yoğun ve derin duygularıyla bilinir. Bir kez bağlandı mı sonsuz sadakat gösterir, ama güveni kazanmak kolay değildir. Gizemi ve sezgisel gücü, onu zodyağın en dikkat çekici burçlarından biri yapar."
  },
  {
    id: "yay", name: "Yay", symbol: "♐", range: "22 Kasım - 21 Aralık", element: "ates",
    planet: "Jüpiter", luckyColor: "Mor", luckyNumber: 3, luckyDay: "Perşembe",
    strengths: ["İyimser", "Maceracı", "Dürüst"], weaknesses: ["Sabırsız", "Taktsiz"],
    compatibleWith: ["koc", "aslan"],
    trait: "Yay, özgürlüğüne düşkün, ufku geniş bir gezgindir. Hayata iyimser bakar, yeni deneyimlerden ve bilgiden beslenir. Dürüstlüğü bazen fazla doğrudan gelebilir, ama art niyeti asla yoktur."
  },
  {
    id: "oglak", name: "Oğlak", symbol: "♑", range: "22 Aralık - 19 Ocak", element: "toprak",
    planet: "Satürn", luckyColor: "Kahverengi", luckyNumber: 4, luckyDay: "Cumartesi",
    strengths: ["Disiplinli", "Hırslı", "Sorumlu"], weaknesses: ["Katı", "Kötümser olabilir"],
    compatibleWith: ["boga", "basak"],
    trait: "Oğlak, hedeflerine sabırla ve disiplinle ilerler. Sorumluluk duygusu güçlüdür, başarıyı adım adım inşa eder. Bazen kendine karşı çok katı olabilir, dinlenmeyi ihmal edebilir."
  },
  {
    id: "kova", name: "Kova", symbol: "♒", range: "20 Ocak - 18 Şubat", element: "hava",
    planet: "Uranüs", luckyColor: "Elektrik mavisi", luckyNumber: 7, luckyDay: "Cumartesi",
    strengths: ["Özgün", "Bağımsız", "Vizyoner"], weaknesses: ["Duygusal mesafeli", "İnatçı"],
    compatibleWith: ["ikizler", "terazi"],
    trait: "Kova, sıra dışı fikirleriyle geleceği şekillendirmeyi sever. Bağımsızlığına düşkündür, kalıplara sığmaktan hoşlanmaz. İnsancıl ve vizyoner bir bakışı vardır, ama duygusal olarak mesafeli görünebilir."
  },
  {
    id: "balik", name: "Balık", symbol: "♓", range: "19 Şubat - 20 Mart", element: "su",
    planet: "Neptün", luckyColor: "Deniz yeşili", luckyNumber: 3, luckyDay: "Perşembe",
    strengths: ["Yaratıcı", "Empatik", "Sezgisel"], weaknesses: ["Aşırı hassas", "Gerçeklikten kaçabilir"],
    compatibleWith: ["yengec", "akrep"],
    trait: "Balık, zodyağın en hayalperest ve empatik burcudur. Sanata ve maneviyata derin bir bağı vardır, başkalarının duygularını kendi duyguları gibi hisseder. Bazen gerçeklikten kaçıp hayal dünyasına sığınabilir."
  },
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
    "Bugün planların değişebilir, ama bu değişim seni daha iyi bir yere götürecek.",
    "Uzun zamandır beklediğin bir haber bugün ya da yakın günlerde gelebilir.",
    "Bugün biriyle kurduğun bağlantı, uzun vadede önemli bir dostluğa dönüşebilir.",
    "İçindeki çocuğu dinlemek, bugün sana beklenmedik bir mutluluk verecek.",
    "Bugün bir konuda net bir karara varman, üzerindeki yükü hafifletecek.",
    "Evrenin sana gönderdiği işaretlere bugün daha dikkatli bak.",
    "Bugün etrafındakilere gösterdiğin anlayış, sana kat kat geri dönecek.",
    "Küçük bir tesadüf, bugün sana beklenmedik bir kapı aralayabilir.",
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
    "Bugün flört etme enerjin yüksek, çevrende fark edilebilirsin.",
    "İlişkinde rutine giren bir şeyi bugün değiştirmek size iyi gelecek.",
    "Bugün kıskançlık gibi duygulara kapılmadan önce bir nefes al.",
    "Uzak mesafeli bir ilişkin varsa, bugün özlemin biraz azalabilir.",
    "Bugün birine söylemek istediğin ama çekindiğin bir şeyi söylemenin tam zamanı.",
    "Aşk hayatında bugün sabrın en değerli özelliğin olacak.",
    "Bugün partnerinle ortak bir plan yapmak ilişkinizi tazeleyecek.",
    "Kendini sevme biçimin, bugün başkalarını nasıl sevdiğini de şekillendiriyor.",
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
    "Bugün bir toplantı ya da görüşme beklediğinden daha verimli geçebilir.",
    "Uzun vadeli bir hedefe bugün küçük ama önemli bir adım atabilirsin.",
    "Bugün bir konuda 'hayır' demen, ileride seni rahatlatacak.",
    "İş yerinde bugün gösterdiğin performans, fark edilme ihtimali yüksek.",
    "Bugün beklenmedik bir masraf çıkabilir, bütçeni gözden geçir.",
    "Yeni bir beceri öğrenmeye bugün başlarsan, ileride büyük fayda sağlayacak.",
    "Bugün bir konuda inisiyatif alman, seni öne çıkaracak.",
    "Kariyerinde bugün sabrın, aceleciliğe göre daha çok işine yarayacak.",
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
    "Bugün suyunu bol içmen, hem bedenine hem zihnine iyi gelecek.",
    "Meditasyon ya da nefes egzersizi bugün sana beklenmedik bir huzur getirebilir.",
    "Bugün bedenin dinlenme istiyor olabilir, kendini zorlama.",
    "Küçük bir hareket rutini, bugün enerjini toparlamana yardımcı olacak.",
    "Bugün ekrandan biraz uzaklaşman zihnini tazeleyecek.",
    "İçindeki yaratıcı enerji bugün dışa vurulmayı bekliyor.",
    "Bugün erkenden yatman, yarın için sana büyük fark yaratacak.",
    "Bugün kendine söylediğin sözlere dikkat et, enerjini şekillendiriyorlar.",
  ],
  tavsiye: [
    "Bugünün önerisi: içinden geleni ertelemeden yap.",
    "Bugünün önerisi: bir kişiye teşekkür etmek için zaman ayır.",
    "Bugünün önerisi: telefonunu bırak, anın tadını çıkar.",
    "Bugünün önerisi: 'hayır' demekten çekinme.",
    "Bugünün önerisi: küçük bir hedef koy ve onu bugün bitir.",
    "Bugünün önerisi: sevdiğin birine mesaj at, seni düşündüğünü söyle.",
    "Bugünün önerisi: yarım kalan bir işi bugün tamamla.",
    "Bugünün önerisi: biraz yalnız kal, kendinle konuş.",
    "Bugünün önerisi: yeni bir şey dene, alışkanlıklarını kır.",
    "Bugünün önerisi: bir konuda affetmeyi seç, yükün hafiflesin.",
    "Bugünün önerisi: bugünü bir sonraki adımın için planlama fırsatı bil.",
    "Bugünün önerisi: minnettar olduğun üç şeyi aklından geçir.",
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

const COMPAT_STRENGTHS = [
  "İkiniz de birbirinizin bağımsızlığına saygı duyuyorsunuz.",
  "Zor zamanlarda birbirinize destek olma konusunda doğal bir uyumunuz var.",
  "Farklı bakış açılarınız birbirinizi tamamlıyor.",
  "İletişim kurmakta zorlanmıyorsunuz, bu nadir bir şey.",
  "Birlikteyken enerjileriniz karşılıklı yükseliyor.",
  "Güven inşa etmekte doğal bir yeteneğiniz var.",
  "Ortak hedefler koymakta zorlanmıyorsunuz.",
  "Mizah anlayışınız benzer, birlikte kolayca gülebiliyorsunuz.",
  "Birbirinizin alanına saygı gösteriyorsunuz.",
  "Değerleriniz büyük ölçüde örtüşüyor.",
];

const COMPAT_CHALLENGES = [
  "Zaman zaman aynı konuda inatlaşabilirsiniz, esneklik önemli.",
  "İletişim tarzınız farklı olabilir, bu bazen yanlış anlaşılmalara yol açabilir.",
  "İkiniz de bağımsız olduğu için ortak karar almak biraz zaman alabilir.",
  "Duygularınızı ifade etme biçiminiz farklı, bu konuda sabırlı olun.",
  "Hız farkınız olabilir; biriniz aceleci, diğeri temkinli olabilir.",
  "Kıskançlık gibi duygulara zemin hazırlayan anlar olabilir, açık iletişim şart.",
  "Öncelikleriniz bazen çakışabilir, uzlaşmayı unutmayın.",
  "Birbirinizin kişisel alanına zaman zaman dikkat etmeniz gerekebilir.",
];

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
  {
    q: "Bir tartışmada genelde nasıl davranırsın?",
    options: [
      { text: "Doğrudan söylerim, geri adım atmam.", type: "gunes" },
      { text: "Karşımdakinin ne hissettiğini anlamaya çalışırım.", type: "ay" },
      { text: "Farklı bir bakış açısı bulup ortamı yumuşatırım.", type: "yildiz" },
      { text: "Sakin kalıp mantıklı bir çözüm ararım.", type: "toprak" },
    ],
  },
  {
    q: "Sana göre mutluluk en çok neyle gelir?",
    options: [
      { text: "Başarmak ve fark edilmek.", type: "gunes" },
      { text: "Sevdiklerimle derin bağ kurmak.", type: "ay" },
      { text: "Yeni bir şey keşfetmek ya da öğrenmek.", type: "yildiz" },
      { text: "Huzurlu ve güvenli bir hayat sürmek.", type: "toprak" },
    ],
  },
];

const PERSONALITY_RESULTS = {
  gunes: {
    title: "Güneş Ruhu",
    tagline: "Doğuştan bir ışık kaynağı",
    text: "Enerjin çevrene ışık saçıyor. Doğuştan bir lidersin, insanları harekete geçirme ve ortama hayat verme konusunda özel bir yeteneğin var. Cesaretin ve tutkun, seni bulunduğun her ortamda fark edilir kılıyor.",
    strengths: ["Karizmatik liderlik", "Yüksek özgüven", "Bulaşıcı enerji"],
    watchFor: "Bazen ışığın çok parlak olduğunda başkalarını gölgede bırakabilirsin — sahneyi paylaşmayı unutma.",
    element: "ates",
  },
  ay: {
    title: "Ay Rüyacısı",
    tagline: "Derin sularda gezinen bir ruh",
    text: "Duyguların derin ve sezgilerin güçlü. Çevrendeki insanların hissettiklerini onlardan önce anlayabiliyorsun. İçe dönük ama son derece anlamlı bir dünyan var; sanat ve derin bağlar seni besliyor.",
    strengths: ["Yüksek empati", "Güçlü sezgi", "Sadakat"],
    watchFor: "Başkalarının duygularını fazla üstlenip kendi ihtiyaçlarını unutabiliyorsun — kendine de zaman ayır.",
    element: "su",
  },
  yildiz: {
    title: "Yıldız Kaşifi",
    tagline: "Sınır tanımayan bir gezgin",
    text: "Merakın seni hiç durmadan yeni ufuklara götürüyor. Rutinden sıkılır, keşfetmeden duramazsın. Özgür ruhun ve yaratıcılığın, çevrendekilere ilham veriyor.",
    strengths: ["Yaratıcılık", "Uyum yeteneği", "Sınırsız merak"],
    watchFor: "Çok fazla yön değiştirmek bazen hiçbir şeyi bitirememene yol açabilir — bir hedefe odaklanmayı dene.",
    element: "hava",
  },
  toprak: {
    title: "Toprak Bilgesi",
    tagline: "Fırtınada bile sağlam duran kaya",
    text: "Sağlam ve güvenilirsin. Çevrendeki insanlar zor zamanlarında sana yönelir, çünkü sen sakinliğin ve dengenin simgesisin. Sabrın ve pratik zekân, en karmaşık durumları bile çözüme kavuşturuyor.",
    strengths: ["Güvenilirlik", "Sabır", "Pratik zeka"],
    watchFor: "Değişime karşı bazen fazla temkinli olabiliyorsun — yeni şeylere biraz daha açık olmayı dene.",
    element: "toprak",
  },
};

// ---- Numeroloji ----
const LIFE_PATH_MEANINGS = {
  1: "Lidersin. Bağımsız, kararlı ve öncü bir ruhun var; kendi yolunu çizmekten korkmuyorsun. Başkalarının onayını beklemeden harekete geçebilme cesaretin, seni doğal bir öncü yapıyor. Zaman zaman yalnız kalmayı göze alsan da bu senin gücünün bir parçası.",
  2: "Denge ve uyum arayan bir ruhsun. Duyarlısın, iş birliğine yatkınsın ve ilişkilerde derinlik ararsın. İnsanlar arasında köprü kurma yeteneğin güçlü; çatışmadan çok uzlaşmayı tercih edersin. Sabrın, en zor durumlarda bile seni ayakta tutan şey.",
  3: "Yaratıcılığın ve ifade gücün öne çıkıyor. Sosyalsin, iletişimin güçlü, hayata renk katıyorsun. Sanatsal bir yönün var, düşüncelerini özgün bir şekilde dile getirebiliyorsun. Enerjini doğru kanalize ettiğinde çevrende gerçek bir ilham kaynağı oluyorsun.",
  4: "Disiplinli ve güvenilirsin. Sağlam temeller kurmayı, planlı ilerlemeyi seversin. Çalışkanlığın ve azmin, uzun vadede büyük başarılar getiriyor. Kestirmelerden çok, sağlam adımlarla ilerlemeyi tercih edersin.",
  5: "Özgürlüğüne düşkünsün. Değişim, macera ve yeni deneyimler seni canlı tutar. Monotonluktan sıkılır, sürekli yeni ufuklar ararsın. Uyum sağlama yeteneğin, seni her ortamda rahat hissettiriyor.",
  6: "Şefkatli ve sorumluluk sahibisin. Ailene ve sevdiklerine karşı derin bir bağlılığın var. Başkalarına bakma, onları koruma içgüdün güçlü. Ev ve ilişkiler senin için hayattaki en büyük önceliklerden biri.",
  7: "İçe dönük ve analitik bir zihnin var. Bilgeliği ve gerçeği araştırmaktan hoşlanırsın. Yüzeysel şeylerle yetinmez, her konunun derinine inmek istersin. Yalnız kalmaktan çekinmez, bu zamanı içsel keşif için kullanırsın.",
  8: "Hırslısın ve maddi/manevi başarı senin için önemli. Güçlü bir irade taşıyorsun. Yönetme ve organize etme konusunda doğal bir yeteneğin var. Zorluklar karşısında geri adım atmak yerine çözüm üretmeyi tercih edersin.",
  9: "İdealistsin. Şefkatin geniş bir çevreye yayılıyor, insanlığa hizmet etme arzusu taşıyorsun. Cömertliğin ve anlayışın, çevrende derin izler bırakıyor. Bazen kendini fazla verip tükenebilirsin, dengeyi unutma.",
  11: "Usta sayı 11: Güçlü bir sezgisel yeteneğin ve ilham verme gücün var. Ruhsal bir öncüsün, çevrene farkında olmadan yön gösteriyorsun. Bu güç seni bazen fazla hassas kılabilir, topraklanmaya özen göster.",
  22: "Usta sayı 22: Büyük hayalleri gerçeğe dönüştürme kapasitesine sahipsin, 'usta inşaatçı' enerjisi taşıyorsun. Vizyonun geniş, ama onu somut adımlara dökme yeteneğin de en az o kadar güçlü.",
  33: "Usta sayı 33: Koşulsuz sevgi ve şefkatle çevrene ilham veren, öğretmen ruhlu bir enerjin var. Başkalarının büyümesine destek olmak senin en doğal yeteneklerinden biri.",
};

const LETTER_VALUES = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 1, K: 2, L: 3, M: 4,
  N: 5, O: 6, P: 7, Q: 8, R: 9, S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8,
  Ç: 3, Ğ: 7, İ: 9, Ö: 6, Ş: 1, Ü: 3,
};

const VOWELS = ["A", "E", "I", "İ", "O", "Ö", "U", "Ü"];

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

function subscoreLabel(score) {
  if (score >= 80) return "Çok Güçlü";
  if (score >= 60) return "Güçlü";
  if (score >= 40) return "Orta";
  return "Gelişmeye Açık";
}

// ---- Rüya tabiri ----
const DREAM_DICTIONARY = {
  "su": "Berrak su görmek huzuru, bulanık su ise içinde bulunduğun karışıklığı simgeler. Duygusal durumunun bir yansıması olabilir. Akan su genelde hayatındaki değişimin doğal seyrinde ilerlediğine işaret eder.",
  "yılan": "Gizli bir tehdide ya da fark etmediğin bir düşmana işaret edebilir. Aynı zamanda dönüşüm ve yenilenmenin de simgesidir. Deri değiştiren bir yılan görmek, hayatındaki bir dönemi geride bıraktığını gösterebilir.",
  "uçmak": "Özgürlük arayışını ve hayatındaki kontrolü ele alma isteğini temsil eder. Genelde olumlu bir işarettir. Kolayca uçmak özgüvenini, zorlanarak uçmak ise önündeki engelleri simgeler.",
  "düşmek": "Hayatında kontrolü kaybettiğin hissine ya da güvensizliğe işaret edebilir. Sık tekrarlanıyorsa, uyanık hayatında ele almadığın bir kaygı olabilir.",
  "diş dökülmesi": "Kaygı, kayıp korkusu ya da özgüven meseleleriyle ilişkilendirilir. Bazı yorumlara göre önemli bir kararın eşiğinde olduğunun işaretidir.",
  "ölüm": "Genelde gerçek bir kaybı değil, hayatındaki bir dönemin sona erip yenisinin başladığını simgeler. Dönüşüm ve yeniden doğuşla ilişkilendirilir.",
  "deniz": "Bilinçaltının derinliklerini temsil eder. Sakin deniz huzuru, dalgalı deniz iç çalkantıyı gösterir. Denizin derinliklerine dalmak, kendini keşfetme isteğine işaret edebilir.",
  "ev": "Kendi benliğini ve iç dünyanı simgeler. Evin durumu, o an ki ruh halinle bağlantılı olabilir. Yeni bir ev görmek, kimliğinde bir değişimin habercisi olabilir.",
  "araba": "Hayatındaki yönünü ve kontrolünü temsil eder. Kontrolsüz bir araba, hayatta kontrolü kaybetme korkusuna işaret edebilir. Sürücü koltuğunda olmak, hayatının dizginlerini elinde tuttuğunu gösterir.",
  "bebek": "Yeni bir başlangıcı, henüz olgunlaşmamış bir fikri ya da projeyi simgeler. Bazen de içindeki masumiyete duyduğun özlemi yansıtır.",
  "düğün": "Hayatındaki iki farklı yönün birleşmesini ya da önemli bir taahhüdü temsil eder. Gerçek bir evlilik isteğinden çok, bir bütünleşme arzusunu gösterebilir.",
  "sınav": "Kendini kanıtlama baskısı ya da bir konuda yetersizlik hissi ile ilişkilendirilir. Hazırlıksız olduğun bir sınav, hayatta hazır hissetmediğin bir durumu simgeler.",
  "kaybolmak": "Hayatında bir yön kaybı ya da karar verme güçlüğü yaşadığının işareti olabilir. Yolunu bulmak için içsel rehberliğe ihtiyacın olduğunu gösterebilir.",
  "takip edilmek": "Kaçındığın bir sorun ya da kendi duygularınla yüzleşmekten kaçtığını gösterebilir. Seni takip eden şeyin ne olduğu, kaçtığın konu hakkında ipucu verebilir.",
  "ateş": "Tutku, öfke ya da dönüşümü simgeler. Bağlama göre yıkıcı ya da arındırıcı olabilir. Kontrollü bir ateş, içindeki tutkuyu doğru yönettiğini gösterir.",
  "para": "Öz değer duygunla ya da güvenlik ihtiyacınla ilgilidir, her zaman gerçek parayla ilgili değildir. Para bulmak, kendine olan güveninin arttığına işaret edebilir.",
  "altın": "Değerli bulduğun bir şeyi ya da içsel zenginliğini temsil eder. Bazen fark etmediğin bir yeteneğine işaret eder.",
  "örümcek": "Karmaşık bir durumun içinde sıkışmış hissetmenle ya da yaratıcı enerjinle ilişkilendirilir. Örümcek ağı, seni bağlayan bir durumu simgeler.",
  "köpek": "Sadakat, dostluk ve güven duygularını simgeler. Saldırgan bir köpek, güvendiğin birinden gelen bir ihanet korkusuna işaret edebilir.",
  "kedi": "Bağımsızlık, gizem ve sezgilerinle bağlantılıdır. Dişil enerjiyi ve içsel bilgeliği de temsil edebilir.",
  "kan": "Yaşam enerjisi ya da güçlü duygusal bir olayla ilişkilendirilir. Aile bağlarına da işaret edebilir.",
  "yangın": "Kontrolden çıkan bir durum ya da bastırılmış öfkeyi simgeler. Aynı zamanda köklü bir değişimin habercisi olabilir.",
  "deprem": "Hayatındaki temellerin sarsıldığı, büyük bir değişim döneminde olduğun anlamına gelebilir. Güvende hissettiğin alanların sorgulandığını gösterebilir.",
  "uçak": "Büyük hedeflere hızla ilerleme isteğini ya da hayatındaki büyük bir sıçramayı temsil eder. Uçağı kaçırmak, bir fırsatı kaçırma korkusunu simgeler.",
  "yol": "Hayat yolculuğunu ve şu anki yönünü simgeler. Dolambaçlı bir yol, kararsızlığa işaret edebilir. Düz ve açık bir yol, netliğe kavuştuğunu gösterir.",
  "merdiven": "Kişisel gelişim ya da hedeflerine doğru ilerleyişini temsil eder. Yukarı çıkmak ilerlemeyi, aşağı inmek içe dönüşü simgeler.",
  "anahtar": "Bir çözüme, fırsata ya da yeni bir kapıya açılan imkana işaret eder. Kaybolan bir anahtar, kaçırdığın bir fırsatı simgeleyebilir.",
  "ayna": "Kendini nasıl gördüğünle, öz farkındalığınla ilgilidir. Kırık bir ayna, kendine bakışında bir kırılmayı gösterebilir.",
  "saç kesimi": "Kimliğinde ya da imajında bir değişim isteğini simgeler. Saç kaybetmek, kontrol kaybı korkusuyla ilişkilendirilir.",
  "balık": "Bilinçaltı, bereket ve duygusal derinlikle ilişkilendirilir. Çok sayıda balık görmek, bolluk ve fırsat işareti olabilir.",
  "hamile kalmak": "Yeni bir fikrin ya da projenin hayatında filizlenmeye başladığını gösterebilir. Yaratıcı bir sürecin başlangıcına işaret eder.",
  "eski sevgili": "Genelde o kişiyle değil, o dönemde hissettiğin duygularla ilgilidir. Geçmişte kalan bir özelliği şu an aradığını gösterebilir.",
  "kavga": "İçsel bir çatışmayı ya da bastırdığın bir gerilimi yansıtabilir. Kiminle kavga ettiğin, o kişinin temsil ettiği özelliklerle ilgilidir.",
  "ağlamak": "Bastırılmış duyguların yüzeye çıkma ihtiyacını gösterir, genelde rahatlatıcıdır. Rüyada ağlamak, uyanınca hafiflemeyle sonuçlanabilir.",
  "gülmek": "İç huzurunu ve hayata karşı olumlu bakış açını yansıtır. Kontrolsüz bir kahkaha, bastırdığın neşenin dışa vurumu olabilir.",
  "uçurum": "Bilinmeyen bir riske karşı duyduğun korkuyu simgeler. Uçurumun kenarında durmak, önemli bir karar anında olduğunu gösterebilir.",
  "karanlık": "Bilinmeyenden duyulan korkuyu ya da henüz keşfedilmemiş bir yönünü temsil eder. Bazen bilinçaltının henüz aydınlatılmamış bir parçasına işaret eder.",
  "ışık": "Umut, netlik ve rehberliği simgeler. Uzaktaki bir ışık, zorlu bir dönemin sonunun yaklaştığına işaret edebilir.",
  "yolculuk": "Kişisel dönüşüm sürecinde olduğunu ve yeni bir aşamaya geçtiğini gösterir. Ulaşım aracının türü, yolculuğun hızını/tarzını simgeler.",
  "okul": "Hayatta öğrenmeye devam ettiğin bir alanı ya da geçmişten kalan bir kaygıyı temsil eder. Eski okuluna dönmek, geçmişle yüzleşme ihtiyacına işaret edebilir.",
  "hırsız": "Bir şeyini kaybetme korkusu ya da güven meselesiyle ilişkilendirilir. Neyin çalındığı, neyi kaybetmekten korktuğunla ilgili ipucu verir.",
  "kapı": "Yeni bir fırsatı ya da hayatındaki bir geçiş dönemini simgeler. Kilitli bir kapı, önündeki bir engele işaret edebilir.",
  "pencere": "Dışarıya, yeni olasılıklara açılan bakış açını temsil eder. Kırık bir pencere, güvenlik kaygısını gösterebilir.",
  "gökyüzü": "Sınırsız potansiyeli ve özgürlük arayışını simgeler. Açık ve berrak gökyüzü, zihinsel netliğe işaret eder.",
  "yıldız": "Umut, hedefler ve rehberlik arayışını temsil eder. Parlayan bir yıldız, yakın zamanda gerçekleşecek bir dileği simgeleyebilir.",
  "ay": "Duygusal döngülerini ve bilinçaltı dünyanı simgeler. Dolunay, duygusal yoğunluğun zirvede olduğuna işaret edebilir.",
  "güneş": "Yaşam enerjisi, netlik ve öz güveni temsil eder. Doğan güneş, yeni bir başlangıcı müjdeler.",
  "uçurtma": "Hayallerinin peşinden gitme isteğini ve özgürlük arayışını simgeler.",
  "orman": "Bilinmeyeni ve keşfedilmemiş potansiyelini temsil eder. Kaybolduğun bir orman, kararsızlık dönemine işaret edebilir.",
  "dağ": "Önündeki büyük bir hedefi ya da aşman gereken bir zorluğu simgeler. Zirveye ulaşmak, başarıya yaklaştığını gösterir.",
  "köprü": "Bir geçiş dönemini, iki durum arasında bağ kurma ihtiyacını temsil eder.",
  "kuş": "Özgürlüğü ve ruhsal yükselişi simgeler. Kafeste bir kuş, kısıtlanmışlık hissine işaret edebilir.",
  "kelebek": "Dönüşümü ve kişisel gelişimi temsil eder, genelde olumlu bir değişimin habercisidir.",
  "yumurta": "Yeni bir fikrin ya da potansiyelin henüz açığa çıkmamış halini simgeler.",
  "hastalık": "Hayatının bir alanında dengesizlik hissettiğine işaret edebilir, genelde gerçek bir sağlık sorunuyla ilgili değildir.",
  "silah": "Kendini savunma ihtiyacını ya da bastırılmış öfkeyi simgeler.",
  "hapis": "Hayatında kendini kısıtlanmış hissettiğin bir durumu temsil eder.",
  "uçak düşmesi": "Kontrol kaybı korkusunu ve büyük bir hedefin başarısız olma endişesini simgeler.",
  "telefon": "İletişim ihtiyacını ya da söylenmemiş bir sözü temsil eder. Çalmayan bir telefon, göz ardı edilme korkusuna işaret edebilir.",
  "yemek yemek": "Hayattaki doyum ve tatmin arayışını simgeler. Paylaşılan bir yemek, sosyal bağların önemine işaret eder.",
  "dişler": "Özgüven, imaj ve iletişim biçiminle ilgilidir.",
  "yüzmek": "Duygularınla baş etme biçimini simgeler. Rahat yüzmek duygusal dengeyi, boğulmak ise bunalmışlığı gösterir.",
  "kayıp eşya": "Hayatında ihmal ettiğin bir şeye, ya da güvensizlik hissine işaret edebilir.",
  "yabancı biri": "Kendi kişiliğinin henüz tanımadığın bir yönünü simgeler.",
};
