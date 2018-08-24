let balance = 0;

module.exports = {
	getBalance: () =>{ 
		return balance;
	},

	increaseBalance: function(amount){
	if (amount)
		balance += amount;
	},

	decreaseBalance: function(amount){
    if(vendingMachine.canAfford(amount) == null){
        throw new Error('Insufficient balance');
    }
	if (amount)
		balance -= amount;
  },
  
  isValidAmount: function(amount){
    if(amount == null){
      return false;
    } else {
      return true;
    }
  },

  canAfford: function(amount){
	if(this.isValidAmount(amount) == null){
      throw new Error('Invalid Input');
	}
    return amount <= balance;
  },
  };
