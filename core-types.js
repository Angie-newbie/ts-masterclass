let framework = "React";
let version = 18.2;
let isAwesome = true;
console.log(`${framework} v${version} is ${isAwesome ? 'awesome' : 'not awesome'}.`);
let inferredString = 'TS is smart!';
let numbers = [1, 2, 3, 4, 5];
// numbers.push('foo')
// in java script
// let user = ['Matt', 52, true] // [name, age, isAdmin]
let user;
user = ['Matt', 52, true];
// let user: [string, number, boolean?] // ? = optional
// user = ['Matt', 52]
// inline object as a datatype
let car;
car = { make: 'MG', model: 'HS', year: 2021, electric: false };
console.log(car);
let person1 = {
    id: 1,
    firstName: 'Ada',
    lastName: 'Lovelace',
    greet: function () {
        return `Hi, I am ${this.firstName} ${this.lastName}!`;
    }
};
console.log(person1.greet());
// function printId(id: number | string): void{ //Pipe (|) creates a unio type
function printId(id) {
    if (typeof id === 'string') { // type guard
        console.log(`your ID is ${id.toUpperCase()}`);
    }
    else {
        console.log(`your ID is ${id}`);
    }
}
let user1 = {
    id: 'xds123'
};
printId(101);
printId('abc123');
let currentDir = 'East';
// Enumeration
var LogLevel;
(function (LogLevel) {
    LogLevel["DEBUG"] = "Debug";
    LogLevel["INFO"] = "Info";
    LogLevel["WARNING"] = "Warning";
    LogLevel["ERROR"] = "Error"; // 3
})(LogLevel || (LogLevel = {}));
let level = LogLevel.INFO;
console.log(level);
class Car {
    // propertirs
    // public make: string // public: assessible inside or outside the class/instance
    // private model: string // pricate: accessible only within this class
    // protected year: number // protected: accessible within this class and subclassess
    // readonly vin: string // readonly: can only be set in the constructor
    // constructor(make:string, model: string, year:number, vin: string){
    //     this.make = make;
    //     this.model = model;
    //     this.year = year;
    //     this.vin = vin;
    //     console.log(`New car created: ${this.make} ${this.model}`);
    // }
    constructor(make, model, year, vin) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.vin = vin;
        // this.make = make;
        // this.model = model;
        // this.year = year;
        // this.vin = vin;
        console.log(`New car created: ${this.make} ${this.model}`);
    }
    // Methods
    startEngine() {
        console.log(`${this.make} ${this.model}(VIN: ${this.vin} ) engine started`);
    }
    stopEngine() {
        console.log(`${this.make} ${this.model} engine stopped`);
    }
    getDetails() {
        return `car: ${this.year} ${this.make} ${this.model}(VIN: ${this.vin})`;
    }
}
let myCar = new Car("Toyota", "CHR", 2012, "sdw123");
myCar.startEngine();
console.log(myCar.getDetails());
