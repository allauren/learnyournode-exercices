const filterDir = require('./lol.js');

filterDir(process.argv[2], process.argv[3], (err, data) =>{
	if (err)
	{
		console.log(err)
	}
	for (let i = 0; i < data.length; i++){
	console.log(data[i]);
	}
});
