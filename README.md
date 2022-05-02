# Project-Venn

Le projet Venn consiste à créer une application qui permet de collaborer sur des projets. Elle permet de créer et gérer des projets, gérer les participants du projet, ajouter un lien Git...

Commencez par cloner le git avec la commande `git clone`.

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

Installer également l'application [ExpoGo](https://play.google.com/store/apps/details?id=host.exp.exponent&gl=FR) sur votre téléphone pour pouvoir utiliser l'application.

Une fois tout bien configuré et installé, vous pourrez lancer le serveur avec la commande `yarn start`.

Flasher le QR Code, depuis l'application ExpoGo, qui apparaitra sur le terminal et attendez que la page de login se charge.

Cliquez sur le bouton s'enregistrer pour vous créer un compte.
Attention de ne pas mettre de majuscule lorsque que vous remplissez le champ de votre couleur préférée.

Connectez vous ensuite avec votre compte et vous pouvez utiliser l'application.

[Lien de l'application publié](https://expo.dev/@theo982002/venn-project?serviceType=classic&distribution=expo-go)
