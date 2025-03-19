import { useState } from "react";


 const UsePilaLibros = (PilaInicial = [])=>{
    const[pila, SetPila] = useState(PilaInicial);

    const apilar = (libro) =>{
        SetPila((prevPila)=> [libro, ...prevPila])
    }

    const desapilar = ()=>{
        if (pila.length === 0) return null;
        const[superior, ...resto] = pila;
        SetPila(resto)
        return superior;
    }

    return{
        pila, apilar, desapilar

    }
}
export default UsePilaLibros;