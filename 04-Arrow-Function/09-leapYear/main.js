// let leapYear = year => {
//     if (year % 400 == 0){
//        return true;
//     }else if (year % 100 == 0){
//     return true;
//     }else if (year % 4 == 0){
//      return false
// }     
// } 

let isLeapYear = year => {
    return ((year % 4 === 0 && year % 100 !== 0)||(year % 400 === 0)) ? true : false
}

/* or
    const isLeapyer = year => (year % 100 === 0 ? year % 400 : year % 4 === 0);
*/