import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const NavBar = () => {
    return(
        <div className='nav'>
            <Link className='link' to="/">Inicio</Link>
            <Link className='link' to="/contador">Counter</Link>
            <Link className='link' to="/theme">Theme</Link>
            <Link className='link' to="/poke">Poke</Link>
            <Link className='link' to="/hola" target='_blank'>Hola</Link>
        </div>
    )
}