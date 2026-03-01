# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Context

"L'Atelier de Potions Grammaticales" — an educational French grammar game for children. The player is an alchemist who assembles words to build grammatically correct sentences. Correct answers make the potion sparkle, wrong answers make the cauldron explode. All user-facing text (UI, messages, README) must be in French. Code identifiers and code comments can remain in English.

## Development

No build tools, no package manager, no dependencies. Pure vanilla HTML/CSS/JS.

```bash
# Run local dev server
python3 -m http.server 8080
# Then open http://localhost:8080
```

Alternatively, open `index.html` directly in a browser or use VS Code Live Server.

Deployed automatically via GitHub Pages from `main` branch — no build step needed.

## Architecture

Single-page app with three files at the root:

- **index.html** — Page structure: title screen, game overlay, results screen
- **script.js** — All JS: exercise data (15 exercises), game engine, Three.js 3D scene, pouring animation
- **style.css** — Alchemy theme, word card animations, responsive layout

External libraries loaded via CDN (no npm/build):

- **Three.js r128** — 3D scene: cauldron, bubbles, Erlenmeyer flask pouring animation, particle effects

### Game Flow

Title screen → pick a level → exercises appear one by one → click word cards to fill sentence slots → "Lancer la potion !" → Erlenmeyer flask pours into cauldron → success (sparkles) or fail (explosion) → next exercise → results screen with stars.

### Levels

- **Apprenti** (5 exercises) — adjective-noun agreement (gender/number)
- **Alchimiste** (5 exercises) — subject-verb agreement + participe passé
- **Maître** (5 exercises) — mixed: all of the above combined, multi-slot

### 3D Scene

- **Cauldron**: LatheGeometry with rounded witch-cauldron profile, handles, stubby feet
- **Wizard** (right of cauldron): cone robe, sphere head, pointed hat with star, beard, stirring arm with staff — idle stirring animation
- **Black cat** (left of cauldron): sphere body/head, cone ears with pink inner ears, glowing green eyes with slit pupils, segmented tail — idle tail sway animation
- **Erlenmeyer flask**: LatheGeometry with conical base, long neck, cork, liquid inside
- **Pouring animation**: flask moves in, tilts, pours droplets into cauldron, then triggers result effect
- **Success effect**: green glow, golden/green sparkle particles, liquid shimmer
- **Fail effect**: red flash, explosion particles, smoke puffs, cauldron shake

### Score System

- **In-game counter**: 🧪 emoji + count (top-left), pops on correct answer
- **Total score**: persisted in `localStorage` key `potions-total-score`, displayed on title screen
- Partial scores are saved when quitting mid-game via the back button

### Exercise Data Format

Each exercise has: fixed word slots, choice slots (4 options each, one correct), hint, success/fail messages. Multi-slot exercises require filling choices in order.

## Code Conventions

- Google Fonts loaded via CSS: Playfair Display (serif headings), Poppins (sans-serif body)
- CSS custom properties for theming (--accent-gold, --accent-green, --bg-dark, etc.)
- No build step, no transpilation
