import React from 'react';
import {useLocation } from 'react-router-dom';
import Styles from './Style.module.scss';
import Footer from '../components/Footer/Footer';
import SideBar from '../components/SideBar/SideBar';
import Pet from '../components/Description/Pet';
import { useModal } from '../context/modal';
import Modal from '../components/Modal/Modal';

const Description: React.FC = () => {

  const location = useLocation();
  const selectedAnimal = location.state?.animal;
  const { showModal } = useModal();

  const handleAdopter = () => {
    showModal(<Modal type="delete" text="Vous avez adopté l'animal!" show={true} id={selectedAnimal.id_animaux}/>);
    console.log('Adopter et id => ', selectedAnimal.id_animaux);
  };

  if (!selectedAnimal) return <p>Animal non trouvé</p>;

  return (
    <div className={Styles.container}>
      <div className={Styles.contant}>
        <div className={Styles.bar}>
          <SideBar />
        </div>
        <div className={Styles.mainContentDescription}>
            <Pet
              name={selectedAnimal.name}
              sexe={selectedAnimal.sexe}
              age={selectedAnimal.age}
              image={selectedAnimal.image}
              descriptif={selectedAnimal.descriptif}
              onClick={handleAdopter}
            />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Description;
