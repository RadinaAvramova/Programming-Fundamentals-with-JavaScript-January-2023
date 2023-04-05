function signCheck(num1, num2, num3) {
    //When we multiply by a negative number we change the sign
    //check if number is negative num1 < 0
    //create a function to change sign if second parameter is true

    let sign = 'Positive';
    let isNum1Negative = num1 < 0;
    sign = checkAndChangeSign(sign, isNum1Negative);
    let isNum2Negative = num2 < 0;
    sign = checkAndChangeSign(sign, isNum2Negative); 
    let isNum3Negative = num3 < 0;
    sign = checkAndChangeSign(sign, isNum3Negative);
    return sign;

    function checkAndChangeSign(sign, shouldChange){
        if(shouldChange === false) {
            return sign;
        }

        if(sign === 'Positive') {
            sign = 'Negative';
        } else {
            sign = 'Positive';
        }
        

        return sign;
    }
}

//console.log(5,12,-15);
//console.log(-6,-12,14);
//console.log(-1,-2,-3);
//console.log(-5,1,1);


signCheck(5,12,-15);
signCheck(-6,-12,14);
signCheck(-1,-2,-3);
signCheck(-5,1,1);