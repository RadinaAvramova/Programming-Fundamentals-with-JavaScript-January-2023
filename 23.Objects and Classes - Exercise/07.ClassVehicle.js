class Vehicle {
    // The constructor should receive the parts as an object !!!
    // (additional class for parts not demanded by requirements)
    // See input => let parts = { engine: 6, power: 100 }; !!!
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        
        // fuel is already passed as a number
        // this.fuel = +fuel;
        this.fuel = fuel;
        this.parts = parts;

        // decorate parts with the calculated property quality
        this.parts.quality = parts.engine * parts.power;
    }

    drive(fuelLoss) {
        // return not required by the given examples
        // return this.fuel -= fuelLoss;
        this.fuel -= fuelLoss;
    }
}

class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = {
            engine: parts.engine,
            power: parts.power,
            quality: parts.engine * parts.power
        },
        this.fuel = Number(fuel);
    }

    drive(fuelLoss){
        this.fuel -= fuelLoss;
    }
}


class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = {
            engine: parts.engine,
            power: parts.power,
            quality: parts.engine * parts.power
        },
        this.fuel = Number(fuel);
    }

    get model() {
        return this._model
    }

    set model(model) {
        this._model = model
    }

    drive(fuelLoss){
        this.fuel -= fuelLoss;
        return this;
    }
}

let parts = { engine: 6, power: 100 };

let vehicle = new Vehicle('a', 'b', parts, 200);

vehicle.drive(100);

console.log(vehicle.fuel);

console.log(vehicle.parts.quality);

//let parts = {engine: 9, power: 500};

//let vehicle = new Vehicle('l', 'k', parts, 840);

//vehicle.drive(20);

//console.log(vehicle.fuel);