import React from 'react';

import Styles from './Style.module.scss';
import Footer from '../components/Footer/Footer';

const Login: React.FC = () => {
    return (
        <div className={Styles.container}>
            <h1>Login</h1>
            <Footer />
        </div>
    )
};
export default Login;