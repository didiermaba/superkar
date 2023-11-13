import React, { useState } from 'react'
import Nav from '../components/Nav'
import Car from '../components/Car'
import carOriginal from '../assets/img/original.png'
import carBlue from '../assets/img/blue.png'
import carGreen from '../assets/img/green.png'
import carYellow from '../assets/img/yellow.png'

function Customizer() {
  const [color, setColor] = useState([carOriginal])

  const handleColor = (e) => {
    const color = e.target.dataset.color
    switch (color) {
      case 'silver':
        setColor([carOriginal])
        break
      case 'blue':
        setColor([carBlue])
        break
      case 'green':
        setColor([carGreen])
        break
      case 'yellow':
        setColor([carYellow])
        break
      default:
        setColor([carBlue])
        break
    }
  }

  return (
    <>
      <Nav />
      <main className='customizer'>
        <Car color={color} />
        <div className="options">
          <h1>Personalisation</h1>
          <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente.</p>
          <ul className="color-selection">
            <li className='color-selection-item' onClick={handleColor}>
              <div className="color-selection-item-square" data-color="silver"></div>
              <p>Silver</p>
            </li>
            <li className='color-selection-item' onClick={handleColor}>
              <div className="color-selection-item-square" data-color="blue"></div>
              <p>Blue</p>
            </li>
            <li className='color-selection-item' onClick={handleColor}>
              <div className="color-selection-item-square" data-color="green"></div>
              <p>Green</p>
            </li>
            <li className='color-selection-item' onClick={handleColor}>
              <div className="color-selection-item-square" data-color="yellow"></div>
              <p>Yellow</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default Customizer

/**
 * Ce composant doit afficher une voiture et un menu de personnalisation
 * Premierement, il faut afficher la voiture avec la couleur par défaut (silver),
 * pour faciliter la manipulation, on va utiliser charger les sources des images
 * via des imports.
 * 
 * On défini un state pour la couleur de la voiture, par défaut, on lui donne un
 * tableau avec une seule valeur, la source de l'image de la voiture silver.
 * 
 * Nous définissons une fonction qui va changer la couleur de la voiture, `handleColor`
 * cette fonction va prendre en paramètre un évènement, et va récupérer la couleur
 * de la voiture à partir de l'attribut `data-color` de l'élément cliqué. Ensuite,
 * on va utiliser un switch pour changer la couleur de la voiture en fonction de la
 * couleur récupérée. Pour finir, on utilise la fonction `setColor` pour changer la
 * couleur de la voiture.
 */