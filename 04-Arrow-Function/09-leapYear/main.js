// let leapYear = year => {
//     if (year % 4 == 0 && year % 100 != 0) return true;
//     else if (year % 4 == 0)return true;
//     return false;
// }

let leapYear = year => {
    return ((year % 4 === 0 && year % 100 !== 0)||(year % 400 === 0)) ? true : false
}