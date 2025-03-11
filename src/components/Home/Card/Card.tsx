import React from 'react';

import Styles from './Card.module.scss';

interface AnimalProps {
    name: string;
    image: string;
    age: string;
};
const Card: React.FC<AnimalProps> = ({name,image,age}) => {
    return (
        <div className={Styles.container}>
            <h2>{name}</h2>
            <img className="tete" src={image} alt="tete" />
            <p>{age} ans</p>
            <button>En savoir +</button>
            </div>
    )
};
export default Card;