let balance = 0;

module.exports = {
	getBalance: () =>{ 
		return balance;
	},

	increaseBalance: function(amount){
	if (amount)
		balance += amount;
	},

	canAfford: function(amount){
	return amount <= balance;
	},
	decreaseBalance: function(amount){

	if(!this.canAfford(amount)){
		throw new Error('Insufficient balance');
	}
	if (amount)
		balance -= amount;
	},
};
