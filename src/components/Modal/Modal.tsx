import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useModal } from '../../context/modal';

import Styles from './Modal.module.scss';
import Pet from "../../assets/logo.png";

interface ModalProps {
    text: string;
    show: boolean;
    id?: number;
    type: "delete" | "update";
}

const Modal: React.FC<ModalProps> = ({ text, id, type }) => {
    const { hideModal, isVisible } = useModal();
    const navigate = useNavigate();
    const [delAnimaux, setDelAnimaux] = useState<{ id: number }[]>([]);

    useEffect(() => {
        if (type === 'update' && isVisible) {
            const timer = setTimeout(() => {
                hideModal();
                navigate('/home');
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [type, isVisible, hideModal, navigate]);

    if (!isVisible) return null;

    const deleteAnimaux = (id: number | undefined) => {
        if (!id) return;

        fetch(`${process.env.REACT_APP_BACKEND_URL}/animaux/${id}`, {
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
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <>
            {type === "update" && (
                <div className={Styles.container}>
                    <img src={Pet} alt="pet" />
                    <div className={Styles.contant}>
                        <p>{text}</p>
                    </div>
                </div>
            )}

            {type === "delete" && (
                <div className={Styles.container}>
                    <img src={Pet} alt="pet" />
                    <div className={Styles.contant}>
                        <p>{text}</p>
                        <button
                            onClick={() => {
                                deleteAnimaux(id);
                                hideModal();
                                navigate('/home');
                            }}
                        >
                            Fermer
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
