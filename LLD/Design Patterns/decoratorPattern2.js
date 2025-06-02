//* Create a Coffee interface with:
//* getDescription()
//* getCost()

//* Implement 1 base coffee:
//* Espresso – $3.0

//* Create at least 3 decorators:
//* Milk (+$0.5)
//* Sugar (+$0.2)
//* WhippedCream (+$0.7)

//* Allow customers to dynamically add toppings in any order.
//* Print the final order with:
//* Full description (e.g., “Espresso, Milk, Sugar”)
//* Total cost (e.g., $3.7)

class Coffee {
    getDescription() { }
    getCost() { }
}

class Espresso extends Coffee {
    getDescription() {
        return 'Espresso'
    }
    getCost() {
        return 100;
    }
}

class CoffeeDecorator extends Coffee{
    constructor(coffee){
        super();
        this.coffee = coffee
    }

    getDescription(){
        console.log("to be overriden by the child class")
    }
    getCost(){
        console.log("to be overriden by the child class")
    }
}

class MilkDecorator extends CoffeeDecorator{
    getDescription(){
        return this.coffee.getDescription() + 'Milk + '
    }
    getCost(){
        return this.coffee.getCost() + 30
    }
}

class SugarDecorator extends CoffeeDecorator{
    getDescription(){
        return this.coffee.getDescription() + 'Sugar + '
    }
    getCost(){
        return this.coffee.getCost() + 10
    }
}

class WhippedCreamDecorator extends CoffeeDecorator{
    getDescription(){
        return this.coffee.getDescription() + 'WhippedCream + '
    }
    getCost(){
        return this.coffee.getCost() + 60
    }
}


let myCofee = new Espresso();

myCofee = new SugarDecorator(myCofee);
myCofee = new WhippedCreamDecorator(myCofee);

console.log(myCofee.getDescription())
console.log(myCofee.getCost())