function printCharacters(string) {
    for (let ch of string) {
        console.log(ch);
    }
}

function printCharacters(text) {
    for (let i = 0; i < text.length; i++) {
        console.log(text.charAt(i));
    }
}

printCharacters('AWord');
printCharacters('Sentence');