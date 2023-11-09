import React, { useEffect, useState } from 'react'

export const Dolar = () => {

    const [dolarOficial, setDolarOficial] = useState(null);
    
    const data = [
        
            {
              "moneda": "USD",
              "casa": "oficial",
              "nombre": "Oficial",
              "compra": 347.5,
              "venta": 365.5,
              "fechaActualizacion": "2023-11-06T20:48:00.000Z"
            },
            {
              "moneda": "USD",
              "casa": "blue",
              "nombre": "Blue",
              "compra": 905,
              "venta": 925,
              "fechaActualizacion": "2023-11-06T20:48:00.000Z"
            },
            {
              "moneda": "USD",
              "casa": "bolsa",
              "nombre": "Bolsa",
              "compra": 839.7,
              "venta": 844,
              "fechaActualizacion": "2023-11-06T20:48:00.000Z"
            },
            {
              "moneda": "USD",
              "casa": "contadoconliqui",
              "nombre": "Contado con liquidación",
              "compra": 856.7,
              "venta": 840.95,
              "fechaActualizacion": "2023-11-06T20:48:00.000Z"
            },
            {
              "moneda": "USD",
              "casa": "solidario",
              "nombre": "Solidario (Turista)",
              "compra": null,
              "venta": 639.63,
              "fechaActualizacion": "2023-11-06T20:48:00.000Z"
            },
            {
              "moneda": "USD",
              "casa": "mayorista",
              "nombre": "Mayorista",
              "compra": 349.1,
              "venta": 350.1,
              "fechaActualizacion": "2023-11-06T20:48:00.000Z"
            }
          
    ]

    //Filtrar el Json para obtener el dato del valor oficial

    const dolarOficialData = data.find(item => item.casa === "oficial");

    useEffect(() =>{
        setDolarOficial(dolarOficialData)
    },[dolarOficialData])


  return (
    <div>
        <h1>Valor del dolar oficial</h1>
        {
            dolarOficial ? (
                <div>
                    <p>Compra: {dolarOficial.compra}</p>
                    <p>Venta: {dolarOficial.venta}</p>
                    <p>Fecha de actualización: {dolarOficial.fechaActualizacion}</p>
                </div>
            ):(
                <p>Cargando...</p>
            )
        }
    </div>
  )
}
