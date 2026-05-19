
const FOOD_DATA = [
  {
    name: "김치찌개",
    category: "한식",
    situation: "든든하게",
    time: "빠름",
    desc: "수업이 끝난 뒤 따뜻하고 든든하게 먹기 좋은 대표 한식 메뉴입니다.",
    reason: "속을 편하게 채워 주는 메뉴라서 피곤한 날에 잘 맞습니다.",
    keywords: ["한식", "국물", "따뜻함"],
    color: "#ff9f43",
    garnish: ["#ff6b6b", "#2ecc71", "#f39c12"],
    base: "#fff2e3",
    accent: "#b45309"
  },
  {
    name: "비빔밥",
    category: "한식",
    situation: "균형 있게",
    time: "보통",
    desc: "채소와 밥을 골고루 먹을 수 있어 가볍지만 든든한 한 끼로 좋습니다.",
    reason: "영양과 포만감을 같이 챙기고 싶을 때 적합합니다.",
    keywords: ["한식", "균형", "건강"],
    color: "#f59e0b",
    garnish: ["#ef4444", "#10b981", "#f97316"],
    base: "#fff8ea",
    accent: "#92400e"
  },
  {
    name: "짜장면",
    category: "중식",
    situation: "빨리",
    time: "빠름",
    desc: "짧은 시간 안에 한 끼를 해결하기 좋은 익숙하고 인기 있는 메뉴입니다.",
    reason: "메뉴 고민을 줄이고 빠르게 식사하고 싶을 때 잘 맞습니다.",
    keywords: ["중식", "간편", "인기"],
    color: "#8b5a2b",
    garnish: ["#6b4f2a", "#fbbf24", "#eab308"],
    base: "#fff2df",
    accent: "#78350f"
  },
  {
    name: "돈까스",
    category: "일식",
    situation: "든든하게",
    time: "보통",
    desc: "바삭한 식감과 포만감이 좋아 수업 후 든든한 식사로 잘 어울립니다.",
    reason: "한 끼를 확실하게 먹고 싶을 때 안정적인 선택입니다.",
    keywords: ["일식", "바삭함", "포만감"],
    color: "#ef4444",
    garnish: ["#f97316", "#22c55e", "#a3e635"],
    base: "#fff5ee",
    accent: "#9f1239"
  },
  {
    name: "떡볶이",
    category: "분식",
    situation: "친구와",
    time: "빠름",
    desc: "가볍게 나눠 먹기 좋고, 친구와 함께 먹을 때 분위기를 살려 주는 메뉴입니다.",
    reason: "가성비와 재미를 함께 챙길 수 있습니다.",
    keywords: ["분식", "매콤", "공유"],
    color: "#ff4d6d",
    garnish: ["#f97316", "#f43f5e", "#22c55e"],
    base: "#fff0f3",
    accent: "#be123c"
  },
  {
    name: "파스타",
    category: "양식",
    situation: "분위기 있게",
    time: "보통",
    desc: "조금 더 여유롭게 식사하고 싶을 때 잘 어울리는 깔끔한 양식 메뉴입니다.",
    reason: "기분 전환과 만족도를 함께 높여 줍니다.",
    keywords: ["양식", "분위기", "깔끔"],
    color: "#8b5cf6",
    garnish: ["#f59e0b", "#fb7185", "#22c55e"],
    base: "#f6f0ff",
    accent: "#6d28d9"
  },
  {
    name: "초밥",
    category: "일식",
    situation: "가볍게",
    time: "보통",
    desc: "무겁지 않게 먹기 좋고, 정갈한 느낌이 필요한 날에 잘 어울립니다.",
    reason: "가볍고 깔끔한 식사를 원하는 경우 만족도가 높습니다.",
    keywords: ["일식", "가벼움", "정갈"],
    color: "#0ea5e9",
    garnish: ["#fb7185", "#22c55e", "#f59e0b"],
    base: "#eef9ff",
    accent: "#075985"
  },
  {
    name: "라면",
    category: "분식",
    situation: "야식",
    time: "매우 빠름",
    desc: "늦은 시간에 부담 없이 빠르게 먹기 좋은 대표적인 야식 메뉴입니다.",
    reason: "짧은 시간에 간단히 해결하고 싶을 때 적합합니다.",
    keywords: ["분식", "야식", "간편"],
    color: "#f97316",
    garnish: ["#ef4444", "#22c55e", "#eab308"],
    base: "#fff1e8",
    accent: "#c2410c"
  }
];

const CATEGORY_ORDER = ["전체", "한식", "중식", "양식", "일식", "분식"];
const SITUATION_ORDER = ["전체", "빨리", "든든하게", "가볍게", "친구와", "야식", "분위기 있게", "균형 있게"];

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function dishSvg(item, size = 360) {
  const toppings = item.garnish.map((c, i) => {
    const positions = [
      [0.20, 0.24], [0.72, 0.35], [0.58, 0.72], [0.28, 0.70]
    ];
    const [x, y] = positions[i % positions.length];
    const radius = i % 2 === 0 ? 18 : 14;
    return `<circle cx="${Math.round(size * x)}" cy="${Math.round(size * y)}" r="${radius}" fill="${c}" opacity="0.95" />`;
  }).join('');

  const bowl = item.category === '분식'
    ? `<path d="M64 186 C92 120, 268 120, 296 186 C285 255, 75 255, 64 186Z" fill="${item.base}" stroke="rgba(31,41,55,0.08)" stroke-width="3" />`
    : `<ellipse cx="${size/2}" cy="${size*0.58}" rx="120" ry="86" fill="${item.base}" stroke="rgba(31,41,55,0.08)" stroke-width="3" />`;

  const steam = item.time !== '야식'
    ? `<path d="M132 84c-18 18 18 27 0 45M180 74c-18 18 18 27 0 45M232 84c-18 18 18 27 0 45" stroke="${item.accent}" stroke-width="8" stroke-linecap="round" opacity="0.22" fill="none"/>`
    : '';

  const detail = item.category === '한식'
    ? `<circle cx="180" cy="202" r="64" fill="${item.color}" opacity="0.10" />`
    : item.category === '중식'
    ? `<rect x="120" y="158" width="120" height="92" rx="28" fill="${item.color}" opacity="0.12" />`
    : item.category === '양식'
    ? `<circle cx="180" cy="190" r="56" fill="${item.color}" opacity="0.10" /><circle cx="180" cy="190" r="28" fill="${item.color}" opacity="0.18" />`
    : `<path d="M128 190h104" stroke="${item.color}" stroke-width="16" stroke-linecap="round" opacity="0.14"/>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${item.base}"/>
        <stop offset="100%" stop-color="#ffffff"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" rx="30" fill="url(#g)"/>
    <circle cx="${size/2}" cy="${size/2}" r="${size * 0.38}" fill="rgba(255,255,255,0.7)" />
    <circle cx="${size/2}" cy="${size/2}" r="${size * 0.30}" fill="rgba(255,255,255,0.9)" stroke="rgba(31,41,55,0.08)" stroke-width="2"/>
    ${steam}
    ${bowl}
    ${detail}
    ${toppings}
    <circle cx="${size/2}" cy="${size/2}" r="${size * 0.04}" fill="${item.color}" />
  </svg>
  `)}`;
}

function iconSvg(label, color) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240">
    <rect width="240" height="240" rx="34" fill="#fff7ee"/>
    <circle cx="120" cy="120" r="76" fill="${color}" opacity="0.12"/>
    <circle cx="120" cy="120" r="44" fill="#fff" stroke="${color}" stroke-width="10"/>
    <text x="120" y="136" text-anchor="middle" font-size="72">${label}</text>
  </svg>
  `)}`;
}

const ART = Object.fromEntries(FOOD_DATA.map(item => [item.name, dishSvg(item)]));

function setText(el, value) { if (el) el.textContent = value; }
function setHtml(el, value) { if (el) el.innerHTML = value; }

function getFilters() {
  const category = document.getElementById('category-filter')?.value || '전체';
  const situation = document.getElementById('situation-filter')?.value || '전체';
  return { category, situation };
}

function filteredFoods() {
  const { category, situation } = getFilters();
  return FOOD_DATA.filter(item => {
    const c = category === '전체' || item.category === category;
    const s = situation === '전체' || item.situation === situation || item.desc.includes(situation);
    return c && s;
  });
}

function pickFood() {
  const list = filteredFoods();
  if (list.length) return list[Math.floor(Math.random() * list.length)];
  return FOOD_DATA[Math.floor(Math.random() * FOOD_DATA.length)];
}

function renderFeatured() {
  const featured = FOOD_DATA[0];
  const img = document.getElementById('featured-food-img');
  const name = document.getElementById('featured-food-name');
  const desc = document.getElementById('featured-food-desc');
  const tag = document.getElementById('featured-food-tag');
  if (img) img.src = ART[featured.name];
  setText(name, featured.name);
  setText(desc, featured.desc);
  setText(tag, `${featured.category} · ${featured.situation}`);
}

function renderStats() {
  setText(document.getElementById('food-count'), `${FOOD_DATA.length}개`);
  setText(document.getElementById('category-count'), `${new Set(FOOD_DATA.map(f => f.category)).size}개`);
}

function renderPopular() {
  const list = document.getElementById('popular-list');
  if (!list) return;
  const ranking = [
    FOOD_DATA[0], FOOD_DATA[4], FOOD_DATA[3], FOOD_DATA[2], FOOD_DATA[5], FOOD_DATA[6]
  ];
  list.innerHTML = ranking.map((item, idx) => `
    <article class="rank-item">
      <div class="rank-num">${idx + 1}</div>
      <div style="display:grid; gap:6px;">
        <div style="display:flex; gap:10px; flex-wrap:wrap; align-items:center;">
          <strong style="font-size:20px;">${escapeHtml(item.name)}</strong>
          <span class="tag">${escapeHtml(item.category)}</span>
        </div>
        <div class="item-line">${escapeHtml(item.situation)} · ${escapeHtml(item.time)}</div>
        <div class="item-desc">${escapeHtml(item.reason)}</div>
      </div>
    </article>
  `).join('');
}

function renderCategoryGrid() {
  const grid = document.getElementById('category-grid');
  if (!grid) return;
  const categories = CATEGORY_ORDER.slice(1);
  grid.innerHTML = categories.map(cat => {
    const items = FOOD_DATA.filter(f => f.category === cat);
    return `
      <section class="info-card" style="padding:18px;">
        <div style="display:flex; justify-content:space-between; align-items:center; gap:12px; margin-bottom: 12px;">
          <div style="display:flex; align-items:center; gap:10px;">
            <div class="info-icon">${cat === '한식' ? '🍲' : cat === '중식' ? '🥢' : cat === '양식' ? '🍝' : cat === '일식' ? '🍣' : '🍢'}</div>
            <div>
              <div class="info-title" style="margin:0;">${cat}</div>
              <div class="small">${items.length}개 메뉴</div>
            </div>
          </div>
          <span class="tag">${cat}</span>
        </div>
        <div class="list-grid" style="grid-template-columns: 1fr;">
          ${items.map(item => `
            <article class="item-card">
              <div class="item-art"><img src="${ART[item.name]}" alt="${escapeHtml(item.name)}"></div>
              <div class="item-body">
                <h3 class="item-title">${escapeHtml(item.name)}</h3>
                <p class="item-line">${escapeHtml(item.situation)} · ${escapeHtml(item.time)}</p>
                <p class="item-desc">${escapeHtml(item.desc)}</p>
              </div>
            </article>
          `).join('')}
        </div>
      </section>
    `;
  }).join('');
}

function renderRecommendation(food, title = '오늘의 추천') {
  const img = document.getElementById('result-img');
  const name = document.getElementById('result-name');
  const meta = document.getElementById('result-meta');
  const desc = document.getElementById('result-desc');
  const reason = document.getElementById('result-reason');
  const tags = document.getElementById('result-tags');
  if (!food) return;
  if (img) img.src = ART[food.name];
  setText(name, food.name);
  setText(meta, `${title} · ${food.category} · ${food.situation}`);
  setText(desc, food.desc);
  setText(reason, food.reason);
  if (tags) {
    tags.innerHTML = food.keywords.map(k => `<span class="tag">#${escapeHtml(k)}</span>`).join('');
  }
}

function syncChipGroup(group, value, onPick) {
  const chips = document.querySelectorAll(`[data-group="${group}"] .chip`);
  chips.forEach(chip => {
    chip.classList.toggle('active', chip.dataset.value === value);
    chip.addEventListener('click', () => {
      const select = document.getElementById(`${group}-filter`);
      if (select) select.value = chip.dataset.value;
      onPick?.(chip.dataset.value);
      chips.forEach(c => c.classList.toggle('active', c.dataset.value === chip.dataset.value));
    });
  });
}

function renderIndexPage() {
  renderFeatured();
  renderStats();
  const shuffle = document.getElementById('featured-shuffle');
  if (shuffle) {
    shuffle.addEventListener('click', () => {
      const food = FOOD_DATA[Math.floor(Math.random() * FOOD_DATA.length)];
      const img = document.getElementById('featured-food-img');
      setText(document.getElementById('featured-food-name'), food.name);
      setText(document.getElementById('featured-food-desc'), food.desc);
      setText(document.getElementById('featured-food-tag'), `${food.category} · ${food.situation}`);
      if (img) img.src = ART[food.name];
    });
  }
}

function renderRecommendPage() {
  const catSelect = document.getElementById('category-filter');
  const sitSelect = document.getElementById('situation-filter');
  if (catSelect) catSelect.innerHTML = CATEGORY_ORDER.map(v => `<option value="${v}">${v}</option>`).join('');
  if (sitSelect) sitSelect.innerHTML = SITUATION_ORDER.map(v => `<option value="${v}">${v}</option>`).join('');
  renderRecommendation(FOOD_DATA[0], '예시 추천');
  syncChipGroup('category', '전체');
  syncChipGroup('situation', '전체');

  const refresh = () => {
    const food = pickFood();
    renderRecommendation(food, '맞춤 추천');
  };
  document.getElementById('recommend-btn')?.addEventListener('click', refresh);
  document.getElementById('shuffle-btn')?.addEventListener('click', refresh);
  document.getElementById('category-filter')?.addEventListener('change', refresh);
  document.getElementById('situation-filter')?.addEventListener('change', refresh);
}

function renderPageSpecific() {
  const page = document.body.dataset.page;
  if (page === 'index') renderIndexPage();
  if (page === 'recommend') renderRecommendPage();
  if (page === 'categories') renderCategoryGrid();
  if (page === 'popular') renderPopular();
}

function setActiveNav() {
  const page = document.body.dataset.page;
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  renderPageSpecific();
});
