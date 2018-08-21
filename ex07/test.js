const request = require('./get_arg_data');

request(process.argv[2], (err, data) => {
		if (err){
		console.log(err);
		}
		for (let i = 0; i < data.length; i++){
		console.log(data[i]);
		}
		}
	   );
