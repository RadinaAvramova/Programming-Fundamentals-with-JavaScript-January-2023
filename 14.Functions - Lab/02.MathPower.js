function mathPower(num,power) {
    let result = 1;
    //loop exponent times
    for(let i = 0; i < power; i++) {
        //multiply the base value
        result *= num;
    }
    console.log(result);
}

mathPower(2,8);
mathPower(3,4);