import { useState } from 'react';
import { ListaEnlazada } from '../Listas/ListaEnlazada';

const listaCanciones = new ListaEnlazada();
listaCanciones.agregar("Canción 1");
listaCanciones.agregar("Canción 2");
listaCanciones.agregar("Canción 3");

export function ListaCanciones() {
    const [actual, setActual] = useState(listaCanciones.cabeza);

    const siguiente = () => {
        if (actual && actual.siguiente) {
            setActual(actual.siguiente);
        }
    };

    return (
        <div>
            <h2>Lista de Canciones</h2>
            <p>{actual ? actual.valor : "No hay canciones"}</p>
            <button onClick={siguiente} disabled={!actual?.siguiente}>Siguiente</button>
        </div>
    );
}