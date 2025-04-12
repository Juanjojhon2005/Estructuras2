import { useDispatch } from "react-redux";
import { addItem } from "../features/crudSlice";
import { useState } from "react";

const FirestoreForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ nombre: "", precio: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem(formData));
    setFormData({ nombre: "", precio: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Precio"
        name="precio"
        value={formData.precio}
        onChange={handleChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default FirestoreForm;
