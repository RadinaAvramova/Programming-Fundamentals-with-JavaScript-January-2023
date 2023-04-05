function hardWord(array){
    let words = array[1];
    let text = array[0];
     
    words.sort((a, b) => b.length - a.length);
    for(let word of words){
        text = text.replace("_".repeat(word.length), word)
    }
    console.log(text);
}

function hardWord(data) {
    let text = data[0].split(" ");
    let words = data[1];

    for (let i = 0; i < text.length; i++) {
        if (text[i].includes("_")) {
            let substr = text[i].substring(text[i].indexOf("_"), text[i].lastIndexOf("_") + 1);
            let endElement = text[i].substring(text[i].lastIndexOf("_") + 1);
            let firstElement = text[i].substring(0, text[i].indexOf("_"));
            if (endElement) {
                debugger
            }

            for (let el of words) {
                if (substr.length === el.length) {
                    text[i] = el; 
                    if (endElement) {
                        text[i] = text[i] + endElement;
                    }
                    if (firstElement) {
                        text[i] = text[i] + firstElement;
                    }
                }
            }
        }
    }

    console.log(text.join(" "));
}

hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so_______ things happened. My dad bought me a sled. Mom started a new job as a__________. My brother\'s ankle is ________, and now it bothers me even more.Every night Mom cooks ___ on your recipe because it is the most delicious. Ihope this year Santa will _____ me a robot.',['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])