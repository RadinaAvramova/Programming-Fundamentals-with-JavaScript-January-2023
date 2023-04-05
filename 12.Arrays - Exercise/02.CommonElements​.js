function commonElements(firstArr, secondArr) {
    for(let i = 0;  i < firstArr.length; i++) {
        let firstWord = firstArr[i];
        for(let j = 0; j < secondArr.length; j++) {
            let secondWord = secondArr[j];
            if (firstWord === secondWord) {
                console.log(firstWord);
            }
        }
    }
}


function commonElements(firstArr, secondArr) {
    for(let i = 0;  i < firstArr.length; i++) {
        let currentWord = firstArr[i];
        if(secondArr.includes(currentWord)){
            console.log(currentWord);
        }
    }
}

function commonElements(firstArr, secondArr) {
    for(let el of firstArr) {
        if(secondArr.includes(el)){
            console.log(el);
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],['s', 'o', 'c', 'i', 'a', 'l']);