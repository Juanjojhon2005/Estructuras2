import { useState } from 'react';
import { ListaDoblementeEnlazada } from '../Listas/ListaDoblementeEnlazada';

const historial = new ListaDoblementeEnlazada();
historial.agregar("Página 1");
historial.agregar("Página 2");
historial.agregar("Página 3");

export function HistorialNavegacion() {
    const [actual, setActual] = useState(historial.cabeza);

    const siguiente = () => {
        if (actual && actual.siguiente) {
            setActual(actual.siguiente);
        }
    };

    const anterior = () => {
        if (actual && actual.anterior) {
            setActual(actual.anterior);
        }
    };

    return (
        <div>
            <h2>Historial de Navegación</h2>
            <p>{actual ? actual.valor : "No hay historial"}</p>
            <button onClick={anterior} disabled={!actual?.anterior}>Anterior</button>
            <button onClick={siguiente} disabled={!actual?.siguiente}>Siguiente</button>
        </div>
    );
}