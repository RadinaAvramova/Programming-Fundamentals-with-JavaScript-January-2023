function factorialDivision(numA, numB) {
    let firstFactorialNumber = calcFactorial(numA);
    let secondFactorialNumber = calcFactorial(numB);

    console.log((firstFactorialNumber / secondFactorialNumber).toFixed(2));

    function calcFactorial(num) {
        let res = 1;
        for (let i = num; i > 1; i-= 2) {
            res *= i * (i - 1);
        }
        return res;
    }
}

function factorialDivision(firstNum, secondNum) {
    return (factorial(firstNum) / factorial(secondNum)).toFixed(2);

    function factorial(num) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

factorialDivision(5,2);
factorialDivision(6,2);