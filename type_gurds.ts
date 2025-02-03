
// type Guards
// ===============
// typeof
// ===============
function printID(id: string | number) {
    if (typeof id == 'string') {
        console.log(`id is a string: ${id}`);
    }
    else {
        console.log(`id is a number: ${id}`);
    }
}
// ===============
//instanceof
// ===============
class Dog1 {
    dg1() {
        console.log('dg1');
    }
}
class Cat1 {
    ct1() {
        console.log('ct1');
    }
}

function handlePet(pet: Cat1 | Dog1) {
    if (pet instanceof Dog1) {
        console.log(pet.dg1);
    } else {
        console.log(pet.ct1);
    }

}
// ===============
// custom type guard fn
// ===============

interface Fish {
    swim(): void
}

interface Bird {
    fly(): void
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
    if (isFish(pet)) {
        return pet.swim();
    }
    else {
        return pet.fly();
    }
}

function isString(value: any): value is string {
    return typeof value === 'string';
}

function checkType(value: string | number) {
    if (isString(value)) {
        console.log('value is string');
    } else {
        console.log('value is number');
    }
}

checkType(15);