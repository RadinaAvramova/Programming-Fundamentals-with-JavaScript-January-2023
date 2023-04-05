let sorted = Array.from(map).sort((a,b) => b[1] - a[1]);

function wordOccurrences(arr){
    let map = new Map ();
 
    for(let word of arr){
        let wordOccurrences = 1;
 
        if(map.has(word)){
            wordOccurrences += map.get(word);
        }
      
        map.set(word, wordOccurrences)
    }
  
    let sorted = Array.from(map);
    sorted.sort((a,b) => b[1] - a[1])
 
    for(let [word,words] of sorted){
        console.log((`${word} -> ${words} times`));
    } 
}

function wordOccurrences(arr) {
    let map = new Map();
    let words = 0;
    for (let word of arr) {        
        if (!map.has(word)) {
            words = 1;
        } else {
            words = map.get(word) + 1;
        }
        map.set(word, words);
    }
    let sorted = Array.from(map);
    sorted.sort((a, b) => b[1] - a[1]);
 
    for (let [word, words] of sorted) {
        console.log(`${word} -> ${words} times`);
    }
}

function wordOccurrences(arr) {
    let map = new Map();
    for (let word of arr) {
        if (!map.has(word)) {
            map.set(word, 0);
        }
        map.set(word, map.get(word) + 1);
    }
    let sorted = Array.from(map);
    sorted.sort((a, b) => b[1] - a[1]);
    for (let [word, words] of sorted) {
        console.log(`${word} -> ${words} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"]);

wordOccurrences(["dog", "bye", "city", "dog", "dad",

"boys", "ginger"]);