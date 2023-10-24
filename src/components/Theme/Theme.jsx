import React, { useState } from 'react'
import './style.css'

export const Theme = () => {
        //muestra en pantalla, variable de estado
    const [tema, setTema] = useState('white');

    const alternanTema = () =>{
        setTema(tema === 'white' ? 'dark' : 'white');
    }

  return (
    <div className={tema === 'white' ? 'white-theme' : 'dark-theme'}>
        <button onClick={alternanTema}>Cambiar tema</button>
        <h1>Tema: {tema}</h1>
    </div>
  )
}

