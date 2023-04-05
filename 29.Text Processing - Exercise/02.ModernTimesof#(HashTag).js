function modernItems(text){
    let texts = text.split(' ');    
    texts.forEach(element => {
        if(element.startsWith(`#`) && (element.length > 1)){   
            let el = element.substring(1, element.length);                   
            console.log(el);  
        }       
    });   
}

function modernItems(text) {
    return text.split(" ")
                .filter(x => x.startsWith("#") && x.length > 1)
                .map(x => x.substring(1))
                .filter(x=> {
                    for(let el of x) {
                        if(el.toLowerCase().charCodeAt(0) < 97 || el.toLowerCase().charCodeAt(0) > 122) {
                            return false;
                        }
                    }
                    return true;
                })                       
                .join("\n");
}

function modernItems(text) {
    text = text.split(' ');
    const usedHashTags = new Set();
    text.forEach(word => {
        const isWordValid = word[0] == '#' && word.length > 1;
        if (isWordValid) {
            let isAllLetters = true;
            for (let i = 1; i < word.length; i++) {
                const char = word[i].toLowerCase();
                if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
                    isAllLetters = false;
                    break;
                }
            }
            if (isAllLetters) {
                const currentHashTag = word.substring(1, word.length);
                usedHashTags.add(currentHashTag);
            }
        }
    });
    usedHashTags.forEach(hashTag => { console.log(hashTag); });
}

modernItems('Nowadays everyone uses # to tag a #special word in #socialMedia');
modernItems('The symbol # is known #variously in English-speaking #regions as the #number sign')