const units = [
  {
    id: 1,
    title: "探索生命世界",
    group: "生物",
    image: "1.jpg",
    summary: "科學方法、顯微鏡、細胞構造與生物體層次。",
    sections: [
      ["觀察生物", ["科學方法包含觀察、提出問題、參考資料、假說、設計實驗、分析與結論。", "實驗變因、實驗組與對照組可幫助確認因果關係。", "複式顯微鏡觀察微小細胞，解剖顯微鏡觀察立體或較大的構造。"]],
      ["細胞構造和功能", ["虎克是第一位發現細胞的科學家。", "細胞壁、細胞膜、細胞質、細胞核與胞器各有功能。", "動物細胞例：口腔皮膜、紅血球、白血球、神經細胞、肌肉細胞。植物細胞例：葉下表皮、保衛細胞。"]],
      ["生物體組成層次", ["單細胞生物一個細胞即可表現生命現象。", "多細胞生物有細胞間分工合作。", "組成層次為細胞、組織、器官、器官系統、個體。"]]
    ]
  },
  {
    id: 2,
    title: "生物圈的生物",
    group: "生物",
    image: "2.jpg",
    summary: "生命演變、命名、分類與五界生物。",
    sections: [
      ["形形色色的生物", ["化石與地球生物演變可作為生命變遷證據。", "生物命名可分俗名、學名，分類層級為界、門、綱、目、科、屬、種。", "病毒介於無生物和生物之間，具有蛋白質外殼與內部遺傳結構。"]],
      ["五界生物", ["原核生物界包括細菌、藍綠菌。", "原生生物包含原生菌類、藻類、原生動物。", "菌物界包含酵母菌、黴菌、蕈類。", "植物界包含蘚苔、蕨類、裸子植物、被子植物。", "動物界包含無脊椎動物與脊索動物門。"]]
    ]
  },
  {
    id: 3,
    title: "植物的生理與感應",
    group: "生物",
    image: "3.jpg",
    summary: "植物器官、生殖、養分運輸與感應。",
    sections: [
      ["植物的器官", ["根能固定植物並吸收水分和礦物質。", "莖能支撐植物體並運輸水分與養分。", "葉能行光合作用，氣孔與蒸散作用調節水分與溫度。", "花包含花瓣、花萼、雄蕊、雌蕊；果實保護種子並協助傳播。"]],
      ["植物的生殖", ["無性生殖可用營養器官、孢子或組織培養繁殖，後代通常相同。", "有性生殖包含授粉、受精、胚珠與子房發育成種子和果實，後代具遺傳差異。"]],
      ["養分與運輸", ["光合作用：水加二氧化碳經光能形成葡萄糖與氧氣。", "呼吸作用：葡萄糖加氧氣產生二氧化碳、水與能量。", "維管束負責運輸水分與養分。"]],
      ["植物的感應", ["莖有向光性、背地性、向觸性。", "根有背光性、向地性、向溼性。", "快速感應包含睡眠運動、觸發運動、捕蟲運動與氣孔開閉。"]]
    ]
  },
  {
    id: 4,
    title: "動物生理與行為",
    group: "生物",
    image: "4.jpg",
    summary: "人體消化、循環、防禦、神經內分泌與行為。",
    sections: [
      ["消化系統", ["消化道依序為口腔、食道、胃、小腸、大腸、肛門。", "消化腺包含唾腺、胃腺、肝臟、胰臟、腸腺。", "消化液包含唾液、胃液、膽汁、胰液、腸液。"]],
      ["運輸與防禦", ["心臟有二心房二心室，血管包含動脈、微血管、靜脈。", "血液由血漿與血球組成，血球有紅血球、白血球、血小板。", "非專一性防禦包含皮膚黏膜、吞噬與發炎；專一性防禦與白血球抗體及疫苗記憶性有關。"]],
      ["協調與恆定", ["神經系統包含中樞神經與周圍神經。", "腦包含大腦、小腦與腦幹，脊髓負責身體和四肢反射。", "內分泌腺包含腦垂腺、甲狀腺、副甲狀腺、腎上腺、胰島、性腺。", "恆定性包含氣體、水分、血糖與體溫調節。"]],
      ["動物行為", ["反射是不經大腦意識的反應。", "趨性、學習、禦敵、保護色、偽裝、溝通、求偶、生殖、育幼與社會行為都屬動物行為。"]]
    ]
  },
  {
    id: 5,
    title: "生物與環境",
    group: "生物",
    image: "5.jpg",
    summary: "生態因子、交互作用、生態系、族群與保育。",
    sections: [
      ["生態環境", ["非生物因子包含陽光、空氣、水、溫度與溼度。", "生物因子包含生產者、消費者、清除者與分解者。"]],
      ["生物間的互動", ["互動包含掠食、寄生、片利共生、互利共生與競爭。", "物質循環包含食物鏈、食物網、碳循環與水循環。", "能量流轉可用能量金字塔表示。"]],
      ["生態系層次", ["族群是同時間生活在同一地方的同種生物。", "出生加遷入大於死亡加遷出時族群變大。", "個體、族群、群集、生態系、生物圈形成層次。"]],
      ["人類與環境", ["生物多樣性包含遺傳多樣性、物種多樣性與生態系多樣性。", "生態危機有污染、生物累積、人口問題、棲地破壞、外來入侵種、全球暖化與氣候變遷。", "自然保育可透過生物多樣性公約、國家公園、自然保留區、5R與節能減碳。"]]
    ]
  },
  {
    id: 6,
    title: "水與空氣",
    group: "理化",
    image: "6.jpg",
    summary: "水溶液、酸鹼性、導電性、空氣組成與性質。",
    sections: [
      ["水", ["物質可形成水溶液或非水溶液。", "水溶液可分飽和溶液與未飽和溶液。", "水溶液可呈酸性、鹼性或中性，並可用酸鹼指示劑判斷。", "酸和鹼混合時可能發生中和反應。", "有些水溶液具有導電性。"]],
      ["空氣", ["空氣組成包含氮氣、氧氣與二氧化碳等。", "氧氣有特定製造方法與性質，二氧化碳也有製造方法與性質。", "空氣具有占有空間、可壓縮等性質。"]]
    ]
  },
  {
    id: 7,
    title: "聲音與光",
    group: "理化",
    image: "7.jpg",
    summary: "聲音產生傳播、聲音三要素、回音、光的反射與折射。",
    sections: [
      ["聲音", ["產生聲音需要物體振動，傳播需要介質。", "聲音三要素包含響度、音調與音色。", "樂音與噪音的差異可從規律性與感受判斷。", "回音是聲音反射後再次被聽見的現象。"]],
      ["光", ["光在均勻介質中直線前進。", "光的反射遵守反射定律，可形成面鏡成像。", "光的折射遵守折射定律，生活中有放大鏡等折射現象。", "太陽光可分成不同顏色。"]]
    ]
  },
  {
    id: 8,
    title: "熱與物質的變化",
    group: "理化",
    image: "8.jpg",
    summary: "物理與化學變化、熱對物質影響、熱傳播。",
    sections: [
      ["物質的變化", ["物質變化分為物理變化與化學變化。", "物理變化不產生新物質，常見例子包含三態變化、溶解、熱脹冷縮。", "化學變化會產生新物質，常見例子包含燃燒與生鏽。", "燃燒需要可燃物、助燃物與達到燃點。"]],
      ["熱對物質的影響", ["吸熱反應會吸收熱量，放熱反應會放出熱量。", "熱會影響固體、液體與氣體的體積。"]],
      ["熱傳播", ["熱傳播方式包含傳導、對流與輻射。", "不同熱傳播方式可應用於生活與器具設計。"]]
    ]
  },
  {
    id: 9,
    title: "力與運動、簡單機械",
    group: "理化",
    image: "9.jpg",
    summary: "直線運動、力的作用與種類、水的特殊現象與簡單機械。",
    sections: [
      ["力與運動", ["直線運動可用位置描述與速度表示。", "力可以使物體形狀改變或運動狀態改變。", "力的種類包含接觸力與超距力。", "力需要表示大小、方向與作用點，並可傳送。"]],
      ["常見的力", ["地球引力使物體有重量。", "摩擦力會阻礙相對運動。", "水的特殊現象包含毛細現象、連通管原理與虹吸現象。"]],
      ["簡單機械", ["簡單機械包含槓桿、輪軸、滑輪、齒輪與鏈條。", "簡單機械可改變施力大小、方向或距離。"]]
    ]
  },
  {
    id: 10,
    title: "電與磁",
    group: "理化",
    image: "10.jpg",
    summary: "能源、電路、導體絕緣體、磁鐵、地磁與電磁鐵。",
    sections: [
      ["能源與電路", ["能源有不同種類，節約能源可降低消耗與污染。", "電路包含電源、導線、開關與用電器。", "電路種類包含通路、斷路與短路。", "電池與燈泡可串聯或並聯。", "導體容易讓電流通過，絕緣體不易導電。"]],
      ["磁", ["磁鐵具有磁性物質、磁力與磁極。", "地球本身有磁場，磁力線可表示磁場方向。", "電流可以產生磁性，電磁鐵可利用線圈與鐵芯形成。"]]
    ]
  },
  {
    id: 11,
    title: "月亮、太陽與恆星",
    group: "地球科學",
    image: "11.jpg",
    summary: "月相、日月位置、日月食、四季星座與太陽系。",
    sections: [
      ["月球", ["月亮東升西落，位置可用方位與高度角表示。", "月相循環為朔、上弦、望、下弦、朔，週期約29.5日。", "月亮本身不發光，盈虧與反射太陽光有關。", "月食與太陽、地球、月球相對位置有關。"]],
      ["太陽", ["太陽位置可用方位與高度角表示，並有東升西落。", "太陽影響四季氣溫、晝夜長短，是地球主要熱源。", "日食與太陽、月球、地球相對位置有關。"]],
      ["恆星與宇宙", ["四季星座不同：春大熊、夏牛郎織女、秋仙后、冬獵戶。", "北極星在北方天空，位置幾乎固定，屬於小熊星座。", "宇宙組成包含銀河系與太陽系。", "太陽系包含類地行星與類木行星。"]]
    ]
  },
  {
    id: 12,
    title: "天氣的變化和地表的變化",
    group: "地球科學",
    image: "12.jpg",
    summary: "大氣中的水、天氣觀測、颱風、流水風化、岩石、地震與全球變遷。",
    sections: [
      ["天氣的變化", ["大氣中的水形成天氣現象與水循環。", "0度以下常見霜、雪；0度以上常見露、雨。", "雲與霧和位置有關。", "直接觀測可記錄雨量、氣溫與雲的分布、顏色、形狀。", "衛星雲圖可看天空中的雲量，地面天氣圖可看等壓線、氣壓中心與鋒面。", "颱風常在太平洋赤道以北形成，可能帶來豪雨與強風。"]],
      ["地表的變化", ["流水作用包含侵蝕、搬運與堆積。", "風化作用受空氣、水與生物等因素影響，會使岩石疏鬆裂解並形成土壤。", "岩石可按形成過程分成火成岩、沉積岩與變質岩。"]],
      ["地震與全球變遷", ["板塊擠壓與板塊運動可造成地震，常見於板塊交界。", "地震程度可用規模與震度描述。", "溫室效應與溫室氣體有關。", "臭氧層破洞與氟氯碳化物有關。"]]
    ]
  }
];

const byId = (id) => document.getElementById(id);
const storage = {
  get(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
  },
  set(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
};

let quiz = [];
let current = 0;
let answers = [];
let timerId = null;
let startTime = 0;
let selectedReviewUnit = units[0].id;
let uploadedFiles = [];

const stateKeys = {
  wrong: "scienceQuizWrongItems",
  runs: "scienceQuizRuns"
};

function flattenConcepts(unit) {
  return unit.sections.flatMap(([section, points]) => points.map((text) => ({ unit, section, text })));
}

const allConcepts = () => units.flatMap(flattenConcepts);

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function pick(items, except = []) {
  const blocked = new Set(except);
  const pool = items.filter((item) => !blocked.has(item));
  return pool[Math.floor(Math.random() * pool.length)] ?? items[0];
}

function extractKeyword(text) {
  const candidates = text
    .replace(/[，。、；：:]/g, " ")
    .split(/\s+/)
    .map((item) => item.trim())
    .filter((item) => item.length >= 2 && item.length <= 14);
  return candidates[0] || text.slice(0, 10);
}

function selectDistractors(concept, sourcePool, size = 3) {
  const differentSections = sourcePool.filter((item) => item.text !== concept.text && item.section !== concept.section);
  const differentUnits = sourcePool.filter((item) => item.text !== concept.text && item.unit.id !== concept.unit.id);
  const fallback = sourcePool.filter((item) => item.text !== concept.text);
  const pool = differentSections.length >= size ? differentSections : differentUnits.length >= size ? differentUnits : fallback;
  return shuffle(pool).slice(0, size);
}

function makeQuestion(concept, sourcePool, index) {
  const distractors = selectDistractors(concept, sourcePool, 3);
  const keyword = extractKeyword(concept.text);
  const patterns = [
    () => ({
      prompt: `題目線索是「${keyword}」。下列哪一項最符合這個線索？`,
      answer: concept.text,
      options: shuffle([concept.text, ...distractors.map((d) => d.text)])
    }),
    () => ({
      prompt: `如果題目提到「${keyword}」，最適合連結到哪個觀念？`,
      answer: concept.text,
      options: shuffle([concept.text, ...distractors.map((d) => d.text)])
    }),
    () => ({
      prompt: `在第 ${concept.unit.id} 單元「${concept.title || concept.unit.title}」的「${concept.section}」中，哪一句最能對應「${keyword}」？`,
      answer: concept.text,
      options: shuffle([concept.text, ...distractors.map((d) => d.text)])
    }),
    () => ({
      prompt: `複習「${concept.unit.title}」時，若看到關鍵詞「${keyword}」，應選哪一項說明？`,
      answer: concept.text,
      options: shuffle([concept.text, ...distractors.map((d) => d.text)])
    })
  ];
  const made = patterns[(Date.now() + index + Math.floor(Math.random() * 99)) % patterns.length]();
  return {
    id: `${concept.unit.id}-${index}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    unitId: concept.unit.id,
    unitTitle: concept.unit.title,
    section: concept.section,
    question: made.prompt,
    options: made.options,
    answer: made.answer,
    explanation: `解析：本題核心是「${concept.section}」。${concept.text} 其他選項雖然也可能是自然科概念，但不符合這題指定的單元或關鍵脈絡。`
  };
}

function generateQuiz(mode, unitId, count) {
  const wrongItems = storage.get(stateKeys.wrong, []);
  if (mode === "wrong") {
    return shuffle(wrongItems).slice(0, count).map((item, index) => ({
      ...item,
      id: `wrong-${index}-${Date.now()}`
    }));
  }

  let concepts;
  if (mode === "unit") {
    concepts = flattenConcepts(units.find((unit) => unit.id === Number(unitId)));
  } else if (mode === "mixed") {
    const groups = ["生物", "理化", "地球科學"];
    concepts = groups.flatMap((group) => shuffle(allConcepts().filter((item) => item.unit.group === group)).slice(0, Math.ceil(count / groups.length) + 3));
  } else {
    concepts = allConcepts();
  }

  const pool = mode === "unit" ? concepts : allConcepts();
  const chosen = shuffle(concepts);
  const result = [];
  for (let i = 0; i < count; i += 1) {
    const concept = chosen[i % chosen.length];
    result.push(makeQuestion(concept, pool, i));
  }
  return result;
}

function init() {
  byId("unitSelect").innerHTML = units.map((unit) => `<option value="${unit.id}">第${unit.id}單元 ${unit.title}</option>`).join("");
  byId("reviewUnitList").innerHTML = units.map((unit) => `<button class="unit-tab" data-unit="${unit.id}">第${unit.id}單元 ${unit.title}</button>`).join("");
  bindEvents();
  renderGuide(selectedReviewUnit);
  renderWrongList();
  updateStats();
}

function bindEvents() {
  document.querySelectorAll(".nav-pill").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });

  byId("modeSelect").addEventListener("change", () => {
    const mode = byId("modeSelect").value;
    byId("unitField").classList.toggle("hidden", mode !== "unit");
  });

  byId("startBtn").addEventListener("click", startQuiz);
  byId("regenBtn").addEventListener("click", startQuiz);
  byId("nextBtn").addEventListener("click", nextQuestion);
  byId("clearWrongBtn").addEventListener("click", () => {
    storage.set(stateKeys.wrong, []);
    renderWrongList();
    updateStats();
  });

  byId("reviewUnitList").addEventListener("click", (event) => {
    const tab = event.target.closest("[data-unit]");
    if (!tab) return;
    renderGuide(Number(tab.dataset.unit));
  });

  byId("imageInput").addEventListener("change", previewUploads);
  byId("ocrBtn").addEventListener("click", runOcr);
  byId("makeUploadQuizBtn").addEventListener("click", makeQuizFromUpload);
}

function switchView(view) {
  document.querySelectorAll(".nav-pill").forEach((button) => button.classList.toggle("active", button.dataset.view === view));
  document.querySelectorAll(".view").forEach((section) => section.classList.remove("active"));
  byId(`${view}View`).classList.add("active");
  if (view === "wrong") renderWrongList();
}

function startQuiz() {
  const mode = byId("modeSelect").value;
  const count = Number(byId("countSelect").value);
  const unitId = Number(byId("unitSelect").value);
  quiz = generateQuiz(mode, unitId, count);
  if (!quiz.length) {
    alert("目前沒有錯題可重複測驗，先完成一次測驗後再回來挑戰。");
    return;
  }
  current = 0;
  answers = [];
  startTime = Date.now();
  clearInterval(timerId);
  timerId = setInterval(updateTimer, 500);
  byId("emptyState").classList.add("hidden");
  byId("reportBox").classList.add("hidden");
  byId("quizBox").classList.remove("hidden");
  byId("quizModeLabel").textContent = modeLabel(mode);
  renderQuestion();
}

function modeLabel(mode) {
  return {
    unit: "單元練習",
    mock: "全單元模擬考",
    mixed: "綜合隨機抽題",
    wrong: "錯題重複測驗",
    upload: "圖片生成題組"
  }[mode] || "測驗";
}

function updateTimer() {
  const seconds = Math.floor((Date.now() - startTime) / 1000);
  byId("timer").textContent = formatTime(seconds);
}

function formatTime(seconds) {
  const min = String(Math.floor(seconds / 60)).padStart(2, "0");
  const sec = String(seconds % 60).padStart(2, "0");
  return `${min}:${sec}`;
}

function renderQuestion() {
  const item = quiz[current];
  byId("progress").textContent = `${current + 1} / ${quiz.length}`;
  byId("progressbarFill").style.width = `${((current) / quiz.length) * 100}%`;
  byId("questionUnit").textContent = `第${item.unitId || "-"}單元｜${item.unitTitle || "上傳圖片題組"}｜${item.section || "重點整理"}`;
  byId("questionText").textContent = item.question;
  byId("feedback").classList.add("hidden");
  byId("feedback").textContent = "";
  byId("nextBtn").disabled = true;
  byId("nextBtn").textContent = current === quiz.length - 1 ? "完成測驗" : "下一題";
  byId("options").innerHTML = item.options.map((option) => `<button class="option-btn">${option}</button>`).join("");
  document.querySelectorAll(".option-btn").forEach((button) => {
    button.addEventListener("click", () => chooseAnswer(button.textContent));
  });
}

function chooseAnswer(choice) {
  const item = quiz[current];
  const correct = choice === item.answer;
  answers[current] = { ...item, choice, correct };
  document.querySelectorAll(".option-btn").forEach((button) => {
    button.disabled = true;
    if (button.textContent === item.answer) button.classList.add("correct");
    if (button.textContent === choice && !correct) button.classList.add("wrong");
  });
  byId("feedback").classList.remove("hidden");
  byId("feedback").innerHTML = `<strong>${correct ? "答對了" : "再看一次"}</strong><br>${item.explanation}`;
  byId("nextBtn").disabled = false;
  if (!correct) saveWrong({ ...item, choice });
  updateStats();
}

function nextQuestion() {
  if (current < quiz.length - 1) {
    current += 1;
    renderQuestion();
    return;
  }
  finishQuiz();
}

function finishQuiz() {
  clearInterval(timerId);
  byId("progressbarFill").style.width = "100%";
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  const correctCount = answers.filter((item) => item.correct).length;
  const rate = Math.round((correctCount / quiz.length) * 100);
  const run = {
    at: new Date().toLocaleString("zh-TW"),
    count: quiz.length,
    correct: correctCount,
    rate,
    elapsed
  };
  const runs = storage.get(stateKeys.runs, []);
  storage.set(stateKeys.runs, [run, ...runs].slice(0, 20));
  updateStats();

  byId("quizBox").classList.add("hidden");
  const rows = answers.map((item, index) => `
    <article class="review-row ${item.correct ? "correct" : "wrong"}">
      <p class="question-unit">第 ${index + 1} 題｜${item.unitTitle}｜${item.section}</p>
      <h3>${item.question}</h3>
      <p class="muted">你的答案：${item.choice || "未作答"}｜正確答案：${item.answer}</p>
      <p>${item.explanation}</p>
    </article>
  `).join("");

  byId("reportBox").innerHTML = `
    <div class="score-hero">
      <div class="score-ring" style="--score:${rate}%"><span>${rate}%</span></div>
      <div>
        <p class="eyebrow">互動式成績單</p>
        <h2>${correctCount} / ${quiz.length} 題答對</h2>
        <p class="muted">答題時間 ${formatTime(elapsed)}。下方保留完整答題分析，錯題已自動加入錯題本，可切換到「錯題本」重複練習。</p>
        <div class="button-row">
          <button class="primary-btn" onclick="startQuiz()">重新生成新題目</button>
          <button class="ghost-btn" onclick="switchView('wrong')">查看錯題本</button>
        </div>
      </div>
    </div>
    <div class="answer-review">${rows}</div>
  `;
  byId("reportBox").classList.remove("hidden");
}

function saveWrong(item) {
  const wrong = storage.get(stateKeys.wrong, []);
  const normalized = {
    unitId: item.unitId,
    unitTitle: item.unitTitle,
    section: item.section,
    question: item.question,
    options: item.options,
    answer: item.answer,
    explanation: item.explanation,
    choice: item.choice
  };
  const exists = wrong.some((old) => old.question === normalized.question && old.answer === normalized.answer);
  storage.set(stateKeys.wrong, exists ? wrong : [normalized, ...wrong].slice(0, 80));
}

function renderWrongList() {
  const list = byId("wrongList");
  const wrong = storage.get(stateKeys.wrong, []);
  if (!wrong.length) {
    list.innerHTML = `<div class="empty-state"><div class="orb">✓</div><h2>目前沒有錯題</h2><p class="muted">完成測驗後，答錯題目會自動收進這裡。</p></div>`;
    return;
  }
  list.innerHTML = wrong.map((item, index) => `
    <article class="wrong-item">
      <div>
        <p class="question-unit">第${item.unitId || "-"}單元｜${item.unitTitle || "圖片題組"}｜${item.section || "重點整理"}</p>
        <h3>${item.question}</h3>
        <p class="muted answer-line">你的答案：${item.choice || "未記錄"}｜正確答案：${item.answer}</p>
        <p class="analysis">${item.explanation}</p>
      </div>
      <button class="ghost-btn small" data-remove-wrong="${index}">移除</button>
    </article>
  `).join("");
  list.querySelectorAll("[data-remove-wrong]").forEach((button) => {
    button.addEventListener("click", () => {
      const next = storage.get(stateKeys.wrong, []).filter((_, i) => i !== Number(button.dataset.removeWrong));
      storage.set(stateKeys.wrong, next);
      renderWrongList();
      updateStats();
    });
  });
}

function updateStats() {
  byId("wrongCount").textContent = storage.get(stateKeys.wrong, []).length;
  byId("savedRuns").textContent = storage.get(stateKeys.runs, []).length;
}

function renderGuide(unitId) {
  selectedReviewUnit = unitId;
  const unit = units.find((item) => item.id === unitId);
  document.querySelectorAll(".unit-tab").forEach((button) => button.classList.toggle("active", Number(button.dataset.unit) === unitId));
  const conceptCards = unit.sections.map(([title, points]) => `
    <article class="concept-card">
      <h3>${title}</h3>
      <ul>${points.map((point) => `<li>${point}</li>`).join("")}</ul>
    </article>
  `).join("");
  byId("guideContent").innerHTML = `
    <div class="guide-hero">
      <p class="eyebrow">第${unit.id}單元｜${unit.group}</p>
      <h2>${unit.title}</h2>
      <p class="muted">${unit.summary}</p>
    </div>
    <div class="guide-body">
      <div class="concept-grid">${conceptCards}</div>
      <img class="guide-image" src="${unit.image}" alt="第${unit.id}單元 ${unit.title} 圖解攻略">
    </div>
  `;
}

function previewUploads(event) {
  uploadedFiles = [...event.target.files];
  byId("uploadPreview").innerHTML = uploadedFiles.map((file) => {
    const url = URL.createObjectURL(file);
    return `<div class="upload-card"><img src="${url}" alt="${file.name}"><p>${file.name}</p></div>`;
  }).join("");
}

async function runOcr() {
  if (!uploadedFiles.length) {
    alert("請先選擇圖片。");
    return;
  }
  const status = byId("ocrStatus");
  byId("ocrBtn").disabled = true;
  byId("ocrBtn").textContent = "辨識中...";
  status.textContent = "正在載入繁體中文辨識模型...";
  let worker = null;
  try {
    if (!window.Tesseract) {
      await loadScript("https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js");
    }
    worker = await createOcrWorker((message) => {
      if (message.status === "recognizing text") {
        status.textContent = `正在辨識文字 ${Math.round((message.progress || 0) * 100)}%`;
      }
    });
    const parts = [];
    for (const [index, file] of uploadedFiles.entries()) {
      status.textContent = `正在預處理第 ${index + 1} / ${uploadedFiles.length} 張圖片...`;
      const image = await preprocessImageForOcr(file);
      status.textContent = `正在辨識第 ${index + 1} / ${uploadedFiles.length} 張圖片...`;
      const result = await worker.recognize(image);
      const text = cleanOcrText(result.data.text);
      if (text) parts.push(`【${file.name}】\n${text}`);
    }
    byId("uploadText").value = [byId("uploadText").value, ...parts].filter(Boolean).join("\n");
    status.textContent = parts.length ? "辨識完成，已整理文字並放入文字框。" : "辨識完成，但沒有抓到可用文字，請改用更清晰的圖片或手動貼上重點。";
  } catch (error) {
    console.error(error);
    status.textContent = "OCR 無法完成。請確認網路可載入繁中模型，或手動貼上圖片重點文字。";
    alert("OCR 套件或繁中模型無法載入，或圖片辨識失敗。你仍可手動貼上圖片重點文字後生成題目。");
  } finally {
    if (worker) await worker.terminate();
    byId("ocrBtn").disabled = false;
    byId("ocrBtn").textContent = "嘗試辨識圖片文字";
  }
}

async function createOcrWorker(logger) {
  const worker = await Tesseract.createWorker("chi_tra+eng", 1, {
    logger,
    workerPath: "https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/worker.min.js",
    corePath: "https://cdn.jsdelivr.net/npm/tesseract.js-core@5/tesseract-core-simd.wasm.js",
    langPath: "https://tessdata.projectnaptha.com/4.0.0"
  });
  await worker.setParameters({
    tessedit_pageseg_mode: "6",
    preserve_interword_spaces: "1",
    user_defined_dpi: "300"
  });
  return worker;
}

async function preprocessImageForOcr(file) {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(3, Math.max(1.6, 2400 / Math.max(bitmap.width, bitmap.height)));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
    const contrasted = Math.max(0, Math.min(255, (gray - 128) * 1.55 + 128));
    const cleaned = contrasted > 238 ? 255 : contrasted < 58 ? 0 : contrasted;
    data[i] = cleaned;
    data[i + 1] = cleaned;
    data[i + 2] = cleaned;
  }
  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL("image/png");
}

function cleanOcrText(text) {
  return text
    .normalize("NFKC")
    .replace(/[^\u3400-\u9fff\uf900-\ufaffA-Za-z0-9０-９，。！？、；：:（）()「」『』《》【】+\-→←%℃°\n\r\t ./]/g, " ")
    .replace(/[ \t]{2,}/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n");
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function makeQuizFromUpload() {
  const text = byId("uploadText").value.trim();
  if (!text) {
    alert("請先貼上圖片重點文字，或使用 OCR 辨識後再生成題目。");
    return;
  }
  const points = text
    .split(/[\n。；;]/)
    .map((line) => line.trim())
    .filter((line) => line.length >= 8)
    .slice(0, 40);
  if (!points.length) {
    alert("文字太短，請補充更多重點內容。");
    return;
  }
  const concepts = points.map((point) => ({
    unit: { id: "圖", title: "上傳圖片題組", group: "自訂" },
    section: "圖片重點",
    text: point
  }));
  const count = Math.min(Number(byId("countSelect").value), Math.max(5, concepts.length));
  quiz = Array.from({ length: count }, (_, index) => makeQuestion(concepts[index % concepts.length], concepts.concat(allConcepts()), index));
  current = 0;
  answers = [];
  startTime = Date.now();
  clearInterval(timerId);
  timerId = setInterval(updateTimer, 500);
  switchView("quiz");
  byId("emptyState").classList.add("hidden");
  byId("reportBox").classList.add("hidden");
  byId("quizBox").classList.remove("hidden");
  byId("quizModeLabel").textContent = modeLabel("upload");
  renderQuestion();
}

init();
