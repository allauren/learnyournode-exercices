var i = 2;
var ret = 0;
while (i < process.argv.length)
	{
		ret += Number(process.argv[i]);
		i++;
	}
console.log(ret);
