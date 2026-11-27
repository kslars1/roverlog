class Car {
    constructor(make, model, year, odometer = 0) {
        if (!Number.isInteger(year)) {
            throw new TypeError("Car requires a year, e.g. new Car('Land Rover', 'LR4', 2012)");
        }
        this.make = make;
        this.model = model;
        this.year = year;
        this.odometer = odometer;
        this.jobs = [];
    }

    addJob = (name, date, description = "") => {
        this.jobs.push({ name, date, description });
    }

    toString = () => `${this.year} ${this.make} ${this.model}`;
}
