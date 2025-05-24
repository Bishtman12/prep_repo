/**
 * Key points about Abstraction:
 * 1. Interface Definition:
 *    - Defines a contract for classes to implement
 *    - Ensures consistent behavior across implementations
 *    - Example: VehicleInterface
 * 
 * 2. Abstract Classes:
 *    - Provide common functionality
 *    - Force implementation of abstract methods
 *    - Hide complex implementation details
 *    - Example: Vehicle class
 * 
 * 3. Concrete Implementations:
 *    - Implement abstract methods
 *    - Add specific functionality
 *    - Example: Car and Bicycle classes
 * 
 * 4. High-Level Abstraction:
 *    - VehicleManagementSystem handles vehicles generically
 *    - Doesn't need to know specific vehicle types
 *    - Works with any Vehicle implementation
 * 
 * 5. Benefits:
 *    - Hides complex implementation details
 *    - Provides simple, consistent interfaces
 *    - Makes code more maintainable and extensible
 *    - Reduces dependencies between components
 */

const VehicleInterface = {
    /**
     * Start the vehicle
     */
    start() {
        this.start = true;
    },

    /**
     * Stop the vehicle
     */
    stop() {
        this.start = false;
    },

    /**
     * Get vehicle information
     * @returns {string} Vehicle details
     */
    getVehicleInfo(color) {
        this.color = 'red'
        return { color: this.color }
    },

    /**
     * Get current speed
     * @returns {number} Current speed
     */
    getCurrentSpeed() { 
        return this.speed;
    },
};

// Abstract class for Vehicle

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.speed = 0;
    }

    /**
     * Abstract method - must be implemented by subclasses
     * @abstract
     */
    start() {
        throw new Error('start() method must be implemented by subclasses');
    }

    /**
     * Abstract method - must be implemented by subclasses
     * @abstract
     */
    stop() {
        throw new Error('stop() method must be implemented by subclasses');
    }

    /**
     * Get vehicle information
     * @returns {string} Vehicle details
     */
    getVehicleInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }

    /**
     * Get current speed
     * @returns {number} Current speed
     */
    getCurrentSpeed() {
        return this.speed;
    }

    /**
     * Set speed (protected method)
     * @param {number} speed - New speed
     */
    _setSpeed(speed) {
        if (speed < 0) {
            throw new Error('Speed cannot be negative');
        }
        this.speed = speed;
    }
}

// Concrete classes implementing the interface
/**
 * Represents a Car
 */
class Car extends Vehicle {
    constructor(make, model, year, type) {
        super(make, model, year);
        this.type = type;
    }

    /**
     * Start the car
     */
    start() {
        console.log(`${this.getVehicleInfo()} is starting...`);
        this._setSpeed(0);
        console.log('Engine started');
    }

    /**
     * Stop the car
     */
    stop() {
        console.log(`${this.getVehicleInfo()} is stopping...`);
        this._setSpeed(0);
        console.log('Engine stopped');
    }

    /**
     * Accelerate the car
     * @param {number} amount - Amount to increase speed
     */
    accelerate(amount) {
        this._setSpeed(this.getCurrentSpeed() + amount);
        console.log(`Accelerating to ${this.getCurrentSpeed()} km/h`);
    }

    /**
     * Brake the car
     * @param {number} amount - Amount to decrease speed
     */
    brake(amount) {
        this._setSpeed(this.getCurrentSpeed() - amount);
        console.log(`Braking to ${this.getCurrentSpeed()} km/h`);
    }
}

/**
 * Represents a Bicycle
 */
class Bicycle extends Vehicle {
    constructor(make, model, year, type) {
        super(make, model, year);
        this.type = type;
    }

    /**
     * Start the bicycle
     */
    start() {
        console.log(`${this.getVehicleInfo()} is starting...`);
        this._setSpeed(0);
        console.log('Pedaling started');
    }

    /**
     * Stop the bicycle
     */
    stop() {
        console.log(`${this.getVehicleInfo()} is stopping...`);
        this._setSpeed(0);
        console.log('Pedaling stopped');
    }

    /**
     * Pedal the bicycle
     * @param {number} effort - Pedaling effort (1-10)
     */
    pedal(effort) {
        if (effort < 1 || effort > 10) {
            throw new Error('Effort must be between 1 and 10');
        }
        const speedIncrease = effort * 2;
        this._setSpeed(this.getCurrentSpeed() + speedIncrease);
        console.log(`Pedaling with effort ${effort} - Speed: ${this.getCurrentSpeed()} km/h`);
    }
}

// Vehicle Management System (high-level abstraction)
/**
 * Vehicle Management System
 */
class VehicleManagementSystem {
    constructor() {
        this.vehicles = [];
    }

    /**
     * Add a vehicle to the system
     * @param {Vehicle} vehicle - Vehicle to add
     */
    addVehicle(vehicle) {
        if (!(vehicle instanceof Vehicle)) {
            throw new Error('Can only add Vehicle instances');
        }
        this.vehicles.push(vehicle);
    }

    /**
     * Start all vehicles
     */
    startAllVehicles() {
        console.log('Starting all vehicles...');
        this.vehicles.forEach(vehicle => vehicle.start());
    }

    /**
     * Stop all vehicles
     */
    stopAllVehicles() {
        console.log('Stopping all vehicles...');
        this.vehicles.forEach(vehicle => vehicle.stop());
    }

    /**
     * Get information about all vehicles
     * @returns {string[]} Array of vehicle information strings
     */
    getVehicleInfo() {
        return this.vehicles.map(vehicle => vehicle.getVehicleInfo());
    }
}

// Example usage:
// Create vehicle management system
const vehicleSystem = new VehicleManagementSystem();

// Create vehicles
const car = new Car('Toyota', 'Camry', 2023, 'Sedan');
const bicycle = new Bicycle('Trek', 'FX', 2023, 'Hybrid');

// Add vehicles to system
vehicleSystem.addVehicle(car);
vehicleSystem.addVehicle(bicycle);

// Demonstrate abstraction
console.log('\nVehicle Management System in Action:');
console.log('Available vehicles:', vehicleSystem.getVehicleInfo());

console.log('\nStarting all vehicles...');
vehicleSystem.startAllVehicles();

// Car-specific operations
console.log('\nOperating Car:');
car.accelerate(50);
car.brake(20);

// Bicycle-specific operations
console.log('\nOperating Bicycle:');
bicycle.pedal(6);
bicycle.pedal(3);

console.log('\nStopping all vehicles...');
vehicleSystem.stopAllVehicles();