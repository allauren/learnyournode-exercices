let attachTitle = (str) =>{
	return 'DR. ' + str
}

let promise = Promise.resolve('MANHATTAN');

promise.then(attachTitle)
.then(console.log)
