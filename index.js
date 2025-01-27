"use strict";
let a;
let b;
a = 20;
console.log('A:-', a);
function add1(a1, a2) {
    return a1 + a2;
}
console.log('sum:- ', add1(200, 10));
let num = 124122;
let num1 = 124231651535156165156165n;
console.log('num:-', num);
console.log('num:-', num1);
let character = "hello";
console.log('character:-', character);
const isActive = true;
console.log('isActive:-', isActive);
let numArray = [1, 2, 3, 4, 5];
console.log('numArray:-', numArray);
let charArray = ['1', '2', '3', "4", "5"];
console.log('charArray:-', charArray);
let valUndefine = undefined;
console.log('valUndefine:-', valUndefine);
let valNull = null;
console.log('valNull:-', valNull);
let obj = {
    name: 'sar',
    age: 25
};
// spread operator  * ...obj *
let obj1 = { ...obj };
console.log(obj, 'and', obj1);
// any  type
let numVal;
numVal = 1;
numVal = '1';
function testAnyType(val) {
    console.log(val);
}
// tuples (use strict position values in array)
let arr;
arr = [25, 'sar', true];
let coordinates = [20, 10, 30];
let useData = ['sahil', 124576658];
let response = [200, 'success'];
console.log('------------------------------------------------------------');
// enum
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Blue"] = "blue";
    Color["Green"] = "green";
    Color["Yellow"] = "yellow";
})(Color || (Color = {}));
var WebDetails;
(function (WebDetails) {
    WebDetails["APP_NAME"] = "Type Script";
    WebDetails[WebDetails["APP_VERSION"] = 94.1] = "APP_VERSION";
    WebDetails["APP_DESCRIPTION"] = "Type Script description";
})(WebDetails || (WebDetails = {}));
var Size;
(function (Size) {
    Size[Size["Small"] = 600] = "Small";
    Size[Size["Large"] = 1200] = "Large";
    Size[Size["Medium"] = 900] = "Medium";
    Size[Size["ExtraLarge"] = 1800] = "ExtraLarge";
})(Size || (Size = {}));
console.log('------------------------------------------------------------');
console.log(Color.Green, Color.Red);
console.log('------------------------------------------------------------');
console.log(WebDetails.APP_NAME, WebDetails.APP_DESCRIPTION);
console.log('------------------------------------------------------------');
let color = Color.Green;
console.log('color:-', color);
console.log('------------------------------------------------------------');
let app = WebDetails.APP_NAME;
console.log('app:-', app);
console.log('------------------------------------------------------------');
let size = Size.Medium;
console.log('size:-', size);
console.log('------------------------------------------------------------');
//# sourceMappingURL=index.js.map