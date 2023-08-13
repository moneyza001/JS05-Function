
// V.1 2 parameter
// function findMin (a,b) {
//     return(a < b)? a : b 
// }

// V.2 รับ 4 parameter

function findMax (a,b,c = 0,d = 0){
    if(a > b && a > c && a > d){
        return a;
    }else if (b > a && b > c && b > d){
        return b
    }else if (c > a && c > b && c > d){
        return c
    }else return d
}