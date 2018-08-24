var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');
var balance = 0;

module.exports = {
  canAfford: function(amount){
    if(!productInventory.isValidAmount(amount)){
      errorMessage = "Invalid Input";
    }
    if(errorMessage){
      throw new Error(errorMessage);
    }
    return amount <= balance;
  },


  insertCoin: function(coinType){
    var value = this.getAmount(coinType);
    this.increaseBalance(value);
  },
  
	vendProduct: function(productId){
    var product = this.getProduct(productId);
    balanceManager.decreaseBalance(product.price);
    return product;
  },
  
};
