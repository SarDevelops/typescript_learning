class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }
}

const new_person = new Person('sar', 25);
console.log('====================================');
console.log(new_person.greet());
console.log(new_person.name);
console.log('====================================');

console.log('=========================================================================================================');

class Car1 {
    name: string
    color: string
    private speed: number
    constructor(name: string, color: string, speed: number) {
        this.color = color;
        this.speed = speed;
        this.name = name;
    }
    public getDetails(): string {
        return `The car name is ${this.name}, color is ${this.color} and speed is ${this}`
    }

}
const newCar = new Car1('Toyota', 'Red', 120);
console.log('====================================');
console.log(newCar.name, newCar.color);
console.log('====================================');


// inheritance

class Animal {
    constructor(public name: string) { }

    makeSound(): void {
        console.log('====================================');
        console.log('aaaaaaaaaaaaaaaaaa');
        console.log('====================================');
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    makeSound(): void {
        console.log('====================================');
        console.log('wffff wffff');
        console.log('====================================');
    }
}

const dog = new Dog('sheru');
dog.makeSound();

// Abstract Class

abstract class Shape {
    abstract getArea(): number;

    printArea(): void {
        console.log('====================================');
        console.log(` Area of shape is ${this.getArea()}`);
        console.log('====================================');
    }
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    };

    getArea(): number {
        return this.width * this.height;
    }
}

const rectangle = new Rectangle(10, 20);
rectangle.printArea();

// setters and getter

class Circle {
    private _radius: number;

    constructor(radius: number) {
        this._radius = radius;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        if (value <= 0) {
            throw new Error('Radius cannot be negative');
        }
        this._radius = value;
    }
}

const circle = new Circle(10);
console.log(circle.radius);
