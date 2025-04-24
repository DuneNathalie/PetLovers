import React, { useState, useEffect } from 'react';
import Styles from './Card.module.scss';
import { FaHeart } from "react-icons/fa";

interface AnimalProps {
  id: number;
  name: string;
  image: string;
  onClick: () => void;
};

const Card: React.FC<AnimalProps> = ({ id, name, image, onClick }) => {
  const [liked, setLiked] = useState(false);

  // Charger l'état liked depuis le localStorage au début
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('animal_ids') || '[]') as string[];
    if (stored.includes(id.toString())) {
      setLiked(true);
    }
  }, [id]);

  const toggleHeart = () => {
    const stored = JSON.parse(localStorage.getItem('animal_ids') || '[]') as string[];
    let updated: string[];

    if (liked) {
      // Si déjà aimé, on retire
      updated = stored.filter((storedId) => storedId !== id.toString());
    } else {
      // Si pas aimé, on ajoute
      updated = [...stored, id.toString()];
    }

    localStorage.setItem('animal_ids', JSON.stringify(updated));
    const list = localStorage.getItem('animal_ids');
    console.log("list => ", list);
    setLiked(!liked);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.containerIcon}>
        <FaHeart
          onClick={toggleHeart}
          size={15}
          color={liked ? "red" : "gray"}
          className={Styles.icon}
        />
      </div>
      <h2>{name}</h2>
      <div className={Styles.image}>
      <img className="tete" src={image} alt="tete" />
      </div>
      <button onClick={onClick}>En savoir +</button>
    </div>
  );
};

export default Card;
