import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Favoris from './pages/Favoris';
import Description from './pages/Description';
import AddAdoption from './pages/AddAdoption';
import { ModalProvider } from './context/modal';

const App: React.FC = () => {
    return (

        <ModalProvider>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/favoris' element={<Favoris />} />
                <Route path='/Description/:id' element={<Description />} />
                <Route path='/AddAdoption' element={<AddAdoption />} />
            </Routes>
        </ModalProvider>

    )
};
export default App;