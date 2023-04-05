function substring(text, startIndex, count) {
    let substring = text.substring(startIndex, startIndex + count);

    console.log(substring);
}

function substring(text, startIndex, count) {
    let endIndex = startIndex + count;
    let result = text.substring(startIndex, endIndex);
    console.log(result);
}

function substring(text, startIndex, count) {
    let endIndex = startIndex + count;
    let result = text.substr(startIndex, count);
    console.log(result);
}

function substring(text, startIndex, count) {
    let newString = '';
    let endIndex = Math.min(text.length, startIndex + count);
    for (let i = startIndex; i < endIndex; i++) {
        newString += text[i];
    }
    console.log(newString);
}

substring('ASentence', 1, 8);
substring('SkipWord', 4, 7)