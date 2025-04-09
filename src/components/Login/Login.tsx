import React, { useState } from 'react';
import Styles from './Login.module.scss';

const Connection: React.FC = () => {
    const [isRegistering, setIsRegistering] = useState(false);

    const sharedFields = (
        <>
            <div className={Styles.inputGroup}>
                <label htmlFor="username">Pseudo</label>
                <input type="text" id="username" required />
            </div>
            <div className={Styles.inputGroup}>
                <label htmlFor="password">Ton Mot de passe</label>
                <input type="password" id="password" required />
            </div>
        </>
    );

    return (
        <div className={Styles.container}>
            <form className={Styles.form}>
                <h1>{isRegistering ? 'Inscription' : 'Connecte toi'}</h1>
                {sharedFields}
                {isRegistering && (
                    <div className={Styles.inputGroup}>
                        <label htmlFor="confirmPassword">Confirme ton Mot de passe</label>
                        <input type="password" id="confirmPassword" required />
                    </div>
                )}
                <button type="submit">
                    {isRegistering ? 'Valide ton inscription' : 'Valide'}
                </button>
            </form>
            <p className={Styles.text}>
                {isRegistering ? (
                 <>
                    </>
                ) : (
                    <>
                        Pas encore inscrit ?{' '}
                        <button
                            type="button"
                            onClick={() => setIsRegistering(true)}
                            className={Styles.linkButton}
                        >
                            Inscris-toi ici!
                        </button>
                    </>
                )}
            </p>
        </div>
    );
};

export default Connection;
