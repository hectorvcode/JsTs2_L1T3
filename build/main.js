"use strict";
/**Ejercicio 1 */
var myPromise = Promise.resolve(1);
myPromise.then(function (value) {
    console.log(value); // log: 1
});
/**Ejercicio 2 */
var myPromise2 = new Promise(function (resolve) {
    resolve(1);
});
myPromise.then(function (value) {
    console.log(value + 1); // log: 2
});
/**Ejercicio 3 */
var myPromise3 = new Promise(function (resolve) {
    resolve(1);
});
myPromise3
    .then(function (value) {
    return value + 2;
})
    .then(function (value) {
    console.log(value + 1); // log: 4
});
/**Ejercicio 4 */
var myPromise4 = new Promise(function (resolved, reject) {
    reject('Error: Operation Failed');
});
myPromise4
    .catch(function (err) {
    console.log(err); // log: 'Error: Operation Failed'
});
/**Ejercicio 5 */
var callback1 = function (value) { return console.log('Esto es un texto:', value); };
var callback2 = function (value) { return console.log('Esto es un numero:', value); };
var myPromise5 = new Promise(function (resolve) {
    setTimeout(function () {
        return resolve(2);
    }, 1000);
});
myPromise5
    .then(function (value) {
    console.log(value);
}); // log: Esto es un numero: 2
