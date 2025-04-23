import React, { useState } from 'react';
import Styles from './FormUpdate.module.scss';
import Modal from '../../Modal/Modal';
import { useModal } from '../../../context/modal';

const FormUpdate: React.FC = () => {
    const { showModal } = useModal();
    const [formData, setFormData] = useState({
        name: "",
        type: "Lapin",
        sexe: "Mâle",
        age: "1",
        descriptif: "",
        image: null as File | null,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({
                ...prev,
                image: e.target.files![0]
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = new FormData();
        data.append("name", formData.name);
        data.append("type", formData.type);
        data.append("sexe", formData.sexe);
        data.append("age", formData.age);
        data.append("descriptif", formData.descriptif);

        if (formData.image) {
            data.append("image", formData.image);
        }

        try {
            const response = await fetch(`http://localhost:5000/animaux`, {
                method: "POST",
                body: data,
            });

            const resData = await response.json();

            if (response.ok) {
                console.log("Inscription réussie :", resData);
                showModal(<Modal type="update" text="Animal ajouté avec succès!" show={true} />);
            } else {
                console.log("Erreur :", resData.message);
                alert(resData.message || "Erreur lors de l'envoi");
            }
        } catch (error) {
            console.error("Erreur lors de la requête :", error);
        }
    };

    return (
        <div className={Styles.update}>
            <h2>Ajoute ton animal</h2>
        <form className={Styles.container} onSubmit={handleSubmit}>
            <div className={Styles.containerForm}>
                <div className={Styles.inputGroup}>
                    <label htmlFor="name">Type de l'animal</label>
                    <select id="type" value={formData.type} onChange={handleChange} required>
                        <option value="Chien">Chien</option>
                        <option value="Chat">Chat</option>
                        <option value="Lapin">Lapin</option>
                        <option value="Hamster">Hamster</option>
                    </select>
                </div>
                <div className={Styles.inputGroup}>
                    <label htmlFor="name">Nom de l'animal</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={Styles.inputGroup}>
                    <label htmlFor="name">Genre de l'animal</label>
                    <select id="sexe" value={formData.sexe} onChange={handleChange} required>
                        <option value="Mâle">Mâle</option>
                        <option value="Femelle">Femelle</option>
                    </select>
                </div>
                <div className={Styles.inputGroup}>
                    <label htmlFor="name">Age de l'animal</label>
                    <select id="age" value={formData.age} onChange={handleChange} required>
                        <option value="">Âge</option>
                        {[...Array(10)].map((_, i) => (
                            <option key={i + 1} value={(i + 1).toString()}>{i + 1}</option>
                        ))}
                    </select>
                </div>
                <div className={Styles.inputGroup}>
                    <label htmlFor="descriptif">Descriptif de l'animal</label>
                    <textarea
                        id="descriptif"
                        value={formData.descriptif}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className={Styles.inputGroupfile}>
                    <label htmlFor="image" >Image de l'animal</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </div>
            </div>

            <div className={Styles.button}>
                <button type="submit">
                    Ajouter l'animal
                </button>
            </div>
        </form>
        </div>
    );
};

export default FormUpdate;
