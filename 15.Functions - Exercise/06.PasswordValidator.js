function passwordValidator (passoword) {
    let hasValidLength = validateLength(passoword);
    let hasValidSpecialChar = validateNonSpecialChar(passoword);
    let hasValidDigit = checkForContainsTwoNumbers(passoword);
    printResult(hasValidDigit, hasValidSpecialChar, hasValidLength);

    //Password must be between 6 and 10 characters
    function validateLength(passoword) {
        return passoword.length >= 6 && passoword.length <= 10;
    }

    //Password must consist only of letters and digits
    function validateNonSpecialChar(text) {
        for(let char of text){
            let num = char.charCodeAt(0);
            let isLowerChar = checkCharForLowerCase(num);
            let isUpperChar = checkCharForUpperCase(num);
            let isNumber = checkContainNumber(num);
            if (!isLowerChar && !isUpperChar && !isNumber) {
                return false;
            }

            //48 - 57 -> 0 - 9
            //65 - 132 -> A - Z
            //97 - 122 -> a - z
        }

        return true;
    } 
    function checkContainNumber(num) {
        return num >= 48 && num <= 57;
    }

    function checkCharForUpperCase(num) {
        return num >= 65 && num <= 90;
    }

    function checkCharForLowerCase(num){
        return num >= 97 && num <= 122;
    }

    // Password must have at least 2 digits

    function checkForContainsTwoNumbers(passoword) {
        let counter = 0;
        for(let ch of passoword) {
            let isNumber = checkContainNumber(ch.charCodeAt());
            if(isNumber) {
                counter++;
            }
        }
        return counter >= 2;
    }

    // Print result to console

    function printResult(validLength, validSymbol, validDigit) {
        if (!validLength){
            console.log("Password must be between 6 and 10 characters");
        }
        if (!validSymbol) {
            console.log("Password must consist only of letters and digits");
        }
        if(!validDigit) {
            console.log("Password must have at least 2 digits");
        }
        if (validLength && validSymbol && validDigit){
            console.log("Password is valid");
        }
    }
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');