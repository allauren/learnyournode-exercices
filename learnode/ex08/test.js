const request = require('./get_arg_data');

request(process.argv[2], (err, data) => {
		if (err){
		console.log(err);
		}
		if (data){
		console.log(data.length);
		console.log(data);
		}
		}
	   );
