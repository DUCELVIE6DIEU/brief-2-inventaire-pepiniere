# Relevé des tests

> Écrivez le résultat attendu avant d'essayer. Un écart n'est pas une faute : notez-le, corrigez, refaites le test.

**Calculs à la main** : refaites à la main les résultats de référence de `SUJET.md`, puis comparez avec votre programme.

calculs pour:
**angiospermes**: 30 + 45 + 20 + 50 + 25 + 12 + 22 + 18 = 222 plants dont 8 epèces.

**gymnospermes**: 10 + 8 = 18 plants dont 2 espècs.

stock total: 240 plants dont 10 espèces. 

Résultat des calculs à la main est conforme aux résultats du code d'origine (10 espèces +).

Les lignes à <= 10 plans sont: N09 et N10.

**Essais dans le menu** : un ajout valide (encore là après redémarrage), chaque règle refusée, une recherche introuvable, chaque tri, la synthèse, un choix inconnu.

| Action | Attendu | Obtenu | Testeur |
| --- | --- | --- | --- |
| Ajout valide : N11, manguier, angiosperme, 14, 2026-10-27 | "Plant N11 ajouté. L'inventaire compte 11 espèces." | Conforme. N11 est toujours présent après redémarrage (liste via le choix 2) | Batsimba Dieuveille  |
| Refus : nombre de plants -3, puis 2,5 | Ajout refusé avec le message "entier positif ou nul". Inventaire inchangé (10) | Conforme dans les deux cas | Batsimba Dieuveille|
| Refus : code vide | "Le code est obligatoire." | Conforme | Touré Sitafa  |
| Refus : code N01 déjà utilisé | "Le code N01 est déjà utilisé." | Conforme | Touré Sitafa |
| Refus : groupe "conifere" | "Le groupe doit être : angiosperme ou gymnosperme." | Conforme | Viegnekou Koffi |
| Refus : date 2026-02-30 | "La date doit être une date réelle au format AAAA-MM-JJ." | Conforme | Viegnekou Koffi |
| Recherche introuvable par code : N99 | "Plant N99 introuvable." | Conforme | Salia Abdallah |
| Recherche introuvable par nom : "xyz" | "0 espèce(s) dont le nom contient « xyz »" | Conforme (la liste vide affiche "Aucun plant enregistré.") | Konaté Kaba  |
| Tri par nombre de plants croissant | N09 (8 plants) en premier, N04 (50 plants) en dernier | Conforme | Konaté Kaba |
| Synthèse | 10 espèces, 240 plants, 222 et 18 par groupe, N04 la plus abondante, stocks faibles N09 et N10 | Conforme | Konaté Kaba |
| Choix inconnu : 9 | Message d'erreur, puis retour au menu | "Choix inconnu : « 9 ». Tapez un chiffre du menu.", puis le menu | Konaté Kaba |

**Sur un autre poste** (`git clone`, `node app.js`, `npm test`, en suivant le README) :Touré Sitafa, L'application est entièrement conforme aux exigences. L'ensemble des fonctionnalités du socle (ajout, affichage, recherche, tri et synthèse) a été implémenté et valide l'intégralité des tests unitaires. Le contrôle des saisies est fonctionnel et rejette toute donnée invalide avant l'enregistrement.
