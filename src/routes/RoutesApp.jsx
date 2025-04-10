import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Log_in from '../Components/Log_in.jsx'
import Principal from '../Components/Principal.jsx';

const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Log_in />} />
            <Route path="/home" element={<Principal />} />
        </Routes>
    );
};

export default RoutesApp;