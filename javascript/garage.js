
class Garage {
    constructor() {
        this.cars = [];
    }

    addCar = (car) => {
        if (!(car instanceof Car)) {
            throw new TypeError("addCar expects a Car instance");
        }
        this.cars.push(car);
        return car;
    }

    removeCar = (car) => {
        const index = this.cars.indexOf(car);
        if (index === -1) return false;
        this.cars.splice(index, 1);
        return true;
    }

    findCar = (make, model) =>
        this.cars.find(c => c.make === make && c.model === model);

    get size() {
        return this.cars.length;
    }

    print = () => {
        console.table(this.cars.map(c => ({
            Make: c.make,
            Model: c.model,
            Year: c.year,
            Odometer: c.odometer,
            Jobs: c.jobs.length
        })));
    }
}

// One shared garage for the page; other scripts add and read cars through it
const garage = new Garage();
garage.addCar(new Car("Land Rover", "LR4", 2012));
garage.addCar(new Car("Land Rover", "LR3", 2008));
garage.addCar(new Car("Range Rover", "Sport", 2010));