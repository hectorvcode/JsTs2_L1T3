/**
 * Llamada síncrona
 * */
/**
const datos = [
    {id: 1, title: "Iron Man", year: 2008},
    {id: 2, title: "Spiderman: Homecoming", year: 2017},
    {id: 3, title: "Avengers: Endgame", year: 2010}
];

const getDatos = () => {
    return datos
}

console.log(getDatos());
*/

import {log} from "util";
/**
 * Si se ejecuta directamente muestra undefined porque al ejecutarse no encuentra nada
 *
 const datos = [
 {id: 1, title: "Iron Man", year: 2008},
 {id: 2, title: "Spiderman: Homecoming", year: 2017},
 {id: 3, title: "Avengers: Endgame", year: 2010}
 ];

 const getDatos = () => {
    setTimeout( () => {
        return datos;
    }, 1500)
}
 console.log(getDatos());
 */

/**
 * Promesas con .then y .catch
 *
 const datos = [
 {id: 1, title: "Iron Man", year: 2008},
 {id: 2, title: "Spiderman: Homecoming", year: 2017},
 {id: 3, title: "Avengers: Endgame", year: 2010}
 ];

 const getDatos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve (datos);
        }, 1500)
    });
}
 getDatos()
 .then( (datos) => console.log(datos));
 */


/**
 * Usando asyc await
 *
 const datos = [
 {id: 1, title: "Iron Man", year: 2008},
 {id: 2, title: "Spiderman: Homecoming", year: 2017},
 {id: 3, title: "Avengers: Endgame", year: 2010}
 ];

 const getDatos = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve (datos);
        }, 1500)
    });
}

 async function fetchigData () {
    const datosFetched =  await getDatos();
    console.log(datosFetched);
}

 fetchigData();
 */

const datos:any = []

const getDatos = () => {
    return new Promise( (resolve, reject) => {
        if(datos.length === 0) {
            reject(new Error ("no existen datos"))
        }
        setTimeout( () => {
            resolve (datos);
        }, 1500)
    });
}

async function fetchigData () {
    try {
        const datosFetched =  await getDatos();
        console.log(datosFetched);
    } catch(err) {
        console.log(err.message);
    }

}

fetchigData();