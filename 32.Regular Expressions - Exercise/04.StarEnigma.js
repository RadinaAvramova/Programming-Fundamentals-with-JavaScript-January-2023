function starEnigma(input) {
 
    let numberMessages = Number(input.shift());
    let planets = [];
    let patternStar = /[star]/g;
 
    for (let command of input) {
        let counter = 0;
        let splitArray = command.split("");
        for (let i = 0; i < splitArray.length; i++) {
            let currentChar = splitArray[i].toLowerCase();
            if (currentChar.match(patternStar)) {
                counter++;
            }
        }
 
        for (let i = 0; i < splitArray.length; i++) {
            let charCode = splitArray[i].charCodeAt(0);
            let result = String.fromCharCode(charCode - counter);
            splitArray[i] = result;
        }
 
        let finalString = splitArray.join("");
        planets.push(finalString)
    }
 
    let attackedCount = 0;
    let attackedPlanets = [];
    let destroyedCount = 0;
    let destroyedPlanets = [];
    let patternPlanetMessage = /@(?<name>[A-Za-z]+)[^@:!\->]*:(?<population>\d+)[^@:!\->]*!(?<command>[A|D])![^@:!\->]*\->(?<soldier>\d+)/g;
 
    let planetInfo = patternPlanetMessage.exec(planets);
 
    while (planetInfo !== null) {
        let name = planetInfo.groups['name'];
        let attackCommand = planetInfo.groups['command'];
 
        switch (attackCommand) {
            case "A":
                attackedCount++
                attackedPlanets.push(name);
                break;
 
            case "D":
                destroyedCount++;
                destroyedPlanets.push(name);
                break;
        }
 
        planetInfo = patternPlanetMessage.exec(planets);
    }
 
    attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));
 
    console.log(`Attacked planets: ${attackedCount}`);
    if (attackedPlanets.length > 0) {
        for (let planet of attackedPlanets) {
            console.log(`-> ${planet}`);
        }
    }
    console.log(`Destroyed planets: ${destroyedCount}`);
    if (destroyedPlanets.length > 0) {
        for (let planet of destroyedPlanets) {
            console.log(`-> ${planet}`);
        }
    }
}

function starEnigma(input) {
    let msgCount = input.shift();
    let pattern = /@(?<planetName>[A-Za-z]+)([^@\-:!>]*):[\d]+([^@\-:!>]*)!(?<attackType>[AD])!([^@\-:!>]*)\->[\d]+([^@\-:!>]*)/;
    let attacked = [];
    let destroyed = [];
 
    for (let i = 0; i < msgCount; i++) {
        let line = input[i];
        let decryptKey = line.match(/[star]/gi) && line.match(/[star]/gi).length;
        let decryptedMsg = [];
        for (let letter of line) {
            let symbol = letter.charCodeAt();
            symbol -= decryptKey;
            symbol = String.fromCharCode(symbol);
            decryptedMsg.push(symbol);
        }
 
        decryptedMsg = decryptedMsg.join("");
        decryptedMsg = pattern.exec(decryptedMsg);
 
        if (decryptedMsg) {
            if (decryptedMsg.groups.attackType === "A") {
                attacked.push(decryptedMsg.groups.planetName);
            } else {
                destroyed.push(decryptedMsg.groups.planetName);
            }
        }
    }
 
    attacked.sort((a, b) => a.localeCompare(b))
    destroyed.sort((a, b) => a.localeCompare(b))
 
    console.log(`Attacked planets: ${attacked.length}`);
    attacked.forEach(planet => console.log(`-> ${planet}`));
    console.log(`Destroyed planets: ${destroyed.length}`)
    destroyed.forEach(planet => console.log(`-> ${planet}`));
}


function starEnigma(input) {
    let linesCount = Number(input.shift());
    let starPattern = /[star]/gi;
    let newLines = [];
 
    for (let line of input) {
        let newLine = '';
        let starCount = line.match(starPattern) && line.match(starPattern).length;;
 
        for (let i = 0; i < line.length; i++) {
            let ascNum = line.charCodeAt(i);
            newLine += String.fromCharCode(ascNum - starCount);
        }
 
        newLines.push(newLine);
    }
 
    let obj = {
        'Attacked planets': [],
        'Destroyed planets': [],
    };
 
    let planetPattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*:\d+[^@\-!:>]*!(?<attackType>[AD])![^@\-!:>]*->\d+/g;
 
    for (let i = 0; i < linesCount; i++) {
        let match = planetPattern.exec(newLines[i]);
 
        if (match && match.groups.attackType == 'A') {
            obj['Attacked planets'].push(match.groups.name);
        } else if (match && match.groups.attackType == 'D') {
            obj['Destroyed planets'].push(match.groups.name);
        }
 
        match = planetPattern.exec(newLines[i]);
    }
 
    Object.entries(obj).forEach(kvp => {
        console.log(`${kvp[0]}: ${kvp[1].length}`);
        kvp[1].sort((a, b) => a.localeCompare(b)).forEach(planet => {
            console.log(`-> ${planet}`);
        });
    });
}

starEnigma(['2', 'STCDoghudd4=63333$D$0A53333', 'EHfsytsnhf?8555&I&2C9555SR'])
starEnigma(['3',"tt(''DGsvywgerx>6444444444%H%1B9444",

'GQhrr|A977777(H(TTTT','EHfsytsnhf?8555&I&2C9555SR'])