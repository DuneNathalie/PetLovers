import React from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from './ListCard.module.scss';
import Card from '../Card/Card';

interface Animal {
    id_animaux: number;
    name: string;
    type: string;
    image: string;
}

interface ListCardProps {
    animaux: Animal[];
}

const ListCard: React.FC<ListCardProps> = ({ animaux }) => {
    const navigate = useNavigate();
    function handleDescription(animal: Animal) {
        navigate(`/Description/${animal.id_animaux}`, { state: { animal } });
    }

    return (
        <div className={Styles.container}>
            {animaux.map((anim, index) => (
                <div key={index} className={Styles.cardAnim}>
                    <Card
                        name={anim.name}
                        image={anim.image}
                        id={anim.id_animaux}
                        onClick={() => handleDescription(anim)}
                    />
                </div>
            ))}
        </div>
    );
};

export default ListCard;
