function greet(person: string, date: Date): void {
    console.log(`Hello ${person}, today is ${date.toDateString()}`)
}

// greet("TypeScript Explorer", new Date())
greet('42', 'not a date')