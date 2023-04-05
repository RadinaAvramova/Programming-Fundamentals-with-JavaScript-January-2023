function rightPlace(str,char,result) {
    let res=str.replace('_',char);
    let output= res === result? "Matched": "Not Matched";
    console.log(output);
}

function rightPlace(str, symbol, result) {
    let res = str.replace('_', symbol);
    let output = res === result ? "Matched" : "Not Matched";
    console.log(output);
}

function rightPlace(text, charToChange, targetText) {
    let newString = '';
    for (let i = 0; i < text.length; i++) {
        if(text[i] === '_') {
            newString = newString + charToChange;
        } else {
            newString += text[i];
        }

    }
    console.log(newString === targetText ? 'Matched' : 'Not Matched');
}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');