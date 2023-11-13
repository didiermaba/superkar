# Supakar projet REACT

Un app React de personnalisations de voitures


## Création du projet

```bash
npm create vite@latest supakar --template react
```

## Analyse

On analyse le template (graphique ou HTML) de l'application à intégrer. Cela permettra de déterminer  les composants et la sturcture de l'app.

## Import des médias

On rassemble les images, vidéos, liens, typos, couleurs et autres médias nécessaires à l'intégration. Cela nous facilietras lors du développement de l'app et évitera de nous perturber dans notre travail.

## Initialisation de GIT

Parmi les bonne pratique, il y a le fait d'initialiser un projet avec GIT. Cela permet de garder une trace de l'évolution du projet et de pouvoir revenir à une version antérieur si besoin. C'est aussi un outil important pour repérer et debogé les erreurs pendant que l'on code.

## Création des composants

Dans le cas de `Supakar, nous avons besoin de mettre différents composants. Il sont reflet de la réflexion que nous avons eu lors de la phase d'ananlyse.

Exemple de l'architecture de l'app:

```bash
public/
src/
    components/
        Nav.jsx
        Car.jsx
    pages/
        Home/
            Home.jsx
        Customizer/
            Customizer.jsx      
main.jsx
index.css
index.html
```

## Mise en place des Hooks et Props

Parmi les hooks pour ce projet, nous avons déterminé qu'il fallait mettre en place :
- useState
- useRef

### Pourquoi ?

Avec `useState`, nous mettons en place la couleur du véhicule qui sera mis à jour en fonction du choix de l'utilisateur.

Pour `useRef`, cela concerne l'usage d'une librairie externe `Typed.js` qui permet de faire une animation de texte. En résumé nous disposons d'une référence dans le DOM (span identifié) qui recevra l'animation dans la page concernée.

### Changement de couleur

À l'aide de `setColor`, nous allons mettre à jour les données de la constante `color` qui contient le chemin du véhicule avec la couleur ciblée.

L'agorithme est le suivant :

```bash
USER clique sur la couleur de son choix
    -> handleColor() est appelée
        -> La couleur est véirfiée
            -> SI la couleur est valide
                -> setColor() est appelée
                    -> La couleur est mise à jour
            -> SINON
                -> La couleur reste inchangée
```

## React Router DOM

Pour faciliter la navigation entre les pages, nous mettons en place le routage avec `react-router-dom`.

```bash
npm install react-router-dom
```

Dans le fichier `main.jsx`, on importe la librairie et on met en place les routes.

```jsx
// ...

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Customizer from './pages/Customizer/Customizer.jsx';

// ...

const router = createBrowserRouter([
    {
        path: '/',
        component: <Home />,
    },
    {
        path: '/customizer',
        component: <Customizer />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);

```

## Préparation du déploiement

Afin de déployer, nous allons devoir réaliser un `build` de notre application :

```bash
npm run build
```

N'oublions de faire un commit avec GIT et de pousser notre code vers GitHub. Cela facilitera le déploiement sur Vercel. Notez que pour certain service commer Vercel ou Netlify, le dossier `build` sera construire sur leur serveur directement.