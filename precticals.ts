
//1. Factorial Number
// eg. 4*3*2*1 
function factorial(num: number): number {
    if (num == 0 || num == 1) return 1;
    return num * factorial(num - 1);
}
console.log('====================================');
console.log(factorial(5));
console.log('====================================');

/*
 2. Define function that accepts a user objects
(with name, age, and occupation) and returns a string
*/

interface UserData {
    name: string
    age: number
    email?: string
}

function formateString(userData: UserData) {
    return `User ${userData.name} is ${userData.age} years old  ${userData.email ? 'and is a email' + userData.email + '.' : '.'} `;
}
const userData: UserData = {
    name: 'John',
    age: 30,
    // email: 'john@gmail.com'
}

console.log('====================================');
console.log(formateString(userData));
console.log('====================================');


/*
 3.calculate Total price:
 write typescript function that calculates the total price of an array of product objects
 each product object has a price and a quantity property  
 */
interface Product {
    price: number
    quantity: number
}

function calculateTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
}

let cart: Product[] = [
    { price: 150, quantity: 5 },
    { price: 100, quantity: 3 },
    { price: 60, quantity: 6 },
    { price: 20, quantity: 10 },
    { price: 80, quantity: 2 },
]

console.log('====================================');
console.log(calculateTotalPrice(cart));
console.log('====================================');

/*
4. Define union type for a Vehicle that can either
     be a car or bike with different properties.
     Write  a function to log details based on the vehicle type.     
*/

type CarData = {
    type: 'car',
    make: string,
    model: string,
    year: number,
};

type BikeData = {
    type: 'bike',
    brand: string,
    cc: number
};

type VehicleData = BikeData | CarData;

function getVehicleDetails(vehicle: VehicleData) {
    if (vehicle.type === 'car') {
        console.log('====================================');
        console.log(`Car: ${vehicle.make} ${vehicle.model} ${vehicle.year}`);
        console.log('====================================');
    } else if (vehicle.type === 'bike') {
        console.log('====================================');
        console.log(`Bike: ${vehicle.brand} ${vehicle.cc}`);
        console.log('====================================');
    } else {
        console.log('====================================');
        console.log('null');
        console.log('====================================');
    }
}
// Test the function with a car and a bike
let car: CarData = {
    type: 'car',
    make: 'Toyota',
    model: 'Camry',
    year: 2020
}

let bike: BikeData = {
    type: 'bike',
    brand: 'Honda',
    cc: 250
}
getVehicleDetails(bike);

