    let promise = new Promise((fulfill, reject) =>{
		setTimeout(() =>
		{fulfill ('ACCOMPLIE !');
		}, 300);
    });

	promise.then((data) =>{
	console.log(data);
	})
