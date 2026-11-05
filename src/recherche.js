// Rechercher et trier les plants.
// Fiche : fiches/4-rechercher-trier.md · Vérifier : npm run test:recherche

// Renvoie un NOUVEAU tableau avec les plants dont le nom commun CONTIENT le texte cherché,
// sans tenir compte des majuscules : 'PALM' trouve 'palmier à huile'. Éventuellement vide.
export function rechercherParNom(plants, texte) {
  const cherche = String(texte).trim().toLowerCase();
  if (!cherche) return [];
  return plants.filter((p) => String(p.nomCommun).toLowerCase().includes(cherche));

}

// Renvoie un NOUVEAU tableau avec les plants de ce groupe botanique (éventuellement vide).
export function filtrerParGroupe(plants, groupe) {
  const g = String(groupe).trim().toLowerCase();
  return plants.filter((p) => String(p.groupe).toLowerCase() === g);

}

// Renvoie une COPIE triée par nombre de plants croissant, avec un comparateur numérique.
// Deux plants de même nombre gardent leur ordre d'origine. Le tableau reçu ne doit pas changer d'ordre.
export function trierParNombrePlants(plants) {
  const copie = [...plants];
  return copie.sort((a, b) => a.nombrePlants - b.nombrePlants);
  
}
