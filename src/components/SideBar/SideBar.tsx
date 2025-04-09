import React, { useState } from 'react';
import Styles from './SideBar.module.scss';
import { NavLink } from 'react-router';

import Logo from '../../assets/logo.png';

const SideBar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const userName = localStorage.getItem('user');
    const newUser = localStorage.setItem('user', 'Nathy');
    console.log("userName => ", userName);

    console.log(menuOpen);
    return (

        <nav className={Styles.container}>

            <div className={Styles.menu} onClick={() => setMenuOpen(prev => !prev)}>
                <img src={Logo} alt="logo" />
            </div>
            <ul className={menuOpen ? `${Styles.open}` : ''}>
            <div className={Styles.logo}>
                <img src={Logo} alt="logo" />
            </div>
                <li>
                    <NavLink to='/home'>Acceuil</NavLink>
                </li>
                <li>
                    <NavLink to='/addAdoption'>Ajoute un animal à l'adoption</NavLink>
                </li>
                <li>
                    <NavLink to='/favoris'>Tes Favoris</NavLink>
                </li>
                <li>
                    <NavLink to='/'>Déconnexion</NavLink>
                </li>
            </ul>
        </nav>

    );
};

export default SideBar;