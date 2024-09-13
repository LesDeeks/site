Bienvenue SAM. Voici un guide rapide pour que tu puisses installer Git et commencer à travailler avec GitHub.

## Installation de Git

### 1. Télécharger et installer Git
Tu peux télécharger Git depuis ce lien : [Télécharger Git](https://git-scm.com/downloads). Suis les instructions pour l'installer correctement neuneu.

Si tu as besoin d'aide, voici un guide en français pour t'accompagner, mais je suis là au cas où:
- [Installer Git sous Windows](https://git-scm.com/book/fr/v2/D%C3%A9marrage-rapide-Installation-de-Git)

### 2. Vérifier l'installation
Une fois installé, tu peux vérifier que Git fonctionne en ouvrant un terminal (ou une invite de commande) et en tapant : git --version

Exemple : 

U:\>git version

git version 2.45.1.windows.1

Si Git est bien installé, la version de Git sera affichée.

## Utilisation de Git Bash

1. Crée un dossier sur ton ordinateur où tu veux travailler sur ce projet.
2. Clique droit dans ce dossier et sélectionne **Git Bash Here**. Cela ouvrira le terminal Git Bash dans le dossier que tu viens de créer.
3. Tu peux ensuite exécuter les commandes suivantes pour interagir avec le projet.

## Commandes de base GitHub

| Commande                          | Description                                                                                  |
|------------------------------------|----------------------------------------------------------------------------------------------|
| `git clone https://github.com/melolxd/surprise.git` | Clone le dépôt GitHub dans le dossier actuel.                                      |
| `git status`                       | Vérifie l'état des fichiers modifiés, ajoutés ou supprimés dans ton projet local.            |
| `git add .`                        | Ajoute tous les fichiers modifiés pour qu'ils soient inclus dans le prochain commit.         |
| `git commit -m "Ton message ici"`  | Enregistre les modifications dans un commit avec un message descriptif.                      |
| `git push`                         | Envoie tes commits sur GitHub, synchronisant ainsi les modifications avec le dépôt distant.  |
| `git pull`                         | Récupère les dernières modifications du dépôt GitHub et les fusionne avec ton projet local.  |

---
## Configurer Visual Studio Code pour Git

Pour rendre l'utilisation de Git plus facile, tu peux configurer Visual Studio Code pour faire des push et des pull directement depuis l'interface sans avoir à taper les commandes à chaque fois comme une débile.

### 1. Installer l'extension Git dans VS Code
Installe l'extension Git qui est intégrée à Visual Studio Code par défaut, mais assure-toi qu'elle est activée :

- Ouvre Visual Studio Code.
- Va dans l'onglet **Extensions** à gauche.
- Recherche "Git" dans la barre de recherche.
- Assure-toi que l'extension **Git** est activée.

### 2. Ouvrir ton projet dans Visual Studio Code
- Lance Visual Studio Code.
- Ouvre le dossier de ton projet en cliquant sur **Fichier** > **Ouvrir Dossier** et sélectionne le dossier où tu as cloné ton dépôt Git (astuce plus simple, va dans ton git bash avec le bon répertoire ou est stocké ton projet et fait : code .) Le POINT est important.

### 3. Utiliser l'interface Git de VS Code
- Dans la barre latérale gauche, clique sur l'icône **Source Control**.
- Tu verras une interface qui te permet de voir l'état des fichiers, de faire des commits, des push et des pull directement depuis VS Code, tu as aussi l'historique pour vérifier que je fais pas des betises.

### 4. Configurer les clés SSH (facultatif mais recommandé)
Si tu veux éviter de devoir entrer tes identifiants GitHub à chaque fois que tu fais un push ou un pull, tu peux configurer des clés SSH :
- Suis ce guide : [Connexion SSH avec GitHub](https://docs.github.com/fr/authentication/connecting-to-github-with-ssh)

Avec cette configuration, tu pourras utiliser Visual Studio Code pour toutes tes opérations Git (commit, push, pull) sans avoir à utiliser le terminal.

N'hésite pas à me demander si tu as des questions ou des soucis.


