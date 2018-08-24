const vendingMachine = require('./vendingMachine.js')

module.exports = {
	getBalance: function(){ 
		return balance;
	},

	increaseBalance: function(amount){
		balance += amount;
	},

	decreaseBalance: function(amount){
    // This method decreases the balance of the vending machine. If the balance amount is not 
    // enough to cover the purchase, the method throws an error. 
    var errorMessage;
    if(!vendingMachine.canAfford(amount)){
        errorMessage = 'Insufficient balance';
    }
    if(errorMessage){
        throw new Error(errorMessage);
    }
    balance -= amount;
  },

  canAfford: function(amount){
    if(!this.isValidAmount(amount)){
      errorMessage = "Invalid Input";
    }
    if(errorMessage){
      throw new Error(errorMessage);
    }
    return amount <= balance;
  },
};
