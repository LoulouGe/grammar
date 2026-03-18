# 🧪 L'Atelier de Potions Grammaticales

Jeu éducatif pour apprendre les accords grammaticaux en français. L'enfant est un alchimiste qui assemble des mots-ingrédients pour créer des potions. Les accords corrects déclenchent des étincelles magiques, les erreurs font monter un nuage de fumée au-dessus du chaudron.

Un magicien mélange la potion avec son bâton, accompagné de son chat noir aux yeux verts.

## Comment jouer

1. Choisis un niveau : **Apprenti**, **Alchimiste** ou **Maître**
2. Lis la phrase à compléter et l'indice
3. Clique sur les mots pour remplir les cases manquantes
4. Appuie sur **"Lancer la potion !"**
5. Regarde l'Erlenmeyer verser son contenu dans le chaudron...
6. Les bonnes réponses sont sauvegardées d'une partie à l'autre

## Modes de jeu

- `Classique` : progression normale niveau par niveau
- `Combo` : la partie s'arrête à la première erreur
- `Chrono` : 40 secondes pour marquer le plus de points possible
- `Survie` : réussir 10 potions avec seulement 2 erreurs autorisées

## Les niveaux

| Niveau | Exercices | Contenu |
|--------|-----------|---------|
| Apprenti | 5 | Accords adjectif-nom (genre et nombre) |
| Alchimiste | 5 | Accords sujet-verbe et participe passé |
| Maître | 5 | Un peu de tout ! Accords multiples |

## Lancer le jeu

Ouvrir `index.html` dans un navigateur. Aucune installation nécessaire.

Pour un serveur local :

```bash
python3 -m http.server 8080
```

## Technologies

- HTML / CSS / JavaScript (vanilla, aucune dépendance)
- [Three.js](https://threejs.org/) r128 (CDN) pour la scène 3D
- Google Fonts : Playfair Display, Poppins
- localStorage pour la persistance du score
