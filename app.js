// Inventaire de la pépinière — point d'entrée : le menu.
// À vous d'écrire tout le menu : accueil, chargement des données, menu affiché avant chaque choix,
// actions, sortie et gestion des erreurs. Comportement et textes imposés : fiches/3-ajouter-lister.md.
// Lancer : node app.js
import { demander, fermerSaisie, ouvrirSaisie } from './src/saisie.js';
import { chargerJson, enregistrerJson } from './src/stockage.js';
import { GROUPES, ajouterPlant, formaterPlant, listerPlants, trouverParId } from './src/registre.js';
import { filtrerParGroupe, rechercherParNom, trierParNombrePlants } from './src/recherche.js';
import { SEUIL_STOCK_FAIBLE, especeLaPlusAbondante, stocksFaibles, syntheseParGroupe, totalPlants } from './src/synthese.js';

const FICHIER_DONNEES = 'donnees/plants.json';

// ---------- Affichages ----------

function afficherAccueil() {
  console.log('==================================================');
  console.log('   INVENTAIRE DE LA PÉPINIÈRE');
  console.log('   Pépinière pédagogique');
  console.log('==================================================');
}

function afficherMenu() {
  console.log('');
  console.log('--------------------- MENU ---------------------');
  console.log('1. Ajouter un plant');
  console.log("2. Lister l'inventaire");
  console.log('3. Rechercher (code, nom, groupe)');
  console.log('4. Trier (nombre de plants)');
  console.log('5. Synthèse des quantités');
  console.log('0. Quitter');
}

// ---------- Actions ----------

// Choix 1 : ajouter un plant.
async function ajouter(plants) {
  console.log('--- Ajouter un plant ---');
  const id = await demander('Code du plant (ex. N11) : ');
  if (id === null) return;
  const nomCommun = await demander('Nom commun (ex. papayer) : ');
  if (nomCommun === null) return;
  const groupe = await demander(`Groupe botanique (${GROUPES.join(' ou ')}) : `);
  if (groupe === null) return;
  const nombrePlants = await demander('Nombre de plants (entier) : ');
  if (nombrePlants === null) return;
  const dateReleve = await demander('Date du relevé (AAAA-MM-JJ) : ');
  if (dateReleve === null) return;

  const saisie = {
    id: id.toUpperCase(),
    nomCommun: nomCommun.toLowerCase(),
    groupe: groupe.toLowerCase(),
    nombrePlants,
    dateReleve,
  };

  const erreurs = ajouterPlant(plants, saisie);
  if (erreurs.length > 0) {
    console.log('Ajout refusé :');
    for (const erreur of erreurs) {
      console.log(`  - ${erreur}`);
    }
    console.log(`L'inventaire compte toujours ${plants.length} espèce(s).`);
    return;
  }

  await enregistrerJson(FICHIER_DONNEES, plants);
  console.log(`Plant ${saisie.id} ajouté. L'inventaire compte ${plants.length} espèce(s).`);
}

// Choix 2 : lister l'inventaire.
function lister(plants) {
  console.log(`--- Inventaire (${plants.length} espèce(s)) ---`);
  console.log(listerPlants(plants));
}

// Choix 3 : rechercher.
async function rechercher(plants) {
  console.log('--- Rechercher ---');
  console.log('1. Par code');
  console.log('2. Par nom commun');
  console.log('3. Les espèces d\'un groupe botanique');
  const sousChoix = await demander('Votre choix : ');
  if (sousChoix === null) return;

  if (sousChoix === '1') {
    const saisie = await demander('Code : ');
    if (saisie === null) return;
    const code = saisie.toUpperCase();
    const plant = trouverParId(plants, code);
    console.log(plant ? formaterPlant(plant) : `Plant ${code} introuvable.`);
  } else if (sousChoix === '2') {
    const saisie = await demander('Nom ou partie du nom : ');
    if (saisie === null) return;
    const texte = saisie.toLowerCase();
    const trouves = rechercherParNom(plants, texte);
    console.log(`${trouves.length} espèce(s) dont le nom contient « ${texte} » :`);
    console.log(listerPlants(trouves));
  } else if (sousChoix === '3') {
    const saisie = await demander(`Groupe (${GROUPES.join(' ou ')}) : `);
    if (saisie === null) return;
    const groupe = saisie.toLowerCase();
    const trouves = filtrerParGroupe(plants, groupe);
    console.log(`${trouves.length} espèce(s) du groupe ${groupe} :`);
    console.log(listerPlants(trouves));
  } else {
    console.log('Choix inconnu : retour au menu.');
  }
}

// Choix 4 : trier.
async function trier(plants) {
  console.log('--- Trier ---');
  console.log('1. Par nombre de plants croissant');
  const sousChoix = await demander('Votre choix : ');
  if (sousChoix === null) return;

  if (sousChoix === '1') {
    console.log(listerPlants(trierParNombrePlants(plants)));
  } else {
    console.log('Choix inconnu : retour au menu.');
  }
}

// Choix 5 : synthèse des quantités.
function synthese(plants) {
  console.log("--- Synthèse de l'inventaire ---");
  console.log(`Nombre d'espèces : ${plants.length}`);
  console.log(`Stock total : ${totalPlants(plants)} plants`);

  console.log('Par groupe botanique :');
  for (const [groupe, valeurs] of Object.entries(syntheseParGroupe(plants))) {
    console.log(`  ${groupe} : ${valeurs.especes} espèce(s), ${valeurs.plants} plants`);
  }

  const plusAbondante = especeLaPlusAbondante(plants);
  console.log(`Espèce la plus abondante : ${plusAbondante ? formaterPlant(plusAbondante) : 'aucune donnée'}`);

  const faibles = stocksFaibles(plants, SEUIL_STOCK_FAIBLE);
  console.log(`Stocks faibles (≤ ${SEUIL_STOCK_FAIBLE} plants) : ${faibles.length}`);
  for (const plant of faibles) {
    console.log(`  ${formaterPlant(plant)}`);
  }

  console.log(`Rappel : le seuil de ${SEUIL_STOCK_FAIBLE} plants est un repère pédagogique de suivi, pas une recommandation de production.`);
}

// ---------- Programme principal ----------

async function main() {
  ouvrirSaisie();
  afficherAccueil();

  let plants = [];
  try {
    plants = await chargerJson(FICHIER_DONNEES);
    console.log(`${plants.length} espèce(s) chargée(s) depuis ${FICHIER_DONNEES}.`);
  } catch (erreur) {
    console.log(`Impossible de lire ${FICHIER_DONNEES} : ${erreur.message}. L'inventaire démarre vide.`);
    plants = [];
  }

  let continuer = true;
  while (continuer) {
    afficherMenu();
    const choix = await demander('Votre choix : ');

    if (choix === null) {
      console.log('');
      console.log('Au revoir !');
      break;
    }

    try {
      switch (choix) {
        case '1':
          await ajouter(plants);
          break;
        case '2':
          lister(plants);
          break;
        case '3':
          await rechercher(plants);
          break;
        case '4':
          await trier(plants);
          break;
        case '5':
          synthese(plants);
          break;
        case '0':
          console.log('Au revoir !');
          continuer = false;
          break;
        default:
          console.log(`Choix inconnu : « ${choix} ». Tapez un chiffre du menu.`);
      }
    } catch (erreur) {
      if (String(erreur.message).startsWith('TODO')) {
        console.log(`À compléter : ${erreur.message}`);
      } else {
        console.log(`Erreur inattendue : ${erreur.message}`);
      }
    }
  }

  fermerSaisie();
}

main();
