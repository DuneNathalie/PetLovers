import React from 'react';

import Styles from './Footer.module.scss';

const Footer: React.FC = () => {
    return (
        <div className={Styles.container}>
            <p>2025 - Tous droits réservés à Dune Nathalie créatrice du site</p>
        </div>
    )
};
export default Footer;