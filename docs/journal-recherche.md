# Journal de recherche

> Chaque recherche utile : ce que vous cherchiez, où (cours, [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript), [Node.js](https://nodejs.org/api/), un camarade, une IA…), ce que vous avez compris. Ce que vous gardez, vous devez pouvoir l'expliquer.

| Ce que je cherchais | Où | Ce que j'ai compris | Utilisé dans |
| --- | --- | --- | --- |
| Écrire le menu de app.js (boucle, switch, gestion d’erreurs) | IA (Claude) + fiche 3 | Le while répète le menu et le switch choisit l'action selon le chiffre tapé.
Le try / catch attrape l'erreur sans fermer le programme, et null veut dire que l'utilisateur a fait Ctrl + C pour abandonner. | app.js |
| Pourquoi rechercherParNom doit renvoyer toutes les espèces pour un texte vide | IA (Claude) + fiche 4 | dans le code, j'ai fais un test avec includes. includes('') est toujours vrai, donc il n’y a pas de cas spécial à écrire | src/recherche.js |
| Pourquoi mes messages d’erreur ne suivaient pas le même format | IA (Claude) + relecture de registre.js | j'ai compris que les messages doivent être cohérents (majuscule, point final) ; une faute dans une chaîne ne casse pas les tests mais se voit en démo | src/registre.js |