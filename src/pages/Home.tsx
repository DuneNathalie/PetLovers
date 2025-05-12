import React, { useEffect, useState } from 'react';

import Styles from './Style.module.scss';
import Footer from '../components/Footer/Footer';
import SideBar from '../components/SideBar/SideBar';
import ListCard from '../components/Home/ListCard/ListCard';
import SearchBar from '../components/Home/SearchBar/SearchBar';

const Home: React.FC = () => {
    const [cardAnimaux, setCardAnimaux] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("Nos PetLovers");

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/animaux`)
            .then((res) => res.json())
            .then((data) => {
                setCardAnimaux(data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []); 

    const filteredAnimaux = selectedCategory === "Nos PetLovers"
        ? cardAnimaux
        : cardAnimaux.filter((animal) => 
            animal.type.trim().toLowerCase() === selectedCategory.trim().toLowerCase()
        );

    return (
        <div className={Styles.container}>
            <div className={Styles.contant}>
                <div className={Styles.bar}>
                    <SideBar />
                </div>
                <div className={Styles.mainContent}>
                    <SearchBar onCategoryChange={setSelectedCategory} selectedCategory={selectedCategory} />
                    <ListCard animaux={filteredAnimaux} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
