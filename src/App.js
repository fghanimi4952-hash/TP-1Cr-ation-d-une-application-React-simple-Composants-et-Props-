// App.js

import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Voiture from './Voiture';
import ListeCourses from './ListeCourses';

function App() {
  const utilisateur = { nom: 'Emma', photo: '/user.png' };

  return (
    <div>
      <HelloWorld />
      <Greeting prenom="Alice" />
      <Greeting prenom="Mohamed" />
      <Profil utilisateur={utilisateur} taille={150} />
      
      <h3>Exercice 1 : Voitures</h3>
      <Voiture marque="Toyota" modele="Corolla" couleur="Rouge" />
      <Voiture marque="BMW" modele="Série 3" couleur="Noir" />
      <Voiture marque="Mercedes" modele="Classe C" couleur="Blanc" />
      
      <h3>Exercice 2 : Listes de courses</h3>
      <ListeCourses elements={['Pommes', 'Bananes', 'Lait', 'Pain']} />
      <ListeCourses elements={['Tomates', 'Carottes', 'Oignons']} />
    </div>
  );
}

export default App;
