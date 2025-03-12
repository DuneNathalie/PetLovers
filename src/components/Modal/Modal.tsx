import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../context/modal';

import Styles from './Modal.module.scss';
import Pet from "../../assets/Pet.png";

interface ModalProps {
    text: string;
    show: boolean;
}

const Modal: React.FC<ModalProps> = ({ text }) => {
    const { hideModal, isVisible } = useModal();
    const navigate = useNavigate();


    if (!isVisible) return null;

    return (
        <div className={Styles.container}>
                <img src={Pet} alt="pet" />
            <div className={Styles.contant}>
                <p>{text}</p>
                <button
                    onClick={() => {
                        hideModal();
                        navigate('/'); // Navigue vers la page d'accueil ou autre selon le besoin
                    }}
                >
                    Fermer
                </button>
            </div>
        </div>
    );
};


export default Modal;
