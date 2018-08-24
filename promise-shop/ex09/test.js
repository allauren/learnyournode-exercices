let alwaysThrows = () => {
	throw new Error ('OH NOES')
}
let iterate = (arg) =>{
	console.log(arg);
	return (arg+1);
}

Promise.resolve(iterate(1))
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(alwaysThrows)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.then(iterate)
	.catch((err) => {
	console.log (err.message)
	})
