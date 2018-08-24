let promise = Promise.reject(new Error ('SOUCIS'));

promise.catch((err) =>{
console.log (err.message);
})
