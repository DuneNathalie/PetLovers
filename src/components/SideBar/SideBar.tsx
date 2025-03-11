import React, { useState } from 'react';
import Styles from './SideBar.module.scss';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.png';

const SideBar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    console.log(menuOpen);
    return (

        <nav className={Styles.container}>

            <div className={Styles.menu} onClick={() => setMenuOpen(prev => !prev)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <img src={logo} alt="logo" />
            <ul className={menuOpen ? `${Styles.open}` : ''}>
                <li>
                    <NavLink to='/'>Acceuil</NavLink>
                </li>
                <li>
                    <NavLink to='/addAdoption'>Ajoute un animal à l'adoption</NavLink>
                </li>
                <li>
                    <NavLink to='/favoris'>Tes Favoris</NavLink>
                </li>
            </ul>
        </nav>

    );
};

export default SideBar;