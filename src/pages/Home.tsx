import React, { useEffect, useState } from 'react';

import Styles from './Style.module.scss';
import Footer from '../components/Footer/Footer';
import Card from '../components/Home/Card/Card';
import SideBar from '../components/SideBar/SideBar';
import ListCard from '../components/Home/ListCard/ListCard';

const Home: React.FC = () => {
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
    <div className={Styles.contant}>
        <div className={Styles.bar}>
            <SideBar />
        </div>
        <div className={Styles.mainContent}>
            <h2>Bienvenue sur PetLovers</h2>
            <ListCard />
        </div>
    </div>
    <Footer />
</div>
    )
};
export default Home;