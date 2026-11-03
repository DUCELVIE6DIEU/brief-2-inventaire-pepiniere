# Inventaire de la pépinière

> Projet individuel du SAS DFS, brief 2 (sujet : [SUJET.md](SUJET.md)). Remplacez chaque ✏️ par votre texte, puis supprimez cette ligne.

## Contexte

L'outil est urilisé par un pépiniériste(responsable de pépinière). Son geste pro est l'inventaire quotidien: il compte les plants par espèce dans chaque parcelle. Son besoin: savoir rapidement quelles espèces sont en dessous du seuil critique de 10 plants pour lancer la production. Il saisit la liste des relevés (id, nom commun, groupe, nombre, date) dans le fichier JSON. Le programme lui affiche dans le terminal un tableau de synthèse, le nombre total, les espèces à produire en priorité et le taux de conformité des dates. Ce que l'outil ne fait pas : il ne fait pas de reconnaissance botanique sur photo, ne gère pas l'arrosage et ne commande pas automatiquement les graines.

## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/VOTRE-COMPTE/brief-2-inventaire-pepiniere.git
cd brief-2-inventaire-pepiniere
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Fonctionnalités

✏️ *Cochez seulement ce qui marche : `- [x]`.*

- [X] Données lues et enregistrées dans `donnees/plants.json`
- [X] Ajouter un plant, saisies invalides refusées sans arrêter le programme
- [X] Lister l'inventaire, message si l'inventaire est vide
- [X] Rechercher par code ou par nom ; filtrer par groupe botanique
- [X] Trier par nombre de plants
- [X] Synthèse : stock total, espèces et plants par groupe, espèce la plus abondante, stocks faibles (≤ 10 plants)
- [ ] Bonus : supprimer et modifier un plant (choix 6 et 7)
- [ ] Bonus : tri décroissant, groupe le plus fourni

## Données

- Le fichier : donnees/plants.json
- Nombre de lignes : 15 lignes fictives d'inventaire au départ
- Les champs : voir docs/dictionnaire-donnees.md (id, nomCommun, groupe, nombrePlants, dateReleve)
- L'unité : nombrePlants en nombre de pieds, date en AAAA-MM-JJ
- Les données sont fictives, inventées pour le brief. Les groupes (angiosperme, gymnosperme) sont fournis par le coach d'agronomie. [docs/dictionnaire-donnees.md]

## Limites

- L'outil ne fait pas de diagnostic phytosanitaire, il ne détecte pas les maladies.
- L'outil ne gère pas la météo, l'arrosage ni les dates de semis optimales.
- Les identifications botaniques incertaines doivent être signalées au coach, pas devinées par le code.


## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

✏️ *Ducelvie DIeuveille BATSIMBA, DUCELVIE6DIEU. Entraide : avec qui, sur quoi.*
