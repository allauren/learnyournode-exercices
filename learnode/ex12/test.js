const http = require('http');

let ret = '';

let server = http.createServer((req, res) => {
    if (req.method == 'POST') {
		req.on('data', (data) =>{
				console.log(req.on);
				ret += data.toString().toUpperCase();
		});
		req.on('end', () =>{
			res.write(ret);
			res.end();
		});
	}
});

server.listen(process.argv[2]);
