function palindromeIntegers(input) {
    for(let i = 0; i < input.length; i++) {
        let numAsString = String(input[i]);
        let buff = "";
        for(let j = numAsString.length - 1; j >= 0; j--) {
            buff += numAsString[j];
        }
        console.log(buff === numAsString);
    }
}

function palindromeIntegers(input) {
    for(let i = 0; i < input.length; i++) {
        let numAsString = String(input[i]);
        let reverseText = reverse(numAsString);
        console.log(checkEqualText(numAsString, reverseText));
    }

    function checkEqualText(textA, textB){
        return textA === textB;
    }

    function reverse(text) {
        let buff = "";
        for(let i = text.length - 1; i >= 0; i--){
            buff += text[i];
        }
        return buff;
    }
        //for(let j = numAsString.length - 1; j >= 0; j--) {
            //buff += numAsString[j];
        //}
        //console.log(buff === numAsString);
}


palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);
 