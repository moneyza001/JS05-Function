// console.log('Anonymnous');

// // #1 : Named fn, FN Declaration
// // function add () {}

// // #2 : Anonymous

// // #2A : IIFE
// // (function (x,y) {
// //     console.log(x + y);
// // })(10,5);



// // let a = (function (x,y) {
// //     return x+y;
// // })(10,7);

// // console.log(a)

// // #2B

// // VARIABLE = EXPRESSION
// let myVar = ((5 * 2 * 20 ) / 2 ) % 7;

// // VARIAVLE = FN (FN == EXPRESSION)

// // ASSIGN anonymous FN to variable
// const myFunc = function(x,y){
//     return x + y;
// };

// console.log(myFunc(5,10))

// // ASSIGN name FN to cariable

//  ###############################Reviwe All #########################################
// /*
// ###### การเรียกฟังก์ชันมี 2  แบบหลัก ๆ

// 1. Function Declaeration / Named Function
// 1. Function Expression / Anonymous Function

// */
/* 
การใช้ฟังก์ชันต้อง
1. ประกาศฟังก์ชัน => กำหนดชื่อ, input
2. เรียกใช้งาน
*/
 // 1 Define
function sayHi(name, lastName) {
    console.log(`Hello ${name} ${lastName}`);
}

// 2. Call
sayHi('John',"Doe");
sayHi('Pavit', 'Pimchanagul');


// RETURN VALUE ผลลัพท์ที่ได้จากการ run function จนเสร็จ
// add(5,6) == return Value, FN result

function add(x,y){
    let result = x + y;
    return result;
}

let r = add(5,6);
