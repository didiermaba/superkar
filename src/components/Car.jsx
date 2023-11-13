import React from "react";

function Car(props) {
    const { color } = props;
    return <img src={color} alt="car" className="car"/>;
}

export default Car;

/**
 * Ce composant doit afficher une image de voiture.
 * Nous faisons le choix de passer l'image en tant que props.
 * Une props est une information passée d'un composant parent
 * à un composant enfant. Le terme "props" est une abréviation
 * de "properties".
 * 
 * C'est le composant Customizer qui va se charger de passer
 * l'image à afficher à Car et de gérer le changement d'image.
 */