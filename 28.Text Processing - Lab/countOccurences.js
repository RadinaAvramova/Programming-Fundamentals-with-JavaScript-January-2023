function countOccurences(text, word) {
    let tokens = text.split(" ");
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        let endIndex = i + word.length;
        if(text.substring(i, endIndex) === word) {
            count++;
        }
    }

    return count;
}

console.log(countOccurences('This is a word and it also is a sentence', ))