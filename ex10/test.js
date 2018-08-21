const net = require('net')

let getdate = (callback) => {
	let ret = '';
	let date = new Date();
	if (!date)
		return('error');
	ret += date.getFullYear() + '-'
	ret += ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-'
	ret += date.getDate() + ' '
	ret += date.getHours() + ':'
	ret += (date.getMinutes() < 10 ? ('0' + date.getMinutes()) : (date.getMinutes()))
	callback (null, ret)
}


let server = net.createServer((socket) =>{
		getdate((err, data) => {
			if (err)
				return console.log(err);
			socket.write(data + '\n');
		});
		socket.end();
	});

server.listen(process.argv[2]);
