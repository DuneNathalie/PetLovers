import React from 'react';
import Styles from './ListCard.module.scss';
import Card from '../Card/Card';

interface Animal {
    id: number;
    name: string;
    type: string;
    image: string;
    age: number;
}

interface ListCardProps {
    animaux: Animal[]; 
}

const ListCard: React.FC<ListCardProps> = ({ animaux }) => {
    return (
        <div className={Styles.container}>
            {animaux.map((anim) => (
                <div key={anim.id} className={Styles.cardAnim}>
                    <Card name={anim.name} image={anim.image} age={anim.age.toString()} />
                </div>
            ))}
        </div>
    );
};

export default ListCard;
