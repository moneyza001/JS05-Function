let factorial = value => {
    let result = 1;
    for(let i = 1 ; i <= value ; i++){
        result = result * i ;
    }
    return result;
}