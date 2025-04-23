import React, { useEffect, useState } from 'react';
import Styles from './Style.module.scss';
import Footer from '../components/Footer/Footer';
import SideBar from '../components/SideBar/SideBar';
import ListFavoris from '../components/ListFavoris/ListFavoris';

const Favoris: React.FC = () => {
    const [cardAnimaux, setCardAnimaux] = useState<any[]>([]); // Liste des animaux
    const [favAnimaux, setFavAnimaux] = useState<any[]>([]); // Liste des animaux favoris

    useEffect(() => {
        fetch(`http://localhost:5000/animaux`)
            .then((res) => res.json())
            .then((data) => {
                setCardAnimaux(data); 
            })
            .catch((err) => {
                console.error(err);
            });

        const storedIds = localStorage.getItem('animal_ids');
        if (storedIds) {
            const parsedIds: string[] = JSON.parse(storedIds); 
    
            const filteredFavAnimaux = cardAnimaux.filter((animal: any) =>
                parsedIds.includes(animal.id_animaux.toString()) 
            );
            setFavAnimaux(filteredFavAnimaux); 
        }
    }, [cardAnimaux]); 

    return (
        <div className={Styles.container}>
            <div className={Styles.contant}>
                <div className={Styles.bar}>
                    <SideBar />
                </div>
                <div className={Styles.mainContent}>
                    <ListFavoris animaux={favAnimaux} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Favoris;
