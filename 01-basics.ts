console.log("Basic TypeScript")
let userName: string = "Patrick";
let userAge: number = 21;

userAge = 22;

console.log(`Username - ${userName}`);
console.log(`Age - ${userAge}`);

function add(a: number, b: number = 5): number {
    return a + b;
}

console.log(add(10));
console.log(add(10, 6));

function multiply(x: number, y: number): number {
    return x * y;
}

console.log(`Multiply Result - ${multiply(3, 4)}`);