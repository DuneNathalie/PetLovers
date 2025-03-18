import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../context/modal';

import Styles from './Modal.module.scss';
import Pet from "../../assets/logo.png";

interface ModalProps {
    text: string;
    show: boolean;
    id?: number;
}

const Modal: React.FC<ModalProps> = ({ text, id }) => {
    const { hideModal, isVisible } = useModal();
    const navigate = useNavigate();
    const [delAnimaux, setDelAnimaux] = useState<{ id: number }[]>([]);

    if (!isVisible) return null;
    
    const deleteAnimaux = (id) => {
        console.log("ID envoyé dans la requête DELETE:", id);
        fetch(`http://localhost:5000/animaux/${id}`, {
            method: "DELETE",
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error("Erreur lors de la suppression");
            }
            return res.json();
        })
        .then((data) => {
            console.log(data.message);
            setDelAnimaux((prev) => prev.filter(animal => animal.id !== id));
            console.log('Animal supprimé avec succès');
        })
        .catch((err) => {
            console.error(err);
        });
    };
    
    
    
    
    return (
        <div className={Styles.container}>
                <img src={Pet} alt="pet" />
            <div className={Styles.contant}>
                <p>{text}</p>
                <button
                    onClick={() => {
                        deleteAnimaux(id);
                        hideModal();
                        navigate('/');
                    }}
                >
                    Fermer
                </button>
            </div>
        </div>
    );
};


export default Modal;
