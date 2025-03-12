import { NodoDoble } from "./NodoDoble";
export class ListaDoblementeEnlazada {
    constructor() {
        this.cabeza = null;
        this.cola = null;
        this.longitud = 0;
    }

    agregar(valor) {
        const nuevoNodo = new NodoDoble(valor);
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
            this.cola = nuevoNodo;
        } else {
            this.cola.siguiente = nuevoNodo;
            nuevoNodo.anterior = this.cola;
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
