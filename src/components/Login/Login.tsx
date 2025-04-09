import React, { useState } from 'react';
import Styles from './Login.module.scss';

import { NavLink, useNavigate } from 'react-router';

const Connection: React.FC = () => {

    const [isRegistering, setIsRegistering] = useState(false);
    const [formData, setFormData] = useState({
        user: "",
        password: "",
        confirmPassword: "",
    });
    const [errorMessage, setErrorMessage] = useState<string>("");

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isRegistering) {
            if (formData.password !== formData.confirmPassword) {
                setErrorMessage("Les mots de passe ne correspondent pas.");
                return;
            }

            setErrorMessage("");
            console.log("Inscription réussie !");
        } else {
            if (formData.user === 'nathy' && formData.password === 'nathy1234') {
                console.log("Connexion réussie !");
                console.log("Reussi! user ", formData.user, "password ", formData.password);
                navigate('/home');

            } else {
                setErrorMessage("Identifiants incorrects.");
                console.log("echec! user ", formData.user, "password ", formData.password);
                setFormData({ ...formData, password: "", user: "" });
            }
        }
    };

    const sharedFields = (
        <>
            <div className={Styles.inputGroup}>
                <label htmlFor="username">Pseudo</label>
                <input type="text" id="username"
                    name="user"
                    value={formData.user}
                    onChange={handleChange}
                    required />
            </div>
            <div className={Styles.inputGroup}>
                <label htmlFor="password">Ton Mot de passe</label>
                <input type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required />
            </div>
        </>
    );

    return (
        <div className={Styles.container}>
            <form className={Styles.form} onSubmit={handleSubmit}>
                <h1>{isRegistering ? 'Inscription' : 'Connecte toi'}</h1>
                {sharedFields}
                {isRegistering && (
                    <div className={Styles.inputGroup}>
                        <label htmlFor="confirmPassword">Confirme ton Mot de passe</label>
                        <input type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required />
                    </div>
                )}
                <button type="submit">
                    {isRegistering ? 'Valide ton inscription' : 'Valide'}
                </button>
                {errorMessage && <p className={Styles.errorMessage}>{errorMessage}</p>}
            </form>
            <p className={Styles.text}>
                {isRegistering ? (
                    <>
                        Déjà inscrit ?{' '}
                        <button
                            type="button"
                            onClick={() => setIsRegistering(false)}
                            className={Styles.linkButton}
                        >
                            Connecte-toi ici!
                        </button>
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
