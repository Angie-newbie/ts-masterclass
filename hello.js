function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString()));
}
// greet("TypeScript Explorer", new Date())
greet('42', 'not a date');
