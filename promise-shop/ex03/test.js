let promise = new Promise((ful, rej) =>{
	ful('J\'AI ETE APPELEE');
	rej(new Error ('J\'AI ETE APPELEE'));
});

let onRejected = (err) =>{
	console.log(err.message);
}

promise.then(console.log, onRejected);
