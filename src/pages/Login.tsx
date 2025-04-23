import React from 'react';
import Styles from './Style.module.scss';
import Footer from '../components/Footer/Footer';
import LoginConnect from '../components/Login/Login';

const Login: React.FC = () => {

  localStorage.clear();
  
  return (
    <div className={Styles.container}>
      <div className={Styles.contant}>
        <div className={Styles.login}>
          <LoginConnect />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
