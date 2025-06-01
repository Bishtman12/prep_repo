//? 3. LISKOV SUBSTITUTION PRINCIPLE (LSP)
//* Definition: Objects of a superclass should be replaceable with objects of subclasses
//* without breaking the application. Subtypes must be substitutable for their base types.

//! ❌ BAD EXAMPLE - Violates LSP
class Bird {
    fly() {
        console.log('Flying...');
    }
}

class Sparrow extends Bird {
    fly() {
        console.log('Sparrow flying fast!');
    }
}

class Penguin extends Bird {
    fly() {
        //! Penguins can't fly! This violates LSP ❌
        throw new Error('Penguins cannot fly!');
    }
}

// ✅ GOOD EXAMPLE - Follows LSP
class Animal {
    move() {
        console.log('Moving...');
    }
}

class FlyingBird extends Animal {
    move() {
        console.log('Flying through the air');
    }
    
    fly() {
        console.log('Flapping wings and flying');
    }
}

class FlightlessBird extends Animal {
    move() {
        console.log('Walking or swimming');
    }
}

class GoodSparrow extends FlyingBird {
    move() {
        console.log('Sparrow flying quickly');
    }
}

class GoodPenguin extends FlightlessBird {
    move() {
        console.log('Penguin waddling and swimming');
    }
    
    swim() {
        console.log('Swimming gracefully underwater');
    }
}

// Now we can substitute any Animal subclass without breaking functionality
function makeAnimalMove(animal) {
    animal.move(); // Works for all Animal subtypes ✅
}

// 3. LSP Demo
console.log('3. Liskov Substitution Principle:');
const animals = [
    new GoodSparrow(),
    new GoodPenguin()
];
animals.forEach(animal => makeAnimalMove(animal));
console.log();
