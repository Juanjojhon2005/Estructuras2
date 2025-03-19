const ListaLibros = ({ libros }) => {
    if (libros.length === 0) return <p>No hay libros en la pila.</p>;
  
    return (
      <ul>
        {libros.map((libro, indice) => (
          <li key={indice}>
            <strong>{libro.nombre}</strong> por {libro.autor}  
            (ISBN: {libro.isbn}, Editorial: {libro.editorial})
          </li>
        ))}
      </ul>
    );
  };
  
  export default ListaLibros;