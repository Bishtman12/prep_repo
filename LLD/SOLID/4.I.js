//? 4. INTERFACE SEGREGATION PRINCIPLE (ISP)
//* Definition: No client should be forced to depend on methods it does not use.
//* Create specific interfaces rather than one general-purpose interface.

// ❌ BAD EXAMPLE - Fat interface forces unnecessary dependencies
class BadWorkerInterface {
    work() { throw new Error('Must implement work'); }
    eat() { throw new Error('Must implement eat'); }
    sleep() { throw new Error('Must implement sleep'); }
    payTaxes() { throw new Error('Must implement payTaxes'); }
}

class BadHuman extends BadWorkerInterface {
    work() { console.log('Human working'); }
    eat() { console.log('Human eating'); }
    sleep() { console.log('Human sleeping'); }
    payTaxes() { console.log('Human paying taxes'); }
}

class BadRobot extends BadWorkerInterface {
    work() { console.log('Robot working'); }
    eat() { throw new Error('Robots do not eat!'); } //! Forced to implement ❌
    sleep() { throw new Error('Robots do not sleep!'); } //! Forced to implement ❌
    payTaxes() { throw new Error('Robots do not pay taxes!'); } //! Forced to implement ❌
}

//* ✅ GOOD EXAMPLE - Segregated interfaces
class Workable {
    work() { throw new Error('Must implement work'); }
}

class Eatable {
    eat() { throw new Error('Must implement eat'); }
}

class Sleepable {
    sleep() { throw new Error('Must implement sleep'); }
}

class Taxable {
    payTaxes() { throw new Error('Must implement payTaxes'); }
}

//* Humans implement all interfaces they need
class GoodHuman extends Workable {
    work() { console.log('Human working'); }
    eat() { console.log('Human eating'); }
    sleep() { console.log('Human sleeping'); }
    payTaxes() { console.log('Human paying taxes'); }
}

//* Mix interfaces as needed
Object.assign(GoodHuman.prototype, Eatable.prototype, Sleepable.prototype, Taxable.prototype);

// Robots only implement what they need
class GoodRobot extends Workable {
    work() { console.log('Robot working efficiently'); }
    // No need to implement eat, sleep, or payTaxes ✅
}

// 4. ISP Demo
console.log('4. Interface Segregation Principle:');
const human = new GoodHuman();
const robot = new GoodRobot();
human.work();
robot.work();
//! robot.eat(); // Would throw error - robots don't need to eat ✅
console.log();
