// Observer (abstract)
class Subscriber {
    constructor(name) {
        this.name = name;
    }

    notify(videoTitle) {
        throw new Error("Must be overridden by subclass.");
    }
}

// Concrete Observer: Email
class EmailSubscriber extends Subscriber {
    notify(videoTitle) {
        console.log(`✅ ${this.name} (Email): New video uploaded — “${videoTitle}”`);
    }
}

// Concrete Observer: Mobile
class MobileSubscriber extends Subscriber {
    notify(videoTitle) {
        console.log(`✅ ${this.name} (Mobile): New video uploaded — “${videoTitle}”`);
    }
}

// Subject
class Channel {
    constructor(name) {
        this.name = name;
        this.subscribers = [];
    }

    subscribe(observer) {
        this.subscribers.push(observer);
    }

    unsubscribe(observer) {
        this.subscribers = this.subscribers.filter(sub => sub !== observer);
    }

    upload(videoTitle) {
        console.log(`📺 Channel '${this.name}' uploaded: ${videoTitle}`);
        for (const sub of this.subscribers) {
            sub.notify(videoTitle);
        }
    }
}


const channel = new Channel("Test Channel");

const alice = new EmailSubscriber("Alice");
const bob = new MobileSubscriber("Bob");
const charlie = new EmailSubscriber("Charlie");

channel.subscribe(alice);
channel.subscribe(bob);
channel.subscribe(charlie);

channel.upload("Test Observers");

// Let's unsubscribe Charlie
channel.unsubscribe(charlie);
