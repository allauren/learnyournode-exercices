    // COINS:
    // [p]enny
    // [n]ickel
    // [d]ime
    // [q]uartr
const acceptedCoins =
{
	'p':  1,
	'n':  5,
	'd':  10,
	'q':  25,
}

class coindetail{
	constructor (coin, value)
	{
		this.coin = coin;
		this.value = value;
	}
}
// works only for Objects that does not have several values

let functions = module.exports = {
	getAmount: function(coinType) {
	if (!acceptedCoins.hasOwnProperty(coinType))
		throw new Error('Unrecognized coin ' + coinType);
	return acceptedCoins[coinType]
	},

	convertToChange : (value) =>{
		let coins = [];
		let ret = [];

		Object.keys(acceptedCoins).forEach((name) =>{
			coins.push(new coindetail(name, functions.getAmount(name)))
		});
		coins.sort((a, b) => {
			return (b.value - a.value)
			});
		for (let i in coins)
		{
			for (let j = 0; j < Math.trunc(value / coins[i].value); j++)
				ret.push(coins[i].coin);
			value = value % coins[i].value
		}
		return ret;
	}
};
