const io = require('q-io/http');

io.read('http://localhost:1337/')
	.then((data) =>{
		console.log(JSON.parse(data));
	})
	.catch ((err) =>{
		console.log (err.message)
		})
