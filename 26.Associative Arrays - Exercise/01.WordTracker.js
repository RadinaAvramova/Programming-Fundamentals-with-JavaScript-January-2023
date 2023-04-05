function wordTracker(array) {
    let wantedWords = array.shift().split(' ');
    let wantedWordsCounts = {};
    wantedWords.forEach(word => wantedWordsCounts[word] = 0);
    array.forEach(word => word in wantedWordsCounts && wantedWordsCounts[word]++);
    wantedWords.sort((a, b) => wantedWordsCounts[b] - wantedWordsCounts[a]);
    wantedWords.forEach(word => console.log(`${word} - ${wantedWordsCounts[word]}`));
}

function wordTracker(data) {
    let result = {};
    let words = data.shift().split(" ");
    for (let word of words) {
        result[word] = 0;
    }

    for (let word of data) {
        if (result.hasOwnProperty(word)) {
            result[word] += 1;
        }
    }

    let sortArr = Object.entries(result).sort((a,b) => b[1] - a[1]);

    for(let [key, value] of sortArr) {
        console.log(`${key} - ${value}`);
    }
}

function wordTracker(data) {
    let result = new Map();

    let words = data.shift().split(" ");
    for (let word of words) {
        result.set(word, 0);
    }

    for (let word of data) {
        if (result.has(word)) {
            result.set(word, result.get(word) + 1);
        }
    }
    let sortArr = Array.from(result).sort((a,b) => b[1] - a[1]);

    for(let [key, value] of sortArr) {
        console.log(`${key} - ${value}`);
    }
}

wordTracker([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
]);

wordTracker([

    'is the',
    
    'first', 'sentence', 'Here', 'is',
    
    'another', 'the', 'And', 'finally', 'the',
    
    'the', 'sentence'])

