import React from 'react';

import Styles from './Card.module.scss';

interface AnimalProps {
    id: number;
    name: string;
    image: string;
    onClick: () => void;
};
const Card: React.FC<AnimalProps> = ({id, name,image, onClick}) => {
    return (
        <div className={Styles.container}>
            <h2>{name}</h2>
            <img className="tete" src={image} alt="tete" />
            <button onClick={onClick}>En savoir +</button>
            </div>
    )
};
export default Card;