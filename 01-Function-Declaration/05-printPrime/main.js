function isPrime(n){
    let isPrime = true;
    for(i = 2;i < n; i++){
        if(n % i == 0){
            isPrime = false;
            break
        }
    }
    if(isPrime == true)console.log(n)
}

function printPrime(limit) {
    for(let n = 2;n <= limit;n++ ){
        isPrime(n)
    }
}
