import * as Utils from "./utils";
import log from "./utils";

// modules (import / Export ) ES6
console.log(Utils.add2Nums(3, 4));
console.log(Utils.pI);

const calc = new Utils.calculator();
console.log(calc.add(10, 40));
console.log(calc.sub(40, 10));
console.log(calc.multi(10, 40));
console.log(calc.divide(40, 2));


// Default Export

log('Default Export');
