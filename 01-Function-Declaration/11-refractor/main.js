// // // // // function checkAge(age) {
// // // // //     if (age > 18) {
// // // // //       return true;
// // // // //     } else {
// // // // //       return confirm("Did parents allow you?");
// // // // //     }
// // // // //   }

// // // // // V.1
// // // // function checkAge(age) {
// // // //     if (age > 18)return true;
// // // //       return confirm("Did parents allow you?");
// // // //   }

// // // // V.2
// // function checkAge(age) { return (age > 18) ? true :confirm("Did parents allow you?"); }


// // // // V.3
// function checkAge(age) {
//     return (age > 18) ||confirm("Did parents allow you?");
// }