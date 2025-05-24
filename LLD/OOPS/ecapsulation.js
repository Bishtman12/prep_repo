/**
 * Key points about JavaScript Encapsulation:
 * 1. Private fields using # prefix (ES6+)
 * 2. Encapsulation using closures
 * 3. Controlled access through getters and setters
 * 4. Data validation in methods
 * 5. Protection against unauthorized access
 * 6. Two approaches:
 *    - ES6 private fields (# prefix)
 *    - Closures with module pattern
 */

class BankAccount {
    // Private fields (only accessible within the class)
    #balance = 0;  // Using # prefix for private fields
    #accountNumber;

    /**
     * Constructor for BankAccount
     * @param {number} initialBalance - Initial balance for the account
     * @param {string} accountNumber - Account number
     */
    constructor(initialBalance, accountNumber) {
        this.#balance = initialBalance;
        this.#accountNumber = accountNumber;
    }

    /**
     * Get the account number (read-only)
     * @returns {string} Account number
     */
    getAccountNumber() {
        return this.#accountNumber;
    }

    /**
     * Get the current balance
     * @returns {number} Current balance
     */
    getBalance() {
        return this.#balance;
    }

    /**
     * Deposit money into the account
     * @param {number} amount - Amount to deposit
     * @throws {Error} If amount is negative
     */
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Deposit amount must be positive');
        }
        this.#balance += amount;
    }

    /**
     * Withdraw money from the account
     * @param {number} amount - Amount to withdraw
     * @throws {Error} If amount is negative or insufficient funds
     */
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error('Withdrawal amount must be positive');
        }
        if (amount > this.#balance) {
            throw new Error('Insufficient funds');
        }
        this.#balance -= amount;
    }

    /**
     * Transfer money to another account
     * @param {BankAccount} targetAccount - Target account to transfer to
     * @param {number} amount - Amount to transfer
     * @throws {Error} If amount is negative or insufficient funds
     */
    transfer(targetAccount, amount) {
        if (!(targetAccount instanceof BankAccount)) {
            throw new Error('Target must be a BankAccount');
        }
        this.withdraw(amount);
        targetAccount.deposit(amount);
    }
}

// Using closures for encapsulation
/**
 * Creates a Counter object with encapsulated state
 * @returns {Object} Counter object with methods
 */
function createCounter() {
    let count = 0;  // Private variable

    return {
        /**
         * Get current count
         * @returns {number} Current count
         */
        getCount: () => count,

        /**
         * Increment count
         */
        increment: () => {
            count++;
        },

        /**
         * Decrement count
         */
        decrement: () => {
            count--;
        },

        /**
         * Reset count to zero
         */
        reset: () => {
            count = 0;
        }
    };
}

// Example usage:
// Using BankAccount class
try {
    const account1 = new BankAccount(1000, '123456');
    console.log(`Initial balance: ${account1.getBalance()}`); // Output: 1000
    
    account1.deposit(500);
    console.log(`After deposit: ${account1.getBalance()}`); // Output: 1500
    
    account1.withdraw(200);
    console.log(`After withdrawal: ${account1.getBalance()}`); // Output: 1300
    
    // This will throw an error because we can't access private fields
    // console.log(account1.#balance); // Error: Cannot access private field
    
    // This will also throw an error because we can't modify private fields
    // account1.#balance = 2000; // Error: Cannot access private field
} catch (error) {
    console.error(error.message);
}

// Using Counter closure
const counter = createCounter();
console.log(`Initial count: ${counter.getCount()}`); // Output: 0

counter.increment();
console.log(`After increment: ${counter.getCount()}`); // Output: 1

counter.decrement();
console.log(`After decrement: ${counter.getCount()}`); // Output: 0

counter.reset();
console.log(`After reset: ${counter.getCount()}`); // Output: 0