import React from 'react';

import Styles from './Style.module.scss';
import Footer from '../components/Footer/Footer';
import SideBar from '../components/SideBar/SideBar';

import FormUpdate from '../components/AddAdoption/FormUpdate/FormUpdate';

const AddAdoption: React.FC = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.contant}>
                <div className={Styles.bar}>
                    <SideBar />
                </div>

                <div className={Styles.mainContent}>
                    <h1>Ajoute un animal à l'adoption</h1>
                    <FormUpdate />
                </div>
            </div>
            <Footer />
        </div>
    )
};
export default AddAdoption;