// All facts come from veon/client.json (pro-sto). Nothing here is invented.

export const contacts = {
  phone: "+380930055555",
  phoneLabel: "(093) 00 55555",
  telegram: "https://t.me/ProCTOua_bot",
  email: "proctoua@gmail.com",
  instagram: "https://www.instagram.com/pro.cto.ua/",
  facebook: "https://fb.me/pro.CTO.ua",
  legal: "ТОВ «ВАГ АВТОСЕРВІС ГРУП»",
  edrpou: "43427625",
};

// W-F003: Saturday 09:00–14:00 is the main value on the site.
export const hours = [
  { days: "Пн–Пт", time: "09:00–18:00" },
  { days: "Сб", time: "09:00–14:00" },
  { days: "Нд", time: "вихідний" },
];

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const locations = [
  { id: "sto-lviv", place: "Львів", street: "вул. Богданівська, 15", area: "", map: maps("Львів, вул. Богданівська, 15") },
  { id: "sto-solonka", place: "Солонка", street: "вул. Стрийська, 55", area: "Окружна", map: maps("Солонка, вул. Стрийська, 55, Львівська область") },
  { id: "sto-pidbirtsi", place: "Підбірці", street: "вул. Глинянський Тракт, 29", area: "Окружна", map: maps("Підбірці, вул. Глинянський Тракт, 29, Львівська область") },
  { id: "sto-zubra", place: "Зубра", street: "вул. Богдана Хмельницького, 1а", area: "", map: maps("Зубра, вул. Богдана Хмельницького, 1а, Львівська область") },
];

export interface PriceRow { name: string; from: boolean; value: string; unit?: string; }

export const stelaPrices: PriceRow[] = [
  { name: "Комп’ютерна діагностика", from: false, value: "500" },
  { name: "Заміна масла і всіх фільтрів двигуна", from: false, value: "1300" },
  { name: "Перевірка перед купівлею", from: true, value: "2000" },
];

export const priceTabs: { id: string; label: string; rows: PriceRow[] }[] = [
  {
    id: "diag",
    label: "Діагностика",
    rows: [
      { name: "Комп’ютерна діагностика", from: false, value: "500" },
      { name: "Діагностика підвіски", from: false, value: "500" },
      { name: "Комплексна діагностика перед покупкою", from: true, value: "2000" },
      { name: "Ендоскопія циліндрів", from: true, value: "500", unit: "за циліндр" },
      { name: "Діагностика автокондиціонера", from: true, value: "900" },
    ],
  },
  {
    id: "to",
    label: "ТО",
    rows: [
      { name: "Заміна масла та масляного фільтра в двигуні", from: false, value: "500" },
      { name: "Заміна масла та всіх фільтрів двигуна", from: false, value: "1300" },
    ],
  },
  {
    id: "grm",
    label: "ГРМ і КПП",
    rows: [
      { name: "Заміна ременя і роликів ГРМ", from: true, value: "5500" },
      { name: "Заміна ланцюгів ГРМ", from: true, value: "7000" },
      { name: "Заміна мастила в автоматичній КПП", from: true, value: "1360" },
    ],
  },
  {
    id: "chip",
    label: "Електроніка, чіп, EGR",
    rows: [
      { name: "Програмне відключення сажового фільтра та клапана EGR", from: true, value: "7500" },
      { name: "Чіп-тюнінг: програмне збільшення потужності двигуна", from: true, value: "7000" },
      { name: "Ремонт електропроводки", from: true, value: "500" },
    ],
  },
  {
    id: "equip",
    label: "Обладнання",
    rows: [
      { name: "Встановлення парктроніків", from: true, value: "6500" },
      { name: "Встановлення камери заднього виду", from: true, value: "4000" },
    ],
  },
];

export const niches = [
  { title: "Дизель: сажовий фільтр і EGR", text: "Програмне відключення сажового фільтра та клапана EGR." },
  { title: "Чіп-тюнінг", text: "Програмне збільшення потужності двигуна." },
  { title: "Двигун і металообробка", text: "Ремонт і заміна двигуна, блоки циліндрів, колінчастий вал, токарні та зварювальні роботи." },
  { title: "Tesla", text: "Ремонт автомобілів «Тесла»." },
];

export const baseServices = [
  { title: "Діагностика", text: "комп’ютерна, ходової, двигуна, КПП, ендоскопія" },
  { title: "Сервісне обслуговування", text: "масло, фільтри, ГРМ, свічки, рідини" },
  { title: "Ходова, гальма, кермо", text: "рульова рейка, розвал-сходження" },
  { title: "АКПП, МКПП, зчеплення", text: "ремонт і заміна мастила" },
  { title: "Паливна система", text: "форсунки, ТНВД, чистка форсунок TFSI" },
  { title: "Автокондиціонери", text: "заправка, дезінфекція, ремонт компресора" },
  { title: "Автоелектрика", text: "стартер, генератор, проводка, сигналізація, ксенон" },
  { title: "Автозапчастини", text: "продаж, запчастини сертифікованих брендів" },
];

export const fleetTerms = [
  "Гарантія до 1 року",
  "Ремонт у погоджені терміни",
  "Розтермінування оплати рахунків",
  "Індивідуальні знижки",
];

export const fleetPayment = "Готівка, картка або безготівковий розрахунок на ТОВ (з ПДВ 20%) чи ФОП.";
export const fleetWho = "Таксі, державні установи, перевізники, компанії та ФОП з власними автомобілями.";
