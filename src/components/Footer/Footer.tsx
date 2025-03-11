import React from 'react';
import Styles from './Footer.module.scss';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';

const Footer: React.FC = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.social}>
                <a href="https://github.com/DuneNathalie" rel="noopener noreferrer" aria-label="github">
                    <FaGithub className={Styles.icon} />
                </a>
                <a href="https://www.linkedin.com/in/nathalie-dune-1b4a09245" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin className={Styles.icon} />
                </a>
                <a href="https://port-folio-red-phi.vercel.app" rel="noopener noreferrer" aria-label="Portfolio">
                    Portfolio
                </a>
            </div>
            <p>2025 - Tous droits réservés à Dune Nathalie créatrice du site</p>
        </div>
    );
};

export default Footer;
