const coffeeShop = {
    beans: 40,
  
    drinkRequirements: {
      latte: 10,
      americano: 5,
      doubleShot: 15,
      frenchPress: 12
    },
  
    makeDrink: function (drinkType) {
      // TODO: Finish this method
      const arr = Object.keys(this.drinkRequirements);
      
      if (!arr.includes(drinkType)){
        console.log( "Sorry, we don't make filtered");
      } else {
        if(this.beans >= this.drinkRequirements[`${drinkType}`]){
            this.beans -= this.drinkRequirements[`${drinkType}`];
            console.log(this.beans);
        }
        else {
            console.log("Sorry, we're all out of beans");
        }
      }
    }
  }
  
  coffeeShop.makeDrink("latte"); 
  coffeeShop.makeDrink("americano");
  coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
  coffeeShop.makeDrink("doubleShot");
  coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"