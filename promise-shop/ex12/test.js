const preq = require('q-io/http')

let getid = (id) =>{
		return preq.read('http://localhost:7001/' + id)
}

preq.read('http://localhost:7000/')
	.then(getid)
	.then((data) =>{
	console.log(JSON.parse(data))
	})
	.catch ((err) => {
		console.log(err.message);
	})
