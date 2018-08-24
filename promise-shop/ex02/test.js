let promise = new Promise( (fulfill, reject) =>{
	setTimeout(() =>
	{reject(new Error ('REJET !'));
	}, 300);
});
    
let onReject = (err) => {
	console.log(err.message);
}

promise.then(null, onReject);
