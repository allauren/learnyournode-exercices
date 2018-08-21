const http = require('http');
const url = require('url');

let ret;

let server = http.createServer((req, res) => {
	let urlparse = url.parse(req.url, true),json

    if (urlparse && req.method == 'GET') {
		if (urlparse.pathname == '/api/parsetime')
		{
			let date = new Date (urlparse.query.iso);
			ret = {
				hour : date.getHours(),
				minute: date.getMinutes(),
				second: date.getSeconds()
			}
		}
		else if (urlparse.pathname == '/api/unixtime')
		ret = {
			unixtime : (new Date(urlparse.query.iso)).getTime()
		};
	}
	if (ret)
	{
        res.writeHead(200, { 'Content-Type': 'application/json' });
		res.write(JSON.stringify(ret));
		res.end()
	}
	else
	{
		res.writeHead(404);
		res.end();
	}
});

server.listen(process.argv[2]);
