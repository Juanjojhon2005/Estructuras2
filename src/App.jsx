import FormularioLibro from './componentes/FormularioLibro';
import ListaLibros from './componentes/ListaLibros';
import  UsePilaLibros  from './hooks/usePilaLibros';

const App = () => {
  const { pila, apilar, desapilar } = UsePilaLibros([
    {
      nombre: 'Harry Potter And The Sorcerer Stone',
      isbn: '9781781101315',
      autor: 'J.K Rowling',
      editorial: 'Salamandra Infantil y Juvenil'
    },
    {
      nombre: 'Harry Potter And The Chamber of Secrets',
      isbn: '9788831000154.',
      autor: 'J.K Rowling',
      editorial: 'Salamandra Infantil y Juvenil'
    }
  ]);

  return (
    <div>
      <h1>Gestor de Pila de Libros</h1>
      <FormularioLibro alAgregarLibro={apilar} />
      <ListaLibros libros={pila} />
      <button onClick={desapilar}>Eliminar Libro Superior</button>
    </div>
  );
};

export default App;
