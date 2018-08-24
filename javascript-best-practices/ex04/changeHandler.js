    // COINS:
    // [p]enny
    // [n]ickel
    // [d]ime
    // [q]uartr
let acceptedCoins =
{
	'p':  1,
	'n':  5,
	'd':  10,
	'q':  25,
}

module.exports = {
	getAmount: function(coinType) {
	if (!acceptedCoins.hasOwnProperty(coinType))
		throw new Error('Unrecognized coin ' + coinType);
	return acceptedCoins[coinType]
	},
};
