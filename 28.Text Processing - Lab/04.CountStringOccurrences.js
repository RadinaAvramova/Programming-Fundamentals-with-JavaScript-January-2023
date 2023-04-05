function countStringOccurences(text,search) {
    let words = text.split(' ');
    let counter = 0;
    for (let w of words) {
        if (w === search) {
            counter++;
        }
    }

    console.log(counter);
}

function countStringOccurences(text, word) {
    let tokens = text.split(' ');
    let count = 0;
    for (const token of tokens) {
        if(token === word) {
            count++
        }
    }

    return count;
}


countStringOccurences('This is a word and it also is a sentence',

'is');

countStringOccurences('softuni is great place for learning new programming languages',

'softuni')