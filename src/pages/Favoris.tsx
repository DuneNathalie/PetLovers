import React from 'react';

import Styles from './Style.module.scss';
import Footer from '../components/Footer/Footer';
import SideBar from '../components/SideBar/SideBar';

const Favoris: React.FC = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.sidebar}>
                <div className={Styles.bar}>
                    <SideBar />
                </div>
                <div className={Styles.content}>
                    <h1>Favoris</h1>
                    <Footer />
                </div>
            </div>
        </div>
    )
};
export default Favoris;