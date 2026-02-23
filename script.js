// ====== НАСТРОЙКИ (ОБЯЗАТЕЛЬНО ИЗМЕНИ) ======
const TG_USERNAME = "your_username"; // <- поставь свой username без @
const CITY = "Ташкент";

// ====== УТИЛИТЫ ======
function tgUrl(text) {
  const encoded = encodeURIComponent(text);
  return `https://t.me/${TG_USERNAME}?text=${encoded}`;
}
function openTg(text) {
  window.open(tgUrl(text), "_blank");
}
function setTgLinks(text) {
  const url = tgUrl(text);
  const tgTop = document.getElementById("tgTop");
  const tgFab = document.getElementById("tgFab");
  if (tgTop) tgTop.href = url;
  if (tgFab) tgFab.href = url;
}
document.getElementById("year").textContent = new Date().getFullYear();

// ====== I18N (RU/UZ) ======
let lang = "ru";

const dict = {
  ru: {
    brand_name: "Design Studio",
    brand_tag: "Логотипы • Товары • Instagram",
    nav_services: "Услуги",
    nav_portfolio: "Портфолио",
    nav_pricing: "Цены",
    nav_order: "Заказать",
    btn_theme: "Тема",
    btn_tg: "Telegram",

    hero_pill: "Премиум дизайн для любого магазина",
    hero_title_1: "Логотипы, карточки товара, баннеры",
    hero_title_2: "в едином стиле",
    hero_lead: "Делаю современный дизайн под Instagram и маркетплейсы. Быстро, аккуратно, с правками. Заказ — через Telegram.",
    hero_cta_1: "Оформить заказ",
    hero_cta_2: "Смотреть портфолио",
    trust_1: "✅ 24–48 часов до первого варианта",
    trust_2: "✅ Правки включены",
    trust_3: "✅ Файлы PNG/JPG/SVG",

    hero_card_title: "Быстрый расчёт",
    hero_card_sub: "Ориентир по цене и готовое сообщение в Telegram.",
    q_type: "Что нужно?",
    q_qty: "Количество (если нужно)",
    q_deadline: "Срок",
    q_deadline_normal: "Обычный",
    q_deadline_fast: "Срочно",
    q_logo: "Логотип",
    q_product: "Карточка товара",
    q_banner: "Баннер",
    q_insta: "Instagram-пакет",
    q_calc: "Посчитать и открыть Telegram",

    services_title: "Услуги",
    s1_title: "Логотип и фирменный стиль",
    s1_text: "Лого с нуля + цвета, шрифты, стиль. Под печать и соцсети.",
    s1_li1: "PNG/JPG/SVG",
    s1_li2: "2–3 варианта",
    s1_li3: "Правки включены",

    s2_title: "Оформление товара",
    s2_text: "Чистый фон, обтравка, плашки “скидка/хит/новинка”, стиль магазина.",
    s2_li1: "Маркетплейсы / Instagram",
    s2_li2: "Шаблоны под серию",
    s2_li3: "Экономит время",

    s3_title: "Баннеры и реклама",
    s3_text: "Посты и сторис, акции, прайс-картинки. Тексты и композиция.",
    s3_li1: "Под нужный размер",
    s3_li2: "Единый стиль",
    s3_li3: "Быстро и аккуратно",

    s4_title: "Instagram-пакет",
    s4_text: "Аватар, хайлайты, шаблоны постов/сторис, стиль ленты.",
    s4_li1: "Быстрый старт",
    s4_li2: "Шаблоны для контента",
    s4_li3: "Увеличивает доверие",

    portfolio_title: "Портфолио",
    portfolio_sub: "Нажми на карточку — откроется просмотр. Заменишь на свои работы.",

    pricing_title: "Цены",
    pricing_sub: "Цены ориентир. Итог зависит от сложности и сроков.",
    p1_title: "Лого — Старт",
    p2_title: "Лого — Бренд",
    p3_title: "Карточка товара",
    p4_title: "Баннер",
    p5_title: "Instagram-пакет",
    p_tag_basic: "базовый",
    p_tag_best: "лучший",
    p_tag_piece: "за штуку",
    p_tag_fast: "быстро",
    p_tag_pack: "пакет",
    p1_li1: "1–2 варианта",
    p1_li2: "1 круг правок",
    p1_li3: "PNG + JPG",
    p2_li1: "2–3 варианта",
    p2_li2: "2 круга правок",
    p2_li3: "PNG + JPG + SVG",
    p3_li1: "Чистый фон / обтравка",
    p3_li2: "Текст, плашки",
    p3_li3: "Размер под площадку",
    p4_li1: "Пост / сторис",
    p4_li2: "Адаптация размеров",
    p4_li3: "Единый стиль",
    p5_li1: "Аватар + хайлайты",
    p5_li2: "Шаблоны пост/сторис",
    p5_li3: "Стиль ленты",
    btn_order: "Заказать",

    order_title: "Оформить заказ",
    order_sub: "Заполни форму — я сформирую готовое сообщение для Telegram.",
    step_1: "Опиши задачу",
    step_2: "Пришли примеры (если есть)",
    step_3: "Подтвердим цену и срок",
    note_title: "Что подготовить заранее",
    note_li1: "Название магазина и ниша",
    note_li2: "Цвета/стиль и примеры",
    note_li3: "Где будет использоваться (Instagram/упаковка/вывеска)",
    note_li4: "Срок",

    form_title: "Форма заказа",
    f_name: "Имя",
    f_shop: "Название магазина",
    f_type: "Тип работы",
    f_desc: "Описание задачи",
    f_deadline: "Срок",
    f_budget: "Бюджет (по желанию)",
    f_submit: "Сформировать и открыть Telegram",
    form_hint: "Telegram иногда не вставляет текст автоматически — но чат откроется, и сообщение будет готово для копирования.",

    faq_title: "FAQ",
    faq_q1: "Сколько времени занимает?",
    faq_a1: "Обычно 24–48 часов на первый вариант. Срочно — по договоренности.",
    faq_q2: "Какие файлы я получу?",
    faq_a2: "PNG/JPG для соцсетей + SVG (вектор) для печати (в пакете “Бренд”).",
    faq_q3: "Сколько правок?",
    faq_a3: "Зависит от пакета. Обычно 1–2 круга правок включены.",

    footer_name: "Design Studio",
    footer_note: "Заказ через Telegram"
  },

  uz: {
    brand_name: "Design Studio",
    brand_tag: "Logotip • Mahsulot • Instagram",
    nav_services: "Xizmatlar",
    nav_portfolio: "Portfolio",
    nav_pricing: "Narxlar",
    nav_order: "Buyurtma",
    btn_theme: "Tema",
    btn_tg: "Telegram",

    hero_pill: "Har qanday do‘kon uchun premium dizayn",
    hero_title_1: "Logotip, mahsulot kartasi, bannerlar",
    hero_title_2: "bir xil uslubda",
    hero_lead: "Instagram va marketplace uchun zamonaviy dizayn qilaman. Tez, toza, tuzatishlar bilan. Buyurtma — Telegram orqali.",
    hero_cta_1: "Buyurtma berish",
    hero_cta_2: "Portfolioni ko‘rish",
    trust_1: "✅ 24–48 soatda birinchi variant",
    trust_2: "✅ Tuzatishlar kiritiladi",
    trust_3: "✅ PNG/JPG/SVG fayllar",

    hero_card_title: "Tezkor hisob",
    hero_card_sub: "Taxminiy narx va Telegram uchun tayyor xabar.",
    q_type: "Nima kerak?",
    q_qty: "Soni (kerak bo‘lsa)",
    q_deadline: "Muddat",
    q_deadline_normal: "Oddiy",
    q_deadline_fast: "Shoshilinch",
    q_logo: "Logotip",
    q_product: "Mahsulot kartasi",
    q_banner: "Banner",
    q_insta: "Instagram-paket",
    q_calc: "Hisoblash va Telegramni ochish",

    services_title: "Xizmatlar",
    s1_title: "Logotip va brend uslubi",
    s1_text: "Noldan logo + ranglar, shriftlar, uslub. Bosma va ijtimoiy tarmoqlar uchun.",
    s1_li1: "PNG/JPG/SVG",
    s1_li2: "2–3 variant",
    s1_li3: "Tuzatishlar bor",

    s2_title: "Mahsulot dizayni",
    s2_text: "Toza fon, obtrafka, “chegirma/xit/yangi” plashkalar, do‘kon uslubi.",
    s2_li1: "Marketplace / Instagram",
    s2_li2: "Seriya uchun shablon",
    s2_li3: "Vaqt tejaydi",

    s3_title: "Banner va reklama",
    s3_text: "Post va story, aksiyalar, narx rasmlari. Matn va kompozitsiya.",
    s3_li1: "Kerakli o‘lchamga",
    s3_li2: "Bir xil uslub",
    s3_li3: "Tez va toza",

    s4_title: "Instagram-paket",
    s4_text: "Avatar, highlights, post/story shablonlari, lenta uslubi.",
    s4_li1: "Tez start",
    s4_li2: "Kontent uchun shablonlar",
    s4_li3: "Ishonchni oshiradi",

    portfolio_title: "Portfolio",
    portfolio_sub: "Kartochkani bosing — ko‘rish ochiladi. Keyin o‘zingizning ishlaringizga almashtirasiz.",

    pricing_title: "Narxlar",
    pricing_sub: "Narxlar taxminiy. Murakkablik va muddatga bog‘liq.",
    p1_title: "Logo — Start",
    p2_title: "Logo — Brand",
    p3_title: "Mahsulot kartasi",
    p4_title: "Banner",
    p5_title: "Instagram-paket",
    p_tag_basic: "asosiy",
    p_tag_best: "eng yaxshi",
    p_tag_piece: "dona",
    p_tag_fast: "tez",
    p_tag_pack: "paket",
    p1_li1: "1–2 variant",
    p1_li2: "1 marta tuzatish",
    p1_li3: "PNG + JPG",
    p2_li1: "2–3 variant",
    p2_li2: "2 marta tuzatish",
    p2_li3: "PNG + JPG + SVG",
    p3_li1: "Toza fon / obtrafka",
    p3_li2: "Matn, plashka",
    p3_li3: "Platformaga mos o‘lcham",
    p4_li1: "Post / story",
    p4_li2: "O‘lcham moslash",
    p4_li3: "Bir xil uslub",
    p5_li1: "Avatar + highlights",
    p5_li2: "Post/story shablon",
    p5_li3: "Lenta uslubi",
    btn_order: "Buyurtma",

    order_title: "Buyurtma berish",
    order_sub: "Formani to‘ldiring — Telegram uchun tayyor xabar tuzaman.",
    step_1: "Vazifani yozing",
    step_2: "Misollar yuboring (bo‘lsa)",
    step_3: "Narx va muddatni kelishamiz",
    note_title: "Oldindan tayyorlang",
    note_li1: "Do‘kon nomi va yo‘nalishi",
    note_li2: "Rang/uslub va misollar",
    note_li3: "Qayerda ishlatiladi (Instagram/qadoq/yozuv)",
    note_li4: "Muddat",

    form_title: "Buyurtma formasi",
    f_name: "Ism",
    f_shop: "Do‘kon nomi",
    f_type: "Ish turi",
    f_desc: "Vazifa tavsifi",
    f_deadline: "Muddat",
    f_budget: "Byudjet (ixtiyoriy)",
    f_submit: "Tayyorlab, Telegramni ochish",
    form_hint: "Ba’zan Telegram matnni avtomatik qo‘ymaydi — lekin chat ochiladi va xabar nusxa olishga tayyor bo‘ladi.",

    faq_title: "FAQ",
    faq_q1: "Qancha vaqt ketadi?",
    faq_a1: "Odatda 24–48 soatda birinchi variant. Shoshilinch — kelishilgan holda.",
    faq_q2: "Qanday fayllar beriladi?",
    faq_a2: "Ijtimoiy tarmoqlar uchun PNG/JPG + bosma uchun SVG (vektor) (“Brand” paketida).",
    faq_q3: "Tuzatishlar nechta?",
    faq_a3: "Paketga bog‘liq. Odatda 1–2 marta tuzatish kiradi.",

    footer_name: "Design Studio",
    footer_note: "Buyurtma Telegram orqali"
  }
};

function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[lang][key]) el.textContent = dict[lang][key];
  });
  const langBtn = document.getElementById("langBtn");
  if (langBtn) langBtn.textContent = lang.toUpperCase();
}

document.getElementById("langBtn").addEventListener("click", () => {
  lang = (lang === "ru") ? "uz" : "ru";
  applyLang();
});

// ====== THEME (dark/light) ======
let light = false;
document.getElementById("themeBtn").addEventListener("click", () => {
  light = !light;
  document.documentElement.style.setProperty("--bg", light ? "#F6F7FB" : "#070A12");
  document.documentElement.style.setProperty("--text", light ? "#0B1020" : "#EAF0FF");
  document.documentElement.style.setProperty("--muted", light ? "rgba(11,16,32,.70)" : "rgba(234,240,255,.72)");
  document.documentElement.style.setProperty("--line", light ? "rgba(11,16,32,.14)" : "rgba(255,255,255,.12)");
  document.documentElement.style.setProperty("--card", light ? "rgba(11,16,32,.06)" : "rgba(255,255,255,.06)");
  document.documentElement.style.setProperty("--card2", light ? "rgba(11,16,32,.08)" : "rgba(255,255,255,.08)");
});

// ====== DEFAULT TG LINKS ======
setTgLinks(`Здравствуйте! Нужен дизайн. Город: ${CITY}.`);

// ====== QUICK CALC ======
document.getElementById("quickForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.currentTarget;
  const type = f.type.value;
  const qty = Math.max(1, Number(f.qty.value || 1));
  const fast = (f.deadline.value === "fast");

  // ориентиры (поменяй под себя)
  let base = 0;
  if (type === "logo") base = 250000;
  if (type === "product") base = 50000;
  if (type === "banner") base = 80000;
  if (type === "insta") base = 600000;

  let sum = base * (type === "insta" ? 1 : qty);
  if (fast) sum = Math.round(sum * 1.25);

  const human = sum.toLocaleString("ru-RU");
  const result = document.getElementById("quickResult");
  result.textContent = (lang === "ru")
    ? `Ориентир: ~ ${human} сум`
    : `Taxminan: ~ ${human} so‘m`;

  const typeText = (lang === "ru")
    ? ({logo:"Логотип", product:"Карточка товара", banner:"Баннер", insta:"Instagram-пакет"}[type])
    : ({logo:"Logotip", product:"Mahsulot kartasi", banner:"Banner", insta:"Instagram-paket"}[type]);

  const msg = (lang === "ru")
    ? `Здравствуйте! Хочу заказать: ${typeText}\nКоличество: ${qty}\nСрок: ${fast ? "срочно" : "обычный"}\nГород: ${CITY}\n`
    : `Assalomu alaykum! Buyurtma: ${typeText}\nSoni: ${qty}\nMuddat: ${fast ? "shoshilinch" : "oddiy"}\nShahar: ${CITY}\n`;

  openTg(msg);
});

// ====== ORDER FORM ======
document.getElementById("orderForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.currentTarget;

  const name = f.name.value.trim();
  const shop = f.shop.value.trim();
  const type = f.type.value;
  const desc = f.desc.value.trim();
  const deadline = f.deadline.value;
  const budget = f.budget.value.trim();

  const typeTextRu = {logo:"Логотип", product:"Карточка товара", banner:"Баннер", insta:"Instagram-пакет"}[type];
  const typeTextUz = {logo:"Logotip", product:"Mahsulot kartasi", banner:"Banner", insta:"Instagram-paket"}[type];

  const msg = (lang === "ru")
    ? `Здравствуйте! Хочу заказать дизайн.\nИмя: ${name}\nМагазин: ${shop}\nТип: ${typeTextRu}\nОписание: ${desc}\nСрок: ${deadline === "fast" ? "срочно" : "обычный"}\nБюджет: ${budget || "не указан"}\nГород: ${CITY}\n`
    : `Assalomu alaykum! Dizayn buyurtma bermoqchiman.\nIsm: ${name}\nDo‘kon: ${shop}\nTuri: ${typeTextUz}\nTavsif: ${desc}\nMuddat: ${deadline === "fast" ? "shoshilinch" : "oddiy"}\nByudjet: ${budget || "ko‘rsatilmagan"}\nShahar: ${CITY}\n`;

  const url = tgUrl(msg);
  const out = document.getElementById("orderResult");
  out.innerHTML = (lang === "ru")
    ? `Готово: <a href="${url}" target="_blank" rel="noopener">открыть Telegram</a>`
    : `Tayyor: <a href="${url}" target="_blank" rel="noopener">Telegramni ochish</a>`;

  setTgLinks(msg);
  openTg(msg);
});

// ====== PORTFOLIO LIGHTBOX ======
const lightbox = document.getElementById("lightbox");
const lbTitle = document.getElementById("lbTitle");
const lbContent = document.getElementById("lbContent");

function openLightbox(title, src) {
  lbTitle.textContent = title;

  // Если src пустой -> показываем заглушку
  if (!src) {
    lbContent.textContent = (lang === "ru")
      ? "Тут будет изображение вашей работы (заменишь позже)."
      : "Bu yerda sizning ish rasmingiz bo‘ladi (keyin almashtirasiz).";
  } else {
    lbContent.innerHTML = "";
    const img = document.createElement("img");
    img.src = src;
    img.alt = title;
    img.style.maxWidth = "100%";
    img.style.maxHeight = "420px";
    img.style.borderRadius = "14px";
    lbContent.appendChild(img);
  }

  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
}

document.getElementById("portfolioGrid").addEventListener("click", (e) => {
  const btn = e.target.closest(".shot");
  if (!btn) return;
  openLightbox(btn.dataset.title || "Preview", btn.dataset.src || "");
});

lightbox.addEventListener("click", (e) => {
  if (e.target.dataset.close) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

// ====== INIT ======
applyLang();