import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, deleteItem, updateItem } from "../features/crudSlice";
import FirestoreForm from "../components/FirestoreForm";

const Home = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.crud);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  const handleUpdate = (item) => {
    const updatedNombre = prompt("Nuevo nombre:", item.nombre);
    const updatedPrecio = prompt("Nuevo precio:", item.precio);

    if (updatedNombre && updatedPrecio) {
      dispatch(
        updateItem({
          id: item.id,
          updatedData: { nombre: updatedNombre, precio: updatedPrecio },
        })
      );
    }
  };

  return (
    <div>
      <h1>Firestore CRUD</h1>
      <FirestoreForm />
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.nombre} - {item.precio}
            <button onClick={() => handleUpdate(item)}>Editar</button>
            <button onClick={() => handleDelete(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
