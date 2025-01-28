// parameterize function

function addTwoNums(a: number, b: number): number {
    return a + b;
}
console.log(addTwoNums(20, 40));

const divide = function (a: number, b: number): number {
    return a / b;
}
console.log(divide(50, 2));

// arrow function
const multiply = (a: number, b: number): number => {
    return a * b;
}
console.log(multiply(40, 3));

// optional parameters
function greet(username: string, greeting?: string): string {
    return `${greeting ?? ""} ${username}`;
}
console.log(greet('Good Morning', 'sahil'));

// default parameters
function greet2(username: string, greeting: string = 'Hello'): string {
    return `${greeting} ${username}`;
}
console.log(greet2('sar'));


// function overloading
function getLength(value: string): number;
function getLength(value: any[]): number;
function getLength(value: any): number {
    return value.length;
}

console.log(getLength('how are you my friend?'));
console.log(getLength([1, 5, 2, 3, 6, 2, 5]));


//rest parameters
function sum(...num: number[]): number {
    return num.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 5, 2, 6, 3, 6));
console.log(sum(100, 5, 2, 6, 3, 6));


function greet3(greeting: string, ...names: string[]): string {
    return names.map(name => `${greeting} ${name}`).join(' ');
}
console.log(greet3('Hello', 'sar', 'dhamu', 'mehul', 'sahil'));

function greet4(greeting: string, ...names: string[]): void {
    names.forEach((name) => {
        console.log(`${greeting} ${name} `);
    });
}
console.log(greet4('Hello', 'sar', 'dhamu', 'mehul', 'sahil'));




