//* 🔁 Flow:
//* Observers subscribe to the subject

//* When the subject’s state changes, it notifies all observers

//* Observers react accordingly (e.g., send email, push notification, etc.)



class Observer {
    update(data) {
        throw new Error("update() must be implemented");
    }
}

class EmailService extends Observer {
    update(data) {
        console.log(`Email sent to ${data.user}: Order ${data.orderId} confirmed`);
    }
}

class SMSService extends Observer {
    update(data) {
        console.log(`SMS sent to ${data.user}: Order ${data.orderId} confirmed`);
    }
}

class PushService extends Observer {
    update(data) {
        console.log(`Push sent to ${data.user}: Order ${data.orderId} confirmed`);
    }
}



class OrderService {

    constructor() {
        this.observers = [];
    }

    attach(observer) {
        this.observers.push(observer);
    }

    detach(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data) {
        for (const observer of this.observers) {
            observer.update(data);
        }
    }

    placeOrder(user, orderId) {
        console.log(`Order ${orderId} placed by ${user}`);
        this.notify({ user, orderId });
    }
}


const orderService = new OrderService();

orderService.attach(new EmailService());
orderService.attach(new SMSService());
orderService.attach(new PushService());

orderService.placeOrder("Alice", "ORD1234");

