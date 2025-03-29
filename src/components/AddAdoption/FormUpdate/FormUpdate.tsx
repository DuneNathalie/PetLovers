import React from 'react';

import Styles from './FormUpdate.module.scss';


const FormUpdate: React.FC = () => {
    return (
        <form className={Styles.container}>
            <div className={Styles.containerForm}>
                <select id="type" required>
                    <option value="Type">Type de l'animal</option>
                    <option value="Chien">Chien</option>
                    <option value="Chat">Chat</option>
                    <option value="Lapin">Lapin</option>
                    <option value="Hamster">Hamster</option>
                </select>

                <label htmlFor="name">Nom de l'animal</label>
                <input type="text" id="name" placeholder="Nom de l'animal" required />

                <select id="sexe" required>
                <option value="sexe">Sexe de l'animal</option>
                    <option value="mâle">Mâle</option>
                    <option value="femelle">Femelle</option>
                </select>

                <select id="age" required>
                    <option value="Age">Age</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>

                <label htmlFor="descriptif">Descriptif de l'animal</label>
                <textarea id="descriptif" placeholder="Descriptif de l'animal" required></textarea>

                <label htmlFor="image">Image de l'animal</label>
                <input type="text" id="image" placeholder="Image de l'animal" required />


            </div>
            <div className={Styles.buttonAdd}>
                <button type="submit">Ajouter l'animal</button>
            </div>
        </form>
    );
};
export default FormUpdate;