let all = (promise1, promise2) =>{
	let counter = 0;
	let values = [];

	return new Promise((ful, rej) =>
	{
		promise1.then((data) => {
			values[counter++] = data;
		if (counter == 2)
			ful(values);
		});
		promise2.then((data) => {
			values[counter++] = data;
		if (counter == 2)
			ful(values);
		});
	})
}

all(getPromise1(), getPromise2())
	.then (console.log);
