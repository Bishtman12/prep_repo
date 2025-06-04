//?  Define a PaymentStrategy interface with a method process(amount).
//?  Implement at least 3 payment gateway strategies:
//?  StripePayment (used for USD payments)
//?  RazorpayPayment (used for INR payments)
//?  PayPalPayment (used for EUR payments)
//?  Implement a PaymentProcessor that uses a strategy at runtime.
//?  Bonus: Add a PaymentStrategyFactory that returns the right strategy based on the currency passed in.

class PaymentStrategy {

    processPayment(amount) {
        console.log("to be overriden by child class");
    }
}

class PaymentStrategyFactory {

    static getStrategy(currency) {
        switch (currency) {
            case "inr": return new RazorpayPaymentStrategy();
            case "usd": return new StripePaymentStrategy();
            case "eur": return new PayPalPaymentStrategy();
            default: throw error("not supported")
        }

    }

}

class StripePaymentStrategy extends PaymentStrategy {
    processPayment(amount) {
        console.log("method done by stripe", amount)
        return true
    }
}

class RazorpayPaymentStrategy extends PaymentStrategy {

    processPayment(amount) {
        console.log("method done by razorpay", amount)
        return true
    }

}

class PayPalPaymentStrategy extends PaymentStrategy {

    processPayment(amount) {
        console.log("method done by paypal", amount)
        return true
    }

}

class PaymentProcessor {

    constructor(strategy) {
        this.strategy = strategy;
    }
    processPayment(amount) {
        return this.strategy.processPayment(amount);
    }
}

class User {
    constructor(name) {
        this.name = name;
    }
}

class Payment {

    constructor(user, currency, amount) {
        this.user = user;
        this.currency = currency;
        this.amount = amount;
    }
}


const test = new User("TEST");
const payment = new Payment(test, 'inr', 100);
const paymentStrategy = PaymentStrategyFactory.getStrategy(payment.currency);

console.log("PAYMENT STRAT", paymentStrategy, payment.amount);

const paymentProcess = new PaymentProcessor(paymentStrategy);
paymentProcess.processPayment(payment.amount);
