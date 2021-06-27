/*
const myPromise = Promise.resolve(1)
    myPromise.then((value) => {
        console.log(value) // log: 1
    })


const myPromise = new Promise((resolve) => {
    resolve(1)
})

myPromise.then((value) => {
    console.log(value + 1)  // log: 2
})


const myPromise = new Promise((resolve) => {
    resolve(1)
})

myPromise.then((value) => {
    return value + 2
})
    .then((value) => {
    console.log(value + 2) // log: 4
})


function asyncMethod(callBack:any) {
    setTimeout(() => {
        console.log("Async Callback");
        callBack();
    }, 1500);
}

asyncMethod(() => console.log("Async Callback Completed"));
*/