//* You are building a Weather Station system that broadcasts temperature updates to various display systems.

//* Able to Set temp of d/f locations. 
//* Broadcast the message to mobile and window display. 

class Observer {

    update(temperature) {
        console.log(`method should be overriden by child class.`)
    }
}

class WindowObserver extends Observer {
    update(temperature) {
        console.log(`Current Weather in Window is ${temperature}.`)
    }
}

class MobileObserver extends Observer {
    update(temperature) {
        console.log(`Current Weather in Mobile is ${temperature}.`)
    }
}

class WeatherStation{
    
    constructor(subscribers=[]){
        this.subscribers = subscribers;
        this.temperature;
    }

    subscribe(observer){    
        this.subscribers.push(observer)
    }

    unsubscribe(observer){
        this.subscribers = this.subscribers.filter(sub => sub !== observer);
    }

    setTemperature(temperature){
        this.temperature = temperature;
        this.update();
    }

    update(){
        for (const element of this.subscribers){
            element.update(this.temperature)
        }
    }
}

const weatherStation = new WeatherStation();

weatherStation.subscribe(new MobileObserver());
weatherStation.subscribe(new WindowObserver());

weatherStation.setTemperature(15);
