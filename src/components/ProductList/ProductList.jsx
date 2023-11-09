import React, { useState, useEffect } from 'react';
import { pedirProductos } from '../../helpers/pedirProductos';
import './style.css'
import Swal from 'sweetalert2';
import { Counter } from '../Counter/Counter';

export const ProductList = () => {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        setLoading(true);
        pedirProductos()
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: '¡Cuidado, tenés un error en la carga!',
                    text: `Tenés un error: ${error}`,
                });
            })
            .finally(() => {
                setLoading(false);
            });
    }, []); // Agrega un arreglo de dependencias vacío para que se ejecute una vez

    return (
        <>
            {loading ? (
                // Aquí puedes mostrar una pantalla de carga
                <div>Cargando...</div>
            ) : (
                <div className='card-list'>
                    {items.map((item) => (
                        <div key={item.id} className='card'>
                            <img src={item.photo} alt={item.photo} />
                            <p>{item.name}</p>
                            <p>{item.description}</p>
                            <h5>${item.price}</h5>
                            <p>{item.category}</p>
                            <Counter/>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

