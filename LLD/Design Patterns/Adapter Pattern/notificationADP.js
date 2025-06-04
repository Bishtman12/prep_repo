//*  You're building a unified notification service for your backend.
//*  Your service should support multiple types: email, SMS, push, and later Slack, WhatsApp, etc.
//*  The internal interfaces for each system are incompatible (legacy, third-party SDKs, etc.)

// 🎯 Unified Notifier Interface

class Notifier {
    send(message) {
        throw new Error("send() must be implemented");
    }
}

// ✅ Adapters wrapping incompatible services

class EmailAdapter extends Notifier {
    constructor(emailService) {
        super();
        this.emailService = emailService;
    }

    send(message) {
        this.emailService.sendEmail(message);
    }
}

class SmsAdapter extends Notifier {
    constructor(smsService) {
        super();
        this.smsService = smsService;
    }

    send(message) {
        this.smsService.sendSms(message);
    }
}

class PushAdapter extends Notifier {
    constructor(pushService) {
        super();
        this.pushService = pushService;
    }

    send(message) {
        this.pushService.pushNotify(message);
    }
}

// 🔧 Third-party or legacy services

class EmailService {
    sendEmail(msg) {
        console.log("📧 Sending email:", msg);
    }
}

class SMSService {
    sendSms(msg) {
        console.log("📱 Sending SMS:", msg);
    }
}

class PushService {
    pushNotify(msg) {
        console.log("🔔 Sending Push Notification:", msg);
    }
}

// 🎯 Manager that sends through any adapter

class NotificationManager {
    sendNotification(adapter, message) {
        adapter.send(message);
    }
}


const manager = new NotificationManager();

const emailNotifier = new EmailAdapter(new EmailService());
const smsNotifier = new SmsAdapter(new SMSService());
const pushNotifier = new PushAdapter(new PushService());

manager.sendNotification(emailNotifier, "Welcome via Email!");
manager.sendNotification(smsNotifier, "OTP is 1234");
manager.sendNotification(pushNotifier, "You've got a new follower!");




