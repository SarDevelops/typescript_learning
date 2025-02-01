

function genericIdentity<T>(arg: T): T {
    return arg;
}
// dynamic accepted all type value in generic function
console.log(genericIdentity<number>(5));
console.log(genericIdentity<string>('five'));
console.log(genericIdentity<boolean>(true));


// Generic Interface
interface keyPair<T, U> {
    key: T,
    value: U
}

let keyPairVal: keyPair<string, number> = {
    key: 'key1',
    value: 1
}

console.log(keyPairVal);

// generic  constructor
function getLength<T extends { length: number }>(item: T): number {
    return item.length;
}

console.log(getLength('Hello World'));
console.log(getLength([1, 2, 3, 4, 5, 6]));

// generic Class

class Box<T> {
    contents: T;
    constructor(value: T) {
        this.contents = value;
    }
    getContents(): T {
        return this.contents;
    }
}
// generic class usage
let box1 = new Box<number>(10);
console.log(box1.getContents());

let box2 = new Box<string>('ten');
console.log(box2.getContents());

class Stack<T> {
    private items: T[] = [];
    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }
    getStack(): T[] {
        return this.items;
    }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(stack.getStack());
console.log(stack.pop());
console.log(stack.getStack());

const stringStack = new Stack<string>();
stringStack.push('Hello');
stringStack.push('Hello');
console.log(stringStack.getStack());
console.log(stringStack.pop());
console.log(stringStack.getStack());







