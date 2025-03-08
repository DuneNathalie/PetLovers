import React from 'react';

import Styles from './Style.module.scss';
import Footer from '../components/Footer/Footer';

const Home: React.FC = () => {
    return (
        <div className={Styles.container}>
            <h1>Home</h1>
            <Footer />
        </div>
    )
};
export default Home;