// ── MENU DATA ─────────────────────────────────────────
// To update prices or add items, edit this MENU array directly.
// Format: { name, price, veg: true/false, sub: 'subcategory or empty' }

const MENU = [
  { cat: 'TEA', items: [
    { name: 'Milk Tea', price: '40', veg: true },
    { name: 'Black Tea', price: '30', veg: true },
  ]},
  { cat: 'HOT COFFEE', items: [
    { name: 'Espresso', price: '70', veg: true },
    { name: 'Dopio', price: '120', veg: true },
    { name: 'Single Americano', price: '100', veg: true, sub: 'Americano' },
    { name: 'Double Americano', price: '120', veg: true, sub: 'Americano' },
    { name: 'Espresso Macchiato', price: '100', veg: true },
    { name: 'Cafe Latte', price: '160', veg: true },
    { name: 'Cappuccino', price: '160', veg: true },
    { name: 'Lungo', price: '120', veg: true },
    { name: 'Single Long Black', price: '100', veg: true, sub: 'Long Black' },
    { name: 'Double Long Black', price: '120', veg: true, sub: 'Long Black' },
    { name: 'Cafe Mocha', price: '200', veg: true },
    { name: 'Flavour Cafe Latte', price: '200', veg: true },
    { name: 'Flavour Cappuccino', price: '200', veg: true },
    { name: 'Caramel Macchiato', price: '200', veg: true },
    { name: 'Mocha Madness', price: '200', veg: true },
  ]},
  { cat: 'ALTERNATIVE HOT PRODUCTS', items: [
    { name: 'Hot Lemon with Honey', price: '170', veg: true },
    { name: 'Hot Lemon with Honey & Ginger', price: '190', veg: true },
    { name: 'Green Tea', price: '70', veg: true },
    { name: 'Lemon Green Tea', price: '70', veg: true },
    { name: 'Lemon Tea', price: '70', veg: true },
  ]},
  { cat: 'COLD COFFEE', items: [
    { name: 'Iced Americano', price: '150', veg: true },
    { name: 'Iced Latte', price: '200', veg: true },
    { name: 'Iced Cappuccino', price: '200', veg: true },
    { name: 'Oreo Latte', price: '200', veg: true },
    { name: 'Iced Mocha', price: '220', veg: true },
    { name: 'Iced Caramel Macchiato', price: '220', veg: true },
  ]},
  { cat: 'COLD COFFEE ADD FLAVOUR', items: [
    { name: 'Iced Flavour Latte', price: '220', veg: true },
    { name: 'Iced Flavour Cappuccino', price: '220', veg: true },
    { name: 'Iced Caramel Macchiato', price: '220', veg: true },
    { name: 'Iced Cafe Mocha', price: '220', veg: true },
    { name: 'Iced Mocha Madness', price: '220', veg: true },
    { name: 'Iced Spanish Latte', price: '220', veg: true },
  ]},
  { cat: 'ALTERNATIVE COLD PRODUCTS', items: [
    { name: 'Mint Refresher', price: '180', veg: true },
    { name: 'Ice Lemon with Honey', price: '150', veg: true },
    { name: 'Peach Iced Tea', price: '180', veg: true },
    { name: 'Lemonade', price: '120', veg: true },
    { name: 'Mint Lemonade', price: '120', veg: true },
  ]},
  { cat: 'LASSI', items: [
    { name: 'Plain Lassi', price: '150', veg: true },
    { name: 'Flavoured Lassi', price: '180', veg: true, sub: 'Chocolate, Vanilla, Strawberry, Banana' },
    { name: 'Sweet Lassi', price: '160', veg: true },
  ]},
  { cat: 'MILK SHAKE', items: [
    { name: 'Oreo Milk Shake', price: '200', veg: true },
    { name: 'Chocolate Milk Shake', price: '200', veg: true },
    { name: 'Strawberry Milk Shake', price: '200', veg: true },
    { name: 'Vanilla Milk Shake', price: '200', veg: true },
  ]},
  { cat: 'MOCKTAILS', items: [
    { name: 'Virgin Mojito', price: '180', veg: true },
    { name: 'Blue Angels', price: '180', veg: true },
    { name: 'Blue Bliss', price: '210', veg: true },
  ]},
  { cat: 'BUBBLE TEA', items: [
    { name: 'Strawberry Bubble Tea', price: '380', veg: true },
    { name: 'Mango Bubble Tea', price: '380', veg: true },
  ]},
  { cat: 'COLD DRINKS', items: [
    { name: 'Pepsi', price: '70', veg: true },
    { name: 'Mirinda', price: '70', veg: true },
    { name: '7 Up', price: '70', veg: true },
    { name: 'Mountain Dew', price: '70', veg: true },
    { name: 'Slice', price: '70', veg: true },
    { name: 'Red Bull Nep.', price: '140', veg: true },
    { name: 'Red Bull Aus.', price: '250', veg: true },
    { name: 'Xtreme', price: '160', veg: true },
    { name: 'Real Juice (per glass)', price: '150', veg: true },
    { name: 'Badam Drinks', price: '130', veg: true },
  ]},
  { cat: 'CHOWMIN', items: [
    { name: 'Veg Chowmin', price: '120', veg: true },
    { name: 'Chicken Chowmin', price: '170', veg: false },
    { name: 'Egg Chowmin', price: '170', veg: false },
    { name: 'Mix Non-Veg Chowmin', price: '250', veg: false },
    { name: 'Pork Chowmin', price: '180', veg: false },
    { name: 'Mutton Chowmin', price: '300', veg: false },
    { name: 'Chi. Munchurian', price: '260', veg: false },
    { name: 'Veg. Munchurian', price: '220', veg: true },
  ]},
  { cat: 'MO:MO', items: [
    { name: 'Chicken Momo', price: '170', veg: false, sub: 'Steam' },
    { name: 'Pork Momo', price: '180', veg: false, sub: 'Steam' },
    { name: 'Veg Momo', price: '120', veg: true, sub: 'Steam' },
    { name: 'Chicken Momo', price: '180', veg: false, sub: 'Jhol' },
    { name: 'Pork Momo', price: '190', veg: false, sub: 'Jhol' },
    { name: 'Veg Momo', price: '150', veg: true, sub: 'Jhol' },
    { name: 'Chicken Momo', price: '210', veg: false, sub: 'Fry' },
    { name: 'Pork Momo', price: '220', veg: false, sub: 'Fry' },
    { name: 'Veg Momo', price: '180', veg: true, sub: 'Fry' },
    { name: 'Chicken Momo', price: '250', veg: false, sub: "C' Momo" },
    { name: 'Pork Momo', price: '250', veg: false, sub: "C' Momo" },
    { name: 'Veg Momo', price: '200', veg: true, sub: "C' Momo" },
    { name: 'Balmeky Momo Veg', price: '170', veg: true, sub: 'Special' },
    { name: 'Balmeky Momo Chicken', price: '200', veg: false, sub: 'Special' },
    { name: 'Balmeky Momo Pork', price: '210', veg: false, sub: 'Special' },
    { name: 'Kothey Momo Veg', price: '160', veg: true, sub: 'Special' },
    { name: 'Kothey Momo Chicken', price: '190', veg: false, sub: 'Special' },
    { name: 'Kothey Momo Pork', price: '200', veg: false, sub: 'Special' },
  ]},
  { cat: 'THUKPA', items: [
    { name: 'Chicken Thukpa', price: '180', veg: false },
    { name: 'Mutton Thukpa', price: '250', veg: false },
    { name: 'Egg Thukpa', price: '160', veg: false },
    { name: 'Non-Veg Mix Thukpa', price: '300', veg: false },
    { name: 'Veg Thukpa', price: '120', veg: true },
    { name: 'Pork Thukpa', price: '200', veg: false },
  ]},
  { cat: 'SALAD', items: [
    { name: 'Nepali Salad', price: '170', veg: true },
    { name: 'Green Salad', price: '170', veg: true },
  ]},
  { cat: 'VEG ITEMS', items: [
    { name: 'French Fry', price: '170', veg: true },
    { name: 'Chips Chilly', price: '200', veg: true },
    { name: 'Veg Pakoda', price: '160', veg: true },
    { name: 'Mushroom Pakoda', price: '200', veg: true },
    { name: 'Union Pakoda', price: '180', veg: true },
    { name: 'Paneer Chilly', price: '300', veg: true },
    { name: 'Aalu Jeera Fry', price: '170', veg: true },
    { name: 'Mustang Aalu Fry', price: '190', veg: true },
    { name: 'Peanuts Sadeko', price: '170', veg: true },
    { name: 'Bhatmas Sadeko', price: '170', veg: true },
    { name: 'Wai Wai Sadeko', price: '160', veg: true },
    { name: 'Sweet Corn Sadeko', price: '160', veg: true },
    { name: 'Corn Salt & Paper', price: '250', veg: true },
    { name: 'Paneer Pakoda', price: '280', veg: true },
    { name: 'Plain Peanuts', price: '130', veg: true },
    { name: 'Dry / Fry Papad', price: '150', veg: true },
    { name: 'Masala Papad', price: '170', veg: true },
    { name: 'Cheese Kurket', price: '350', veg: true },
    { name: 'Wai Wai with Murai', price: '160', veg: true },
    { name: 'Wai Wai Chiura with Fry Papad', price: '250', veg: true },
    { name: 'Wai Wai Chiura with Fry Papad Egg', price: '300', veg: false },
    { name: 'Mushroom Chilly', price: '300', veg: true },
    { name: 'Veg Omlet', price: '180', veg: false },
    { name: 'Onion Ring', price: '190', veg: true },
    { name: 'Aalu Sadeko', price: '180', veg: true },
    { name: 'Garlic Fries', price: '180', veg: true },
    { name: 'Mushroom Fries', price: '200', veg: true },
    { name: 'Mushroom Grilled', price: '230', veg: true },
    { name: 'Mushroom Choila', price: '300', veg: true },
  ]},
  { cat: 'RICE ITEMS', items: [
    { name: 'Veg Rice', price: '150', veg: true },
    { name: 'Panner Rice', price: '220', veg: true },
    { name: 'Chicken Rice', price: '180', veg: false },
    { name: 'Sausage Rice', price: '200', veg: false },
    { name: 'Mutton Rice', price: '250', veg: false },
    { name: 'Egg Rice', price: '190', veg: false },
    { name: 'Mix Veg Rice', price: '200', veg: true },
    { name: 'Mix Non-Veg Rice', price: '280', veg: false },
    { name: 'Pork Fry Rice', price: '190', veg: false },
    { name: 'Veg Manchurian Rice', price: '220', veg: true },
    { name: 'Chi. Manchurian Rice', price: '260', veg: false },
  ]},
  { cat: 'BIRYANI', items: [
    { name: 'Veg Biryani', price: '350', veg: true },
    { name: 'Chicken Biryani', price: '380', veg: false },
    { name: 'Egg Biryani', price: '390', veg: false },
    { name: 'Mutton Biryani', price: '500', veg: false },
    { name: 'Pork Biryani', price: '400', veg: false },
  ]},
  { cat: 'PIZZA', items: [
    { name: 'Mix Veg Pizza', price: '400', veg: true },
    { name: 'Mix Non-Veg Pizza', price: '460', veg: false },
    { name: 'Chicken Pizza', price: '400', veg: false },
    { name: 'Cheese Pizza', price: '410', veg: true },
    { name: 'Mushroom Pizza', price: '440', veg: true },
    { name: 'Veg Pizza', price: '390', veg: true },
    { name: 'Extra Cheese', price: '60', veg: true },
  ]},
  { cat: 'SIZZLER', items: [
    { name: 'Chicken Sizzler', price: '450', veg: false },
    { name: 'Mutton Sizzler', price: '550', veg: false },
    { name: 'Veg Sizzler', price: '350', veg: true },
    { name: 'Pork Sizzler', price: '500', veg: false },
  ]},
  { cat: 'SAUSAGE', items: [
    { name: 'Sausage Fry', price: '220', veg: false },
    { name: 'Sausage Chilly', price: '235', veg: false },
    { name: 'Sausage Boil', price: '200', veg: false },
  ]},
  { cat: 'SOUP', items: [
    { name: 'Non-Veg Mix Soup', price: '180', veg: false },
    { name: 'Veg Soup', price: '110', veg: true },
    { name: 'Chicken Soup', price: '150', veg: false },
    { name: 'Mushroom Soup', price: '130', veg: true },
  ]},
  { cat: 'CORN DOG', items: [
    { name: 'Cheese Dog', price: '400', veg: true },
    { name: 'Cheese Sausage', price: '360', veg: false },
  ]},
  { cat: 'SANDWICH', items: [
    { name: 'Chicken Sandwich', price: '190', veg: false },
    { name: 'Veg Sandwich', price: '170', veg: true },
  ]},
  { cat: 'BURGER', items: [
    { name: 'Chicken Burger', price: '280', veg: false },
    { name: 'Veg Burger', price: '200', veg: true },
    { name: 'Crunchy Burger', price: '300', veg: false },
    { name: 'Extra Cheese', price: '60', veg: true },
  ]},
  { cat: 'MUTTON ITEMS', items: [
    { name: 'Mutton Jhaneko Sekuwa', price: '450', veg: false },
    { name: 'Mutton Dameko', price: '400', veg: false },
    { name: 'Mutton Choila', price: '400', veg: false },
    { name: 'Mutton Fry', price: '400', veg: false },
    { name: 'Mutton Boil', price: '350', veg: false },
    { name: 'Mutton Sadeko', price: '400', veg: false },
    { name: 'Mutton Roast', price: '350', veg: false },
  ]},
  { cat: 'CHICKEN ITEMS', items: [
    { name: 'Chicken Fry', price: '260', veg: false },
    { name: 'Chicken Chilly', price: '290', veg: false },
    { name: 'Chicken Nuggets', price: '300', veg: false },
    { name: 'Chicken Sadeko', price: '240', veg: false },
    { name: 'Chicken Popcorn', price: '240', veg: false },
    { name: 'Chicken Tawa', price: '320', veg: false },
    { name: 'Chicken Pakoda', price: '230', veg: false },
    { name: 'Chicken Choila', price: '280', veg: false },
    { name: 'Chicken Drumstick', price: '290', veg: false },
    { name: 'Chicken Cheese Drumstick', price: '400', veg: false },
    { name: 'Chicken Lollipop', price: '300', veg: false },
    { name: 'Chicken Boil', price: '200', veg: false },
    { name: 'Chicken Sekuwa', price: '350', veg: false },
    { name: 'Chicken Roast', price: '350', veg: false },
    { name: 'KFC Chicken', price: '290', veg: false },
    { name: 'Chicken Cutlet', price: '300', veg: false },
    { name: 'Chicken Leg Fry', price: '300', veg: false },
    { name: 'Lemon Chicken', price: '270', veg: false },
    { name: 'Spicy Wings', price: '350', veg: false },
    { name: 'Chicken Bread', price: '300', veg: false },
    { name: 'HFC Chicken', price: '300', veg: false },
    { name: 'Tex Max Chicken', price: '350', veg: false },
    { name: 'Wings Fries', price: '350', veg: false },
    { name: 'Chi. Momo Platter', price: '850', veg: false },
    { name: 'Chi. Platter', price: '1100', veg: false },
    { name: 'Jhaneko Chi. Sekuwa', price: '380', veg: false },
    { name: 'Chrispy Chicken', price: '300', veg: false },
  ]},
  { cat: 'PORK', items: [
    { name: 'Pork Fry', price: '240', veg: false },
    { name: 'Pork Dameko', price: '270', veg: false },
    { name: 'Pork Sadeko', price: '270', veg: false },
    { name: 'Pork Sekuwa', price: '270', veg: false },
    { name: 'Pork Choila', price: '250', veg: false },
    { name: 'Pork Chilly', price: '290', veg: false },
    { name: 'Jhaneko Pork Sekuwa', price: '380', veg: false },
  ]},
  { cat: 'BUFF', items: [
    { name: 'Buff Sukuti', price: '300', veg: false },
    { name: 'Buff Sadeko', price: '210', veg: false },
    { name: 'Buff Choila', price: '250', veg: false },
    { name: 'Buff Sekuwa', price: '300', veg: false },
    { name: 'Jhaneko Buff Sekuwa', price: '380', veg: false },
  ]},
  { cat: 'CHOPSUEY', items: [
    { name: 'American Chopsuey Veg', price: '290', veg: true },
    { name: 'American Chopsuey Non-Veg', price: '380', veg: false },
    { name: 'Chinese Chopsuey Veg', price: '290', veg: true },
    { name: 'Chinese Chopsuey Non-Veg', price: '380', veg: false },
  ]},
  { cat: 'OMLET ITEMS', items: [
    { name: 'Egg Boil (2 pcs)', price: '100', veg: false },
    { name: 'Egg Pakoda', price: '140', veg: false },
    { name: 'Egg Poz', price: '130', veg: false },
    { name: 'Egg Omlet (Special)', price: '200', veg: false },
    { name: 'Plane Omlet (Normal)', price: '180', veg: false },
  ]},
  { cat: 'KBR KHAJA SET', items: [
    { name: 'Masu Chiura', price: '270', veg: false },
    { name: 'KBR Khaja Set Veg', price: '280', veg: true },
    { name: 'KBR Khaja Set Chicken', price: '370', veg: false },
    { name: 'KBR Khaja Set Pork', price: '400', veg: false },
  ]},
  { cat: 'HUKKA', items: [
    { name: 'Hukka', price: '350', veg: true },
    { name: 'Coil Change', price: '50', veg: true },
  ]},
  { cat: 'WHISKEY', items: [
    { name: 'Double Black', price: '390 / 770 / 12000', veg: true },
    { name: 'Black Label', price: '350 / 680 / 11000', veg: true },
    { name: 'Red Label', price: '280 / 550 / 9000', veg: true },
    { name: 'Jack Daniels', price: '340 / 660 / 10000', veg: true },
    { name: 'Signature Red', price: '150 / 280 / 3200', veg: true },
    { name: 'Old Durbar Red', price: '170 / 320 / 3500', veg: true },
    { name: 'Old Durbar Black Chemmy', price: '210 / 390 / 4500', veg: true },
  ]},
  { cat: 'GOLDEN OAK', items: [
    { name: 'Half Peg', price: '80', veg: true },
    { name: '1 Peg', price: '150', veg: true },
    { name: 'Quarter', price: '800', veg: true },
    { name: 'Full Bottle', price: '1500', veg: true },
  ]},
  { cat: 'RUM', items: [
    { name: 'Kukuri Rum', price: '120 / 230 / 2600', veg: true },
  ]},
  { cat: 'VODKA', items: [
    { name: '8848', price: '140 / 250 / 2600', veg: true },
  ]},
  { cat: 'APPLESIDER & WINE', items: [
    { name: 'Applesider', price: '300', veg: true },
    { name: 'Big Master', price: '1000', veg: true },
    { name: 'Proto', price: '3500', veg: true },
    { name: 'Robertson', price: '2000', veg: true },
    { name: 'JP Chenet', price: '2500', veg: true },
    { name: 'Divine', price: '1000', veg: true },
  ]},
  { cat: 'BEER', items: [
    { name: 'Tuborg Big', price: '550', veg: true },
    { name: 'Gorkha Strong Big', price: '450', veg: true },
    { name: 'Gorkha Strong Small', price: '250', veg: true },
    { name: 'Mustang Big', price: '420', veg: true },
    { name: 'Mustang Small', price: '240', veg: true },
    { name: 'Carlsberg Big', price: 'N/A', veg: true },
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
