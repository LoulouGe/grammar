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
  // --- Niveau Archimage (16-20) ---
  {
    id: 16,
    level: "archimage",
    hint: "Construis toute la phrase ! Une sorcière et sa potion…",
    slots: [
      { choices: ["La", "Le", "Les", "Un"], correct: "La" },
      { choices: ["sorcière", "sorcier", "sorcières", "sorciers"], correct: "sorcière" },
      { choices: ["prépare", "préparent", "prépares", "préparons"], correct: "prépare" },
      { choices: ["une", "un", "des", "le"], correct: "une" },
      { choices: ["potion", "potions", "poison", "potionnes"], correct: "potion" },
    ],
    agreementGroups: [
      { slots: [0, 1, 2], valid: [
        ["La", "sorcière", "prépare"],
        ["Le", "sorcier", "prépare"],
        ["Les", "sorcières", "préparent"],
        ["Les", "sorciers", "préparent"],
        ["Un", "sorcier", "prépare"],
      ]},
      { slots: [3, 4], valid: [
        ["une", "potion"],
        ["un", "poison"],
        ["des", "potions"],
        ["le", "poison"],
      ]},
    ],
    successMsg: "La sorcière te félicite ! 🧙‍♀️✨",
    failMsg: "La potion tourne au vinaigre ! 💥",
  },
  {
    id: 17,
    level: "archimage",
    hint: "Construis toute la phrase ! Des dragons redoutables…",
    slots: [
      { choices: ["Les", "Le", "La", "Des"], correct: "Les" },
      { choices: ["dragons", "dragon", "dragones", "dragonnes"], correct: "dragons" },
      { choices: ["crachent", "crache", "crachons", "crachez"], correct: "crachent" },
      { choices: ["des", "de", "les", "une"], correct: "des" },
      { choices: ["flammes", "flamme", "flammés", "flammées"], correct: "flammes" },
    ],
    agreementGroups: [
      { slots: [0, 1, 2], valid: [
        ["Le", "dragon", "crache"],
        ["Les", "dragons", "crachent"],
        ["Des", "dragons", "crachent"],
      ]},
      { slots: [3, 4], valid: [
        ["des", "flammes"],
        ["les", "flammes"],
        ["une", "flamme"],
      ]},
    ],
    successMsg: "Les dragons t'acclament ! 🐉🔥",
    failMsg: "Les dragons sont déçus ! 💥",
  },
  {
    id: 18,
    level: "archimage",
    hint: "Construis toute la phrase ! Un chat fait la sieste…",
    slots: [
      { choices: ["Le", "La", "Les", "Un"], correct: "Le" },
      { choices: ["petit", "petite", "petits", "petites"], correct: "petit" },
      { choices: ["chat", "chatte", "chats", "chattes"], correct: "chat" },
      { choices: ["noir", "noire", "noirs", "noires"], correct: "noir" },
      { choices: ["dort", "dorment", "dors", "dormons"], correct: "dort" },
    ],
    agreementGroups: [
      { slots: [0, 1, 2, 3, 4], valid: [
        ["Le", "petit", "chat", "noir", "dort"],
        ["La", "petite", "chatte", "noire", "dort"],
        ["Les", "petits", "chats", "noirs", "dorment"],
        ["Les", "petites", "chattes", "noires", "dorment"],
        ["Un", "petit", "chat", "noir", "dort"],
      ]},
    ],
    successMsg: "Le chat ronronne de bonheur ! 🐱💤",
    failMsg: "Le chat s'enfuit ! 💥",
  },
  {
    id: 19,
    level: "archimage",
    hint: "Construis toute la phrase ! De grandes sorcières à l'œuvre…",
    slots: [
      { choices: ["Les", "Le", "La", "Des"], correct: "Les" },
      { choices: ["grandes", "grand", "grande", "grands"], correct: "grandes" },
      { choices: ["sorcières", "sorcière", "sorciers", "sorcier"], correct: "sorcières" },
      { choices: ["préparent", "prépare", "préparons", "préparez"], correct: "préparent" },
      { choices: ["des", "de", "les", "une"], correct: "des" },
      { choices: ["potions", "potion", "potionnes", "potionnés"], correct: "potions" },
    ],
    agreementGroups: [
      { slots: [0, 1, 2, 3], valid: [
        ["La", "grande", "sorcière", "prépare"],
        ["Le", "grand", "sorcier", "prépare"],
        ["Les", "grandes", "sorcières", "préparent"],
        ["Les", "grands", "sorciers", "préparent"],
      ]},
      { slots: [4, 5], valid: [
        ["des", "potions"],
        ["les", "potions"],
        ["une", "potion"],
      ]},
    ],
    successMsg: "Le cercle de sorcières applaudit ! 🧙‍♀️🧙‍♀️✨",
    failMsg: "Le cercle est rompu ! 💥",
  },
  {
    id: 20,
    level: "archimage",
    hint: "La phrase ultime ! Auxiliaire, participe passé et adjectif…",
    slots: [
      { choices: ["La", "Le", "Les", "Un"], correct: "La" },
      { choices: ["belle", "beau", "belles", "beaux"], correct: "belle" },
      { choices: ["sorcière", "sorcier", "sorcières", "sorciers"], correct: "sorcière" },
      { choices: ["a", "ont", "avons", "as"], correct: "a" },
      { choices: ["préparé", "préparée", "préparés", "préparées"], correct: "préparé" },
      { choices: ["une", "un", "des", "le"], correct: "une" },
      { choices: ["potion", "potions", "poison", "potionnes"], correct: "potion" },
    ],
    agreementGroups: [
      { slots: [0, 1, 2, 3, 4], valid: [
        ["La", "belle", "sorcière", "a", "préparé"],
        ["Le", "beau", "sorcier", "a", "préparé"],
        ["Les", "belles", "sorcières", "ont", "préparé"],
        ["Les", "beaux", "sorciers", "ont", "préparé"],
        ["Un", "beau", "sorcier", "a", "préparé"],
      ]},
      { slots: [5, 6], valid: [
        ["une", "potion"],
        ["un", "poison"],
        ["des", "potions"],
        ["le", "poison"],
      ]},
    ],
    successMsg: "Tu es un véritable Archimage ! 👑🎉",
    failMsg: "L'incantation suprême a échoué ! 💥",
  },
];

// Duplicate exercises to reach 10x more phrases when requested.
// This keeps original exercises readable while providing more items for longer play sessions.
(function expandExercises(multiplier = 10) {
  const original = JSON.parse(JSON.stringify(EXERCISES));
  const baseCount = original.length;
  const expanded = [];
  for (let m = 0; m < multiplier; m++) {
    for (let i = 0; i < baseCount; i++) {
      const ex = JSON.parse(JSON.stringify(original[i]));
      ex.id = i + 1 + m * baseCount;
      expanded.push(ex);
    }
  }
  // Replace contents of EXERCISES array (const) by mutating it
  EXERCISES.length = 0;
  Array.prototype.push.apply(EXERCISES, expanded);
})();

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
const gameScoreEl = document.getElementById("game-score");
const gameScoreLabel = document.getElementById("game-score-label");
const gameScoreCount = document.getElementById("game-score-count");
const btnBack = document.getElementById("btn-back");
const gameModeStatus = document.getElementById("game-mode-status");
const resultsModeSummary = document.getElementById("results-mode-summary");
const cauldronAura = document.getElementById("cauldron-aura");

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
  const totalScoreCount = document.getElementById("total-score-count");
  if (totalScoreCount) {
    totalScoreCount.textContent = getTotalScore();
  }
}

// ===== Game State =====
let currentLevel = "apprenti";
let currentMode = "classic";
let exercises = [];
let currentExIndex = 0;
let score = 0;
let selections = {}; // slotIndex -> chosen word
let activeSlotIndex = null; // which choice slot is being filled
let streak = 0;
let bestStreak = 0;
let lives = 2;
let chronoLeft = 40;
let chronoInterval = null;
let gameEnded = false;
let advanceTimeout = null;
let wrongAnswers = 0;
let successfulAnswers = 0;
let roundTarget = 0;
let pendingLifeLoss = false;

const MODE_CONFIG = {
  classic: {
    label: "Classique",
    description: "Partie normale",
  },
  combo: {
    label: "Combo",
    description: "Les series augmentent les points",
  },
  chrono: {
    label: "Chrono",
    description: "40 secondes",
  },
  survival: {
    label: "Survie",
    description: "10 potions, 2 erreurs max",
  },
};

// ===== Three.js Scene =====
let scene, camera, renderer;
let bubbles = [];
let effectParticles = [];
let clock;
let animationId;

function isCompactMobile() {
  return window.innerWidth <= 600;
}

function updateCameraLayout() {
  if (!camera) return;

  if (isCompactMobile()) {
    camera.position.set(0, 2.35, 7.4);
  } else {
    camera.position.set(0, 2, 6);
  }
  camera.lookAt(0, 0.5, 0);
}

function initThree() {
  const canvas = document.getElementById("scene");
  clock = new THREE.Clock();

  scene = new THREE.Scene();
  // No scene.background or fog — canvas is transparent over CSS backdrop

  camera = new THREE.PerspectiveCamera(
    50,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  updateCameraLayout();

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;

  // Lights — warm workshop ambiance
  const ambient = new THREE.AmbientLight(0xffcc88, 0.7);
  scene.add(ambient);

  const mainLight = new THREE.PointLight(0xffc845, 1.0, 25);
  mainLight.position.set(2, 4, 3);
  mainLight.castShadow = true;
  scene.add(mainLight);

  const fillLight = new THREE.PointLight(0xb476f0, 0.3, 18);
  fillLight.position.set(-3, 2, -2);
  scene.add(fillLight);

  // Start bubbles
  for (let i = 0; i < 12; i++) {
    spawnBubble();
  }

  window.addEventListener("resize", onResize);
  animate();
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

  renderer.render(scene, camera);
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  updateCameraLayout();
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

  const mobileLayout = isCompactMobile();
  // Start position: top-right of the scene
  const startPos = mobileLayout
    ? new THREE.Vector3(2.15, 3.45, 1.4)
    : new THREE.Vector3(2.5, 4, 1.5);
  // Pour position: above cauldron, tilted
  const pourPos = mobileLayout
    ? new THREE.Vector3(0.42, 1.9, 0.28)
    : new THREE.Vector3(0.6, 2.2, 0.3);

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
      triggerCharacterReaction(isCorrect);
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

function playCauldronAura(type) {
  const cauldronEl = document.getElementById("cauldron-2d");
  if (cauldronAura) {
    cauldronAura.classList.remove("aura-success", "aura-fail");
    void cauldronAura.offsetWidth;
    cauldronAura.classList.add(type === "success" ? "aura-success" : "aura-fail");
    setTimeout(() => {
      cauldronAura.classList.remove("aura-success", "aura-fail");
    }, type === "success" ? 2200 : 1400);
  }

  if (cauldronEl) {
    cauldronEl.classList.remove("cauldron-success", "cauldron-fail");
    void cauldronEl.offsetWidth;
    cauldronEl.classList.add(type === "success" ? "cauldron-success" : "cauldron-fail");
    setTimeout(() => {
      cauldronEl.classList.remove("cauldron-success", "cauldron-fail");
    }, 1800);
  }
}

function spawnSuccessSparks() {
  for (let i = 0; i < 72; i++) {
    const geo = new THREE.SphereGeometry(0.012 + Math.random() * 0.02, 4, 4);
    const colors = [0xfff1a8, 0xffd84a, 0xffffff, 0x9bffe2];
    const mat = new THREE.MeshStandardMaterial({
      color: colors[Math.floor(Math.random() * colors.length)],
      emissive: 0xffc93a,
      emissiveIntensity: 1.3,
      transparent: true,
      opacity: 0.95,
    });
    const p = new THREE.Mesh(geo, mat);
    p.position.set(
      (Math.random() - 0.5) * 0.55,
      0.82 + Math.random() * 0.18,
      (Math.random() - 0.5) * 0.55
    );
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.6 + Math.random() * 2.1;
    p.userData.velocity = new THREE.Vector3(
      Math.cos(angle) * speed,
      2.2 + Math.random() * 3.8,
      Math.sin(angle) * speed
    );
    p.userData.life = 0.8 + Math.random() * 0.65;
    p.userData.maxLife = p.userData.life;
    scene.add(p);
    effectParticles.push(p);
  }
}

function spawnSmokeCloud() {
  for (let i = 0; i < 28; i++) {
    const geo = new THREE.SphereGeometry(0.05 + Math.random() * 0.09, 5, 5);
    const colors = [0x3d3a3a, 0x525050, 0x6c6868, 0x2f2c2c];
    const mat = new THREE.MeshStandardMaterial({
      color: colors[Math.floor(Math.random() * colors.length)],
      emissive: 0x191616,
      emissiveIntensity: 0.2,
      transparent: true,
      opacity: 0.72,
    });
    const p = new THREE.Mesh(geo, mat);
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * 0.3;
    p.position.set(Math.cos(angle) * radius, 0.78 + Math.random() * 0.18, Math.sin(angle) * radius);
    p.userData.velocity = new THREE.Vector3(
      (Math.random() - 0.5) * 0.35,
      0.5 + Math.random() * 1.1,
      (Math.random() - 0.5) * 0.35
    );
    p.userData.life = 1.3 + Math.random() * 1;
    p.userData.maxLife = p.userData.life;
    scene.add(p);
    effectParticles.push(p);
  }
}

// ===== 3D Effects =====
function successEffect() {
  playCauldronAura("success");

  const glow = new THREE.PointLight(0xffdf70, 2.4, 12);
  glow.position.set(0, 1.8, 0);
  scene.add(glow);

  let start = performance.now();
  function pulseGlow() {
    const elapsed = (performance.now() - start) / 1000;
    if (elapsed > 1.8) {
      scene.remove(glow);
      return;
    }
    glow.intensity = (1.4 + Math.sin(elapsed * Math.PI * 2) * 1.2) * (1 - elapsed / 1.8);
    requestAnimationFrame(pulseGlow);
  }
  pulseGlow();

  spawnSuccessSparks();

  for (let i = 0; i < 20; i++) {
    const geo = new THREE.SphereGeometry(0.015, 4, 4);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xfef3a0,
      emissive: 0x7bffd7,
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
  playCauldronAura("fail");

  const flash = new THREE.PointLight(0xff8d66, 1.8, 8);
  flash.position.set(0, 1.7, 0);
  scene.add(flash);

  let start = performance.now();
  function pulseFlash() {
    const elapsed = (performance.now() - start) / 1000;
    if (elapsed > 1) {
      scene.remove(flash);
      return;
    }
    flash.intensity = (2.5 - elapsed * 1.5) * (1 - elapsed / 1);
    requestAnimationFrame(pulseFlash);
  }
  pulseFlash();

  spawnSmokeCloud();

  for (let i = 0; i < 14; i++) {
    const size = 0.025 + Math.random() * 0.045;
    const geo = new THREE.SphereGeometry(size, 6, 6);
    const colors = [0x6f6a6a, 0x4f4a4a, 0x938b8b];
    const mat = new THREE.MeshStandardMaterial({
      color: colors[Math.floor(Math.random() * colors.length)],
      emissive: 0x2a2626,
      emissiveIntensity: 0.25,
      transparent: true,
      opacity: 0.8,
    });
    const p = new THREE.Mesh(geo, mat);
    p.position.set(
      (Math.random() - 0.5) * 0.35,
      0.86 + Math.random() * 0.12,
      (Math.random() - 0.5) * 0.35
    );
    const angle = Math.random() * Math.PI * 2;
    const force = 0.25 + Math.random() * 0.45;
    p.userData.velocity = new THREE.Vector3(
      Math.cos(angle) * force,
      0.65 + Math.random() * 0.6,
      Math.sin(angle) * force
    );
    p.userData.life = 1.1 + Math.random() * 0.7;
    p.userData.maxLife = p.userData.life;
    scene.add(p);
    effectParticles.push(p);
  }

  for (let i = 0; i < 18; i++) {
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
      (Math.random() - 0.5) * 0.55,
      0.9,
      (Math.random() - 0.5) * 0.55
    );
    p.userData.velocity = new THREE.Vector3(
      (Math.random() - 0.5) * 0.35,
      0.9 + Math.random() * 1.2,
      (Math.random() - 0.5) * 0.35
    );
    p.userData.life = 1.8 + Math.random() * 1.2;
    p.userData.maxLife = p.userData.life;
    scene.add(p);
    effectParticles.push(p);
  }

  const cauldronShake = document.getElementById("cauldron-2d");
  if (cauldronShake) {
    cauldronShake.classList.add("cauldron-shake");
    setTimeout(() => cauldronShake.classList.remove("cauldron-shake"), 800);
  }
}

// ===== 2D Character Reactions =====
function triggerCharacterReaction(isCorrect) {
  const wizard = document.getElementById("wizard-2d");
  if (!wizard) return;

  // Remove any existing reaction classes
  wizard.classList.remove("wizard-celebrate", "wizard-worried");

  // Force reflow so re-adding the class triggers animation
  void wizard.offsetWidth;

  if (isCorrect) {
    wizard.classList.add("wizard-celebrate");
  } else {
    wizard.classList.add("wizard-worried");
  }

  // Clean up after animations finish
  setTimeout(() => {
    wizard.classList.remove("wizard-celebrate", "wizard-worried");
  }, 2000);
}

// ===== Screen Management =====
function showScreen(screen) {
  [titleScreen, gameScreen, resultsScreen].forEach((s) =>
    s.classList.remove("active")
  );
  screen.classList.add("active");
}

function clearGameTimers() {
  if (chronoInterval) {
    clearInterval(chronoInterval);
    chronoInterval = null;
  }
  if (advanceTimeout) {
    clearTimeout(advanceTimeout);
    advanceTimeout = null;
  }
}

function updateModeStatus() {
  if (!gameModeStatus) return;

  let text = MODE_CONFIG[currentMode].label;

  if (currentMode === "combo") {
    text = `Combo x${Math.max(1, Math.min(4, 1 + Math.floor(streak / 2)))} · Serie ${streak}`;
  } else if (currentMode === "chrono") {
    text = `Temps restant : ${chronoLeft}s`;
  } else if (currentMode === "survival") {
    text = `Survie · ${successfulAnswers}/${roundTarget} · ${"❤️".repeat(lives)}${"🖤".repeat(Math.max(0, 2 - lives))}`;
  } else {
    text = MODE_CONFIG[currentMode].label;
  }

  gameModeStatus.textContent = text;
  gameModeStatus.classList.remove("hidden");
}

function updateModeButtons() {
  document.querySelectorAll(".btn-mode").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.mode === currentMode);
  });
}

function selectMode(mode) {
  currentMode = MODE_CONFIG[mode] ? mode : "classic";
  updateModeButtons();
}

function setupModeState() {
  streak = 0;
  bestStreak = 0;
  lives = 2;
  chronoLeft = 40;
  wrongAnswers = 0;
  successfulAnswers = 0;
  gameEnded = false;
  pendingLifeLoss = false;
  clearGameTimers();
  roundTarget = currentMode === "survival" ? 10 : exercises.length;
  updateModeStatus();

  if (currentMode === "chrono") {
    chronoInterval = setInterval(() => {
      if (gameEnded) return;
      chronoLeft = Math.max(0, chronoLeft - 1);
      updateModeStatus();
      if (chronoLeft === 0) {
        endGame();
      }
    }, 1000);
  }
}

function endGame() {
  if (gameEnded) return;
  gameEnded = true;
  clearGameTimers();
  showResults();
}

function resetGameUi() {
  gameEnded = true;
  selections = {};
  activeSlotIndex = null;
  if (feedbackEl) {
    feedbackEl.className = "feedback hidden";
    feedbackEl.textContent = "";
  }
  btnValidate.disabled = true;
  wordCardsEl.innerHTML = "";
  sentenceBuilder.innerHTML = "";
}

function getModePoints() {
  if (currentMode === "combo") {
    return Math.max(1, Math.min(4, 1 + Math.floor(streak / 2)));
  }
  return 1;
}

function getNextExerciseIndex() {
  if (currentMode === "chrono" || currentMode === "combo") {
    return (currentExIndex + 1) % exercises.length;
  }
  return currentExIndex + 1;
}

function getResultsTitle() {
  if (currentMode === "chrono") return "Le sablier s'est vide !";
  if (currentMode === "survival") return lives > 0 && successfulAnswers >= roundTarget ? "Survie reussie !" : "La survie s'arrete ici !";
  if (currentMode === "combo") return "La serie est terminee !";
  return "Bravo, jeune alchimiste !";
}

function getModeSummary(total) {
  if (currentMode === "combo") {
    return `Partie terminee a la premiere erreur. Meilleure serie : ${bestStreak}.`;
  }
  if (currentMode === "chrono") {
    return `Tu as reussi ${successfulAnswers} bonne${successfulAnswers > 1 ? "s" : ""} reponse${successfulAnswers > 1 ? "s" : ""} en 40 secondes.`;
  }
  if (currentMode === "survival") {
    return `Objectif : ${roundTarget} potions. Erreurs : ${wrongAnswers}/2.`;
  }
  return `${score} / ${total} potions reussies dans ce niveau.`;
}

function getResultsRatio(total) {
  if (currentMode === "combo") {
    return Math.min(1, score / 12);
  }
  if (currentMode === "chrono") {
    return Math.min(1, successfulAnswers / 14);
  }
  if (currentMode === "survival") {
    return successfulAnswers / Math.max(1, roundTarget);
  }
  return total > 0 ? score / total : 0;
}

function updateScoreDisplay() {
  if (gameScoreLabel) {
    if (currentMode === "combo") {
      gameScoreLabel.textContent = "🔥 Score combo";
    } else if (currentMode === "chrono") {
      gameScoreLabel.textContent = "⏱ Score chrono";
    } else {
      gameScoreLabel.textContent = "🧪 Potions réussies";
    }
  }
  gameScoreCount.textContent = score;
}

// ===== Game Logic =====
function startGame(level) {
  currentLevel = level;
  const levelExercises = shuffleArray(EXERCISES.filter((e) => e.level === level));
  if (currentMode === "survival") {
    exercises = levelExercises.slice(0, 10);
  } else {
    exercises = levelExercises;
  }
  currentExIndex = 0;
  score = 0;
  setupModeState();
  updateScoreDisplay();
  showScreen(gameScreen);
  buildProgressBar();
  loadExercise();
}

function buildProgressBar() {
  progressBar.innerHTML = "";
  progressBar.classList.remove("hidden");

  if (currentMode === "combo") {
    progressBar.classList.add("hidden");
    return;
  }

  const totalSlots = currentMode === "chrono" ? 0 : exercises.length;
  for (let i = 0; i < totalSlots; i++) {
    const vial = document.createElement("div");
    vial.className = "progress-vial";
    if (currentMode === "classic" && i === 0) vial.classList.add("current");
    progressBar.appendChild(vial);
  }
}

function updateProgress(index, success) {
  if (currentMode === "chrono") {
    if (success && successfulAnswers <= 10) {
      const vial = document.createElement("div");
      vial.className = "progress-vial filled earned";
      progressBar.appendChild(vial);
    }
    return;
  }

  const vials = progressBar.querySelectorAll(".progress-vial");
  if (!vials.length) return;

  if (currentMode === "survival") {
    vials.forEach((v) => v.classList.remove("current", "earned"));
    if (success && index < vials.length) {
      vials[index].classList.add("filled", "earned");
    }
    const nextIndex = Math.min(successfulAnswers, vials.length - 1);
    if (successfulAnswers < vials.length) {
      vials[nextIndex].classList.add("current");
    }
    return;
  }

  vials.forEach((v) => v.classList.remove("current"));
  if (index < vials.length) {
    vials[index].classList.add(success ? "filled" : "failed");
  }
  if (index + 1 < vials.length) {
    vials[index + 1].classList.add("current");
  }
}

function loadExercise() {
  if (gameEnded) return;
  const ex = exercises[currentExIndex];
  if (!ex) {
    endGame();
    return;
  }
  selections = {};
  activeSlotIndex = null;
  updateModeStatus();

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

function isGroupValid(group, selections) {
  const selected = group.slots.map((i) => selections[i]);
  return group.valid.some((combo) =>
    combo.every((val, j) => val === selected[j])
  );
}

function validateAnswer() {
  if (gameEnded) return;
  const ex = exercises[currentExIndex];
  let correct;
  if (ex.agreementGroups) {
    correct = ex.agreementGroups.every((g) => isGroupValid(g, selections));
  } else {
    correct = true;
    ex.slots.forEach((slot, i) => {
      if (!slot.fixed && selections[i] !== slot.correct) {
        correct = false;
      }
    });
  }

  if (correct) {
    streak++;
    bestStreak = Math.max(bestStreak, streak);
    const points = getModePoints();
    score += points;
    successfulAnswers++;
    updateScoreDisplay();
    // Pop animation
    gameScoreEl.classList.remove("pop");
    void gameScoreEl.offsetWidth; // force reflow
    gameScoreEl.classList.add("pop");
  } else {
    wrongAnswers++;
    streak = 0;
    if (currentMode === "survival") {
      pendingLifeLoss = true;
    }
  }

  if (!(currentMode === "survival" && !correct)) {
    updateModeStatus();
  }

  // Disable further interaction immediately
  btnValidate.disabled = true;
  wordCardsEl
    .querySelectorAll(".word-card")
    .forEach((c) => c.classList.add("disabled"));

  // Start pouring animation — effects + feedback trigger after pour finishes
  pourVialAnimation(correct, () => {
    if (gameEnded) return;
    if (!correct && currentMode === "survival" && pendingLifeLoss) {
      lives = Math.max(0, lives - 1);
      pendingLifeLoss = false;
      updateModeStatus();
    }
    // Show feedback message after the pour + effect
    if (correct) {
      let successText = ex.successMsg;
      if (currentMode === "combo") {
        successText += ` +${getModePoints()} points`;
      }
      showFeedback(successText, "success");
    } else {
      let failText = ex.failMsg;
      if (currentMode === "survival") {
        failText += ` Il reste ${lives} vie${lives > 1 ? "s" : ""}.`;
      } else if (currentMode === "combo") {
        failText += " Fin du combo.";
      }
      showFeedback(failText, "error");
    }

    updateProgress(currentExIndex, correct);

    // Highlight correct answers
    sentenceBuilder.querySelectorAll(".slot.choice").forEach((el) => {
      const idx = parseInt(el.dataset.slotIndex);
      const slot = ex.slots[idx];
      let slotOk;
      if (correct) {
        slotOk = true;
      } else if (ex.agreementGroups) {
        const group = ex.agreementGroups.find((g) => g.slots.includes(idx));
        slotOk = group ? isGroupValid(group, selections) : selections[idx] === slot.correct;
      } else {
        slotOk = selections[idx] === slot.correct;
      }
      if (slotOk) {
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
    advanceTimeout = setTimeout(() => {
      advanceTimeout = null;
      if (gameEnded) return;
      if (currentMode === "combo" && !correct) {
        endGame();
        return;
      }
      if (currentMode === "survival" && lives === 0) {
        endGame();
        return;
      }
      if (currentMode === "survival" && successfulAnswers >= roundTarget) {
        endGame();
        return;
      }
      if (currentMode === "chrono" && chronoLeft === 0) {
        endGame();
        return;
      }
      currentExIndex = getNextExerciseIndex();
      if (currentMode === "chrono" || currentMode === "combo" || currentExIndex < exercises.length) {
        loadExercise();
      } else {
        endGame();
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
  const ratio = getResultsRatio(total);
  const resultsTitle = document.querySelector(".results-title");
  if (resultsTitle) {
    resultsTitle.textContent = getResultsTitle();
  }

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

  if (currentMode === "combo") {
    resultsScore.textContent = `${score} points de combo`;
  } else if (currentMode === "chrono") {
    resultsScore.textContent = `${score} points en 40 secondes`;
  } else if (currentMode === "survival") {
    resultsScore.textContent = `${successfulAnswers} / ${roundTarget} potions reussies`;
  } else {
    resultsScore.textContent = `${score} / ${total} potions réussies`;
  }

  resultsModeSummary.textContent = getModeSummary(total);

  if (currentMode === "survival" && lives === 0) {
    resultsMessage.textContent = "Tu as tenu jusqu'a la derniere etincelle.";
  } else if (currentMode === "survival" && successfulAnswers >= roundTarget) {
    resultsMessage.textContent = "Tu as reussi les 10 potions sans craquer.";
  } else if (currentMode === "chrono" && score >= 12) {
    resultsMessage.textContent = "Tu as garde un rythme incroyable du debut a la fin.";
  } else if (currentMode === "combo") {
    resultsMessage.textContent = "Une erreur et la serie s'arrete. Reessaie pour battre ton record.";
  } else if (ratio >= 0.9) {
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

  refreshTotalScore();
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
function requestFullscreen() {
  const el = document.documentElement;
  const rfs = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
  if (rfs && !document.fullscreenElement && !document.webkitFullscreenElement) {
    rfs.call(el).catch(() => {});
  }
}

document.querySelectorAll(".btn-level").forEach((btn) => {
  btn.addEventListener("click", () => {
    requestFullscreen();
    startGame(btn.dataset.level);
  });
});

document.querySelectorAll(".btn-mode").forEach((btn) => {
  btn.addEventListener("click", () => {
    selectMode(btn.dataset.mode);
  });
});

btnValidate.addEventListener("click", validateAnswer);

btnReplay.addEventListener("click", () => {
  clearGameTimers();
  startGame(currentLevel);
});

btnMenu.addEventListener("click", () => {
  clearGameTimers();
  resetGameUi();
  refreshTotalScore();
  showScreen(titleScreen);
});

btnBack.addEventListener("click", () => {
  clearGameTimers();
  resetGameUi();
  // Save partial score before quitting
  if (score > 0) addToTotalScore(score);
  refreshTotalScore();
  showScreen(titleScreen);
});

// ===== Init =====
selectMode(currentMode);
refreshTotalScore();
initThree();
