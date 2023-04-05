function pascalCaseSplitter(text) {
    let res = "";
    res += text[0];
    let startIndex = 0;
    for (let i = 1; i < text.length; i++) {
        let ch = text[i];
        if(ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90){
            res += ", " + text[i];
        } else  {
            res += text[i];
        }
    }

    console.log(res);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCaseSplitter('HoldTheDoor');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');