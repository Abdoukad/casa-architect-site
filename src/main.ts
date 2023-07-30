// Import de la fonction platformBrowserDynamic pour démarrer l'application Angular
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// Import du module AppModule qui représente l'ensemble des composants, services et modules nécessaires au fonctionnement de l'application
import { AppModule } from './app/app.module';

// Démarrage de l'application en appelant la fonction bootstrapModule avec le module AppModule en argument.
// Cette fonction permet de charger le module racine de l'application et de lancer son cycle de vie.
// Si une erreur survient pendant le chargement ou l'exécution du module, elle est affichée dans la console avec console.error()
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
