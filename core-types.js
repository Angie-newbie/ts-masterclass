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
//Union type
function printId(id) {
    if (typeof id === 'string') { // type guard
        console.log(`your ID is ${id.toUpperCase()}`);
    }
    else {
        console.log(`your ID is ${id}`);
    }
}
printId(101);
printId('abc123');
