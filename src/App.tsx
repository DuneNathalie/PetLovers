import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';

const App: React.FC = () => {
    return(
    <div >
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
    </Routes>
</div>
)
};
export default App;