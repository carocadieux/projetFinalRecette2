Resumé

Projet conçu dans le cadre de mon cours de technique de programmation 2.
Construire une application de livre de recettes avec React, React Query et React
Router. Utiliser l’API The Meal DB pour aller chercher la donnée.

Technologies

React, React Query et React Router.


Fonctionnalités

● Sur la page d’accueil je dois voir toutes les catégories de recettes
(Voir l’url sous List all meal categories dans la documentation)
● En cliquant sur une catégorie, je dois être dirigé vers la page de cette catégorie et voir
des recettes en lien avec cette catégorie. L’image doit être affichée (en format
thumbnail) ainsi que le nom de la recette
(Voir l’url sous Filter by Category dans la documentation)
● Lorsque je clique sur une recette, je dois être dirigé vers la page de cette recette. Une
fois sur la page de cette recette, je dois voir:
○ Le titre de la recette
○ La catégorie de la recette
○ Une image de la recette (s’il y en a une)
○ Tous les ingrédients (certains sont soit une string vide ou null. Ceux-ci ne doivent
pas être affichés)
○ Toutes les mesures d’ingrédients affichées à côté de l’ingrédient (le bonnes
mesures doivent être associées aux bons ingrédient)
○ Toutes les instructions
○ Les ingrédients et les instructions doivent être dans un tiroir qui sera caché par
défaut
(Voir l’url sous Lookup full meal details by id dans la documentation)
● Sur chaque page (excepté la page de catégories) je dois pouvoir retourner à la page de
catégories avec un lien en haut de page

