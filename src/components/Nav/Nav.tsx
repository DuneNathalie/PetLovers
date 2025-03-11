import React from 'react';

import Styles from './Nav.module.scss';
import { NavLink } from 'react-router';

const Nav: React.FC = () => {

    return (
        <div className={Styles.container}>
            <NavLink to='/' className={Styles.nav}>Acceuil</NavLink>
            <NavLink to='/addAdoption' className={Styles.nav}>Ajoute un animal à l'adoption</NavLink>
            <NavLink to='/favoris' className={Styles.nav}>Tes Favoris</NavLink>
        </div>
    )
};

export default Nav;