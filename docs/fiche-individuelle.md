# Fiche individuelle

> Une page, avant la livraison. Prénom, nom, compte GitHub : 
Ducelcie Dieuveille BATSIMBA, DUCELVIE6DIEU

1. **Une fonction que j'ai écrite** : 
export function trierParNombrePlants(plants) {
  const copie = [...plants];
  return copie.sort((a, b) => a.nombrePlants - b.nombrePlants); 
}
**et comment elle marche :**
J'ai choisi trierParNombrePlants dans src/recherche.js.
Elle trie les plantes du plus petit nombre au plus grand nombre de plants, par exemple de 8 plants à 50 plants.

Ligne par ligne :

* const copie = [...plants];
Je fais une COPIE de la liste avec .... C'est très important. Si je ne fais pas de copie, sort va changer la liste d'origine, et le brief dit qu'il ne faut pas la modifier. Avec la copie, l'original reste comme avant.

* return copie.sort((a, b) => a.nombrePlants - b.nombrePlants);
Je trie la copie avec sort. sort compare les plantes deux par deux, a et b.
Il fait le calcul a.nombrePlants - b.nombrePlants :
- Si le résultat est négatif, par exemple 8 - 50 = -42, ça veut dire que a est plus petit, donc a passe avant b.
- Si le résultat est positif, par exemple 50 - 8 = 42, ça veut dire que a est plus grand, donc a passe après b.
- Si le résultat est 0, c'est qu'elles ont le même nombre, on ne change pas l'ordre.

* return copie;
Je renvoie la copie triée, pas l'original.

Exemple : si j'ai [tomate 50, pin 8, cacao 30], la fonction renvoie [pin 8, cacao 30, tomate 50], et la liste de départ ne change pas.

2. **Une difficulté** 
Au début, j'ai fait directement plants.sort(...) sans faire de copie.
Le tri marchait, mais il changeait aussi la liste d'origine. Du coup, quand je listais l'inventaire après, l'ordre avait changé partout, et le test ne passait pas.

**et sa solution** : 
J'ai compris que sort modifie le tableau sur lequel on l'appelle. J'ai donc ajouté const copie = [...plants]; avant, pour trier seulement la copie et garder l'original intact.

3. **L'entraide** (qui m'a aidé, qui j'ai aidé, sur quoi) : Entraide : Avec tous les membres de mon groupe du brief-2-inventaire-pepiniere, chacun a apporté un peu de son savoir pour permettre aux autres d'éclaircir ses zones d'ombre et d'incompréhension. Koffi Viegnekou et Fofana Fanta, ils m'ont évité les petites erreurs de saisi que j'avais commises, IA (Claude).
