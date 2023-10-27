import {stock} from '../data/stock';

export const pedirProductos = () =>{
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            resolve(stock)
            reject(('Error'))
        }, 500) //1 segundo es == 1000 milésimas
    })
}