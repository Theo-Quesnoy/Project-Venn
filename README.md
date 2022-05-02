# Project-Venn

Le projet Venn consiste à créer une application qui permet de collaborer sur des projets. Elle permet de créer et gérer des projets, gérer les participants du projet, ajouter un lien Git...

Pour pouvoir ainsi l'utiliser, il faudra dans un premier temps installer [Yarn](https://classic.yarnpkg.com/fr/docs/cli/).

Une fois installé, vous pourez cloner le git avec la commande `git clone`.

```
git clone ...
cd Project-Venn
```

Une fois dans le dossier du projet, il faut exécuter les dépendances nécessaires pour faire fonctionner le projet. Il faut donc exécuter la commande `yarn install` pour les installer.

Il faudra également rajouter un fichier nécessaire au bon fonctionnement de l'application. Pour cela, créer un fichier nommé `.env` puis rajouter ces lignes

```sh
FIREBASE_API_KEY=AIzaSyC8OvuaL8VGjmzWTuvcRJud5GhIGCBGHOA
FIREBASE_PROJECT_ID=venn-8b660
FIREBASE_APP_ID=1:97887840676:web:22835d235a82b932e0f931
```

Installer également l'application [ExpoGo] sur votre téléphone pour pouvoir utiliser l'application.

Une fois tout bien configuré et installé, vous pourrez lancer le serveur avec la commande `yarn start`.

Flasher le QR Code, depuis l'application ExpoGo, qui apparaitra sur le terminal et attendez que la page de login se charge.

(cliquez sur le bouton s'identifier pour pouvoir vous enregistez
mettre un nom bidon pour pouvoir voir le bouton pour vous enregistrez)

Lien de l'application publié :
