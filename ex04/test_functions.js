module.exports = filterDir(err, list) =>{
	for (var i = 0; i < list.length; i++)
	{
		if (list[i].substr(list[i].length - len) === process.argv[3])
			if (list[i] != process.argv[3])
				console.log(list[i]);
	}
}
