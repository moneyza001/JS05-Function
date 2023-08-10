// Test push, Feedback branch
// Update solution

// Define
function soundOfBird(){
    console.log('เสี๊ยงงงง นกกรงหัวจุ๊กมันริก');
    console.log('จก');
    for(let i =1; i <= 10; i++){
        console.log('กวิ๊ก');
    }
}

// soundOfBird()
// soundOfBird()
// soundOfBird()
// soundOfBird()
// soundOfBird()

function isPrime(n){
    let isPrime = true;
    for(let divider = 2; divider < n; divider++){
        if(n % divider == 0) {
            isPrime = false;
            break
        }
    }
if (isPrime == true)console.log(`${n} is prime number`)
else if(isPrime == false)console.log(`${n} is not prime number`)
}

