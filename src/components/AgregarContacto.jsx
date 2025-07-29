import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AgregarContacto = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch('https://playground.4geeks.com/contact/agendas/ddelgado/contacts', {

        
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        
    });
      if (!resp.ok) {
        const errMsg = await resp.text();
        console.error("Error al agregar:", errMsg);
        return;
      }
      navigate("/");
    } catch (error) {
      console.error("Error al agregar contacto:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Nuevo Contacto</h2>
      <input type="text" placeholder="Nombre" value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input type="email" placeholder="Correo" value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="text" placeholder="Teléfono" value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      <input type="text" placeholder="Dirección" value={form.address}
        onChange={(e) => setForm({ ...form, address: e.target.value })} />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default AgregarContacto;
