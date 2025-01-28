
let a: number;
let b: number;
a = 20;
console.log('A:-', a);

function add1(a1: number, a2: number): number {
    return a1 + a2;
}
console.log('sum:- ', add1(200, 10));


let num: number = 124_12_2;
let num1: bigint = 124231651535156165156165n;
console.log('num:-', num);
console.log('num:-', num1);

let character: string = "hello";
console.log('character:-', character);

const isActive: boolean = true;
console.log('isActive:-', isActive);

let numArray: number[] = [1, 2, 3, 4, 5];
console.log('numArray:-', numArray);

let charArray: string[] = ['1', '2', '3', "4", "5"];
console.log('charArray:-', charArray);

let valUndefine: undefined = undefined;
console.log('valUndefine:-', valUndefine);

let valNull: null = null;
console.log('valNull:-', valNull);

let obj: object = {
    name: 'sar',
    age: 25
};

// spread operator  * ...obj *

let obj1 = { ...obj };
console.log(obj, 'and', obj1);

// any  type
let numVal: any;
numVal = 1;
numVal = '1';


function testAnyType(val: any) {
    console.log(val);

}


// tuples (use strict position values in array)
let arr: [number, string, boolean];
arr = [25, 'sar', true];

let coordinates: [number, number, number] = [20, 10, 30];

let useData: [string, number] = ['sahil', 124576658];

let response: [number, string] = [200, 'success']

console.log('------------------------------------------------------------');

// enum

enum Color {
    Red = 'red',
    Blue = 'blue',
    Green = 'green',
    Yellow = 'yellow',
}
enum WebDetails {
    APP_NAME = 'Type Script',
    APP_VERSION = 94.1,
    APP_DESCRIPTION = 'Type Script description'
}
enum Size {
    Small = 600,
    Large = 1200,
    Medium = 900,
    ExtraLarge = 1800,
}
console.log('------------------------------------------------------------');
console.log(Color.Green, Color.Red);
console.log('------------------------------------------------------------');

console.log(WebDetails.APP_NAME, WebDetails.APP_DESCRIPTION);
console.log('------------------------------------------------------------');

let color: Color = Color.Green;
console.log('color:-', color);

console.log('------------------------------------------------------------');

let app: WebDetails = WebDetails.APP_NAME;
console.log('app:-', app);
console.log('------------------------------------------------------------');

let size: Size = Size.Medium;
console.log('size:-', size);

console.log('------------------------------------------------------------');

// unknown type
let notSure: unknown = 100;
if (typeof (notSure) == 'number') {
    console.log(notSure.toFixed(2));
} else if (typeof (notSure) == 'string') {
    console.log(notSure.length);
}

console.log('------------------------------------------------------------');

// never type (use endless loop and error handling)

// function infiniteLoop(): never {
//     while (true) {
//         console.log(1);
//     }
// }
// function throwError(message: string): never {
//     throw new Error(message);
// }

// throwError('something want to wrong');

// void type  ( no value return)
function logMessage(message: string): void {
    console.log(message);
}

// type inference 
let username = 'Sar';
console.log(username);

// type assertions
let someValue: any = "How are you?"
let strLength: number = (someValue as string).length;
console.log(strLength);

// union types  
let id: number | string | boolean;
id = 1;
id = '1';
id = true;

function printId(id: string | number) {
    console.log(`id: ${id}`);

}
printId(125);
printId('yes val');

// type narrowing

function printIdFn(id: string | number) {
    if (typeof id === 'string') {
        console.log('id is string: ', id.toUpperCase);
    } else {
        console.log(`id is a number: ${id}`);
    }
}
printIdFn('yes sting');
printIdFn(123);

// Interface


interface Person {
    name: string,
    age: number
    great(): void
    great: () => void
}

function great() {
    console.log('yes called function');
}
let person: Person = {
    name: 'sar',
    age: 25,
    // great() {
    //     console.log('hello');
    // }
    great
}

person.great();

// interface with function

interface mathOperation {
    (a: number, b: number): number
}

const addition: mathOperation = (x, y) => x + y;
const subTract: mathOperation = (x, y) => x - y;

console.log('addition :- ', addition(20, 30));
console.log('subTract :- ', subTract(30, 10));

// type alias
type UserID = string;
let userId: UserID = "start";
type Person1 = {
    name: string,
    age: number
}
let person1: Person1 = {
    name: 'sahil',
    age: 25
}
console.log(person1);

type ID = string | number;
let RoleId: ID = 1;
let RoleId1: ID = 'abc';
console.log(RoleId, RoleId1);

// interface vs alias

interface User {
    name: string,
    phone: number
}
interface customer extends User {
    address: string
}
let myCustomer: customer = {
    name: 'abc',
    phone: 1234567890,
    address: 'xyz'
}



type Vehicle = {
    make: string,
    model: string
}

// & -> intersection types
type Car = Vehicle & {
    isElectric: boolean
}

let MyCar: Car = {
    make: 'fiber',
    model: 'xyz',
    isElectric: true

};

type Status = "active" | "inactive" | "pending";

let useStatus: Status = 'active';
console.log(useStatus);

// recursive use
type Tree = {
    value: string,
    children: Tree[],
}

let tree: Tree = {
    value: 'abc',
    children: [
        {
            value: 'xyz',
            children: [
                {
                    value: 'pqr',
                    children: []
                }
            ]
        }
    ],
}

//  ?: -> optional property 

// intersection types

let config: { server: string, port: number } & { secure: boolean, timeout: number } = {
    server: 'localhost',
    port: 8080,
    secure: true,
    timeout: 1000
}