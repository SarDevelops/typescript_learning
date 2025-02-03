import log from "./utils";

// class decorators
function Logger(constructor: Function) {
    console.log(`Logging creation Of class: ${constructor.name}`);
}
@Logger
class People {
    constructor(public name: string) { }
}

const p = new People('sahil');

// Methods / Function Decorator
function LogMethods(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Method Called: ${propertyKey}`);
        return originalMethod.apply(this, args);

    };
}

class CalcOp {
    @LogMethods
    add(a: number, b: number): number {
        return a + b;
    }
}

const calcO = new CalcOp();
console.log(calcO.add(5, 4));

// accessor & property decorator
function ReadOnly(target: any, propertyKey: string) {
    Object.defineProperty(
        target, propertyKey, {
        writable: false
    });
}

class Car {
    // @ReadOnly
    // brand: string = 'Toyota';

    private _brand: string = 'Toyota';

    @ReadOnly
    get brand(): string {
        return this._brand;
    }
    set brand(value: string) {
        this._brand = value;
    }
}

// const myCar = new Car();
// myCar.brand = "Tata" //Can not write
// console.log(myCar.brand);

// parameter decorator
function LogParams(target: object, propertyKey: string, parameterIndex: number) {
    console.log(`${propertyKey} Parameter Index: ${parameterIndex}`);

}

class UserParam {
    createUser(@LogParams name: string, @LogParams age: number) {
        console.log(`User created with name: ${name} and age: ${age}`);

    }
}
const userParam = new UserParam();
userParam.createUser('sahil', 25);

// Practice problem: create a method decorator that logs the time taken for the execution of method

function LogExecutionTime(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const start = performance.now();
        const result = originMethod.apply(this, args);
        const end = performance.now();
        console.log(`Time taken for execution of ${propertyKey} method: ${end - start} ms`);
    }
}

class MathOps {
    @LogExecutionTime
    multiply(a: number, b: number): number {
        return a * b;
    }
}

const mathOps = new MathOps();
console.log(mathOps.multiply(2, 5));

