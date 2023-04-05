function oddAndEvenSum(num) {
    let numAsString = num.toString();
    let sumOdd = 0;
    let sumEven = 0;

    for(let i = 0; i < numAsString.length; i++) {
        let n = Number(numAsString[i]);
        if( n % 2 !== 0) {
            sumOdd += n;
        } else {
            sumEven += n;
        }
    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);