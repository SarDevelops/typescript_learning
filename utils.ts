export function add2Nums(a: number, b: number) {
    return a + b;
}

export const pI = 3.14;

export class calculator {
    add(a: number, b: number) {
        return a + b;
    }
    sub(a: number, b: number) {
        return a - b;
    }

    multi(a: number, b: number) {
        return a * b;
    }

    divide(a: number, b: number) {
        return a / b;
    }
}

export default function log(message: string): void {
    console.log(message);

};
