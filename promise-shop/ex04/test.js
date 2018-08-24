let promise = new Promise ((ful, rej) => {
	ful('VALEUR DE LA PROMESSE');
});

promise.then(console.log);
let i = 0
while (i < 100000000)
	i++;
console.log('PROGRAMME PRINCIPAL');
