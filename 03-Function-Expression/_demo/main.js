console.log('Anonymnous');

// #1 : Named fn, FN Declaration
// function add () {}

// #2 : Anonymous

// #2A : IIFE
// (function (x,y) {
//     console.log(x + y);
// })(10,5);



// let a = (function (x,y) {
//     return x+y;
// })(10,7);

// console.log(a)

// #2B

// VARIABLE = EXPRESSION
let myVar = ((5 * 2 * 20 ) / 2 ) % 7;

// VARIAVLE = FN (FN == EXPRESSION)

// ASSIGN anonymous FN to variable
const myFunc = function(x,y){
    return x + y;
};

console.log(myFunc(5,10))

// ASSIGN name FN to cariable

