import React, { useState } from "react";
import './style.css'

export const Counter = () => {

    const [contador, setContador] = useState(0);

    const incrementar = () =>{
        setContador(contador + 1)
    }

    const decrementar = () =>{
        if(contador > 0){
            setContador(contador - 1)    
        }
    }

    return (
        <>
            <div>Contador</div>
            <p>{contador}</p>
            <button onClick={incrementar}>sumar</button>
            <button onClick={decrementar}>Restar</button>
        </>
    )
}