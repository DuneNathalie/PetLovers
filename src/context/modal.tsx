import React, { createContext, FC, useContext, useState } from 'react';
import Confetti from 'react-confetti'; // Add this line to import Confetti

interface ModalContextType {
  showModal: (content: React.ReactNode) => void;
  hideModal: () => void;
  isVisible: boolean;
  content: React.ReactNode | null;
}

interface ModalProviderProps {
  children: React.ReactNode; 
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [modal, setModal] = useState<{
    isVisible: boolean;
    content: React.ReactNode | null;
  }>({
    isVisible: false,
    content: null,
  });

  const showModal = (content: React.ReactNode) => {
    setModal({ isVisible: true, content });
  };

  const hideModal = () => {
    setModal({ isVisible: false, content: null });
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal, isVisible: modal.isVisible, content: modal.content }}>
      {children}
      {modal.isVisible && (
        <div>
            <Confetti style={{ zIndex: 300 }} />;
          <div
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          />
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'white',
              padding: '20px',
              zIndex: 1000,
            }}
          >
            {modal.content}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};
