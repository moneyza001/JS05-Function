// function isPrime(n){
//     let isPrime = true;
//     for(i = 2;i < n; i++){
//         if(n % i == 0){
//             isPrime = false;
//             break
//         }
//     }
//     if(isPrime == true)console.log(`${n} is prime number`)
//     else if(isPrime == false)console.log(`${n} is not prime number`);
// }

function isPrime(n){
    for(i = 2;i < n; i++){
        if(n % i == 0){
        return false
        }
    }
    return true ;
}