 
 /**Ejercicio 1 */
 const myPromise = Promise.resolve(1)
 myPromise.then((value) => {
   console.log(value) // log: 1
 }) 

 /**Ejercicio 2 */
const myPromise2 = new Promise<number>((resolve) => {
  resolve(1)
})

myPromise.then((value) => {
  console.log(value + 1)  // log: 2
})


 /**Ejercicio 3 */
 const myPromise3 = new Promise<number>((resolve) => {
  resolve(1)  
})

myPromise3
  .then((value) => {
    return value + 2
  })
  .then((value) => {
   console.log(value + 1) // log: 4
  })


  /**Ejercicio 4 */
  const myPromise4 = new Promise((resolved, reject) => {
    reject('Error: Operation Failed')  
  })
  
  myPromise4
    .catch((err) => {
     console.log(err) // log: 'Error: Operation Failed'
    })


/**Ejercicio 5 */
const callback1 = (value:string) => console.log('Esto es un texto:', value)
const callback2 = (value:number) => console.log('Esto es un numero:', value)

const myPromise5 = new Promise<number>((resolve) => {
  setTimeout(() => 
    resolve(2)
  , 1000) 
})

myPromise5
.then((value)=>{
  console.log(value);
  
}) // log: Esto es un numero: 2


