const fs = require('fs');

module.exports = (path, extension, callback) =>{

var len = extension.length;

fs.readdir(path, fun = (err, list) =>{
	let ret = [];
	if (err)
	{
		return callback(err);
	}
	for (var i = 0; i < list.length; i++)
	{
		if (list[i].substr(list[i].length - len) === extension)
			if (list[i] != extension)
				ret.push(list[i]);
	}
	return callback(null, ret);
}
)
}
