import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { PaginaCanciones } from './Pages/PaginaCanciones';
import { PaginaHistorial } from './Pages/PaginaHistorial';

function Navbar() {
    return (
        <nav>
            <Link to="/">Reproductor</Link> | <Link to="/historial">Historial</Link>
        </nav>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<PaginaCanciones />} />
                <Route path="/historial" element={<PaginaHistorial />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);