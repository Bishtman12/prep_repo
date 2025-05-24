/**
 * Key points about JavaScript Inheritance:
 * 1. Use 'extends' keyword to create a child class
 * 2. Use 'super()' in child class constructor to call parent constructor
 * 3. Child classes can override parent methods
 * 4. Use 'super' keyword to access parent class methods
 * 5. instanceof operator can be used to check inheritance chain
 */

class Animal {
    /**
     * Constructor for Animal class
     * @param {string} name - The name of the animal
     * @param {number} age - The age of the animal
     */
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    /**
     * Method to make animal speak
     * @returns {string} - The sound made by the animal
     */
    speak() {
        return "I am an animal";
    }

    /**
     * Method to get animal's information
     * @returns {string} - Information about the animal
     */
    getInfo() {
        return `${this.name} is ${this.age} years old`;
    }
}

// Child class (Derived class)
/**
 * Represents a Dog, inheriting from Animal class
 */
class Dog extends Animal {
    /**
     * Constructor for Dog class
     * @param {string} name - The name of the dog
     * @param {number} age - The age of the dog
     * @param {string} breed - The breed of the dog
     */
    constructor(name, age, breed) {
        // Call the parent class constructor
        super(name, age);
        this.breed = breed;
    }

    /**
     * Override the speak method from parent class
     * @returns {string} - The sound made by the dog
     */
    speak() {
        return "Woof!";
    }

    /**
     * Get dog's specific information
     * @returns {string} - Information about the dog including breed
     */
    getDogInfo() {
        return `${super.getInfo()} and is a ${this.breed}`;
    }
}

// Example usage:
// Create an animal
const genericAnimal = new Animal("Generic", 5);
console.log(genericAnimal.speak()); // Output: I am an animal

// Create a dog
const myDog = new Dog("Buddy", 3, "Golden Retriever");
console.log(myDog.speak()); // Output: Woof!
console.log(myDog.getDogInfo()); // Output: Buddy is 3 years old and is a Golden Retriever

// Inheritance chain verification
console.log(myDog instanceof Animal); // Output: true
console.log(myDog instanceof Dog); // Output: true
console.log(myDog instanceof Object); // Output: true

// Accessing parent class methods
console.log(myDog.getInfo()); // Output: Buddy is 3 years old