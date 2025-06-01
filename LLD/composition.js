class FlyInterface{
    fly(name){
        console.log(`${name} is flying`)
    }
}

class FlyBird extends FlyInterface{
    fly(name){
        console.log(`${name} is flying`)
    }
}

class FlyLessBird extends FlyInterface{
    fly(name){
        console.log(`${name} cannot fly.`)
    }
}


class Bird{
 
    constructor(name, weight,flyBehavior){
        this.name = name 
        this.weight = weight
        this.flyBehavior = flyBehavior
    }

    move(){
        console.log(`${this.name} is moving`)
    }

    performFly(){
        this.flyBehavior.fly(this.name)
    }

}


const penguin = new Bird("Penguin", 10, new FlyLessBird())
penguin.performFly()

const eagle = new Bird("Eagle", 10, new FlyBird())
eagle.performFly()