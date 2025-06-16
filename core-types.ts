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

let person1: Person ={
    id : 1,
    firstName:'Ada',
    lastName:'Lovelace',
    greet: function() {
        return `Hi, I am ${this.firstName} ${this.lastName}!`
    }
}

console.log(person1.greet())


//Union type
function printId(id: number | string): void{ //Pipe (|) creates a unio type
    if (typeof id === 'string'){ // type guard
        console.log(`your ID is ${id.toUpperCase()}`)
    } else {
        console.log(`your ID is ${id}`)
    }
    
}

printId(101)

printId('abc123')