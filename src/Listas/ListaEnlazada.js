import { Nodo } from "./Nodo";
export class ListaEnlazada {
    constructor() {
        this.cabeza = null;
        this.cola = null;
        this.longitud = 0;
    }

    agregar(valor) {
        const nuevoNodo = new Nodo(valor);
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
            this.cola = nuevoNodo;
        } else {
            this.cola.siguiente = nuevoNodo;
            this.cola = nuevoNodo;
        }
        this.longitud++;
    }

    obtenerValores() {
        let actual = this.cabeza;
        const valores = [];
        while (actual) {
            valores.push(actual.valor);
            actual = actual.siguiente;
        }
        return valores;
    }
}
