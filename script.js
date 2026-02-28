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
  scene.background = new THREE.Color(0x1a0e2e);
  scene.fog = new THREE.FogExp2(0x1a0e2e, 0.04);

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

  // Lights
  const ambient = new THREE.AmbientLight(0x6633aa, 0.4);
  scene.add(ambient);

  const mainLight = new THREE.PointLight(0xf0c040, 0.8, 20);
  mainLight.position.set(2, 4, 3);
  mainLight.castShadow = true;
  scene.add(mainLight);

  const fillLight = new THREE.PointLight(0x4444ff, 0.3, 15);
  fillLight.position.set(-3, 2, -2);
  scene.add(fillLight);

  // Ground glow
  const groundGeo = new THREE.CircleGeometry(8, 32);
  const groundMat = new THREE.MeshStandardMaterial({
    color: 0x2d1b4e,
    roughness: 1,
  });
  const ground = new THREE.Mesh(groundGeo, groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -1.2;
  ground.receiveShadow = true;
  scene.add(ground);

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
  const robeMat = new THREE.MeshStandardMaterial({
    color: 0x2a1555,
    roughness: 0.7,
  });
  const skinMat = new THREE.MeshStandardMaterial({
    color: 0xf0c8a0,
    roughness: 0.8,
  });
  const hatMat = new THREE.MeshStandardMaterial({
    color: 0x1a0e3e,
    roughness: 0.6,
  });

  // Robe (body) — cone
  const robeGeo = new THREE.ConeGeometry(0.45, 1.4, 12);
  const robe = new THREE.Mesh(robeGeo, robeMat);
  robe.position.y = 0.7;
  wizardGroup.add(robe);

  // Head
  const headGeo = new THREE.SphereGeometry(0.22, 12, 12);
  const head = new THREE.Mesh(headGeo, skinMat);
  head.position.y = 1.55;
  wizardGroup.add(head);

  // Eyes
  const eyeMat = new THREE.MeshStandardMaterial({
    color: 0x222222,
    roughness: 0.5,
  });
  const eyeGeo = new THREE.SphereGeometry(0.035, 6, 6);
  const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
  eyeL.position.set(-0.08, 1.58, 0.19);
  wizardGroup.add(eyeL);
  const eyeR = new THREE.Mesh(eyeGeo, eyeMat);
  eyeR.position.set(0.08, 1.58, 0.19);
  wizardGroup.add(eyeR);

  // Nose
  const noseGeo = new THREE.ConeGeometry(0.04, 0.1, 6);
  const nose = new THREE.Mesh(noseGeo, skinMat);
  nose.position.set(0, 1.52, 0.22);
  nose.rotation.x = -Math.PI / 2;
  wizardGroup.add(nose);

  // Beard
  const beardGeo = new THREE.ConeGeometry(0.14, 0.4, 8);
  const beardMat = new THREE.MeshStandardMaterial({
    color: 0xcccccc,
    roughness: 0.9,
  });
  const beard = new THREE.Mesh(beardGeo, beardMat);
  beard.position.set(0, 1.28, 0.1);
  beard.rotation.x = 0.15;
  wizardGroup.add(beard);

  // Hat — pointed wizard hat
  const hatBrimGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.04, 16);
  const hatBrim = new THREE.Mesh(hatBrimGeo, hatMat);
  hatBrim.position.y = 1.72;
  wizardGroup.add(hatBrim);

  const hatConeGeo = new THREE.ConeGeometry(0.25, 0.6, 12);
  const hatCone = new THREE.Mesh(hatConeGeo, hatMat);
  hatCone.position.y = 2.04;
  hatCone.rotation.z = 0.1; // slight tilt
  wizardGroup.add(hatCone);

  // Hat star
  const starMat = new THREE.MeshStandardMaterial({
    color: 0xf0c040,
    emissive: 0xf0c040,
    emissiveIntensity: 0.5,
  });
  const starGeo = new THREE.SphereGeometry(0.04, 6, 6);
  const star = new THREE.Mesh(starGeo, starMat);
  star.position.set(0.08, 1.88, 0.2);
  wizardGroup.add(star);

  // Arm + staff (stirring arm) — pivots from shoulder
  wizardArm = new THREE.Group();
  wizardArm.position.set(-0.3, 1.2, 0);

  // Upper arm
  const armGeo = new THREE.CylinderGeometry(0.05, 0.04, 0.5, 6);
  const arm = new THREE.Mesh(armGeo, robeMat);
  arm.position.set(0, -0.15, 0.2);
  arm.rotation.x = Math.PI / 3;
  wizardArm.add(arm);

  // Staff
  const staffGeo = new THREE.CylinderGeometry(0.025, 0.03, 1.2, 6);
  const staffMat = new THREE.MeshStandardMaterial({
    color: 0x6b3a1f,
    roughness: 0.7,
  });
  const staff = new THREE.Mesh(staffGeo, staffMat);
  staff.position.set(0, -0.45, 0.55);
  staff.rotation.x = Math.PI / 2.8;
  wizardArm.add(staff);

  // Staff tip glow
  const tipMat = new THREE.MeshStandardMaterial({
    color: 0xaa66ff,
    emissive: 0x7733cc,
    emissiveIntensity: 1,
  });
  const tipGeo = new THREE.SphereGeometry(0.05, 6, 6);
  const tip = new THREE.Mesh(tipGeo, tipMat);
  tip.position.set(0, -0.75, 0.85);
  wizardArm.add(tip);

  wizardGroup.add(wizardArm);

  // Position wizard to the right of cauldron
  wizardGroup.position.set(1.8, -1.2, 0.3);
  wizardGroup.rotation.y = -0.4; // face the cauldron
  scene.add(wizardGroup);
}

function buildCat() {
  catGroup = new THREE.Group();
  const catMat = new THREE.MeshStandardMaterial({
    color: 0x1a1a1a,
    roughness: 0.8,
  });

  // Body — elongated sphere
  const bodyGeo = new THREE.SphereGeometry(0.25, 12, 10);
  const body = new THREE.Mesh(bodyGeo, catMat);
  body.scale.set(1, 0.8, 1.5);
  body.position.y = 0.25;
  catGroup.add(body);

  // Head
  const headGeo = new THREE.SphereGeometry(0.18, 12, 10);
  const head = new THREE.Mesh(headGeo, catMat);
  head.position.set(0, 0.4, 0.3);
  catGroup.add(head);

  // Ears
  const earGeo = new THREE.ConeGeometry(0.06, 0.12, 4);
  const earL = new THREE.Mesh(earGeo, catMat);
  earL.position.set(-0.1, 0.57, 0.28);
  earL.rotation.z = -0.2;
  catGroup.add(earL);
  const earR = new THREE.Mesh(earGeo, catMat);
  earR.position.set(0.1, 0.57, 0.28);
  earR.rotation.z = 0.2;
  catGroup.add(earR);

  // Inner ears (pink)
  const innerEarMat = new THREE.MeshStandardMaterial({
    color: 0x995566,
    roughness: 0.8,
  });
  const innerEarGeo = new THREE.ConeGeometry(0.03, 0.07, 4);
  const innerEarL = new THREE.Mesh(innerEarGeo, innerEarMat);
  innerEarL.position.set(-0.1, 0.56, 0.3);
  innerEarL.rotation.z = -0.2;
  catGroup.add(innerEarL);
  const innerEarR = new THREE.Mesh(innerEarGeo, innerEarMat);
  innerEarR.position.set(0.1, 0.56, 0.3);
  innerEarR.rotation.z = 0.2;
  catGroup.add(innerEarR);

  // Eyes — glowing green
  const eyeMat = new THREE.MeshStandardMaterial({
    color: 0x44ff66,
    emissive: 0x22cc44,
    emissiveIntensity: 0.8,
  });
  const eyeGeo = new THREE.SphereGeometry(0.035, 8, 8);
  const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
  eyeL.position.set(-0.07, 0.43, 0.45);
  catGroup.add(eyeL);
  const eyeR = new THREE.Mesh(eyeGeo, eyeMat);
  eyeR.position.set(0.07, 0.43, 0.45);
  catGroup.add(eyeR);

  // Pupils — vertical slits
  const pupilMat = new THREE.MeshStandardMaterial({
    color: 0x000000,
    roughness: 0.5,
  });
  const pupilGeo = new THREE.SphereGeometry(0.018, 4, 6);
  const pupilL = new THREE.Mesh(pupilGeo, pupilMat);
  pupilL.scale.set(0.5, 1, 1);
  pupilL.position.set(-0.07, 0.43, 0.48);
  catGroup.add(pupilL);
  const pupilR = new THREE.Mesh(pupilGeo, pupilMat);
  pupilR.scale.set(0.5, 1, 1);
  pupilR.position.set(0.07, 0.43, 0.48);
  catGroup.add(pupilR);

  // Nose (tiny pink triangle)
  const noseGeo = new THREE.ConeGeometry(0.02, 0.03, 3);
  const noseMat = new THREE.MeshStandardMaterial({
    color: 0xdd8899,
    roughness: 0.7,
  });
  const nose = new THREE.Mesh(noseGeo, noseMat);
  nose.position.set(0, 0.39, 0.47);
  nose.rotation.x = Math.PI;
  catGroup.add(nose);

  // Tail — chain of spheres in a curve
  catTail = new THREE.Group();
  const tailSegments = 8;
  for (let i = 0; i < tailSegments; i++) {
    const t = i / (tailSegments - 1);
    const segGeo = new THREE.SphereGeometry(0.035 - t * 0.015, 6, 6);
    const seg = new THREE.Mesh(segGeo, catMat);
    seg.position.set(0, 0.2 + t * 0.5, -0.3 - t * 0.3);
    catTail.add(seg);
  }
  catGroup.add(catTail);

  // Front paws
  const pawGeo = new THREE.SphereGeometry(0.06, 6, 6);
  const pawL = new THREE.Mesh(pawGeo, catMat);
  pawL.scale.y = 0.5;
  pawL.position.set(-0.1, 0.06, 0.3);
  catGroup.add(pawL);
  const pawR = new THREE.Mesh(pawGeo, catMat);
  pawR.scale.y = 0.5;
  pawR.position.set(0.1, 0.06, 0.3);
  catGroup.add(pawR);

  // Position cat to the left of cauldron, facing right (toward cauldron)
  catGroup.position.set(-1.8, -1.2, 0.5);
  catGroup.rotation.y = 0.5; // look toward cauldron
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

  // Wizard stirring animation
  if (wizardArm) {
    wizardArm.rotation.y = Math.sin(t * 1.5) * 0.3;
  }
  if (wizardGroup) {
    wizardGroup.children[1].position.y = 1.55 + Math.sin(t * 2) * 0.01; // head bob
  }

  // Cat tail sway
  if (catTail) {
    catTail.children.forEach((seg, i) => {
      const phase = i * 0.3;
      seg.position.x = Math.sin(t * 2 + phase) * 0.05 * (i / catTail.children.length);
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
