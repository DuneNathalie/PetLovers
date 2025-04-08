import React from 'react';
import Styles from './Style.module.scss';
import Footer from '../components/Footer/Footer';

const Login: React.FC = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.contant}>
        <div className={Styles.player}>
          <video 
            controls 
            width="100%" 
            style={{ maxHeight: '95vh' }} 
          >
            <source src="/video/video.mp4" type="video/mp4" />
          </video>
        </div>
        <div>
          <h1>Login</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
