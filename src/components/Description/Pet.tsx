import React from 'react';


import Styles from './Pet.module.scss';

interface AnimalProps {
    name: string;
    sexe: string;
    age: number;
    descriptif: string;
    image: string;
    onClick: () => void;
};

const Pet: React.FC<AnimalProps> = ({ name, image, sexe, age, descriptif, onClick }) => {

    return (
        <div className={Styles.containerPet}>
            <h1>Description de l'animal</h1>
        <div className={Styles.container}>
                <div className={Styles.image}>
                    <img src={image} alt={name} />
                </div>
                <div className={Styles.descriptionCard}>
                    <div>
                    <h2>{name}</h2>
                    <p>{age} ans</p>
                    <p>{sexe}</p>
                    <p>{descriptif}</p>
                    </div>
                    <div className={Styles.buttonAdd}>
                        <button onClick={onClick}>Adopter</button>
                    </div>
                </div>
        </div>
        </div>
    )
};

export default Pet;