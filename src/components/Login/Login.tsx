import React, { useState } from 'react';
import Styles from './Login.module.scss';

import { useNavigate } from 'react-router';


const Connection: React.FC = () => {

    const [isRegistering, setIsRegistering] = useState(false);
    const [formData, setFormData] = useState({
        user: "",
        password: "",
        confirmPassword: "",
    });
  //  const [errorMessage, setErrorMessage] = useState<string>("");

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (isRegistering) {
            if (formData.password !== formData.confirmPassword) {
                alert("Les mots de passe ne correspondent pas.");
                return;
            }
    
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/register`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: formData.user,
                        password: formData.password
                    })
                });
                console.log("data entrée dans form ", formData.user, formData.password);
                const data = await response.json();

                if (response.ok) {
                    console.log("Inscription réussie !");
                    setIsRegistering(false); 
                } else {
                    console.log("Erreur lors de l'inscription :", data.message);
                    alert(data.message || "Erreur lors de l'inscription");
                }
            } catch (error) {
                console.error("Erreur lors de l'envoi de la requête :", error);
            }
        } else {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: formData.user,
                        password: formData.password
                    })
                });
    
                const data = await response.json();
                console.log("data entrée dans form ", formData.user, formData.password);
    
                if (response.ok) {
                    console.log("Connexion réussie !");
                    localStorage.setItem('user', formData.user);
                    const userName = localStorage.getItem('user');
                    console.log("userName Stocké => ", userName);
                    navigate('/home');
                } else {
                    alert("Identifiants incorrects !");
                    setFormData({ ...formData, password: "", user: "" });
                }
            } catch (error) {
                console.error("Erreur lors de la requête :", error);
               // setErrorMessage("Erreur serveur ou réseau.");
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
