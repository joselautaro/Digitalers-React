// import React, { useState, useEffect } from 'react'
// import { pedirProductos } from '../../helpers/pedirProductos';
// import Swal from 'sweetalert2'

// export const ProductList = () => {

//     const [loading, setLoading] = useState(false);

//     const [items, setItems] = useState([]);


//     useEffect(() => {
//         setLoading(true)
//         pedirProductos()
//             .then((res) => {
//                 setItems(res)
//             })
//             .catch((error) => {
//                 Swal.fire({
//                     icon: 'error',
//                     title: '¡Cuidado, tenés un error en la carga!',
//                     text: `Tenés un error: ${error}`
//                 })
//             })
//             .finally(() => {
//                 setLoading(false)
//             })
//     }, [])

//     return (
//         <>
//             {
//                 loading
//                 ?
                
//                 Swal.fire({
//                     timer: 500,
//                     timerProgressBar: true,
//                     didOpen: () => {
//                       Swal.showLoading()
//                       const b = Swal.getHtmlContainer().querySelector('b')
//                       timerInterval = setInterval(() => {
//                         b.textContent = Swal.getTimerLeft()
//                       }, 100)
//                     },
//                     willClose: () => {
//                       clearInterval(timerInterval)
//                     }
//                   }).then((result) => {
//                     /* Read more about handling dismissals below */
//                     if (result.dismiss === Swal.DismissReason.timer) {
//                       console.log('I was closed by the timer')
//                     }
//                   })
//                 :(
//                     <div className='card'>
//                         {
//                             items.map((item) =>(
//                                 <div key={item.id}>
//                                     <img src={item.photo} alt={item.photo} />
//                                     <p>{item.name}</p>
//                                     <p>{item.description}</p>
//                                     <p>{item.category}</p>
//                                 </div>
//                             ))
//                         }

//                     </div>
//                 )
//             }

//         </>
//     )
// }

import React, { useState, useEffect } from 'react';
import { pedirProductos } from '../../helpers/pedirProductos';
import Swal from 'sweetalert2';

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
                <div className='card'>
                    {items.map((item) => (
                        <div key={item.id}>
                            <img src={item.photo} alt={item.photo} />
                            <p>{item.name}</p>
                            <p>{item.description}</p>
                            <p>{item.category}</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

