const menuData = [
  { name: "김치찌개", category: "한식", situations: ["혼밥", "빠르게 먹기", "든든하게"], time: "15분", price: "8,000원대", emoji: "🍲", desc: "따뜻하고 익숙한 맛으로 수업 후 든든하게 먹기 좋은 대표 한식 메뉴입니다.", accent: ["#F97316","#FDBA74","#FB7185"] },
  { name: "제육볶음", category: "한식", situations: ["친구와 식사", "든든하게"], time: "20분", price: "9,000원대", emoji: "🥘", desc: "밥과 함께 먹기 좋고 매콤한 맛이 살아 있어 든든한 한 끼에 잘 맞습니다.", accent: ["#DC2626","#F59E0B","#FDBA74"] },
  { name: "된장찌개", category: "한식", situations: ["혼밥", "든든하게"], time: "12분", price: "7,000원대", emoji: "🍚", desc: "자극적이지 않아 깔끔하게 먹고 싶을 때 좋은 메뉴입니다.", accent: ["#8B5E3C","#F59E0B","#EAB308"] },
  { name: "짜장면", category: "중식", situations: ["혼밥", "빠르게 먹기", "친구와 식사"], time: "10분", price: "7,000원대", emoji: "🍜", desc: "빠르게 주문할 수 있고 호불호가 적어 누구와 먹어도 무난합니다.", accent: ["#4B5563","#D97706","#FBBF24"] },
  { name: "짬뽕", category: "중식", situations: ["친구와 식사", "든든하게"], time: "15분", price: "8,000원대", emoji: "🌶️", desc: "칼칼하고 시원한 국물이 필요할 때 잘 어울리는 메뉴입니다.", accent: ["#E11D48","#F97316","#FDBA74"] },
  { name: "탕수육", category: "중식", situations: ["친구와 식사"], time: "20분", price: "15,000원대", emoji: "🍖", desc: "여럿이 함께 먹기 좋아 분위기를 내기 쉬운 메뉴입니다.", accent: ["#F59E0B","#FCD34D","#F97316"] },
  { name: "파스타", category: "양식", situations: ["친구와 식사", "데이트"], time: "20분", price: "12,000원대", emoji: "🍝", desc: "조금 더 분위기 있는 식사를 원할 때 고르기 좋은 메뉴입니다.", accent: ["#EF4444","#F472B6","#FBBF24"] },
  { name: "피자", category: "양식", situations: ["친구와 식사", "야식"], time: "25분", price: "18,000원대", emoji: "🍕", desc: "나눠 먹기 쉬워 모임이나 야식 메뉴로 활용하기 좋습니다.", accent: ["#F59E0B","#FB7185","#FDE68A"] },
  { name: "돈까스", category: "일식", situations: ["혼밥", "빠르게 먹기", "든든하게"], time: "15분", price: "10,000원대", emoji: "🍛", desc: "바삭한 식감과 익숙한 맛으로 실패 확률이 낮은 메뉴입니다.", accent: ["#6B7280","#F59E0B","#EAB308"] },
  { name: "우동", category: "일식", situations: ["혼밥", "빠르게 먹기"], time: "8분", price: "7,000원대", emoji: "🍥", desc: "짧은 시간에 따뜻하게 먹기 좋아 수업 후 간단히 먹기 좋습니다.", accent: ["#3B82F6","#93C5FD","#FDE68A"] },
  { name: "떡볶이", category: "분식", situations: ["친구와 식사", "야식"], time: "10분", price: "6,000원대", emoji: "🍢", desc: "가볍게 즐기기 좋고 분식 메뉴 중 대표적인 인기 선택지입니다.", accent: ["#F43F5E","#FB7185","#FDBA74"] },
  { name: "김밥", category: "분식", situations: ["혼밥", "빠르게 먹기"], time: "5분", price: "4,000원대", emoji: "🌯", desc: "시간이 정말 없을 때 빠르게 해결하기 좋은 실용적인 메뉴입니다.", accent: ["#22C55E","#FDE68A","#60A5FA"] },
  { name: "라면", category: "야식", situations: ["야식", "혼밥"], time: "6분", price: "3,000원대", emoji: "🍜", desc: "야식의 대표 메뉴로, 간단하고 빠르게 먹고 싶을 때 좋습니다.", accent: ["#F97316","#FB923C","#FDE68A"] },
  { name: "치킨", category: "야식", situations: ["친구와 식사", "야식"], time: "30분", price: "20,000원대", emoji: "🍗", desc: "기분 전환이 필요할 때 선택하면 만족도가 높은 대표 야식입니다.", accent: ["#F59E0B","#FCD34D","#EF4444"] },
  { name: "샐러드", category: "기타", situations: ["든든하게"], time: "7분", price: "8,000원대", emoji: "🥗", desc: "가볍게 먹고 싶거나 균형 잡힌 한 끼를 원할 때 추천됩니다.", accent: ["#22C55E","#86EFAC","#FDE68A"] }
];

const popularList = [
  { name: "김치찌개", text: "한식 메뉴 중 가장 안정적인 선택지로, 든든한 한 끼를 원하는 학생들에게 적합합니다." },
  { name: "떡볶이", text: "친구와 함께 먹기 쉽고 간단하게 즐길 수 있어 분식 메뉴의 대표 주자입니다." },
  { name: "짜장면", text: "빠르게 먹을 수 있고 실패 확률이 적어 수업 후 식사에 자주 선택됩니다." },
  { name: "돈까스", text: "바삭한 식감과 익숙한 맛으로 혼밥과 외식 모두에 잘 맞는 메뉴입니다." }
];

const categoryMap = [...new Set(menuData.map(m => m.category))].filter(c => c !== "기타");

function $(sel){ return document.querySelector(sel); }

function makeFoodImage(food, wide = true){
  const [a, b, c] = food.accent || ["#ff8a3d", "#ffb347", "#f8e9c7"];
  const w = wide ? 900 : 760;
  const h = wide ? 620 : 560;
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${food.name}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#fff8ef"/>
        <stop offset="100%" stop-color="#fff1df"/>
      </linearGradient>
      <radialGradient id="glow" cx="50%" cy="35%" r="70%">
        <stop offset="0%" stop-color="${a}" stop-opacity=".22"/>
        <stop offset="100%" stop-color="${a}" stop-opacity="0"/>
      </radialGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#7c4a1e" flood-opacity=".14"/>
      </filter>
    </defs>
    <rect width="${w}" height="${h}" rx="36" fill="url(#bg)"/>
    <ellipse cx="${w * 0.36}" cy="${h * 0.31}" rx="${w * 0.28}" ry="${h * 0.18}" fill="url(#glow)"/>
    <circle cx="${w * 0.58}" cy="${h * 0.45}" r="${Math.min(w,h) * 0.17}" fill="rgba(255,255,255,.62)"/>
    <circle cx="${w * 0.58}" cy="${h * 0.45}" r="${Math.min(w,h) * 0.14}" fill="rgba(244,214,160,.44)" filter="url(#shadow)"/>
    <circle cx="${w * 0.58}" cy="${h * 0.45}" r="${Math.min(w,h) * 0.11}" fill="#fffdfa"/>
    <circle cx="${w * 0.58}" cy="${h * 0.45}" r="${Math.min(w,h) * 0.08}" fill="${b}" opacity=".78"/>
    <circle cx="${w * 0.53}" cy="${h * 0.39}" r="${Math.min(w,h) * 0.028}" fill="${a}"/>
    <circle cx="${w * 0.64}" cy="${h * 0.42}" r="${Math.min(w,h) * 0.023}" fill="${c}"/>
    <circle cx="${w * 0.49}" cy="${h * 0.55}" r="${Math.min(w,h) * 0.026}" fill="${c}"/>
    <circle cx="${w * 0.69}" cy="${h * 0.57}" r="${Math.min(w,h) * 0.024}" fill="${a}"/>
    <circle cx="${w * 0.55}" cy="${h * 0.62}" r="${Math.min(w,h) * 0.020}" fill="${b}"/>
    <text x="${w * 0.18}" y="${h * 0.34}" font-size="${Math.floor(h * 0.12)}" font-family="Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif">${food.emoji}</text>
    <text x="${w * 0.12}" y="${h * 0.80}" font-size="${Math.floor(h * 0.058)}" font-weight="800" fill="#334155" font-family="Pretendard, Apple SD Gothic Neo, Noto Sans KR, sans-serif">${food.name}</text>
    <text x="${w * 0.12}" y="${h * 0.87}" font-size="${Math.floor(h * 0.034)}" fill="#6b7280" font-family="Pretendard, Apple SD Gothic Neo, Noto Sans KR, sans-serif">${food.category} · ${food.time} · ${food.price}</text>
  </svg>`;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

function fillSelects(){
  const categorySelect = $("#categorySelect");
  const situationSelect = $("#situationSelect");
  if(!categorySelect || !situationSelect) return;
  categorySelect.innerHTML = `<option value="전체">전체</option>` + categoryMap.map(c => `<option value="${c}">${c}</option>`).join("");
  situationSelect.innerHTML = `
    <option value="전체">전체</option>
    <option value="혼밥">혼밥</option>
    <option value="친구와 식사">친구와 식사</option>
    <option value="야식">야식</option>
    <option value="빠르게 먹기">빠르게 먹기</option>
    <option value="든든하게">든든하게</option>
    <option value="데이트">데이트</option>
  `;
}

function renderPopular(){
  const list = $("#popularList");
  if(!list) return;
  list.innerHTML = popularList.map((item, index) => `
    <article class="menu-item">
      <div class="rank">${index+1}</div>
      <div>
        <h4>${item.name}</h4>
        <p>${item.text}</p>
      </div>
    </article>
  `).join("");
}

function renderCategoryCards(){
  const wrapper = $("#categoryGrid");
  if(!wrapper) return;
  wrapper.innerHTML = categoryMap.map(category => {
    const items = menuData.filter(m => m.category === category).slice(0,3);
    return `
      <article class="food-card">
        <header>
          <div>
            <h3>${category}</h3>
            <div class="meta">${items.length}개 추천 메뉴</div>
          </div>
          <span class="badge">${items[0]?.emoji || "🍽️"}</span>
        </header>
        <div class="menu-list">
          ${items.map(item => `
            <div class="menu-item" style="box-shadow:none;border:1px solid #f0e5d6;">
              <div class="rank">${item.emoji}</div>
              <div>
                <h4>${item.name}</h4>
                <p>${item.desc}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </article>
    `;
  }).join("");
}

function updatePreview(food){
  const featuredImage = $("#featuredImage");
  const featuredTitle = $("#featuredTitle");
  const featuredMeta = $("#featuredMeta");
  const featuredDesc = $("#featuredDesc");
  if(featuredImage) featuredImage.src = makeFoodImage(food);
  if(featuredTitle) featuredTitle.textContent = food.name;
  if(featuredMeta) featuredMeta.textContent = `${food.category} · ${food.situations[0]}`;
  if(featuredDesc) featuredDesc.textContent = food.desc;
}

function pickFood(){
  const category = $("#categorySelect")?.value || "전체";
  const situation = $("#situationSelect")?.value || "전체";
  const resultName = $("#resultName");
  const resultCategory = $("#resultCategory");
  const resultDesc = $("#resultDesc");
  const resultTags = $("#resultTags");
  const foodImage = $("#foodImage");
  const timeRow = $("#timeRow");
  const priceRow = $("#priceRow");
  const reasonRow = $("#reasonRow");

  let pool = menuData.filter(item => item.category !== "기타");
  if(category !== "전체") pool = pool.filter(item => item.category === category);
  if(situation !== "전체") pool = pool.filter(item => item.situations.includes(situation));
  if(pool.length === 0) pool = menuData.filter(item => item.category !== "기타");
  const food = pool[Math.floor(Math.random() * pool.length)];

  if(resultName) resultName.textContent = food.name;
  if(resultCategory) resultCategory.textContent = `${food.category} · ${situation === "전체" ? "상황 무관" : situation}`;
  if(resultDesc) resultDesc.textContent = food.desc;
  if(foodImage) foodImage.src = makeFoodImage(food, false);
  if(timeRow) timeRow.querySelector("b").textContent = food.time;
  if(priceRow) priceRow.querySelector("b").textContent = food.price;
  if(reasonRow) reasonRow.querySelector("b").textContent = `선택 조건: ${category} / ${situation}`;

  if(resultTags){
    resultTags.innerHTML = food.situations.map(s => `<span class="tag">${s}</span>`).join("");
  }
}

function bindEvents(){
  const btn = $("#recommendBtn");
  const randomBtn = $("#randomBtn");
  const resetBtn = $("#resetBtn");
  if(btn) btn.addEventListener("click", pickFood);
  if(randomBtn) randomBtn.addEventListener("click", () => {
    const categories = ["전체", ...categoryMap];
    const situations = ["전체", "혼밥", "친구와 식사", "야식", "빠르게 먹기", "든든하게", "데이트"];
    $("#categorySelect").value = categories[Math.floor(Math.random() * categories.length)];
    $("#situationSelect").value = situations[Math.floor(Math.random() * situations.length)];
    pickFood();
  });
  if(resetBtn) resetBtn.addEventListener("click", () => {
    $("#categorySelect").value = "전체";
    $("#situationSelect").value = "전체";
    pickFood();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fillSelects();
  renderPopular();
  renderCategoryCards();
  bindEvents();
  const featured = menuData.find(item => item.name === "김치찌개") || menuData[0];
  updatePreview(featured);
  if($("#recommendBtn")) pickFood();
});
