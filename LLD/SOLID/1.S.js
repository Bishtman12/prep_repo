
//? 1. SINGLE RESPONSIBILITY PRINCIPLE (SRP):

//* Definition: A class should have only one reason to change, meaning it should have only one job or responsibility.

//! ❌ BAD EXAMPLE - Multiple responsibilities in one class
class BadUserManager {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    //! Responsibility 1: User data validation
    validateEmail() {
        return this.email.includes('@');
    }
    
    //! Responsibility 2: Database operations
    saveToDatabase() {
        console.log(`Saving ${this.name} to database...`);
    }
    
    //! Responsibility 3: Email sending
    sendWelcomeEmail() {
        console.log(`Sending welcome email to ${this.email}`);
    }
    
    //! Responsibility 4: Report generation
    generateUserReport() {
        return `User Report: ${this.name} - ${this.email}`;
    }
}

//* ✅ GOOD EXAMPLE - Each class has a single responsibility
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class UserValidator {
    static validateEmail(email) {
        return email.includes('@') && email.includes('.');
    }
}

class UserRepository {
    static async save(user) {
        console.log(`Saving ${user.name} to database...`);
    }
}

class EmailService {
    static async sendWelcomeEmail(user) {
        console.log(`Sending welcome email to ${user.email}`);
    }
}

class ReportGenerator {
    static generateUserReport(user) {
        return `User Report: ${user.name} - ${user.email}`;
    }
}

//* 1. SRP Demo
console.log('1. Single Responsibility Principle:');

const user = new User('Vegeta', 'vegeta@saiyans.com');

console.log('Valid email:', UserValidator.validateEmail(user.email));

UserRepository.save(user);
EmailService.sendWelcomeEmail(user);
console.log(ReportGenerator.generateUserReport(user));
console.log();