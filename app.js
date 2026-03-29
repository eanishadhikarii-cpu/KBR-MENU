// ── MENU DATA ─────────────────────────────────────────
// To update prices or add items, edit this MENU array directly.
// Format: { name, price, veg: true/false, sub: 'subcategory or empty' }

const MENU = [
  { cat: 'TEA', items: [
    { name: 'Milk Tea',                       price: '30',   veg: true  },
    { name: 'Black Tea',                      price: '20',   veg: true  },
    { name: 'Lemon Tea',                      price: '25',   veg: true  },
    { name: 'Hot Lemon with Honey & Ginger',  price: '150',  veg: true  },
    { name: 'Green Tea',                      price: '50',   veg: true  },
    { name: 'Lemon Green Tea',                price: '60',   veg: true  },
  ]},
  { cat: 'MILK SHAKES', items: [
    { name: 'Oreo Milk Shake',       price: '200', veg: true },
    { name: 'Chocolate Milk Shake',  price: '200', veg: true },
    { name: 'Strawberry Milk Shake', price: '200', veg: true },
    { name: 'Vanilla Milk Shake',    price: '200', veg: true },
    { name: 'Caramel Milk Shake',    price: '200', veg: true },
  ]},
  { cat: 'HOT COFFEE', items: [
    { name: 'Espresso',            price: '70',  veg: true },
    { name: 'Dopio',               price: '120', veg: true },
    { name: 'Single Americano',    price: '100', veg: true },
    { name: 'Double Americano',    price: '120', veg: true },
    { name: 'Espresso Machiato',   price: '100', veg: true },
    { name: 'Cafe Latte',          price: '160', veg: true },
    { name: 'Cappuccino',          price: '160', veg: true },
    { name: 'Lungo',               price: '120', veg: true },
    { name: 'Single Long Black',   price: '100', veg: true },
    { name: 'Double Long Black',   price: '120', veg: true },
    { name: 'Cafe Mocha',          price: '200', veg: true },
    { name: 'Flavour Cafe Latte',  price: '200', veg: true },
    { name: 'Flavour Cappuccino',  price: '200', veg: true },
    { name: 'Caramel Macchiato',   price: '200', veg: true },
    { name: 'Mocha Madness',       price: '200', veg: true },
    { name: 'Hot Lemon with Honey',price: '150', veg: true },
  ]},
  { cat: 'BUBBLE TEA', items: [
    { name: 'Strawberry Bubble Tea', price: '380', veg: true },
    { name: 'Mango Bubble Tea',      price: '380', veg: true },
  ]},
  { cat: 'COLD COFFEE', items: [
    { name: 'Iced Americano',   price: '150', veg: true },
    { name: 'Iced Latte',       price: '200', veg: true },
    { name: 'Iced Cappuccino',  price: '200', veg: true },
    { name: 'Oreo Latte',       price: '200', veg: true },
  ]},
  { cat: 'COLD COFFEE (ADD FLAVOUR)', items: [
    { name: 'Iced Flavour Latte',       price: '220', veg: true },
    { name: 'Iced Flavour Cappuccino',  price: '220', veg: true },
    { name: 'Iced Caramel Macchiato',   price: '220', veg: true },
    { name: 'Iced Cafe Mocha',          price: '220', veg: true },
    { name: 'Iced Mocha Madness',       price: '220', veg: true },
    { name: 'Iced Spanish Latte',       price: '220', veg: true },
  ]},
  { cat: 'ALTERNATIVE COLD PRODUCTS', items: [
    { name: 'Virgin Mojito',        price: '180', veg: true },
    { name: 'Mint Refresher',       price: '180', veg: true },
    { name: 'Blue Angle',           price: '180', veg: true },
    { name: 'Ice Lemon with Honey', price: '150', veg: true },
  ]},
  { cat: 'COLD DRINKS', items: [
    { name: 'Pepsi',                price: '70',  veg: true },
    { name: 'Mirinda',              price: '70',  veg: true },
    { name: '7 Up',                 price: '70',  veg: true },
    { name: 'Mountain Dew',         price: '70',  veg: true },
    { name: 'Slice',                price: '70',  veg: true },
    { name: 'Red Bull Nep.',        price: '130', veg: true },
    { name: 'Red Bull Aus.',        price: '250', veg: true },
    { name: 'Xtreme',               price: '150', veg: true },
    { name: 'Real Juice (per glass)',price: '130', veg: true },
  ]},
  { cat: 'CHOWMIN', items: [
    { name: 'Veg Chowmin',          price: '110', veg: true  },
    { name: 'Chicken Chowmin',      price: '160', veg: false },
    { name: 'Mutton Chowmin',       price: '200', veg: false },
    { name: 'Egg Chowmin',          price: '160', veg: false },
    { name: 'Mix Non-Veg Chowmin',  price: '220', veg: false },
    { name: 'Pork Chowmin',         price: '170', veg: false },
  ]},
  { cat: 'MOMO', items: [
    { name: 'Chicken', price: '160', veg: false, sub: 'Steam' },
    { name: 'Pork',    price: '170', veg: false, sub: 'Steam' },
    { name: 'Veg',     price: '110', veg: true,  sub: 'Steam' },
    { name: 'Chicken', price: '180', veg: false, sub: 'Jhol'  },
    { name: 'Pork',    price: '180', veg: false, sub: 'Jhol'  },
    { name: 'Veg',     price: '150', veg: true,  sub: 'Jhol'  },
    { name: 'Chicken', price: '190', veg: false, sub: 'Fry'   },
    { name: 'Pork',    price: '200', veg: false, sub: 'Fry'   },
    { name: 'Veg',     price: '160', veg: true,  sub: 'Fry'   },
    { name: 'Chicken', price: '220', veg: false, sub: "C' Momo" },
    { name: 'Pork',    price: '220', veg: false, sub: "C' Momo" },
    { name: 'Veg',     price: '180', veg: true,  sub: "C' Momo" },
    { name: 'Balmeky Momo', price: '170', veg: false, sub: 'Special' },
    { name: 'Kothey Momo',  price: '160', veg: false, sub: 'Special' },
  ]},
  { cat: 'THUKPA', items: [
    { name: 'Chicken Thukpa',       price: '170', veg: false },
    { name: 'Mutton Thukpa',        price: '200', veg: false },
    { name: 'Egg Thukpa',           price: '150', veg: false },
    { name: 'Non-Veg Mix Thukpa',   price: '280', veg: false },
    { name: 'Veg Thukpa',           price: '120', veg: true  },
    { name: 'Pork Thukpa',          price: '180', veg: false },
  ]},
  { cat: 'LASSI', items: [
    { name: 'Plain Lassi',                                    price: '150', veg: true },
    { name: 'Flavoured Lassi (Chocolate, Vanilla, Strawberry)',price: '180', veg: true },
    { name: 'Sweet Lassi',                                    price: '150', veg: true },
  ]},
  { cat: 'SALAD', items: [
    { name: 'Nepali Salad', price: '160', veg: true },
    { name: 'Green Salad',  price: '160', veg: true },
  ]},
  { cat: 'VEG ITEMS', items: [
    { name: 'French Fry',                       price: '160', veg: true  },
    { name: 'Chips Chilly',                      price: '200', veg: true  },
    { name: 'Veg Pakoda',                        price: '150', veg: true  },
    { name: 'Mushroom Pakoda',                   price: '200', veg: true  },
    { name: 'Union Pakoda',                      price: '180', veg: true  },
    { name: 'Paneer Chilly',                     price: '280', veg: true  },
    { name: 'Aalu Jeera Fry',                    price: '150', veg: true  },
    { name: 'Mustang Aalu Fry',                  price: '180', veg: true  },
    { name: 'Peanuts Sadeko',                    price: '170', veg: true  },
    { name: 'Bhatmas Sadeko',                    price: '160', veg: true  },
    { name: 'Wai Wai Sadeko',                    price: '150', veg: true  },
    { name: 'Sweet Corn Sadeko',                 price: '150', veg: true  },
    { name: 'Corn Salt and Paper',               price: '220', veg: true  },
    { name: 'Paneer Pakoda',                     price: '270', veg: true  },
    { name: 'Plain Peanuts',                     price: '120', veg: true  },
    { name: 'Dry / Fry Papad',                   price: '120', veg: true  },
    { name: 'Masala Papad',                      price: '150', veg: true  },
    { name: 'Cheese Kurket',                     price: '330', veg: true  },
    { name: 'Wai Wai With Murai',                price: '160', veg: true  },
    { name: 'Wai Wai Chiura with Fry Papad',     price: '230', veg: true  },
    { name: 'Wai Wai Chiura with Fry Papad Egg', price: '290', veg: false },
    { name: 'Mushroom Chilly',                   price: '280', veg: true  },
  ]},
  { cat: 'BIRYANI', items: [
    { name: 'Veg Biryani',     price: '300', veg: true  },
    { name: 'Chicken Biryani', price: '370', veg: false },
    { name: 'Egg Biryani',     price: '380', veg: false },
    { name: 'Mutton Biryani',  price: '450', veg: false },
    { name: 'Pork Biryani',    price: '380', veg: false },
  ]},
  { cat: 'RICE ITEMS', items: [
    { name: 'Veg Rice',         price: '140', veg: true  },
    { name: 'Chicken Rice',     price: '170', veg: false },
    { name: 'Mutton Rice',      price: '220', veg: false },
    { name: 'Egg Rice',         price: '180', veg: false },
    { name: 'Mix Veg Rice',     price: '150', veg: true  },
    { name: 'Mix Non-Veg Rice', price: '250', veg: false },
    { name: 'Pork Fry Rice',    price: '180', veg: false },
  ]},
  { cat: 'CORN DOG', items: [
    { name: 'Cheese Dog',    price: '400', veg: true  },
    { name: 'Cheese Sausage',price: '360', veg: false },
  ]},
  { cat: 'SANDWICH', items: [
    { name: 'Chicken Sandwich', price: '180', veg: false },
    { name: 'Veg Sandwich',     price: '160', veg: true  },
  ]},
  { cat: 'BURGER', items: [
    { name: 'Chicken Burger', price: '280', veg: false },
    { name: 'Veg Burger',     price: '200', veg: true  },
    { name: 'Crunchy Burger', price: '290', veg: false },
    { name: 'Extra Cheese',   price: '60',  veg: true  },
  ]},
  { cat: 'SAUSAGE', items: [
    { name: 'Sausage Fry',   price: '220', veg: false },
    { name: 'Sausage Chilly',price: '235', veg: false },
    { name: 'Sausage Boil',  price: '200', veg: false },
  ]},
  { cat: 'SOUP', items: [
    { name: 'Non-Veg Mix Soup', price: '180', veg: false },
    { name: 'Veg Soup',         price: '110', veg: true  },
    { name: 'Chicken Soup',     price: '150', veg: false },
    { name: 'Mushroom Soup',    price: '130', veg: true  },
  ]},
  { cat: 'PIZZA', items: [
    { name: 'Mix Veg Pizza',     price: '400', veg: true  },
    { name: 'Mix Non-Veg Pizza', price: '460', veg: false },
    { name: 'Chicken Pizza',     price: '400', veg: false },
    { name: 'Cheese Pizza',      price: '410', veg: true  },
    { name: 'Mushroom Pizza',    price: '440', veg: true  },
    { name: 'Veg Pizza',         price: '390', veg: true  },
    { name: 'Extra Cheese',      price: '60',  veg: true  },
  ]},
  { cat: 'SIZZLER', items: [
    { name: 'Chicken Sizzler', price: '450', veg: false },
    { name: 'Mutton Sizzler',  price: '500', veg: false },
    { name: 'Veg Sizzler',     price: '350', veg: true  },
    { name: 'Pork Sizzler',    price: '450', veg: false },
  ]},
  { cat: 'CHICKEN ITEMS', items: [
    { name: 'Chicken Fry',            price: '250', veg: false },
    { name: 'Chicken Chilly',         price: '270', veg: false },
    { name: 'Chicken Nuggets',        price: '300', veg: false },
    { name: 'Chicken Sadeko',         price: '230', veg: false },
    { name: 'Chicken Popcorn',        price: '240', veg: false },
    { name: 'Chicken Tawa',           price: '300', veg: false },
    { name: 'Chicken Pakoda',         price: '230', veg: false },
    { name: 'Chicken Choila',         price: '270', veg: false },
    { name: 'Chicken Drumstick',      price: '280', veg: false },
    { name: 'Chicken Cheese Drumstick',price:'390', veg: false },
    { name: 'Chicken Lollipop',       price: '290', veg: false },
    { name: 'Chicken Boil',           price: '200', veg: false },
    { name: 'Chicken Sekuwa',         price: '350', veg: false },
    { name: 'Chicken Roast',          price: '320', veg: false },
    { name: 'KFC Chicken',            price: '270', veg: false },
    { name: 'Chicken Cut Leg',        price: '290', veg: false },
    { name: 'Chicken Leg Fry',        price: '290', veg: false },
    { name: 'Lemon Chicken',          price: '260', veg: false },
    { name: 'Spicy Wings',            price: '320', veg: false },
    { name: 'Chicken Bread',          price: '290', veg: false },
  ]},
  { cat: 'BUFF', items: [
    { name: 'Buff Sukuti',  price: '250', veg: false },
    { name: 'Buff Sadeko',  price: '200', veg: false },
    { name: 'Buff Choila',  price: '220', veg: false },
    { name: 'Buff Sekuwa',  price: '250', veg: false },
  ]},
  { cat: 'PORK', items: [
    { name: 'Pork Fry',    price: '230', veg: false },
    { name: 'Pork Dameko', price: '260', veg: false },
    { name: 'Pork Sadeko', price: '260', veg: false },
    { name: 'Pork Sekuwa', price: '260', veg: false },
    { name: 'Pork Choila', price: '240', veg: false },
    { name: 'Pork Chilly', price: '280', veg: false },
  ]},
  { cat: 'MUTTON ITEMS', items: [
    { name: 'Mutton Jhaneko Sekuwa', price: '450', veg: false },
    { name: 'Mutton Dameko',         price: '400', veg: false },
    { name: 'Mutton Choila',         price: '400', veg: false },
    { name: 'Mutton Fry',            price: '400', veg: false },
    { name: 'Mutton Boil',           price: '350', veg: false },
    { name: 'Mutton Sadeko',         price: '400', veg: false },
    { name: 'Mutton Roast',          price: '350', veg: false },
  ]},
  { cat: 'CHOPSUEY', items: [
    { name: 'American Chopsuey Veg',     price: '290', veg: true  },
    { name: 'American Chopsuey Non-Veg', price: '380', veg: false },
    { name: 'Chinese Chopsuey Veg',      price: '290', veg: true  },
    { name: 'Chinese Chopsuey Non-Veg',  price: '380', veg: false },
  ]},
  { cat: 'OMLET ITEMS', items: [
    { name: 'Egg Boil (2 pcs)',    price: '100', veg: false },
    { name: 'Egg Pakoda',          price: '140', veg: false },
    { name: 'Egg Poz',             price: '130', veg: false },
    { name: 'Egg Omlet (Special)', price: '200', veg: false },
    { name: 'Plain Omlet (Normal)',price: '180', veg: false },
  ]},
  { cat: 'KBR KHAJA SET', items: [
    { name: 'Masu Chiura',          price: '260', veg: false },
    { name: 'KBR Khaja Set Veg',    price: '280', veg: true  },
    { name: 'KBR Khaja Set Chicken',price: '360', veg: false },
    { name: 'KBR Khaja Set Pork',   price: '390', veg: false },
  ]},
  { cat: 'HUKKA', items: [
    { name: 'Hukka',       price: '350', veg: true },
    { name: 'Coal Change', price: '50',  veg: true },
  ]},
  { cat: 'BEER', items: [
    { name: 'Tuborg Big',        price: '550', veg: true },
    { name: 'Gorkha Strong Big', price: '420', veg: true },
    { name: 'Gorkha Strong Small',price:'250', veg: true },
    { name: 'Mustang Big',       price: '390', veg: true },
    { name: 'Mustang Small',     price: '240', veg: true },
    { name: 'Carlsberg Big',     price: 'N/A', veg: true },
  ]},
  { cat: 'WHISKEY', items: [
    { name: 'Double Black',            price: '380 / 760 / 11500', veg: true },
    { name: 'Black Label',             price: '340 / 665 / 10300', veg: true },
    { name: 'Red Label',               price: '275 / 540 / 8500',  veg: true },
    { name: 'Jack Daniels',            price: '330 / 650 / 9900',  veg: true },
    { name: 'Signature Red',           price: '135 / 260 / 3000',  veg: true },
    { name: 'Old Durbar Red',          price: '160 / 300 / 3350',  veg: true },
    { name: 'Old Durbar Black Chemmy', price: '195 / 380 / 4350',  veg: true },
    { name: 'Golden Oak Small',        price: '450',  veg: true },
    { name: 'Golden Oak Medium',       price: '800',  veg: true },
    { name: 'Golden Oak Large',        price: '1500', veg: true },
    { name: 'Batla Full',              price: '1600', veg: true },
    { name: 'Batla Quarter',           price: '450',  veg: true },
    { name: 'Batla Half',              price: '800',  veg: true },
    { name: 'CB (The Classic) Full',   price: '1600', veg: true },
    { name: 'CB (The Classic) Quarter',price: '450',  veg: true },
    { name: 'CB (The Classic) Half',   price: '800',  veg: true },
  ]},
  { cat: 'RUM', items: [
    { name: 'Kukhuri Rum', price: '220 / 210 / 2500', veg: true },
  ]},
  { cat: 'VODKA', items: [
    { name: '8848', price: '120 / 230 / 2550', veg: true },
  ]},
  { cat: 'APPLESIDER & WINE', items: [
    { name: 'Applesider', price: '260',  veg: true },
    { name: 'Big Master', price: '950',  veg: true },
    { name: 'Proto',      price: '3300', veg: true },
    { name: 'Robortson',  price: '1850', veg: true },
    { name: 'JP Chenet',  price: '2350', veg: true },
    { name: 'Divine',     price: '950',  veg: true },
  ]},
];

// ── STATE ─────────────────────────────────────────────
const state = { activeId: 'all', query: '' };

// ── DOM ───────────────────────────────────────────────
const menuWrap    = document.getElementById('menuWrap');
const catStrip    = document.getElementById('catStrip');
const searchInput = document.getElementById('searchInput');
const searchClear = document.getElementById('searchClear');
const emptyState  = document.getElementById('emptyState');
const themeToggle = document.getElementById('themeToggle');
const themeIcon   = document.getElementById('themeIcon');
const scrollTopBtn= document.getElementById('scrollTop');
const header      = document.getElementById('header');

// ── THEME ─────────────────────────────────────────────
function initTheme() {
  const t = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', t);
  themeIcon.textContent = t === 'dark' ? '☀️' : '🌙';
}
themeToggle.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeIcon.textContent = next === 'dark' ? '☀️' : '🌙';
});

// ── BUILD TABS ────────────────────────────────────────
function buildTabs() {
  MENU.forEach((section, i) => {
    const btn = document.createElement('button');
    btn.className = 'cat-btn';
    btn.dataset.id = i;
    btn.textContent = section.cat;
    catStrip.appendChild(btn);
  });

  catStrip.addEventListener('click', e => {
    const btn = e.target.closest('.cat-btn');
    if (!btn) return;
    catStrip.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.activeId = btn.dataset.id;
    render();
    if (state.activeId !== 'all') {
      const sec = document.getElementById(`sec-${state.activeId}`);
      if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
}

// ── RENDER ────────────────────────────────────────────
function render() {
  const q = state.query.toLowerCase();
  let hasAny = false;

  const html = MENU.map((section, i) => {
    if (state.activeId !== 'all' && String(i) !== String(state.activeId)) return '';

    const items = section.items.filter(item =>
      !q || item.name.toLowerCase().includes(q)
    );
    if (!items.length) return '';
    hasAny = true;

    // group by subcategory
    const groups = {};
    items.forEach(item => {
      const key = item.sub || '';
      if (!groups[key]) groups[key] = [];
      groups[key].push(item);
    });

    const groupsHtml = Object.entries(groups).map(([sub, list]) => `
      ${sub ? `<div class="subcat-label">${sub}</div>` : ''}
      <div class="card-list">
        ${list.map(cardHtml).join('')}
      </div>
    `).join('');

    return `
      <section class="cat-section" id="sec-${i}">
        <h2 class="cat-heading">
          ${section.cat}
          <span class="cat-count">${items.length}</span>
        </h2>
        ${groupsHtml}
      </section>`;
  }).join('');

  menuWrap.innerHTML = html;
  emptyState.style.display = hasAny ? 'none' : 'block';
}

// ── CARD ──────────────────────────────────────────────
function cardHtml(item) {
  const isMulti = /\//.test(item.price);
  const priceHtml = (isMulti || item.price === 'N/A')
    ? `<span class="price-multi">Rs. ${item.price}</span>`
    : `<span class="card-price"><span class="price-prefix">Rs. </span>${item.price}</span>`;

  return `
    <article class="menu-card">
      <div class="card-body">
        <div class="card-top">
          <h3 class="card-name">${item.name}</h3>
          <span class="veg-ind ${item.veg ? 'veg' : 'nonveg'}" title="${item.veg ? 'Veg' : 'Non-veg'}"></span>
        </div>
        <div class="card-foot">${priceHtml}</div>
      </div>
    </article>`;
}

// ── SEARCH ────────────────────────────────────────────
searchInput.addEventListener('input', () => {
  state.query = searchInput.value.trim();
  searchClear.classList.toggle('show', !!state.query);
  render();
});
searchClear.addEventListener('click', () => {
  searchInput.value = '';
  state.query = '';
  searchClear.classList.remove('show');
  searchInput.focus();
  render();
});

// ── SCROLL ────────────────────────────────────────────
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 8);
  scrollTopBtn.classList.toggle('show', window.scrollY > 320);
}, { passive: true });
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ── INIT ──────────────────────────────────────────────
initTheme();
buildTabs();
render();
