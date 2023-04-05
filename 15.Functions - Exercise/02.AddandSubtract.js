function addAndSubstract(a,b,c) {
    let sumOfTwoNumbers = a + b;
    let substractSecondTwoNumbers = sumOfTwoNumbers - c;
    return substractSecondTwoNumbers;
}

function addAndSubstract(a,b,c) {
    let sumTwoNumbers = (a,b) => a + b;
    let substractTwoNumbers = (a,b) => a - b;

    let sum = sumTwoNumbers(a,b);
    let substract = substractTwoNumbers(sum,c);

    return substract;
}

function addAndSubstract(a,b,c) {
    let sum = sumTwoNumbers(a,b);
    let substract = substractTwoNumbers(sum,c);

    function sumTwoNumbers(a,b) {
        return a + b;
    }

    function substractTwoNumbers(a,b) {
        return a - b;
    }

    return substract;
}

function addAndSubstract(a,b,c) {
    return a + b - c;
}

function addAndSubstract(a,b,c) {

    let sum = sumTwoNumbers(a,b);
    let substract = substractTwoNumber(sum,c);

    return substract;

    function sumTwoNumbers(a,b) {
        return a + b;
    }

    function substractTwoNumber(c, d) {
        return c - d;
    }
}

addAndSubstract(23,6,10);
addAndSubstract(1,17,30);
addAndSubstract(42,58,100);



