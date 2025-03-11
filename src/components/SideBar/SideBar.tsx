import React from 'react';
import Styles from './SideBar.module.scss';
import Nav from '../Nav/Nav';
import logo from '../../assets/logo.png';

const SideBar: React.FC = () => {
    return(
    <div className={Styles.container}> 
       <img src={logo}alt="logo" />
        <Nav />
    </div>
    );
};

export default SideBar;