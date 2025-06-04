//* The Adapter Pattern is incredibly useful when:
//* You have incompatible interfaces that need to work together
//* You’re integrating a third-party library or legacy system
//* You want to avoid rewriting existing code


//*  Create a PaymentGateway interface with .payNow(amount)
//*  Implement a StripePayment class that directly supports .payNow()
//*  Implement a LegacyRazorpay class with .makePayment(price)
//*  Create an Adapter class: RazorpayAdapter that implements payNow() by internally calling .makePayment()
//*  Show how both StripePayment and RazorpayAdapter can be used interchangeably by the system.



// 1. Target Interface
class PaymentGateway {
    payNow(amount) {
        throw new Error("payNow() must be implemented");
    }
}

// 2. New Payment System (already compatible)
class StripePayment extends PaymentGateway {
    payNow(amount) {
        console.log(`💳 Payment of $${amount} processed via Stripe.`);
    }
}

// 3. Legacy Payment System (incompatible)
class LegacyRazorpay {
    makePayment(price) {
        console.log(`🏦 Payment of $${price} processed via *Legacy Razorpay*`);
    }
}

// 4. Adapter for LegacyRazorpay
class RazorpayAdapter extends PaymentGateway {
    constructor(legacyProvider) {
        super();
        this.legacyProvider = legacyProvider;
    }

    payNow(amount) {
        // Adapter does the translation
        this.legacyProvider.makePayment(amount);
    }
}


const gateway = new RazorpayAdapter(new LegacyRazorpay());
gateway.payNow(100); //*  Internally calls legacy.makePayment(100)
