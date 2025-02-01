// literal types

// string literal types
type orderStatus1 = "delivered" | "pending" | "cancelled";
let order: orderStatus1 = "delivered";

let answer: 'YES' | 'NO';
answer = 'YES';

// number literal types
let count: 0 | 1 | 2;
count = 0;

// Boolean literal types
let isVisible: true | false;
isVisible = true;

// Mix Literal Types

type orderStatus2 = "Hi" | 2 | "get" | { name: string; age: number };

type Action = 'add' | 'update' | 'delete';

function takeAction(action: Action) {
    switch (action) {
        case 'add':
            console.log('add function');
            break;
        case 'update':
            console.log('update function');
            break;
        case 'delete':
            console.log('delete function');
            break;
        default:
            console.log('default function');
            break;
    }
}

console.log(takeAction('add'));

function printStatus(status: 'success' | 'error' | 'loading'): void {
    console.log(`Current Status is : ${status}`);
};

console.log(printStatus('success'));

interface ButtonConfig{ 
    size: 'small' | 'medium' | 'large';
    color: 'primary' | 'secondary' | 'tertiary';
}

const btn: ButtonConfig = {
    size: 'small',
    color: 'primary',
    };

