
//*  You’re building a backend system that needs flexible logging.
//*  You want to support multiple logging libraries, but each one has a different method signature.
//*  Your backend expects a common interface:


class Logger {
    log() {
        throw new Error("override this method");
    }
}

class ConsoleLoggingAdapter extends Logger {

    constructor(consoleLoggerService) {
        super();
        this.consoleLoggerService = consoleLoggerService
    }

    log(message) {
        this.consoleLoggerService.consoleLog(message)
    }

}

class MongoDbLoggerAdapter extends Logger {

    constructor(MongoDbLoggerService) {
        super();
        this.MongoDbLoggerService = MongoDbLoggerService
    }

    log(message) {
        this.MongoDbLoggerService.save(message)
    }

}


class ConsoleLogService {
    consoleLog(message) {
        console.log(message);
    }
}

class MongoDbLoggerService {
    save(message) {
        console.log('saved to mongo',message);
    }
}

class LogManager{
    log(adapter, message) {
        adapter.log(message)
    }
}

const logManager = new LogManager();

const consoleLoggingAdapter = new ConsoleLoggingAdapter(new ConsoleLogService());
const mongoDbLoggingAdapter = new MongoDbLoggerAdapter(new MongoDbLoggerService());

logManager.log(consoleLoggingAdapter,'console');
logManager.log(mongoDbLoggingAdapter,'saved to mongo')