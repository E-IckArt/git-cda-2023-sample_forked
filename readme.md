# Sample project

# Apprendre à gérer des issues :

-   créer une nouvelle branche
-   résoudre le problème
-   ajouter le fichier à la zone de staging
-   commiter la modification en ajoutant `resolve #<idIssue>` au message
-   pusher
-   checkout sur la branch dev
-   git merge <branchDuProbleme>
-   git push

## Ne pas oublier le resolve #idIssue dans le commit !!!!!!

## Ignorer des fichiers déjà suivis et publiés

`git rm --cached <file>`

## Ignorer un dosser déjà suivi et publiés

`git rm -r --cached <folder>`

## Ignorer des fichiers

-   Créer un fichier .gitignore
-   Inclure les fichiers qui ne doivent pas être versionnés
-   Ajouter le fichier gitignore à la zone de staging
-   Commiter le fichier .gitignore
-   Pusher
