//? 5. DEPENDENCY INVERSION PRINCIPLE (DIP)
//* Definition: 
//* A. High-level modules should not depend on low-level modules. Both should depend on abstractions.
//* B. Abstractions should not depend on details. Details should depend on abstractions.

//! ❌ BAD EXAMPLE - High-level class depends directly on low-level classes
class MySQLDatabase {
    save(data) {
        console.log('Saving to MySQL database:', data);
    }
}

class EmailService_Bad {
    send(message) {
        console.log('Sending email:', message);
    }
}

class BadOrderService {
    constructor() {
        //! Direct dependency on concrete classes ❌
        this.database = new MySQLDatabase();
        this.emailService = new EmailService_Bad();
    }

    processOrder(order) {
        // Process order logic
        console.log('Processing order:', order.id);

        //! Tightly coupled to specific implementations ❌
        this.database.save(order);
        this.emailService.send(`Order ${order.id} processed`);
    }
}

//* ✅ GOOD EXAMPLE - Depend on abstractions, not concretions
class DatabaseInterface {
    save(data) { throw new Error('Must implement save'); }
}

class EmailServiceInterface {
    send(message) { throw new Error('Must implement send'); }
}

//* Low-level modules implement the abstractions
class GoodMySQLDatabase extends DatabaseInterface {
    save(data) {
        console.log('Saving to MySQL database:', data);
    }
}

class PostgreSQLDatabase extends DatabaseInterface {
    save(data) {
        console.log('Saving to PostgreSQL database:', data);
    }
}

class GoodEmailService extends EmailServiceInterface {
    send(message) {
        console.log('Sending email via SMTP:', message);
    }
}

class SMSService extends EmailServiceInterface {
    send(message) {
        console.log('Sending SMS:', message);
    }
}

// High-level module depends on abstractions
class GoodOrderService {
    constructor(database, notificationService) {
        // Dependency injection - depends on abstractions ✅
        this.database = database;
        this.notificationService = notificationService;
    }

    processOrder(order) {
        console.log('Processing order:', order.id);

        // Can work with any implementation of the interfaces ✅
        this.database.save(order);
        this.notificationService.send(`Order ${order.id} processed`);
    }
}



// 5. DIP Demo
console.log('5. Dependency Inversion Principle:');
const mysqlDb = new GoodMySQLDatabase();
const postgresDb = new PostgreSQLDatabase();
const emailSvc = new GoodEmailService();
const smsSvc = new SMSService();

// Can inject different implementations ✅
const orderService1 = new GoodOrderService(mysqlDb, emailSvc);
const orderService2 = new GoodOrderService(postgresDb, smsSvc);

const order = { id: '12345', items: ['laptop', 'mouse'] };
orderService1.processOrder(order);
orderService2.processOrder(order);