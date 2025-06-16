let framework:string = "React"
let version: number = 18.2
let isAwesome: boolean = true

console.log (`${framework} v${version} is ${isAwesome ? 'awesome': 'not awesome'}.`)

let inferredString = 'TS is smart!'

let numbers: number[] = [1, 2, 3, 4, 5]

// numbers.push('foo')

// in java script
// let user = ['Matt', 52, true] // [name, age, isAdmin]

let user: [string, number, boolean]
user = ['Matt', 52, true]

// let user: [string, number, boolean?] // ? = optional
// user = ['Matt', 52]


// inline object as a datatype
let car: {make: string, model:string, year: number, electric? : boolean }
car = {make: 'MG', model: 'HS', year: 2021, electric: false}
console.log(car)

interface Person {
    id: number
    firstName: string
    lastName: string
    age?: number
    greet(): string // method signature
}

let person1: Person ={ // Object literal as implementation of Person
    id : 1,
    firstName:'Ada',
    lastName:'Lovelace',
    greet: function() {
        return `Hi, I am ${this.firstName} ${this.lastName}!`
    }
}

console.log(person1.greet())


//Union type'
type UserId = number | string
// function printId(id: number | string): void{ //Pipe (|) creates a unio type
function printId(id:UserId): void{
    if (typeof id === 'string'){ // type guard
        console.log(`your ID is ${id.toUpperCase()}`)
    } else {
        console.log(`your ID is ${id}`)
    }
    
}
interface User{
    id: UserId
}

let user1: User= {
    id: 'xds123'
}

printId(101)

printId('abc123')

// literal type
type Direction = 'North' | 'South' | 'West' | 'East'
let currentDir: Direction = 'East'

// Enumeration
enum LogLevel {
    DEBUG = 'Debug', // 0
    INFO = 'Info', // 1
    WARNING = 'Warning', // 2
    ERROR = 'Error' // 3
}

let level: LogLevel = LogLevel.INFO
console.log(level)

// Classes
interface Vehicle {
    startEngine(): void
    stopEngine(): void
    getDetails(): string
}

class Car implements Vehicle {
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

    constructor(public make:string, public model: string, protected year:number, readonly vin: string){
        // this.make = make;
        // this.model = model;
        // this.year = year;
        // this.vin = vin;
        console.log(`New car created: ${this.make} ${this.model}`);
    }

    // Methods
    public startEngine(): void {
        console.log(`${this.make} ${this.model}(VIN: ${this.vin} ) engine started`);
    }

    public stopEngine(): void {
        console.log(`${this.make} ${this.model} engine stopped`);
        
    }

    public getDetails(): string {
        return `car: ${this.year} ${this.make} ${this.model}(VIN: ${this.vin})`;
    }
}

let myCar = new Car("Toyota", "CHR", 2012, "sdw123")
myCar.startEngine();
console.log(myCar.getDetails())