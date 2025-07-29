import React, { useState } from "react";
import ContactoCard from "./ContactoCard";


const App = () => {
  const [contactos, setContactos] = useState([]); // tu lista
  const [contactoEditando, setContactoEditando] = useState(null);

  const eliminarContacto = (id) => {
    setContactos(contactos.filter((c) => c.id !== id));
  };

  const editarContacto = (id) => {
    const contacto = contactos.find((c) => c.id === id);
    setContactoEditando(contacto);
  };

  const guardarContacto = (contactoActualizado) => {
    setContactos(contactos.map((c) => (c.id === contactoActualizado.id ? contactoActualizado : c)));
    setContactoEditando(null); 
  };

  return (
    <div className="container mt-4">
      {contactoEditando ? (
        <ContactoForm
          contacto={contactoEditando}
          onGuardar={guardarContacto}
          onCancelar={() => setContactoEditando(null)}
        />
      ) : (
        contactos.map((contacto) => (
          <ContactoCard
            key={contacto.id}
            contacto={contacto}
            eliminarContacto={eliminarContacto}
            editarContacto={editarContacto}
          />
        ))
      )}
    </div>
  );
};

export default App;
