import React from 'react';


import Styles from './Pet.module.scss';

interface AnimalProps {
    name: string;
    sexe: string;
    age: number;
    descriptif: string;
    image:string;
    onClick: () => void;
};

const Pet: React.FC<AnimalProps> = ({ name, image, sexe, age, descriptif, onClick }) => {
 
    return (
        <div className={Styles.container}>
            <h2>{name}</h2>
                        <p>{sexe}</p>
                        <p>{age} ans</p>
                        <img src={image} alt={name} />
                        <p>{descriptif}</p>
                        <button onClick={onClick}>Adopter</button>
        </div>
    )
};

export default Pet;