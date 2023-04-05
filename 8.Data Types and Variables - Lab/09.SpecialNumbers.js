function specialNumbers(num) {
    let sum = 0;
    let result = '';
    for (let i = 1; i <= num; i++) {
        i = i.toString();
        for (let j = 0; j < i.length; j++) {
            sum += Number(i[j]);
        }
        result =
            sum === 5 ||
            sum === 7 ||
            sum === 11;
        console.log(result ? `${i} -> True` : `${i} -> False`);
        sum = 0;
    }
}

function specialNumbers(num) { 
    //1.Iterate through numbers 1...N
    //1.5 Convert number to string
    //2. For each number iterate through digits
    //2.5 Convert string character to number
    //3. Sum each digit
    for(let i = 1; i <= num; i++) {
        let numAsString = i.toString();
        let sum = 0;
        for(let j = 0; j < numAsString.length; j++) {
            let curChar = numAsString[j];
            let charAsNumber = Number(curChar);
            sum += charAsNumber;
        }
        
        let isSpecial = (sum === 5 || sum === 7 || sum === 11);
        console.log(`${i} -> ${isSpecial ? 'True' : 'False'}`);
    }
}

specialNumbers(15);
specialNumbers(20);

