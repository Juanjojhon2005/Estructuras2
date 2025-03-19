import { useState } from "react";

 const FormularioLibro = ({ alAgregarLibro})=>{
    const[libro, setLibro] =useState({
        nombre : "",
        isbn: "",
        autor: "",
        editorial:"",

    })
    const manejarCambio = (e) =>{
        const {name, value}= e.target;
        setLibro({...libro,[name]:value})
    }

    const manejarEnvio = (e) =>{
        e.preventDefault();
        alAgregarLibro(libro);
        setLibro({nombre:"", isbn:"",autor:"", editorial:""})
    }
    return (
        <form onSubmit={manejarEnvio}>
          <input
            type="text"
            name="nombre"
            value={libro.nombre}
            onChange={manejarCambio}
            placeholder="Nombre del libro"
            required
          />
          <input
            type="text"
            name="isbn"
            value={libro.isbn}
            onChange={manejarCambio}
            placeholder="ISBN"
            required
          />
          <input
            type="text"
            name="autor"
            value={libro.autor}
            onChange={manejarCambio}
            placeholder="Autor"
            required
          />
          <input
            type="text"
            name="editorial"
            value={libro.editorial}
            onChange={manejarCambio}
            placeholder="Editorial"
            required
          />
          <button type="submit">Agregar Libro</button>
        </form>
      );
    };
export default FormularioLibro