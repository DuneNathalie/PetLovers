import React from 'react';
import Styles from './Style.module.scss';
import Footer from '../components/Footer/Footer';
import LoginConnect from '../components/Login/Login';

const Login: React.FC = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.contant}>
        <div className={Styles.player}>
          <video
            autoPlay
            muted
            loop
            playsInline
            width="100%"
            style={{ maxHeight: '95vh' }}
          >
            <source src="/video/video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className={Styles.login}>
          <LoginConnect />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
