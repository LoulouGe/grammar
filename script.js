// ========================================
// L'Atelier de Potions Grammaticales
// ========================================

// ===== Exercise Data =====
const EXERCISES = [
  // --- Niveau Apprenti (1-5) ---
  {
    id: 1,
    level: "apprenti",
    hint: "Accorde l'adjectif avec le nom féminin singulier !",
    slots: [
      { word: "La", fixed: true },
      { word: "potion", fixed: true },
      { choices: ["verte", "vert", "verts", "vertes"], correct: "verte" },
    ],
    successMsg: "La potion s'illumine ! 🧪✨",
    failMsg: "Boom ! La potion explose ! 💥",
  },
  {
    id: 2,
    level: "apprenti",
    hint: "Accorde l'adjectif avec le nom masculin singulier !",
    slots: [
      { word: "Le", fixed: true },
      { word: "chaudron", fixed: true },
      {
        choices: ["brillant", "brillante", "brillants", "brillantes"],
        correct: "brillant",
      },
    ],
    successMsg: "Le chaudron scintille ! ✨",
    failMsg: "Boom ! Le chaudron déborde ! 💥",
  },
  {
    id: 3,
    level: "apprenti",
    hint: "Accorde l'adjectif avec le nom féminin pluriel !",
    slots: [
      { word: "Les", fixed: true },
      { word: "fioles", fixed: true },
      {
        choices: ["magiques", "magique", "magiquée", "magiqués"],
        correct: "magiques",
      },
    ],
    successMsg: "Les fioles brillent ensemble ! 🌟",
    failMsg: "Les fioles se brisent ! 💥",
  },
  {
    id: 4,
    level: "apprenti",
    hint: "Accorde l'adjectif avec le nom masculin singulier !",
    slots: [
      { word: "Un", fixed: true },
      { word: "ingrédient", fixed: true },
      {
        choices: ["mystérieux", "mystérieuse", "mystérieuses", "mystérieusement"],
        correct: "mystérieux",
      },
    ],
    successMsg: "L'ingrédient révèle son secret ! 🔮",
    failMsg: "L'ingrédient tombe en poussière ! 💥",
  },
  {
    id: 5,
    level: "apprenti",
    hint: "Accorde l'adjectif avec le nom féminin pluriel !",
    slots: [
      { word: "Des", fixed: true },
      { word: "potions", fixed: true },
      {
        choices: ["enchantées", "enchanté", "enchantée", "enchantés"],
        correct: "enchantées",
      },
    ],
    successMsg: "Les potions lévitent ! 🧙‍♀️",
    failMsg: "Les potions s'évaporent ! 💥",
  },
  // --- Niveau Alchimiste (6-10) ---
  {
    id: 6,
    level: "alchimiste",
    hint: "Accorde le verbe avec le sujet pluriel !",
    slots: [
      { word: "Les", fixed: true },
      { word: "sorcières", fixed: true },
      {
        choices: ["préparent", "prépare", "préparer", "préparée"],
        correct: "préparent",
      },
      { word: "une", fixed: true },
      { word: "potion", fixed: true },
    ],
    successMsg: "La potion est prête ! 🧙‍♀️✨",
    failMsg: "La recette a raté ! 💥",
  },
  {
    id: 7,
    level: "alchimiste",
    hint: "Accorde le verbe avec le sujet singulier !",
    slots: [
      { word: "L'alchimiste", fixed: true },
      {
        choices: ["mélange", "mélangent", "mélanger", "mélangé"],
        correct: "mélange",
      },
      { word: "les", fixed: true },
      { word: "ingrédients", fixed: true },
    ],
    successMsg: "Le mélange est parfait ! ⚗️",
    failMsg: "Le mélange tourne mal ! 💥",
  },
  {
    id: 8,
    level: "alchimiste",
    hint: "Accorde le participe passé avec le sujet féminin !",
    slots: [
      { word: "La", fixed: true },
      { word: "potion", fixed: true },
      { word: "est", fixed: true },
      {
        choices: ["préparée", "préparé", "préparés", "préparées"],
        correct: "préparée",
      },
    ],
    successMsg: "La potion est prête à servir ! 🍵",
    failMsg: "La potion est ratée ! 💥",
  },
  {
    id: 9,
    level: "alchimiste",
    hint: "Accorde le participe passé avec le sujet masculin pluriel !",
    slots: [
      { word: "Les", fixed: true },
      { word: "ingrédients", fixed: true },
      { word: "sont", fixed: true },
      {
        choices: ["mélangés", "mélangé", "mélangée", "mélangées"],
        correct: "mélangés",
      },
    ],
    successMsg: "Les ingrédients fusionnent ! 🌀",
    failMsg: "Les ingrédients se séparent ! 💥",
  },
  {
    id: 10,
    level: "alchimiste",
    hint: "Attention, deux accords à trouver !",
    slots: [
      { word: "La", fixed: true },
      { word: "fiole", fixed: true },
      {
        choices: ["enchantée", "enchanté", "enchantés", "enchantées"],
        correct: "enchantée",
      },
      {
        choices: ["brille", "brillent", "briller", "brillé"],
        correct: "brille",
      },
      { word: "dans", fixed: true },
      { word: "le", fixed: true },
      { word: "noir", fixed: true },
    ],
    successMsg: "La fiole illumine la pièce ! 💎✨",
    failMsg: "La fiole s'éteint ! 💥",
  },
  // --- Niveau Maître (11-15) : un peu de tout ---
  {
    id: 11,
    level: "maitre",
    hint: "Accorde l'adjectif ET le verbe !",
    slots: [
      { word: "Les", fixed: true },
      {
        choices: ["petites", "petit", "petite", "petits"],
        correct: "petites",
      },
      { word: "sorcières", fixed: true },
      {
        choices: ["dansent", "danse", "danser", "dansé"],
        correct: "dansent",
      },
    ],
    successMsg: "Les sorcières font la ronde ! 💃✨",
    failMsg: "Les sorcières trébuchent ! 💥",
  },
  {
    id: 12,
    level: "maitre",
    hint: "Accorde le participe passé et l'adjectif !",
    slots: [
      { word: "La", fixed: true },
      { word: "potion", fixed: true },
      {
        choices: ["dorée", "doré", "dorés", "dorées"],
        correct: "dorée",
      },
      { word: "est", fixed: true },
      {
        choices: ["terminée", "terminé", "terminés", "terminées"],
        correct: "terminée",
      },
    ],
    successMsg: "La potion dorée est parfaite ! 🌟",
    failMsg: "La potion dorée a tourné ! 💥",
  },
  {
    id: 13,
    level: "maitre",
    hint: "Trouve le bon verbe et le bon adjectif !",
    slots: [
      { word: "Le", fixed: true },
      {
        choices: ["vieux", "vieille", "vieilles", "vieil"],
        correct: "vieux",
      },
      { word: "grimoire", fixed: true },
      {
        choices: ["contient", "contiennent", "contenir", "contenu"],
        correct: "contient",
      },
      { word: "un", fixed: true },
      { word: "secret", fixed: true },
    ],
    successMsg: "Le grimoire révèle ses secrets ! 📖✨",
    failMsg: "Le grimoire se referme ! 💥",
  },
  {
    id: 14,
    level: "maitre",
    hint: "Trois accords à trouver dans cette phrase !",
    slots: [
      { word: "Les", fixed: true },
      { word: "chats", fixed: true },
      {
        choices: ["noirs", "noir", "noire", "noires"],
        correct: "noirs",
      },
      {
        choices: ["sont", "est", "être", "étaient"],
        correct: "sont",
      },
      {
        choices: ["cachés", "caché", "cachée", "cachées"],
        correct: "cachés",
      },
    ],
    successMsg: "Les chats sortent de l'ombre ! 🐈‍⬛✨",
    failMsg: "Les chats s'enfuient ! 💥",
  },
  {
    id: 15,
    level: "maitre",
    hint: "La phrase finale ! Accorde tout correctement !",
    slots: [
      { word: "Les", fixed: true },
      {
        choices: ["grandes", "grand", "grande", "grands"],
        correct: "grandes",
      },
      { word: "potions", fixed: true },
      {
        choices: ["magiques", "magique", "magiqués", "magiquée"],
        correct: "magiques",
      },
      {
        choices: ["ont", "a", "avons", "avez"],
        correct: "ont",
      },
      { word: "été", fixed: true },
      {
        choices: ["créées", "créé", "créée", "créés"],
        correct: "créées",
      },
    ],
    successMsg: "Tu es un vrai maître alchimiste ! 🏆🎉",
    failMsg: "La formule magique a échoué ! 💥",
  },
];

// ===== DOM Elements =====
const titleScreen = document.getElementById("title-screen");
const gameScreen = document.getElementById("game-screen");
const resultsScreen = document.getElementById("results-screen");
const progressBar = document.getElementById("progress-bar");
const hintEl = document.getElementById("hint");
const sentenceBuilder = document.getElementById("sentence-builder");
const wordCardsEl = document.getElementById("word-cards");
const btnValidate = document.getElementById("btn-validate");
const feedbackEl = document.getElementById("feedback");
const resultsStars = document.getElementById("results-stars");
const resultsScore = document.getElementById("results-score");
const resultsMessage = document.getElementById("results-message");
const btnReplay = document.getElementById("btn-replay");
const btnMenu = document.getElementById("btn-menu");
const totalScoreCount = document.getElementById("total-score-count");
const gameScoreEl = document.getElementById("game-score");
const gameScoreCount = document.getElementById("game-score-count");
const btnBack = document.getElementById("btn-back");

// ===== Persistent Score (localStorage) =====
function getTotalScore() {
  return parseInt(localStorage.getItem("potions-total-score") || "0", 10);
}

function addToTotalScore(points) {
  const total = getTotalScore() + points;
  localStorage.setItem("potions-total-score", total.toString());
  return total;
}

function refreshTotalScore() {
  totalScoreCount.textContent = getTotalScore();
}

// ===== Game State =====
let currentLevel = "apprenti";
let exercises = [];
let currentExIndex = 0;
let score = 0;
let selections = {}; // slotIndex -> chosen word
let activeSlotIndex = null; // which choice slot is being filled

// ===== Three.js Scene =====
let scene, camera, renderer;
let cauldron, liquid, cauldronGroup;
let wizardGroup, wizardArm, catGroup, catTail;
let bubbles = [];
let effectParticles = [];
let clock;
let animationId;

function initThree() {
  const canvas = document.getElementById("scene");
  clock = new THREE.Clock();

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x2a1a3e);
  scene.fog = new THREE.FogExp2(0x2a1a3e, 0.025);

  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.set(0, 2, 6);
  camera.lookAt(0, 0.5, 0);

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;

  // Lights — warmer, brighter workshop ambiance
  const ambient = new THREE.AmbientLight(0x9977cc, 0.6);
  scene.add(ambient);

  const mainLight = new THREE.PointLight(0xf0c040, 1.0, 25);
  mainLight.position.set(2, 4, 3);
  mainLight.castShadow = true;
  scene.add(mainLight);

  const fillLight = new THREE.PointLight(0x6655aa, 0.4, 18);
  fillLight.position.set(-3, 2, -2);
  scene.add(fillLight);

  // Warm candle lights on the sides
  const candleLight1 = new THREE.PointLight(0xff9933, 0.6, 10);
  candleLight1.position.set(-3, 2.5, -1);
  scene.add(candleLight1);

  const candleLight2 = new THREE.PointLight(0xff9933, 0.6, 10);
  candleLight2.position.set(3, 2.5, -1);
  scene.add(candleLight2);

  // --- Stone wall (individual grey stones) ---
  const stoneShades = [0x6b6b6b, 0x7a7a7a, 0x5e5e5e, 0x888888, 0x555555, 0x737373, 0x646464];
  const wallZ = -4;
  // Build rows of stones
  for (let row = 0; row < 12; row++) {
    const rowY = -1.2 + row * 0.45;
    const offset = (row % 2) * 0.35; // alternate offset for brick pattern
    let xPos = -7 + offset;
    while (xPos < 7) {
      const stoneW = 0.5 + Math.random() * 0.6;
      const stoneH = 0.3 + Math.random() * 0.12;
      const stoneD = 0.3 + Math.random() * 0.2;
      const shade = stoneShades[Math.floor(Math.random() * stoneShades.length)];
      const sMat = new THREE.MeshStandardMaterial({ color: shade, roughness: 0.95 });
      const sGeo = new THREE.BoxGeometry(stoneW, stoneH, stoneD);
      const stone = new THREE.Mesh(sGeo, sMat);
      stone.position.set(xPos + stoneW / 2, rowY, wallZ);
      stone.rotation.set(
        (Math.random() - 0.5) * 0.05,
        (Math.random() - 0.5) * 0.05,
        (Math.random() - 0.5) * 0.03
      );
      scene.add(stone);
      xPos += stoneW + 0.03 + Math.random() * 0.05; // small mortar gap
    }
  }

  // Stone floor
  const floorGeo = new THREE.PlaneGeometry(14, 10);
  const floorMat = new THREE.MeshStandardMaterial({ color: 0x4a4a4a, roughness: 0.95 });
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -1.2;
  floor.receiveShadow = true;
  scene.add(floor);

  // --- Materials for workshop props ---
  const woodMat = new THREE.MeshStandardMaterial({ color: 0x5c3d1e, roughness: 0.85 });
  const woodDarkMat = new THREE.MeshStandardMaterial({ color: 0x3a2510, roughness: 0.8 });
  const glassMat = new THREE.MeshStandardMaterial({ color: 0xaabbcc, roughness: 0.15, metalness: 0.1, transparent: true, opacity: 0.5 });
  const copperMat = new THREE.MeshStandardMaterial({ color: 0xb87333, roughness: 0.4, metalness: 0.6 });
  const corkMat = new THREE.MeshStandardMaterial({ color: 0xc9a86c, roughness: 0.9 });
  const bottleColors = [0x33dd66, 0xdd3366, 0x3366dd, 0xddaa33, 0xaa33dd, 0x33dddd, 0xff6644, 0x66ff99];

  // Helper: create a potion bottle at position, optionally tipped over
  function makePotion(x, y, z, tipped) {
    const group = new THREE.Group();
    const h = 0.2 + Math.random() * 0.15;
    const r = 0.04 + Math.random() * 0.03;
    const col = bottleColors[Math.floor(Math.random() * bottleColors.length)];

    // Glass body
    const bodyGeo = new THREE.CylinderGeometry(r * 0.4, r, h, 8);
    const body = new THREE.Mesh(bodyGeo, glassMat);
    body.position.y = h / 2;
    group.add(body);

    // Liquid
    const liqGeo = new THREE.CylinderGeometry(r * 0.35, r * 0.9, h * 0.55, 8);
    const liqMat = new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: 0.3, transparent: true, opacity: 0.75 });
    const liq = new THREE.Mesh(liqGeo, liqMat);
    liq.position.y = h * 0.25;
    group.add(liq);

    // Cork
    const ckGeo = new THREE.CylinderGeometry(r * 0.3, r * 0.38, 0.04, 6);
    const ck = new THREE.Mesh(ckGeo, corkMat);
    ck.position.y = h + 0.02;
    group.add(ck);

    group.position.set(x, y, z);
    if (tipped) {
      group.rotation.z = Math.PI / 2 + (Math.random() - 0.5) * 0.3;
      group.rotation.y = Math.random() * Math.PI;
    }
    scene.add(group);
  }

  // --- Shelves on the wall with potions ---
  const shelfPositions = [
    { x: -3.5, y: 2.6, z: -3.6 },
    { x: -3.5, y: 1.6, z: -3.6 },
    { x: -3.5, y: 0.6, z: -3.6 },
    { x: 3.5, y: 2.6, z: -3.6 },
    { x: 3.5, y: 1.6, z: -3.6 },
    { x: 3.5, y: 0.6, z: -3.6 },
  ];
  shelfPositions.forEach((pos) => {
    // Shelf plank
    const shGeo = new THREE.BoxGeometry(2.2, 0.07, 0.5);
    const sh = new THREE.Mesh(shGeo, woodMat);
    sh.position.set(pos.x, pos.y, pos.z);
    scene.add(sh);
    // Brackets
    for (const side of [-0.8, 0.8]) {
      const brGeo = new THREE.BoxGeometry(0.06, 0.22, 0.04);
      const br = new THREE.Mesh(brGeo, woodDarkMat);
      br.position.set(pos.x + side, pos.y - 0.12, pos.z + 0.2);
      scene.add(br);
    }
    // Potions on shelf — some upright, some tipped
    const count = 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < count; i++) {
      const bx = pos.x - 0.8 + i * 0.35 + (Math.random() - 0.5) * 0.08;
      const tipped = Math.random() < 0.25;
      makePotion(bx, pos.y + 0.04, pos.z, tipped);
    }
  });

  // --- Potions on the floor (scattered, some tipped) ---
  const floorPotions = [
    { x: -2.5, z: -2.0 }, { x: -2.2, z: -1.5 }, { x: -2.8, z: -1.2 },
    { x: 2.6, z: -2.3 }, { x: 2.2, z: -1.8 }, { x: 2.9, z: -1.5 },
    { x: -0.8, z: -3.0 }, { x: 0.6, z: -3.2 },
  ];
  floorPotions.forEach((p) => {
    makePotion(p.x, -1.2, p.z, Math.random() < 0.5);
  });

  // --- Workbench (établi) on the left ---
  const benchGroup = new THREE.Group();
  // Table top
  const topGeo = new THREE.BoxGeometry(2.2, 0.1, 0.9);
  const top = new THREE.Mesh(topGeo, woodMat);
  top.position.y = 0.7;
  benchGroup.add(top);
  // Legs
  for (const lx of [-0.95, 0.95]) {
    for (const lz of [-0.35, 0.35]) {
      const legGeo = new THREE.CylinderGeometry(0.05, 0.06, 0.7, 6);
      const leg = new THREE.Mesh(legGeo, woodDarkMat);
      leg.position.set(lx, 0.35, lz);
      benchGroup.add(leg);
    }
  }
  benchGroup.position.set(-3.0, -1.2, -2.0);
  scene.add(benchGroup);

  // Potions on the bench
  for (let i = 0; i < 4; i++) {
    const bx = -3.8 + i * 0.45;
    makePotion(bx, -0.45, -2.0, i === 2); // one tipped over
  }

  // --- Alembic on the workbench ---
  const alembicGroup = new THREE.Group();

  // Flask (round bottom)
  const flaskGeo = new THREE.SphereGeometry(0.2, 12, 12);
  const flask = new THREE.Mesh(flaskGeo, glassMat);
  flask.position.set(0, 0.2, 0);
  alembicGroup.add(flask);

  // Liquid in flask
  const alLiqGeo = new THREE.SphereGeometry(0.17, 10, 10, 0, Math.PI * 2, Math.PI / 3, Math.PI);
  const alLiqMat = new THREE.MeshStandardMaterial({ color: 0x33dd66, emissive: 0x22aa44, emissiveIntensity: 0.4, transparent: true, opacity: 0.7 });
  const alLiq = new THREE.Mesh(alLiqGeo, alLiqMat);
  alLiq.position.set(0, 0.12, 0);
  alembicGroup.add(alLiq);

  // Neck going up
  const neckGeo = new THREE.CylinderGeometry(0.04, 0.06, 0.3, 8);
  const neck = new THREE.Mesh(neckGeo, glassMat);
  neck.position.set(0, 0.5, 0);
  alembicGroup.add(neck);

  // Dome / alembic head (copper)
  const domeGeo = new THREE.SphereGeometry(0.12, 10, 10, 0, Math.PI * 2, 0, Math.PI / 2);
  const dome = new THREE.Mesh(domeGeo, copperMat);
  dome.position.set(0, 0.65, 0);
  alembicGroup.add(dome);

  // Copper pipe curving down to collection flask
  const pipePoints = [];
  for (let i = 0; i <= 10; i++) {
    const t = i / 10;
    const px = t * 0.6;
    const py = 0.65 - t * t * 0.5;
    const pz = Math.sin(t * Math.PI) * 0.08;
    pipePoints.push(new THREE.Vector3(px, py, pz));
  }
  const pipeCurve = new THREE.CatmullRomCurve3(pipePoints);
  const pipeGeo = new THREE.TubeGeometry(pipeCurve, 20, 0.02, 6, false);
  const pipe = new THREE.Mesh(pipeGeo, copperMat);
  alembicGroup.add(pipe);

  // Collection flask at the end of the pipe
  const colFlaskGeo = new THREE.CylinderGeometry(0.06, 0.1, 0.2, 8);
  const colFlask = new THREE.Mesh(colFlaskGeo, glassMat);
  colFlask.position.set(0.6, 0.15, 0);
  alembicGroup.add(colFlask);

  // Collected liquid
  const colLiqGeo = new THREE.CylinderGeometry(0.05, 0.09, 0.1, 8);
  const colLiqMat = new THREE.MeshStandardMaterial({ color: 0x33dd66, emissive: 0x22aa44, emissiveIntensity: 0.3, transparent: true, opacity: 0.6 });
  const colLiq = new THREE.Mesh(colLiqGeo, colLiqMat);
  colLiq.position.set(0.6, 0.08, 0);
  alembicGroup.add(colLiq);

  // Small burner under the flask
  const burnerGeo = new THREE.CylinderGeometry(0.12, 0.14, 0.06, 10);
  const burner = new THREE.Mesh(burnerGeo, copperMat);
  burner.position.set(0, -0.02, 0);
  alembicGroup.add(burner);

  // Flame under flask
  const bFlameMat = new THREE.MeshStandardMaterial({ color: 0xff6622, emissive: 0xff8833, emissiveIntensity: 1.0 });
  const bFlameGeo = new THREE.ConeGeometry(0.04, 0.1, 6);
  const bFlame = new THREE.Mesh(bFlameGeo, bFlameMat);
  bFlame.position.set(0, 0.05, 0);
  alembicGroup.add(bFlame);

  alembicGroup.position.set(-2.5, -0.5, -2.0);
  scene.add(alembicGroup);

  // --- Old books stacked near the wall ---
  const bookColors = [0x8b1a1a, 0x1a4a1a, 0x1a1a6b, 0x6b4a1a, 0x4a1a4a];
  [{ x: -3.8, z: -3.0 }, { x: 3.6, z: -3.0 }, { x: -2.2, z: -3.3 }].forEach((pos) => {
    let yOff = 0;
    const num = 2 + Math.floor(Math.random() * 3);
    for (let i = 0; i < num; i++) {
      const bw = 0.22 + Math.random() * 0.15;
      const bh = 0.05 + Math.random() * 0.03;
      const bd = 0.28 + Math.random() * 0.1;
      const bGeo = new THREE.BoxGeometry(bw, bh, bd);
      const bCol = bookColors[Math.floor(Math.random() * bookColors.length)];
      const bMat = new THREE.MeshStandardMaterial({ color: bCol, roughness: 0.85 });
      const book = new THREE.Mesh(bGeo, bMat);
      book.position.set(pos.x, -1.2 + yOff + bh / 2, pos.z);
      book.rotation.y = (Math.random() - 0.5) * 0.2;
      scene.add(book);
      yOff += bh;
    }
  });

  // --- Candle torches on the wall ---
  const candleWaxMat = new THREE.MeshStandardMaterial({ color: 0xf5e6c8, roughness: 0.7 });
  const flameMat = new THREE.MeshStandardMaterial({ color: 0xff8800, emissive: 0xffaa22, emissiveIntensity: 1.0 });
  [{ x: -1.8, y: 2.8 }, { x: 1.8, y: 2.8 }, { x: 0, y: 3.3 }].forEach((pos) => {
    // Wall bracket
    const brGeo = new THREE.BoxGeometry(0.06, 0.06, 0.2);
    const br = new THREE.Mesh(brGeo, copperMat);
    br.position.set(pos.x, pos.y - 0.2, -3.5);
    scene.add(br);
    // Candle
    const cGeo = new THREE.CylinderGeometry(0.03, 0.035, 0.22, 8);
    const c = new THREE.Mesh(cGeo, candleWaxMat);
    c.position.set(pos.x, pos.y, -3.4);
    scene.add(c);
    // Flame
    const fGeo = new THREE.SphereGeometry(0.04, 6, 6);
    const f = new THREE.Mesh(fGeo, flameMat);
    f.scale.set(0.7, 1.5, 0.7);
    f.position.set(pos.x, pos.y + 0.15, -3.4);
    scene.add(f);
  });

  // Build scene elements
  buildCauldron();
  buildWizard();
  buildCat();

  // Start bubbles
  for (let i = 0; i < 12; i++) {
    spawnBubble();
  }

  window.addEventListener("resize", onResize);
  animate();
}

function buildCauldron() {
  cauldronGroup = new THREE.Group();

  // Rounded pot-belly profile (classic witch cauldron shape)
  const profile = [];
  // Bottom center → belly → narrower opening
  // Each Vector2(x = radius, y = height)
  profile.push(new THREE.Vector2(0.0, -0.7));   // bottom center
  profile.push(new THREE.Vector2(0.25, -0.68));  // bottom curve start
  profile.push(new THREE.Vector2(0.5, -0.6));    // bottom rounding
  profile.push(new THREE.Vector2(0.75, -0.45));  // lower belly
  profile.push(new THREE.Vector2(0.95, -0.2));   // widest belly
  profile.push(new THREE.Vector2(1.0, 0.0));     // max width
  profile.push(new THREE.Vector2(0.97, 0.2));    // upper belly
  profile.push(new THREE.Vector2(0.88, 0.4));    // narrowing toward top
  profile.push(new THREE.Vector2(0.82, 0.55));   // near rim
  profile.push(new THREE.Vector2(0.80, 0.6));    // inner rim
  // Lip/rim flare
  profile.push(new THREE.Vector2(0.85, 0.65));   // rim out
  profile.push(new THREE.Vector2(0.88, 0.68));   // rim top outer
  profile.push(new THREE.Vector2(0.85, 0.72));   // rim top
  profile.push(new THREE.Vector2(0.78, 0.7));    // rim inner edge

  const bodyGeo = new THREE.LatheGeometry(profile, 32);
  const bodyMat = new THREE.MeshStandardMaterial({
    color: 0x2a2a2a,
    metalness: 0.4,
    roughness: 0.5,
  });
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  body.castShadow = true;
  cauldronGroup.add(body);

  // Thick rim torus on top for the classic lip
  const rimGeo = new THREE.TorusGeometry(0.82, 0.07, 10, 32);
  const rimMat = new THREE.MeshStandardMaterial({
    color: 0x3a3a3a,
    metalness: 0.5,
    roughness: 0.35,
  });
  const rim = new THREE.Mesh(rimGeo, rimMat);
  rim.rotation.x = Math.PI / 2;
  rim.position.y = 0.68;
  cauldronGroup.add(rim);

  // Handle left
  const handleGeoL = new THREE.TorusGeometry(0.22, 0.04, 8, 16, Math.PI);
  const handleMat = new THREE.MeshStandardMaterial({
    color: 0x3a3a3a,
    metalness: 0.5,
    roughness: 0.4,
  });
  const handleL = new THREE.Mesh(handleGeoL, handleMat);
  handleL.position.set(-0.92, 0.45, 0);
  handleL.rotation.z = Math.PI / 2;
  handleL.rotation.y = Math.PI / 2;
  cauldronGroup.add(handleL);

  // Handle right
  const handleR = new THREE.Mesh(handleGeoL, handleMat);
  handleR.position.set(0.92, 0.45, 0);
  handleR.rotation.z = -Math.PI / 2;
  handleR.rotation.y = Math.PI / 2;
  cauldronGroup.add(handleR);

  // Liquid
  const liquidGeo = new THREE.CircleGeometry(0.76, 32);
  const liquidMat = new THREE.MeshStandardMaterial({
    color: 0x44dd88,
    transparent: true,
    opacity: 0.7,
    emissive: 0x22aa55,
    emissiveIntensity: 0.3,
    side: THREE.DoubleSide,
  });
  liquid = new THREE.Mesh(liquidGeo, liquidMat);
  liquid.rotation.x = -Math.PI / 2;
  liquid.position.y = 0.55;
  cauldronGroup.add(liquid);

  // Three stubby feet
  for (let i = 0; i < 3; i++) {
    const angle = (i * Math.PI * 2) / 3 + Math.PI / 6;
    const footGeo = new THREE.SphereGeometry(0.12, 10, 10);
    const footMat = new THREE.MeshStandardMaterial({
      color: 0x2a2a2a,
      metalness: 0.4,
      roughness: 0.5,
    });
    const foot = new THREE.Mesh(footGeo, footMat);
    foot.scale.y = 0.6; // squash into a stubby foot
    foot.position.set(
      Math.cos(angle) * 0.55,
      -0.78,
      Math.sin(angle) * 0.55
    );
    cauldronGroup.add(foot);
  }

  cauldronGroup.position.y = 0;
  scene.add(cauldronGroup);
}

function buildWizard() {
  wizardGroup = new THREE.Group();

  // --- Materials ---
  const robeMat = new THREE.MeshStandardMaterial({ color: 0x3b1d8e, roughness: 0.65 });
  const robeAccentMat = new THREE.MeshStandardMaterial({ color: 0x5428b4, roughness: 0.6 });
  const skinMat = new THREE.MeshStandardMaterial({ color: 0xf5d0a9, roughness: 0.75 });
  const hatMat = new THREE.MeshStandardMaterial({ color: 0x2a1070, roughness: 0.55 });
  const hatBandMat = new THREE.MeshStandardMaterial({ color: 0xf0c040, metalness: 0.4, roughness: 0.3 });
  const beardMat = new THREE.MeshStandardMaterial({ color: 0xe0ddd5, roughness: 0.9 });
  const eyeWhiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3 });
  const irisMat = new THREE.MeshStandardMaterial({ color: 0x3388cc, roughness: 0.4 });
  const pupilMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.3 });
  const browMat = new THREE.MeshStandardMaterial({ color: 0x999999, roughness: 0.8 });
  const bootMat = new THREE.MeshStandardMaterial({ color: 0x3a2010, roughness: 0.7 });
  const staffWoodMat = new THREE.MeshStandardMaterial({ color: 0x5c3317, roughness: 0.65, metalness: 0.05 });
  const gemMat = new THREE.MeshStandardMaterial({ color: 0xaa44ff, emissive: 0x8833dd, emissiveIntensity: 0.8, metalness: 0.3, roughness: 0.2 });

  // --- Robe body (LatheGeometry for rounded shape) ---
  const robeProfile = [];
  robeProfile.push(new THREE.Vector2(0.0,  0.0));
  robeProfile.push(new THREE.Vector2(0.42, 0.02));
  robeProfile.push(new THREE.Vector2(0.40, 0.15));
  robeProfile.push(new THREE.Vector2(0.35, 0.4));
  robeProfile.push(new THREE.Vector2(0.28, 0.7));
  robeProfile.push(new THREE.Vector2(0.22, 1.0));
  robeProfile.push(new THREE.Vector2(0.18, 1.2));
  robeProfile.push(new THREE.Vector2(0.15, 1.3));
  robeProfile.push(new THREE.Vector2(0.0,  1.35));
  const robeGeo = new THREE.LatheGeometry(robeProfile, 20);
  const robe = new THREE.Mesh(robeGeo, robeMat);
  robe.position.y = 0.0;
  wizardGroup.add(robe);

  // Robe collar
  const collarGeo = new THREE.TorusGeometry(0.16, 0.035, 8, 16);
  const collar = new THREE.Mesh(collarGeo, robeAccentMat);
  collar.rotation.x = Math.PI / 2;
  collar.position.y = 1.32;
  wizardGroup.add(collar);

  // Belt
  const beltGeo = new THREE.TorusGeometry(0.27, 0.025, 8, 20);
  const belt = new THREE.Mesh(beltGeo, hatBandMat);
  belt.rotation.x = Math.PI / 2;
  belt.position.y = 0.75;
  wizardGroup.add(belt);

  // Belt buckle
  const buckleGeo = new THREE.BoxGeometry(0.08, 0.08, 0.03);
  const buckle = new THREE.Mesh(buckleGeo, hatBandMat);
  buckle.position.set(0, 0.75, 0.28);
  wizardGroup.add(buckle);

  // Boots
  for (const side of [-1, 1]) {
    const bootGeo = new THREE.SphereGeometry(0.09, 8, 8);
    const boot = new THREE.Mesh(bootGeo, bootMat);
    boot.scale.set(1, 0.6, 1.4);
    boot.position.set(side * 0.12, 0.03, 0.05);
    wizardGroup.add(boot);
  }

  // --- Head (slightly squashed sphere, bigger = cute) ---
  const headGeo = new THREE.SphereGeometry(0.26, 16, 14);
  const head = new THREE.Mesh(headGeo, skinMat);
  head.scale.set(1, 1.05, 0.95);
  head.position.y = 1.58;
  head.userData.role = "head";
  wizardGroup.add(head);

  // Cheeks (rosy)
  const cheekMat = new THREE.MeshStandardMaterial({ color: 0xf0a08a, roughness: 0.8 });
  for (const side of [-1, 1]) {
    const cheekGeo = new THREE.SphereGeometry(0.055, 8, 8);
    const cheek = new THREE.Mesh(cheekGeo, cheekMat);
    cheek.scale.set(1, 0.6, 0.5);
    cheek.position.set(side * 0.18, 1.53, 0.18);
    wizardGroup.add(cheek);
  }

  // --- Eyes (big, expressive, PowerZ-style) ---
  for (const side of [-1, 1]) {
    // Eye white
    const whiteGeo = new THREE.SphereGeometry(0.065, 10, 10);
    const white = new THREE.Mesh(whiteGeo, eyeWhiteMat);
    white.scale.set(1, 1.15, 0.6);
    white.position.set(side * 0.1, 1.62, 0.22);
    wizardGroup.add(white);

    // Iris
    const irisGeo = new THREE.SphereGeometry(0.04, 8, 8);
    const iris = new THREE.Mesh(irisGeo, irisMat);
    iris.position.set(side * 0.1, 1.62, 0.26);
    wizardGroup.add(iris);

    // Pupil
    const pupGeo = new THREE.SphereGeometry(0.022, 6, 6);
    const pup = new THREE.Mesh(pupGeo, pupilMat);
    pup.position.set(side * 0.1, 1.62, 0.28);
    wizardGroup.add(pup);

    // Eye shine
    const shineMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.5 });
    const shineGeo = new THREE.SphereGeometry(0.012, 4, 4);
    const shine = new THREE.Mesh(shineGeo, shineMat);
    shine.position.set(side * 0.1 + 0.02, 1.645, 0.29);
    wizardGroup.add(shine);

    // Eyebrow
    const browGeo = new THREE.CylinderGeometry(0.005, 0.005, 0.09, 4);
    const brow = new THREE.Mesh(browGeo, browMat);
    brow.rotation.z = Math.PI / 2;
    brow.rotation.x = side * 0.2;
    brow.position.set(side * 0.1, 1.7, 0.23);
    wizardGroup.add(brow);
  }

  // Nose (round, friendly)
  const noseGeo = new THREE.SphereGeometry(0.04, 8, 8);
  const nose = new THREE.Mesh(noseGeo, skinMat);
  nose.scale.set(1, 0.8, 1);
  nose.position.set(0, 1.55, 0.26);
  wizardGroup.add(nose);

  // Mouth (small smile arc)
  const smileGeo = new THREE.TorusGeometry(0.04, 0.008, 6, 10, Math.PI);
  const smileMat = new THREE.MeshStandardMaterial({ color: 0xcc7766, roughness: 0.7 });
  const smile = new THREE.Mesh(smileGeo, smileMat);
  smile.position.set(0, 1.49, 0.24);
  smile.rotation.x = -0.3;
  wizardGroup.add(smile);

  // --- Beard (layered, flowing) ---
  // Main beard (rounded)
  const beardMainGeo = new THREE.SphereGeometry(0.18, 10, 10);
  const beardMain = new THREE.Mesh(beardMainGeo, beardMat);
  beardMain.scale.set(0.9, 1.4, 0.7);
  beardMain.position.set(0, 1.3, 0.12);
  wizardGroup.add(beardMain);

  // Beard tip
  const beardTipGeo = new THREE.ConeGeometry(0.08, 0.25, 8);
  const beardTip = new THREE.Mesh(beardTipGeo, beardMat);
  beardTip.position.set(0, 1.08, 0.14);
  beardTip.rotation.x = 0.1;
  wizardGroup.add(beardTip);

  // Mustache
  for (const side of [-1, 1]) {
    const mustGeo = new THREE.SphereGeometry(0.04, 6, 6);
    const must = new THREE.Mesh(mustGeo, beardMat);
    must.scale.set(1.6, 0.5, 0.7);
    must.position.set(side * 0.07, 1.5, 0.24);
    wizardGroup.add(must);
  }

  // --- Hat (curved, whimsical wizard hat) ---
  const hatProfile = [];
  hatProfile.push(new THREE.Vector2(0.0,  0.0));
  hatProfile.push(new THREE.Vector2(0.32, 0.0));
  hatProfile.push(new THREE.Vector2(0.34, 0.03));
  hatProfile.push(new THREE.Vector2(0.30, 0.04));
  hatProfile.push(new THREE.Vector2(0.24, 0.08));
  hatProfile.push(new THREE.Vector2(0.22, 0.2));
  hatProfile.push(new THREE.Vector2(0.20, 0.35));
  hatProfile.push(new THREE.Vector2(0.16, 0.5));
  hatProfile.push(new THREE.Vector2(0.10, 0.65));
  hatProfile.push(new THREE.Vector2(0.04, 0.78));
  hatProfile.push(new THREE.Vector2(0.0,  0.82));
  const hatGeo = new THREE.LatheGeometry(hatProfile, 16);
  const hat = new THREE.Mesh(hatGeo, hatMat);
  hat.position.y = 1.76;
  hat.rotation.z = 0.12;
  wizardGroup.add(hat);

  // Hat band
  const bandGeo = new THREE.TorusGeometry(0.23, 0.02, 6, 16);
  const band = new THREE.Mesh(bandGeo, hatBandMat);
  band.rotation.x = Math.PI / 2;
  band.position.y = 1.84;
  wizardGroup.add(band);

  // Hat stars (decorative)
  const starDecMat = new THREE.MeshStandardMaterial({ color: 0xf0c040, emissive: 0xf0c040, emissiveIntensity: 0.6 });
  const starPositions = [
    [0.12, 2.0, 0.15],
    [-0.06, 2.2, 0.1],
    [0.05, 2.35, 0.05],
  ];
  starPositions.forEach(([x, y, z], i) => {
    const size = 0.025 + i * 0.008;
    const sGeo = new THREE.OctahedronGeometry(size, 0);
    const s = new THREE.Mesh(sGeo, starDecMat);
    s.position.set(x, y, z);
    s.rotation.set(0.5, 0.8, 0.3);
    wizardGroup.add(s);
  });

  // --- Left arm (resting along the body) ---
  wizardArm = new THREE.Group();
  wizardArm.position.set(-0.18, 1.25, 0.0);

  // Shoulder
  const lShoulderGeo = new THREE.SphereGeometry(0.09, 8, 8);
  const lShoulder = new THREE.Mesh(lShoulderGeo, robeAccentMat);
  wizardArm.add(lShoulder);

  // Sleeve — hanging down alongside the body
  const lSleeveGeo = new THREE.CylinderGeometry(0.04, 0.08, 0.4, 10);
  const lSleeve = new THREE.Mesh(lSleeveGeo, robeMat);
  lSleeve.position.set(-0.02, -0.2, 0.02);
  lSleeve.rotation.z = 0.1;
  wizardArm.add(lSleeve);

  // Hand
  const handGeo = new THREE.SphereGeometry(0.045, 8, 8);
  const hand = new THREE.Mesh(handGeo, skinMat);
  hand.position.set(-0.04, -0.4, 0.02);
  wizardArm.add(hand);

  wizardGroup.add(wizardArm);

  // --- Right arm (resting along the body) ---
  const rightArm = new THREE.Group();
  rightArm.position.set(0.18, 1.25, 0.0);

  // Shoulder
  const rShoulderGeo = new THREE.SphereGeometry(0.09, 8, 8);
  const rShoulder = new THREE.Mesh(rShoulderGeo, robeAccentMat);
  rightArm.add(rShoulder);

  // Sleeve — tapered cylinder hanging down alongside the body
  const rSleeveGeo = new THREE.CylinderGeometry(0.04, 0.08, 0.4, 10);
  const rSleeve = new THREE.Mesh(rSleeveGeo, robeMat);
  rSleeve.position.set(0.02, -0.2, 0.02);
  rSleeve.rotation.z = -0.1;
  rightArm.add(rSleeve);

  // Hand
  const rHandGeo = new THREE.SphereGeometry(0.045, 8, 8);
  const rHand = new THREE.Mesh(rHandGeo, skinMat);
  rHand.position.set(0.04, -0.4, 0.02);
  rightArm.add(rHand);

  wizardGroup.add(rightArm);

  // Position wizard — big, close to cauldron, turned toward it
  wizardGroup.scale.setScalar(1.8);
  wizardGroup.position.set(1.3, -1.2, 0.1);
  wizardGroup.rotation.y = -1.5;
  scene.add(wizardGroup);
}

function buildCat() {
  catGroup = new THREE.Group();
  const furMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1e, roughness: 0.85 });
  const furHighlightMat = new THREE.MeshStandardMaterial({ color: 0x2a2a30, roughness: 0.8 });
  const noseMat = new THREE.MeshStandardMaterial({ color: 0xe88899, roughness: 0.6 });
  const innerEarMat = new THREE.MeshStandardMaterial({ color: 0x996677, roughness: 0.7 });
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0x33ff55, emissive: 0x22dd44, emissiveIntensity: 0.6, roughness: 0.3 });
  const pupilMat = new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 0.3 });
  const shineMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.5 });
  const whiskerMat = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.5 });
  const pawPadMat = new THREE.MeshStandardMaterial({ color: 0x444444, roughness: 0.6 });
  const collarMat = new THREE.MeshStandardMaterial({ color: 0x8833aa, roughness: 0.4, metalness: 0.2 });
  const bellMat = new THREE.MeshStandardMaterial({ color: 0xf0c040, metalness: 0.6, roughness: 0.2 });

  // --- Body (LatheGeometry — smooth sitting cat shape) ---
  const bodyProfile = [];
  bodyProfile.push(new THREE.Vector2(0.0,  -0.15));
  bodyProfile.push(new THREE.Vector2(0.18, -0.14));
  bodyProfile.push(new THREE.Vector2(0.22, -0.08));
  bodyProfile.push(new THREE.Vector2(0.24, 0.05));
  bodyProfile.push(new THREE.Vector2(0.22, 0.18));
  bodyProfile.push(new THREE.Vector2(0.18, 0.28));
  bodyProfile.push(new THREE.Vector2(0.13, 0.35));
  bodyProfile.push(new THREE.Vector2(0.0,  0.38));
  const bodyGeo = new THREE.LatheGeometry(bodyProfile, 16);
  const body = new THREE.Mesh(bodyGeo, furMat);
  body.position.y = 0.15;
  catGroup.add(body);

  // Chest tuft (lighter fur)
  const chestGeo = new THREE.SphereGeometry(0.1, 8, 8);
  const chest = new THREE.Mesh(chestGeo, furHighlightMat);
  chest.scale.set(0.8, 1, 0.5);
  chest.position.set(0, 0.4, 0.12);
  catGroup.add(chest);

  // --- Head (bigger, rounder — cute proportions) ---
  const headGeo = new THREE.SphereGeometry(0.22, 16, 14);
  const head = new THREE.Mesh(headGeo, furMat);
  head.scale.set(1.05, 1, 0.95);
  head.position.set(0, 0.6, 0.15);
  head.userData.role = "catHead";
  catGroup.add(head);

  // Cheek tufts
  for (const side of [-1, 1]) {
    const tuftGeo = new THREE.SphereGeometry(0.08, 8, 8);
    const tuft = new THREE.Mesh(tuftGeo, furMat);
    tuft.scale.set(1, 0.7, 0.6);
    tuft.position.set(side * 0.17, 0.55, 0.18);
    catGroup.add(tuft);
  }

  // --- Ears (more detailed, triangular with inner ear) ---
  for (const side of [-1, 1]) {
    // Outer ear
    const earGeo = new THREE.ConeGeometry(0.07, 0.16, 4);
    const ear = new THREE.Mesh(earGeo, furMat);
    ear.position.set(side * 0.13, 0.82, 0.12);
    ear.rotation.z = side * -0.2;
    ear.rotation.x = -0.15;
    catGroup.add(ear);

    // Inner ear
    const iGeo = new THREE.ConeGeometry(0.04, 0.1, 4);
    const inner = new THREE.Mesh(iGeo, innerEarMat);
    inner.position.set(side * 0.13, 0.81, 0.14);
    inner.rotation.z = side * -0.2;
    inner.rotation.x = -0.15;
    catGroup.add(inner);
  }

  // --- Eyes (big, expressive, PowerZ-style) ---
  for (const side of [-1, 1]) {
    // Eye socket shadow
    const socketGeo = new THREE.SphereGeometry(0.07, 10, 10);
    const socket = new THREE.Mesh(socketGeo, furHighlightMat);
    socket.scale.set(1, 1.1, 0.3);
    socket.position.set(side * 0.09, 0.63, 0.3);
    catGroup.add(socket);

    // Eye white
    const whiteGeo = new THREE.SphereGeometry(0.055, 10, 10);
    const white = new THREE.Mesh(whiteGeo, new THREE.MeshStandardMaterial({ color: 0xf5f5ee, roughness: 0.3 }));
    white.scale.set(1, 1.2, 0.5);
    white.position.set(side * 0.09, 0.63, 0.31);
    catGroup.add(white);

    // Iris
    const irisGeo = new THREE.SphereGeometry(0.038, 8, 8);
    const iris = new THREE.Mesh(irisGeo, eyeMat);
    iris.scale.set(1, 1.1, 0.6);
    iris.position.set(side * 0.09, 0.63, 0.35);
    catGroup.add(iris);

    // Pupil (vertical slit)
    const pupGeo = new THREE.SphereGeometry(0.025, 6, 8);
    const pup = new THREE.Mesh(pupGeo, pupilMat);
    pup.scale.set(0.35, 1.2, 0.5);
    pup.position.set(side * 0.09, 0.63, 0.36);
    catGroup.add(pup);

    // Eye shine
    const shineGeo = new THREE.SphereGeometry(0.012, 4, 4);
    const shine = new THREE.Mesh(shineGeo, shineMat);
    shine.position.set(side * 0.09 + 0.02, 0.655, 0.37);
    catGroup.add(shine);
  }

  // Eye glow light
  const eyeGlow = new THREE.PointLight(0x33ff55, 0.2, 1.5);
  eyeGlow.position.set(0, 0.63, 0.4);
  catGroup.add(eyeGlow);

  // --- Nose ---
  const noseGeo = new THREE.SphereGeometry(0.025, 6, 6);
  const nose = new THREE.Mesh(noseGeo, noseMat);
  nose.scale.set(1.2, 0.8, 0.8);
  nose.position.set(0, 0.56, 0.36);
  catGroup.add(nose);

  // Mouth lines
  const mouthMat = new THREE.MeshStandardMaterial({ color: 0x553344, roughness: 0.7 });
  for (const side of [-1, 1]) {
    const mGeo = new THREE.CylinderGeometry(0.004, 0.004, 0.05, 4);
    const m = new THREE.Mesh(mGeo, mouthMat);
    m.rotation.z = side * 0.6;
    m.position.set(side * 0.025, 0.535, 0.35);
    catGroup.add(m);
  }

  // --- Whiskers ---
  for (const side of [-1, 1]) {
    for (let w = 0; w < 3; w++) {
      const angle = (w - 1) * 0.2;
      const wGeo = new THREE.CylinderGeometry(0.003, 0.002, 0.2, 3);
      const whisker = new THREE.Mesh(wGeo, whiskerMat);
      whisker.rotation.z = Math.PI / 2 * side + angle;
      whisker.rotation.y = angle * 0.5;
      whisker.position.set(side * 0.14, 0.55 + w * 0.025, 0.3);
      catGroup.add(whisker);
    }
  }

  // --- Collar with bell ---
  const collarGeo = new THREE.TorusGeometry(0.14, 0.015, 6, 16);
  const collar = new THREE.Mesh(collarGeo, collarMat);
  collar.rotation.x = Math.PI / 2 + 0.1;
  collar.position.set(0, 0.48, 0.1);
  catGroup.add(collar);

  const bellGeo = new THREE.SphereGeometry(0.025, 8, 8);
  const bell = new THREE.Mesh(bellGeo, bellMat);
  bell.position.set(0, 0.45, 0.24);
  catGroup.add(bell);

  // --- Front paws (rounded, with pads) ---
  for (const side of [-1, 1]) {
    const pawGeo = new THREE.SphereGeometry(0.065, 8, 8);
    const paw = new THREE.Mesh(pawGeo, furMat);
    paw.scale.set(0.8, 0.5, 1.1);
    paw.position.set(side * 0.1, 0.06, 0.2);
    catGroup.add(paw);

    // Paw pads
    const padGeo = new THREE.SphereGeometry(0.02, 4, 4);
    const pad = new THREE.Mesh(padGeo, pawPadMat);
    pad.position.set(side * 0.1, 0.04, 0.25);
    catGroup.add(pad);
  }

  // Haunches (back legs sitting)
  for (const side of [-1, 1]) {
    const haunchGeo = new THREE.SphereGeometry(0.12, 8, 8);
    const haunch = new THREE.Mesh(haunchGeo, furMat);
    haunch.scale.set(0.8, 0.7, 1);
    haunch.position.set(side * 0.15, 0.12, -0.05);
    catGroup.add(haunch);
  }

  // --- Tail (smooth curve with more segments) ---
  catTail = new THREE.Group();
  const tailSegs = 12;
  for (let i = 0; i < tailSegs; i++) {
    const t = i / (tailSegs - 1);
    const radius = 0.035 * (1 - t * 0.6);
    const segGeo = new THREE.SphereGeometry(radius, 6, 6);
    const seg = new THREE.Mesh(segGeo, furMat);
    // Curved upward arc
    const x = 0;
    const y = 0.1 + Math.sin(t * Math.PI * 0.7) * 0.5;
    const z = -0.2 - t * 0.45;
    seg.position.set(x, y, z);
    catTail.add(seg);
  }
  // Tail tip — slightly lighter
  const tipGeo = new THREE.SphereGeometry(0.02, 6, 6);
  const tailTip = new THREE.Mesh(tipGeo, furHighlightMat);
  const lastSeg = catTail.children[tailSegs - 1];
  tailTip.position.copy(lastSeg.position);
  tailTip.position.y += 0.02;
  catTail.add(tailTip);
  catGroup.add(catTail);

  // Position cat — scaled up
  catGroup.scale.setScalar(1.6);
  catGroup.position.set(-1.7, -1.2, 0.5);
  catGroup.rotation.y = 0.5;
  scene.add(catGroup);
}

function spawnBubble() {
  const geo = new THREE.SphereGeometry(
    0.03 + Math.random() * 0.05,
    8,
    8
  );
  const mat = new THREE.MeshStandardMaterial({
    color: 0x88ffbb,
    transparent: true,
    opacity: 0.6,
    emissive: 0x44aa66,
    emissiveIntensity: 0.5,
  });
  const bubble = new THREE.Mesh(geo, mat);
  resetBubble(bubble);
  scene.add(bubble);
  bubbles.push(bubble);
}

function resetBubble(bubble) {
  bubble.position.set(
    (Math.random() - 0.5) * 1.1,
    0.6,
    (Math.random() - 0.5) * 1.1
  );
  bubble.userData.speed = 0.3 + Math.random() * 0.5;
  bubble.userData.wobble = Math.random() * Math.PI * 2;
  bubble.scale.setScalar(0.5 + Math.random() * 0.5);
}

function animate() {
  animationId = requestAnimationFrame(animate);
  const dt = clock.getDelta();
  const t = clock.getElapsedTime();

  // Liquid wobble
  if (liquid) {
    liquid.position.y = 0.55 + Math.sin(t * 2) * 0.02;
  }

  // Wizard gentle arm sway
  if (wizardArm) {
    wizardArm.rotation.z = Math.sin(t * 0.8) * 0.03;
  }
  if (wizardGroup) {
    wizardGroup.children.forEach((child) => {
      if (child.userData.role === "head") {
        child.position.y = 1.58 + Math.sin(t * 2) * 0.012;
      }
    });
    // Slight upper body sway following the stirring rhythm
    wizardGroup.rotation.z = Math.sin(t * 1.5) * 0.015;
  }

  // Cat animations
  if (catGroup) {
    // Head look around
    catGroup.children.forEach((child) => {
      if (child.userData.role === "catHead") {
        child.rotation.y = Math.sin(t * 0.7) * 0.1;
        child.rotation.z = Math.sin(t * 1.1) * 0.03;
      }
    });
  }
  if (catTail) {
    // Smooth sinusoidal wave through tail
    catTail.children.forEach((seg, i) => {
      const phase = i * 0.4;
      const strength = i / catTail.children.length;
      seg.position.x = Math.sin(t * 2.5 + phase) * 0.08 * strength;
    });
  }

  // Bubbles
  for (const b of bubbles) {
    b.position.y += b.userData.speed * dt;
    b.position.x += Math.sin(t * 2 + b.userData.wobble) * 0.003;
    b.position.z += Math.cos(t * 2 + b.userData.wobble) * 0.003;
    b.material.opacity = Math.max(0, 0.6 - (b.position.y - 0.6) * 0.3);
    if (b.position.y > 2.5) resetBubble(b);
  }

  // Effect particles
  for (let i = effectParticles.length - 1; i >= 0; i--) {
    const p = effectParticles[i];
    p.position.add(p.userData.velocity.clone().multiplyScalar(dt));
    p.userData.velocity.y -= 2 * dt; // gravity
    p.userData.life -= dt;
    p.material.opacity = Math.max(0, p.userData.life / p.userData.maxLife);
    p.scale.multiplyScalar(0.99);
    if (p.userData.life <= 0) {
      scene.remove(p);
      effectParticles.splice(i, 1);
    }
  }

  // Cauldron shake
  if (cauldronGroup && cauldronGroup.userData.shake) {
    const s = cauldronGroup.userData.shake;
    s.elapsed += dt;
    if (s.elapsed < s.duration) {
      const intensity = s.intensity * (1 - s.elapsed / s.duration);
      cauldronGroup.position.x = (Math.random() - 0.5) * intensity;
      cauldronGroup.position.z = (Math.random() - 0.5) * intensity;
    } else {
      cauldronGroup.position.x = 0;
      cauldronGroup.position.z = 0;
      cauldronGroup.userData.shake = null;
    }
  }

  renderer.render(scene, camera);
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// ===== 3D Erlenmeyer Flask =====
function createVial() {
  const vialGroup = new THREE.Group();

  // Erlenmeyer profile: flat wide base → conical taper → thin long neck → small lip
  const profile = [];
  profile.push(new THREE.Vector2(0.0,  -0.30));  // bottom center
  profile.push(new THREE.Vector2(0.22, -0.30));  // flat bottom edge
  profile.push(new THREE.Vector2(0.23, -0.28));  // bottom corner
  profile.push(new THREE.Vector2(0.22, -0.25));  // base inner start
  profile.push(new THREE.Vector2(0.20, -0.15));  // conical taper
  profile.push(new THREE.Vector2(0.16, -0.02));  // mid taper
  profile.push(new THREE.Vector2(0.10,  0.12));  // shoulder
  profile.push(new THREE.Vector2(0.055, 0.22));  // neck start
  profile.push(new THREE.Vector2(0.045, 0.32));  // neck mid
  profile.push(new THREE.Vector2(0.045, 0.42));  // neck top
  profile.push(new THREE.Vector2(0.055, 0.44));  // lip flare
  profile.push(new THREE.Vector2(0.05,  0.46));  // lip top

  const glassGeo = new THREE.LatheGeometry(profile, 24);
  const glassMat = new THREE.MeshStandardMaterial({
    color: 0xccddff,
    transparent: true,
    opacity: 0.35,
    metalness: 0.1,
    roughness: 0.05,
    side: THREE.DoubleSide,
  });
  const glass = new THREE.Mesh(glassGeo, glassMat);
  vialGroup.add(glass);

  // Cork in the neck
  const corkGeo = new THREE.CylinderGeometry(0.048, 0.044, 0.07, 10);
  const corkMat = new THREE.MeshStandardMaterial({
    color: 0xc8956c,
    roughness: 0.85,
  });
  const cork = new THREE.Mesh(corkGeo, corkMat);
  cork.position.y = 0.49;
  vialGroup.add(cork);

  // Liquid inside — conical shape matching the flask interior
  const liqProfile = [];
  liqProfile.push(new THREE.Vector2(0.0,  -0.28));
  liqProfile.push(new THREE.Vector2(0.19, -0.28));
  liqProfile.push(new THREE.Vector2(0.18, -0.25));
  liqProfile.push(new THREE.Vector2(0.16, -0.15));
  liqProfile.push(new THREE.Vector2(0.12, -0.02));
  liqProfile.push(new THREE.Vector2(0.07,  0.08));
  liqProfile.push(new THREE.Vector2(0.0,   0.08));
  const liqGeo = new THREE.LatheGeometry(liqProfile, 24);
  const liqMat = new THREE.MeshStandardMaterial({
    color: 0xaa66ff,
    transparent: true,
    opacity: 0.6,
    emissive: 0x7733cc,
    emissiveIntensity: 0.6,
    side: THREE.DoubleSide,
  });
  const liq = new THREE.Mesh(liqGeo, liqMat);
  vialGroup.add(liq);

  // Glow
  const glowLight = new THREE.PointLight(0xaa66ff, 0.8, 3);
  glowLight.position.y = -0.1;
  vialGroup.add(glowLight);

  return vialGroup;
}

// ===== Pouring Animation =====
let pouringVial = null;

function pourVialAnimation(isCorrect, onDone) {
  // Create the vial
  const vial = createVial();
  pouringVial = vial;

  // Start position: top-right of the scene
  const startPos = new THREE.Vector3(2.5, 4, 1.5);
  // Pour position: above cauldron, tilted
  const pourPos = new THREE.Vector3(0.6, 2.2, 0.3);

  vial.position.copy(startPos);
  scene.add(vial);

  // Cork is child[1] (glass=0, cork=1, liquid=2, glow=3)
  const cork = vial.children[1];

  const MOVE_DURATION = 0.8;   // seconds to move toward cauldron
  const TILT_DURATION = 0.5;   // seconds to tilt
  const POUR_DURATION = 1.0;   // seconds of pouring with droplets
  const TOTAL = MOVE_DURATION + TILT_DURATION + POUR_DURATION;

  let dropletTimer = 0;
  const startTime = performance.now();

  function tick() {
    const elapsed = (performance.now() - startTime) / 1000;

    if (elapsed <= MOVE_DURATION) {
      // Phase 1: Move vial toward cauldron
      const t = elapsed / MOVE_DURATION;
      const ease = t * t * (3 - 2 * t); // smoothstep
      vial.position.lerpVectors(startPos, pourPos, ease);
      // Slight swing
      vial.rotation.z = Math.sin(t * Math.PI) * 0.1;
    } else if (elapsed <= MOVE_DURATION + TILT_DURATION) {
      // Phase 2: Tilt the vial
      const t = (elapsed - MOVE_DURATION) / TILT_DURATION;
      const ease = t * t * (3 - 2 * t);
      vial.position.copy(pourPos);
      vial.rotation.z = ease * Math.PI * 0.55; // tilt ~100 degrees
      // Pop the cork off
      if (cork.parent) {
        cork.visible = false;
      }
    } else if (elapsed <= TOTAL) {
      // Phase 3: Pour — droplets fall from vial tip into cauldron
      const t = (elapsed - MOVE_DURATION - TILT_DURATION) / POUR_DURATION;
      vial.rotation.z = Math.PI * 0.55 + Math.sin(elapsed * 8) * 0.03; // slight tremble

      // Spawn droplets
      dropletTimer += 1;
      if (dropletTimer % 2 === 0) {
        spawnDroplet(vial, isCorrect);
      }

      // Fade liquid inside vial
      const liq = vial.children[2]; // liquid mesh
      if (liq) {
        liq.material.opacity = 0.6 * (1 - t);
        liq.scale.y = Math.max(0.05, 1 - t);
      }
    } else {
      // Done pouring — remove vial and trigger result
      scene.remove(vial);
      pouringVial = null;
      if (isCorrect) {
        successEffect();
      } else {
        failEffect();
      }
      if (onDone) onDone();
      return;
    }

    requestAnimationFrame(tick);
  }

  tick();
}

function spawnDroplet(vial, isCorrect) {
  // Get the tip of the tilted Erlenmeyer (lip at y≈0.46)
  const tipLocal = new THREE.Vector3(0, 0.46, 0);
  const tipWorld = tipLocal.applyMatrix4(vial.matrixWorld);

  const geo = new THREE.SphereGeometry(0.03 + Math.random() * 0.02, 6, 6);
  const color = isCorrect ? 0xaa66ff : 0xaa66ff; // same color while pouring
  const mat = new THREE.MeshStandardMaterial({
    color: color,
    emissive: 0x7733cc,
    emissiveIntensity: 0.8,
    transparent: true,
    opacity: 0.85,
  });
  const drop = new THREE.Mesh(geo, mat);
  drop.position.copy(tipWorld);
  // Velocity: mostly down, slight spread
  drop.userData.velocity = new THREE.Vector3(
    (Math.random() - 0.5) * 0.3,
    -0.5,
    (Math.random() - 0.5) * 0.3
  );
  drop.userData.life = 1.2;
  drop.userData.maxLife = 1.2;
  scene.add(drop);
  effectParticles.push(drop);
}

// ===== 3D Effects =====
function successEffect() {
  // Green glow
  const glow = new THREE.PointLight(0x44ff88, 2, 10);
  glow.position.set(0, 1.5, 0);
  scene.add(glow);

  // Pulse the glow
  let start = performance.now();
  function pulseGlow() {
    const elapsed = (performance.now() - start) / 1000;
    if (elapsed > 2) {
      scene.remove(glow);
      return;
    }
    glow.intensity = 2.5 * Math.sin(elapsed * Math.PI / 1) * (1 - elapsed / 2);
    requestAnimationFrame(pulseGlow);
  }
  pulseGlow();

  // Liquid glows bright
  if (liquid) {
    liquid.material.color.set(0x66ffaa);
    liquid.material.emissive.set(0x44ff88);
    liquid.material.emissiveIntensity = 2;
    setTimeout(() => {
      liquid.material.color.set(0x44dd88);
      liquid.material.emissive.set(0x22aa55);
      liquid.material.emissiveIntensity = 0.3;
    }, 2000);
  }

  // Golden sparkle particles — burst upward from cauldron
  for (let i = 0; i < 40; i++) {
    const geo = new THREE.SphereGeometry(0.03 + Math.random() * 0.03, 6, 6);
    const colors = [0xffdd44, 0x44ff88, 0xaaffdd, 0xffffff];
    const mat = new THREE.MeshStandardMaterial({
      color: colors[Math.floor(Math.random() * colors.length)],
      emissive: 0xffaa00,
      emissiveIntensity: 1,
      transparent: true,
      opacity: 1,
    });
    const p = new THREE.Mesh(geo, mat);
    p.position.set(
      (Math.random() - 0.5) * 0.8,
      0.7 + Math.random() * 0.3,
      (Math.random() - 0.5) * 0.8
    );
    const angle = Math.random() * Math.PI * 2;
    const upForce = 2 + Math.random() * 3;
    const outForce = 0.3 + Math.random() * 1;
    p.userData.velocity = new THREE.Vector3(
      Math.cos(angle) * outForce,
      upForce,
      Math.sin(angle) * outForce
    );
    p.userData.life = 1.2 + Math.random() * 0.8;
    p.userData.maxLife = p.userData.life;
    scene.add(p);
    effectParticles.push(p);
  }

  // Continuous shimmer particles (smaller, slower, lingering)
  for (let i = 0; i < 20; i++) {
    const geo = new THREE.SphereGeometry(0.015, 4, 4);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xaaffcc,
      emissive: 0x44ff88,
      emissiveIntensity: 1.5,
      transparent: true,
      opacity: 0.8,
    });
    const p = new THREE.Mesh(geo, mat);
    p.position.set(
      (Math.random() - 0.5) * 1.2,
      0.6 + Math.random() * 0.4,
      (Math.random() - 0.5) * 1.2
    );
    p.userData.velocity = new THREE.Vector3(
      (Math.random() - 0.5) * 0.2,
      0.5 + Math.random() * 0.5,
      (Math.random() - 0.5) * 0.2
    );
    p.userData.life = 1.5 + Math.random() * 1;
    p.userData.maxLife = p.userData.life;
    scene.add(p);
    effectParticles.push(p);
  }
}

function failEffect() {
  // Big red flash
  const flash = new THREE.PointLight(0xff2222, 4, 15);
  flash.position.set(0, 2, 0);
  scene.add(flash);

  let start = performance.now();
  function pulseFlash() {
    const elapsed = (performance.now() - start) / 1000;
    if (elapsed > 1.2) {
      scene.remove(flash);
      return;
    }
    flash.intensity = 4 * (1 - elapsed / 1.2);
    requestAnimationFrame(pulseFlash);
  }
  pulseFlash();

  // Liquid turns angry red / bubbling
  if (liquid) {
    liquid.material.color.set(0xff2222);
    liquid.material.emissive.set(0xcc0000);
    liquid.material.emissiveIntensity = 2;
    setTimeout(() => {
      liquid.material.color.set(0x44dd88);
      liquid.material.emissive.set(0x22aa55);
      liquid.material.emissiveIntensity = 0.3;
    }, 2000);
  }

  // Explosion particles — big burst outward
  for (let i = 0; i < 35; i++) {
    const size = 0.06 + Math.random() * 0.1;
    const geo = new THREE.SphereGeometry(size, 6, 6);
    const colors = [0xff4444, 0xff8800, 0xffcc00, 0x884422, 0x555555];
    const mat = new THREE.MeshStandardMaterial({
      color: colors[Math.floor(Math.random() * colors.length)],
      emissive: 0x882200,
      emissiveIntensity: 0.8,
      transparent: true,
      opacity: 0.95,
    });
    const p = new THREE.Mesh(geo, mat);
    p.position.set(
      (Math.random() - 0.5) * 0.5,
      0.7 + Math.random() * 0.3,
      (Math.random() - 0.5) * 0.5
    );
    const angle = Math.random() * Math.PI * 2;
    const force = 2 + Math.random() * 3;
    p.userData.velocity = new THREE.Vector3(
      Math.cos(angle) * force,
      2 + Math.random() * 3,
      Math.sin(angle) * force
    );
    p.userData.life = 0.8 + Math.random() * 0.6;
    p.userData.maxLife = p.userData.life;
    scene.add(p);
    effectParticles.push(p);
  }

  // Smoke puffs — larger, slower, darker
  for (let i = 0; i < 15; i++) {
    const size = 0.1 + Math.random() * 0.15;
    const geo = new THREE.SphereGeometry(size, 6, 6);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x333333,
      emissive: 0x111111,
      emissiveIntensity: 0.2,
      transparent: true,
      opacity: 0.7,
    });
    const p = new THREE.Mesh(geo, mat);
    p.position.set(
      (Math.random() - 0.5) * 0.6,
      0.9,
      (Math.random() - 0.5) * 0.6
    );
    p.userData.velocity = new THREE.Vector3(
      (Math.random() - 0.5) * 0.8,
      1 + Math.random() * 1.5,
      (Math.random() - 0.5) * 0.8
    );
    p.userData.life = 1.5 + Math.random() * 1;
    p.userData.maxLife = p.userData.life;
    scene.add(p);
    effectParticles.push(p);
  }

  // Heavy shake
  cauldronGroup.userData.shake = {
    intensity: 0.25,
    duration: 0.8,
    elapsed: 0,
  };
}

// ===== Screen Management =====
function showScreen(screen) {
  [titleScreen, gameScreen, resultsScreen].forEach((s) =>
    s.classList.remove("active")
  );
  screen.classList.add("active");
}

// ===== Game Logic =====
function startGame(level) {
  currentLevel = level;
  exercises = EXERCISES.filter((e) => e.level === level);
  currentExIndex = 0;
  score = 0;
  gameScoreCount.textContent = "0";
  showScreen(gameScreen);
  buildProgressBar();
  loadExercise();
}

function buildProgressBar() {
  progressBar.innerHTML = "";
  for (let i = 0; i < exercises.length; i++) {
    const vial = document.createElement("div");
    vial.className = "progress-vial";
    if (i === 0) vial.classList.add("current");
    progressBar.appendChild(vial);
  }
}

function updateProgress(index, success) {
  const vials = progressBar.querySelectorAll(".progress-vial");
  vials.forEach((v) => v.classList.remove("current"));
  if (index < vials.length) {
    vials[index].classList.add(success ? "filled" : "failed");
  }
  if (index + 1 < vials.length) {
    vials[index + 1].classList.add("current");
  }
}

function loadExercise() {
  const ex = exercises[currentExIndex];
  selections = {};
  activeSlotIndex = null;

  // Hint
  hintEl.textContent = ex.hint;

  // Build sentence slots
  sentenceBuilder.innerHTML = "";
  let choiceSlotCount = 0;
  ex.slots.forEach((slot, i) => {
    const el = document.createElement("span");
    el.className = "slot";
    if (slot.fixed) {
      el.classList.add("fixed");
      el.textContent = slot.word;
    } else {
      el.classList.add("choice");
      el.textContent = "?";
      el.dataset.slotIndex = i;
      el.addEventListener("click", () => onSlotClick(i));
      choiceSlotCount++;
    }
    sentenceBuilder.appendChild(el);
  });

  // Auto-select first choice slot
  const firstChoiceIndex = ex.slots.findIndex((s) => !s.fixed);
  if (firstChoiceIndex !== -1) {
    setActiveSlot(firstChoiceIndex);
  }

  // Build word cards — gather all choices from all slots, shuffled
  wordCardsEl.innerHTML = "";
  const allChoices = [];
  ex.slots.forEach((slot, i) => {
    if (!slot.fixed) {
      slot.choices.forEach((word) => {
        allChoices.push({ word, slotIndex: i });
      });
    }
  });

  // For single-choice exercises, just shuffle all choices
  // For multi-choice (ex 10), show all choices mixed
  const shuffled = shuffleArray(allChoices);
  shuffled.forEach(({ word, slotIndex }) => {
    const card = document.createElement("button");
    card.className = "word-card";
    card.textContent = word;
    card.dataset.word = word;
    card.dataset.slotIndex = slotIndex;
    card.addEventListener("click", () => onCardClick(card, word, slotIndex));
    wordCardsEl.appendChild(card);
  });

  btnValidate.disabled = true;
  feedbackEl.classList.add("hidden");
}

function setActiveSlot(index) {
  activeSlotIndex = index;
  // Highlight active slot
  sentenceBuilder.querySelectorAll(".slot.choice").forEach((el) => {
    el.style.borderColor =
      parseInt(el.dataset.slotIndex) === index
        ? "var(--accent-gold)"
        : "var(--card-border)";
  });

  // Enable/disable cards based on active slot
  wordCardsEl.querySelectorAll(".word-card").forEach((card) => {
    const cardSlot = parseInt(card.dataset.slotIndex);
    if (card.classList.contains("selected")) return;
    if (cardSlot === index) {
      card.classList.remove("disabled");
    } else {
      card.classList.add("disabled");
    }
  });
}

function onSlotClick(slotIndex) {
  // If this slot is already filled, clear it
  if (selections[slotIndex] !== undefined) {
    const oldWord = selections[slotIndex];
    delete selections[slotIndex];
    // Re-enable the card
    wordCardsEl.querySelectorAll(".word-card").forEach((card) => {
      if (
        card.dataset.word === oldWord &&
        parseInt(card.dataset.slotIndex) === slotIndex &&
        card.classList.contains("selected")
      ) {
        card.classList.remove("selected");
      }
    });
    // Update slot display
    const slotEl = sentenceBuilder.querySelector(
      `.slot.choice[data-slot-index="${slotIndex}"]`
    );
    if (slotEl) {
      slotEl.textContent = "?";
      slotEl.classList.remove("filled");
    }
  }
  setActiveSlot(slotIndex);
  checkAllFilled();
}

function onCardClick(card, word, slotIndex) {
  if (activeSlotIndex === null || slotIndex !== activeSlotIndex) return;

  // If slot already filled, clear previous selection
  if (selections[slotIndex] !== undefined) {
    const oldWord = selections[slotIndex];
    wordCardsEl.querySelectorAll(".word-card").forEach((c) => {
      if (
        c.dataset.word === oldWord &&
        parseInt(c.dataset.slotIndex) === slotIndex &&
        c.classList.contains("selected")
      ) {
        c.classList.remove("selected");
      }
    });
  }

  // Select this card
  card.classList.add("selected");
  selections[slotIndex] = word;

  // Update slot
  const slotEl = sentenceBuilder.querySelector(
    `.slot.choice[data-slot-index="${slotIndex}"]`
  );
  if (slotEl) {
    slotEl.textContent = word;
    slotEl.classList.add("filled");
  }

  // Auto-advance to next unfilled choice slot
  const ex = exercises[currentExIndex];
  const nextSlot = ex.slots.findIndex(
    (s, i) => !s.fixed && i !== slotIndex && selections[i] === undefined
  );
  if (nextSlot !== -1) {
    setActiveSlot(nextSlot);
  }

  checkAllFilled();
}

function checkAllFilled() {
  const ex = exercises[currentExIndex];
  const allFilled = ex.slots.every(
    (s, i) => s.fixed || selections[i] !== undefined
  );
  btnValidate.disabled = !allFilled;
}

function validateAnswer() {
  const ex = exercises[currentExIndex];
  let correct = true;
  ex.slots.forEach((slot, i) => {
    if (!slot.fixed && selections[i] !== slot.correct) {
      correct = false;
    }
  });

  if (correct) {
    score++;
    gameScoreCount.textContent = score;
    // Pop animation
    gameScoreEl.classList.remove("pop");
    void gameScoreEl.offsetWidth; // force reflow
    gameScoreEl.classList.add("pop");
  }

  // Disable further interaction immediately
  btnValidate.disabled = true;
  wordCardsEl
    .querySelectorAll(".word-card")
    .forEach((c) => c.classList.add("disabled"));

  // Start pouring animation — effects + feedback trigger after pour finishes
  pourVialAnimation(correct, () => {
    // Show feedback message after the pour + effect
    if (correct) {
      showFeedback(ex.successMsg, "success");
    } else {
      showFeedback(ex.failMsg, "error");
    }

    updateProgress(currentExIndex, correct);

    // Highlight correct answers
    sentenceBuilder.querySelectorAll(".slot.choice").forEach((el) => {
      const idx = parseInt(el.dataset.slotIndex);
      const slot = ex.slots[idx];
      if (selections[idx] === slot.correct) {
        el.style.borderColor = "var(--accent-green)";
        el.style.background = "rgba(74, 222, 128, 0.2)";
        el.style.color = "var(--accent-green)";
      } else {
        el.style.borderColor = "var(--accent-red)";
        el.style.background = "rgba(248, 113, 113, 0.2)";
        el.style.color = "var(--accent-red)";
        // Show correct answer
        el.textContent = selections[idx] + " → " + slot.correct;
      }
    });

    // Next exercise after delay (wait for effects to play out)
    setTimeout(() => {
      currentExIndex++;
      if (currentExIndex < exercises.length) {
        loadExercise();
      } else {
        showResults();
      }
    }, 2500);
  });
}

function showFeedback(msg, type) {
  feedbackEl.textContent = msg;
  feedbackEl.className = "feedback " + type;
  setTimeout(() => {
    feedbackEl.classList.add("hidden");
  }, 2000);
}

function showResults() {
  // Save to localStorage
  addToTotalScore(score);

  showScreen(resultsScreen);
  const total = exercises.length;
  const ratio = score / total;

  // Stars
  resultsStars.innerHTML = "";
  const starCount = ratio >= 0.9 ? 3 : ratio >= 0.6 ? 2 : ratio >= 0.3 ? 1 : 0;
  for (let i = 0; i < 3; i++) {
    const star = document.createElement("span");
    star.className = "star";
    if (i < starCount) {
      star.classList.add("earned");
      star.textContent = "⭐";
      star.style.animationDelay = i * 0.2 + "s";
    } else {
      star.textContent = "☆";
      star.style.color = "var(--card-border)";
    }
    resultsStars.appendChild(star);
  }

  resultsScore.textContent = `${score} / ${total} potions réussies`;

  if (ratio >= 0.9) {
    resultsMessage.textContent =
      "Tu es un véritable maître alchimiste ! Extraordinaire !";
  } else if (ratio >= 0.6) {
    resultsMessage.textContent =
      "Très bien ! Continue à t'entraîner pour devenir un maître !";
  } else if (ratio >= 0.3) {
    resultsMessage.textContent =
      "Bon début ! Réessaie pour améliorer ton score !";
  } else {
    resultsMessage.textContent =
      "Ne te décourage pas ! Chaque alchimiste a commencé par apprendre !";
  }
}

// ===== Utilities =====
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ===== Event Listeners =====
document.querySelectorAll(".btn-level").forEach((btn) => {
  btn.addEventListener("click", () => {
    startGame(btn.dataset.level);
  });
});

btnValidate.addEventListener("click", validateAnswer);

btnReplay.addEventListener("click", () => {
  startGame(currentLevel);
});

btnMenu.addEventListener("click", () => {
  refreshTotalScore();
  showScreen(titleScreen);
});

btnBack.addEventListener("click", () => {
  // Save partial score before quitting
  if (score > 0) addToTotalScore(score);
  refreshTotalScore();
  showScreen(titleScreen);
});

// ===== Init =====
refreshTotalScore();
initThree();
