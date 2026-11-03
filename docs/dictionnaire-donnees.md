# Dictionnaire des données

> Un champ par ligne, d'après `SUJET.md` et le fichier de `donnees/`. La première ligne sert de modèle.

| Champ | Signification | Type | Règle de validation | Unité | Exemple |
| --- | --- | --- | --- | --- | --- |
| `id` | Identifiant unique | texte | non vide, absent des données | — | N01 |
| nomCommun | nom de l'espece | texte | non vide | - | cacao |
| groupe | groupe botanique | liste | non vide | - | angiosperme |
| nombrePlants | nombre total de pied par ligne | nombre entier positif ou nul | non vide | - | 30 |
| dateReleve |date a laquelle les donnees ont ete releve | AAAA-MM-JJ  | non vide | - | 2026-10-24 |

**Listes de valeurs autorisées** : angiosperme, gymnosperme

**Sources** : donnees/plants.json
