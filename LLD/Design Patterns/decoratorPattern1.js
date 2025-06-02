//* Pizza Interface
//* MargheritaPizza (Concrete Pizza)
//* Decorators: CheeseTopping, OliveTopping, PepperoniTopping
//* Output should show both the cost and description
//* All pizzas must implement a getCost() and getDescription() method
//* You can decorate the base pizza with multiple toppings (stackable!)
//* The system must be open to add more toppings without changing any base class


class Pizza {

    constructor(pizzaType, cost) {
        this.pizzaType = pizzaType
        this.cost = cost
    }

    getPizzaType() {
        return this.pizzaType
    }

    getCost() {
        return this.cost
    }


}

class ItalianPizza extends Pizza {

    getPizzaType() {
        return "Italian Pizza"
    }

    getCost() {
        return 300
    }

}

class ToppingDecorator extends Pizza{

    constructor(pizza){
        super();
        this.pizza = pizza;
    }

    getPizzaType(){
        console.log("override this func with child class")
    }

    getCost(){
       console.log("override this func with child class")
    }

}

class CheeseTopping extends ToppingDecorator{

    getPizzaType(){
        return this.pizza.getPizzaType() + "Cheese";
    }

    getCost(){
        return this.pizza.getCost() + 50;
    }
}

class ChickenTopping extends ToppingDecorator{

    getPizzaType(){
        return this.pizza.getPizzaType() + "Chicken";
    }

    getCost(){
        return this.pizza.getCost() + 60;
    }
}


let myPizza = new ItalianPizza();
myPizza = new CheeseTopping(myPizza);
myPizza = new ChickenTopping(myPizza);

console.log(myPizza.getPizzaType())
console.log(myPizza.getCost())



