# BOOKS STORE (mini projet React)
Ce projet est une application web de démonstration simulant une boutique en ligne de livres. Il est construit avec React et  React Router, illustrant les principes fondamentaux de la gestion d'état centralisée et de la navigation pour une application de commerce électronique.

Le projet est entièrement basé sur l'écosystème React, utilisant les Hooks pour une gestion moderne et réactive du panier. Le système de navigation est géré par React Router DOM, assurant une expérience utilisateur fluide entre les différentes vues (catalogue, panier, paiement, détail). Bien que la complexité des données et du style ait été simplifiée (données statiques, styles en ligne) à des fins de démonstration, l'architecture illustre les principes fondamentaux d'une application React monopage fonctionnelle.

 ## Architecture et Piliers Technologiques
Ce projet de démonstration frontend est centré sur **React**, agissant comme le **moteur principal** de l'application et utilisant les **Hooks (`useState`)** pour la gestion de l'état, notamment pour le **panier**. La **navigation** entre les différentes vues de l'application est gérée par **React Router DOM**, assurant une gestion déclarative des chemins d'accès (URLs). Les **données produits** sont actuellement fournies par une **source statique** (`src/data/products.js`), et la **mise en forme visuelle** de l'interface utilisateur est réalisée par des **styles en ligne (Inline Styles)**, un choix adopté pour la simplicité de la démonstration.

## Composants Clés et Logique Fonctionnelle
### App.js (Moteur Principal)
Routage Centralisé : App.js est le point d'entrée pour la logique de React Router DOM, définissant les chemins d'accès suivants :
/ (Accueil/Catalogue)
/cart (Panier)
/checkout (Paiement)
/product/:id (Détails d'un produit spécifique)
Gestion de l'État : Il gère l'état central du panier via le Hook useState, permettant le partage des données du panier à travers l'ensemble de l'application via les props ou le contexte.
### src/components/Cart.js (Logique du Panier)
Ce composant est responsable de l'affichage détaillé des articles actuellement dans le panier.
Il contient la logique d'affichage pour calculer le total, afficher les quantités.
Il gère la logique de modification du panier (ajouter, retirer ou supprimer un article du panier) en appelant les fonctions de modification passées depuis App.js.

## Gestion de l'État et Flux de Données
Le flux de données suit un modèle unidirectionnel typique de React :
L'état du panier (cartState) est initialisé dans App.js (via useState).
Cet état et les fonctions pour le modifier sont passés aux composants enfants (ex. : Cart.js, ou composants de liste de produits).
Lorsqu'un utilisateur ajoute ou retire un produit, le composant enfant appelle la fonction de modification.
L'état est mis à jour dans App.js.
La modification de l'état déclenche le rendu de tous les composants qui dépendent de cette donnée (ex. : l'icône du panier, la page Cart.js).

## Conclusion
Ce projet sert de base solide pour une application React d'e-commerce, mettant en évidence une gestion d'état et un routage efficaces. Les choix d'utiliser des données statiques et des styles en ligne ont permis une implémentation rapide et ciblée sur la logique fonctionnelle du panier. Pour une production future, des étapes logiques seraient d'intégrer une API pour les données produits et d'adopter une librairie de style externe (comme CSS Modules ou Tailwind CSS) pour une maintenabilité accrue.
