import React from "react";
import { useRef, useEffect } from "react";
import Nav from "../components/Nav";
import Typed from "typed.js";
import { Link } from "react-router-dom";

const Home = () => {
  const elt = useRef(null); // Référence à l'élément qui contiendra le texte

  useEffect(() => {
    const typed = new Typed(elt.current, {
      strings: [
        // Liste des phrases à afficher
        "Welcome", // EN
        "Bienvenue", // FR
        "ようこそ", // JA
        "歡迎", // ZH
        "Добро пожаловать", // RU
        "Karibu", // sw
      ],
      startDelay: 300, // Décalage avant le début de la saisie
      typeSpeed: 100, // Vitesse de saisie
      backSpeed: 100, // Vitesse de retour
      backDelay: 100, // Délai avant le retour
    });

    return () => {
      typed.destroy(); // Nettoyage du composant
    };
  }, []);

  return (
    <div>
      <Nav />
      <main className="home">
        <h1>
          <span ref={elt}></span>
        </h1>
        <Link to="/customizer" className="btn-link">Customizer</Link>
      </main>
    </div>
  );
};

export default Home;

/**
 * Ce composant représente la page d'accueil. On y fait l'usage de
 * la librairie Typed.js pour afficher un texte animé. Voici les
 * étapes à suivre:
 * 
 * 1. Importer la librairie Typed.js avec la commande suivante:
 *   npm install typed.js
 * 
 * 2. Importer la librairie dans le composant:
 *  import Typed from "typed.js";
 * 
 * 3. Créer une référence à l'élément qui contiendra le texte:
 * const elt = useRef(null);
 * 
 * 4. Dans le useEffect, créer une instance de Typed dans laquelle
 * on passe la référence à l'élément et les options de configuration.
 * Pour plus d'informations sur les options, voir la documentation Typed.js
 * 
 * Ici nous avons fait le choix de créer une référence à l'élément
 * avec le hook useRef. Cela nous permet de récupérer l'élément
 * dans le DOM et de le passer à l'instance de Typed. Nous avons
 * également utilisé le hook useEffect pour créer l'instance de Typed.
 * 
 * useRef est un hook très utile pour récupérer des éléments dans le DOM.
 * Son utilisation est très simple, il suffit de créer une référence
 * avec la fonction useRef et de la passer en paramètre à l'élément
 * que l'on souhaite récupérer dans le DOM. Ensuite, on peut utiliser
 * la référence pour récupérer l'élément dans le DOM.
 * 
 */
