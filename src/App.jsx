import React from "react";
import {  Routes, Route, Link } from "react-router-dom";
import ListaContact from "./components/ListaContact";
import AgregarContacto from "./components/AgregarContacto";



const App = () => {
    return (
      
            <div>
                <h1>Lista de Contactos</h1>

                <nav>
                    <Link to="/">Ver Contactos</Link> | <Link to="/add">Agregar</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<ListaContact />} />
                    <Route path="/add" element={<AgregarContacto />} />
                </Routes>
            </div>
       
    )
}

export default App;