interface StringArray {
    [index: number]: string;
}
let array1: StringArray = ['code', 'with', 'sar'];
console.log(array1[1]);

interface Fruit {
    [key: string]: string;
}

const fruitArray: Fruit = {
    apple: 'sweet fruit',
    banana: 'yellow fruit',

}

console.log(fruitArray['apple']);
