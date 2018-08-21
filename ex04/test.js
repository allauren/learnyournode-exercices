
const fs = require('fs');
var len = process.argv[3].length;

fs.readdir(process.argv[2], fun = (err, list) =>{
	for (var i = 0; i < list.length; i++)
	{
		if (list[i].substr(list[i].length - len) === process.argv[3])
			if (list[i] != process.argv[3])
			console.log(list[i]);
	}
})
