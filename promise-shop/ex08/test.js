let parsePromised = (str) =>
{
	try {
		return Promise.resolve(JSON.parse(str));
	}
	catch (e) {
		return Promise.reject(e.message);
	}
}

parsePromised(process.argv[2])
	.then(console.log)
	.then(null, console.log)
