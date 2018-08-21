const request = require('./request');

request(process.argv[2], (err, data) => {
	if (err)
		return console.log(err)
	console.log(data);
	request(process.argv[3], (err, data) => {
		if (err)
			return console.log(err)
		console.log(data);
		request(process.argv[4], (err, data) => {
			if (err)
				return console.log(err)
			console.log(data);
			})
	});});
