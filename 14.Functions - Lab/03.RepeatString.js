function repeatString(str,repeatNum) {
    let result = copyRepeatString(str, repeatNum);
    return result;

    function copyRepeatString(str, repeatNum) {
        return str.repeat(repeatNum);
    }
}

copyRepeatString('a',2);


console.log(repeatString('abc', 3));

function repeatString(str,n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += str;
    }

    return result;
}

repeatString("abc", 3);
repeatString("String", 2);