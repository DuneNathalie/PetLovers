import React, { useEffect, useState } from 'react';

import Styles from './ListCard.module.scss';
import Card from '../Card/Card';

const ListCard: React.FC = () => {
    const [cardAnimaux, setCardAnimaux] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/animaux`)
            .then((res) => res.json())
            .then((data) => {
                setCardAnimaux(data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);


    return (
        <div className={Styles.container}>
            {cardAnimaux.map((anim, index) => {
                return (
                    <div key={index}>
                        <Card name={anim.name} image={anim.image} age={anim.age} />
                    </div>
                );
            })}

        </div>

    )
};
export default ListCard;