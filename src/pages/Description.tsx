import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Styles from './Style.module.scss';
import Footer from '../components/Footer/Footer';
import SideBar from '../components/SideBar/SideBar';
import Pet from '../components/Description/Pet';
import { useModal } from '../context/modal';
import Modal from '../components/Modal/Modal';

const Description: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();
  const selectedAnimal = location.state?.animal;
  const { showModal } = useModal();

  const handleAdopter = () => {
    console.log('Adopter');
    showModal(<Modal text="Vous avez adopté l'animal!" show={true}/>);
  };

  if (!selectedAnimal) return <p>Animal non trouvé</p>;

  return (
    <div className={Styles.container}>
      <div className={Styles.contant}>
        <div className={Styles.bar}>
          <SideBar />
        </div>
        <div>
          <h1>Descriptif</h1>
          <div>
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
      </div>
      <Footer />
    </div>
  );
};

export default Description;
