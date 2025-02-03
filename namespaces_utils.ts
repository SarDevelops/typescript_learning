namespace Geometry {
    export const PI = 3.14;
    export class Calc {
        area(width: number, heigh: number): number {
            return width * heigh;
        }
    }
    export function calc_area(radius: number): number {
        return Math.PI * radius;
    }
}

console.log(Geometry.calc_area(20));
console.log(Geometry.PI);

const calc = new Geometry.Calc();
console.log(calc.area(10, 20));


namespace Shapes {
    export namespace Circle {
        export const PI = 3.14;
    }
}

console.log(Shapes.Circle.PI);
