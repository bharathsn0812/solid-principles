
// Open-Closed Principle

// Bad
class PaymentProcessor {
    processPaypalPayment(amount) {
        console.log(`Processing PayPal payment of ${amount}`);
    }
    processStripePayment(amount) {
        console.log(`Processing Stripe payment of ${amount}`);
    }
}

// Good
class PaymentProcessor {
    processPayment(amount, paymentMethod) {
        paymentMethod.pay(amount);
    }
}

class PayPal {
    pay(amount) {
        console.log(`Processing PayPal payment of ${amount}`);
    }
}

class Stripe {
    pay(amount) {
        console.log(`Processing Stripe payment of ${amount}`);
    }
}

const paymentProcessor = new PaymentProcessor();
paymentProcessor.processPayment(100, new PayPal());
