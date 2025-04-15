import React from 'react';
import Styles from './ListFavoris.module.scss';
import Card from '../Home/Card/Card';
import { useNavigate } from 'react-router-dom';

interface Animal {
    id_animaux: number;
    name: string;
    image: string;
}

interface ListFavorisProps {
    animaux: Animal[]; 
}

const ListFavoris: React.FC<ListFavorisProps> = ({ animaux }) => {
    const navigate = useNavigate();

    function handleDescription(animal: Animal) {
        navigate(`/Description/${animal.id_animaux}`, { state: { animal } });
    }

    return (
        <div className={Styles.container}>
            {animaux.length > 0 ? (
                animaux.map((anim) => (
                    <div key={anim.id_animaux} className={Styles.cardAnim}>
                        <Card
                            name={anim.name}
                            image={anim.image}
                            id={anim.id_animaux}
                            onClick={() => handleDescription(anim)}
                        />
                    </div>
                ))
            ) : (
                <p className={Styles.emptyText}>Aucun favori pour le moment.</p>
            )}
        </div>
    );
};

export default ListFavoris;
