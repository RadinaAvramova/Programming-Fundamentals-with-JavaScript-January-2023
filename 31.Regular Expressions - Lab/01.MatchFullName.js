function matchFullName(str) {
    let validNames = [];
    let pattern = /(\b[A-Z][a-z]+ [A-Z][a-z]+\b)/g;

    let validName;
    while (validName = pattern.exec(str)) {
        validNames.push(validName[0]);
    }
    console.log(validNames.join(' '));
}


function mathFullName(text) {
    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let result = text.match(regex);
    console.log(result.join(' '));
}

function mathFullName(text) {
    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
    let match = regex.exec(text);
    let result = [];
    while(match !== null) {
        result.push(match[0]);
        match = regex.exec(text);
    }
    console.log(result.join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov");