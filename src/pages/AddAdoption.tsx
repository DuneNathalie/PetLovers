import React from 'react';

import Styles from './Style.module.scss';
import Footer from '../components/Footer/Footer';
import SideBar from '../components/SideBar/SideBar';

const AddAdoption: React.FC = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.contant}>
                <div className={Styles.bar}>
                    <SideBar />
                </div>
                <div  >
                    <h1>Ajoute un animal</h1>
                </div>
            </div>
            <Footer />
        </div>
    )
};
export default AddAdoption;