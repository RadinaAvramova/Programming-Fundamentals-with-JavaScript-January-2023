function cardGame(input) {
 
    let cardPlayers = {};
    let values = {
        '2':2, '3': 3, '4': 4, '5': 5, '6': 6,'7': 7,'8': 8, '9': 9,
        'J': 11, 'Q': 12, 'K': 13, 'A': 14
    }
    let power = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    }
 
    for (let player of input){
        let [playerName, cards] = player.split(`: `);
        let currentCards = cards.split(`, `);
 
        // Here we check if current player exists, if it doesn't, we create new player with empty array[],
        // then we check each card before pushing it into the array, to remove duplicates
        // And if the player already exists, we just check the cards, and push them into the array
        if (!cardPlayers.hasOwnProperty(playerName)){
            cardPlayers[playerName] = [];
            currentCards.forEach(card => {
                if (!cardPlayers[playerName].includes(card)){
                    cardPlayers[playerName].push(card);
                }
            });
        } else {
            for (let currentCard of currentCards) {
                if (!cardPlayers[playerName].includes(currentCard)) {
                    cardPlayers[playerName].push(currentCard);
                }
            }
        }
    }
    // We get all entries, which returns [[name, [cards] ]] and iterate through them (for each player) and then for each card
    let entries = Object.entries(cardPlayers);
    entries.forEach( player => {
        let name = player[0];
        let cards = player[1];
        let sum = 0;
 
        cards.forEach(card => {
            let cardValue = 0;
            let cardPower = 0;
            let currentCard = card.split(``);
            let cardLength = currentCard.length;
            if (cardLength === 2) {
                cardValue = Number(values[currentCard[0]]);
                cardPower = power[currentCard[1]];
                sum += cardValue * cardPower;
            } else {
                cardValue = Number (currentCard[0] + currentCard[1]);
                cardPower = currentCard[2];
                sum += cardValue * power[cardPower];
            }
        });
        console.log(`${name}: ${sum}`);
    })
}

function cardGame(input) {
    let obj = {};
    let cardsMapper = {
 
        p: {
            "J": 11,
            "Q": 12,
            "K": 13,
            "A": 14,
        },
 
        t: {
            "S": 4,
            "H": 3,
            "D": 2,
            "C": 1,
        }
 
    }
   
    input.forEach(line => {
 
        let [player, cards] = line.split(": ");
       
        if(!obj[player]){
            obj[player] = new Set(cards.split(", "));
        }else{
            cards.split(", ").forEach((card) => {
                obj[player].add(card);
            })
        }
 
    });
 
Object.keys(obj).forEach(key => {
 
    console.log(`${key}: ${totalPower(obj[key])}`);
   
});
 
function totalPower(cardSet) {
    let totalSum = 0;
 
cardSet.forEach((card) =>{
    let tokens = card.split("");
    let color = tokens.pop();
    let value = tokens.join('');
   
    let p = 0;
   
    if(!cardsMapper.p[value]){
        p = Number(value);
    }else{
        p = cardsMapper.p[value];
    }
   
    totalSum += p *(cardsMapper.t[color]);
 
})
 return totalSum;
}
 
}

function cardGame(array) {
    let players={};
 
    for(let element of array){
        let playerName=element.slice(0,element.indexOf(": "));
        let cards=element.slice(element.indexOf(": ")+2,).split(', ');
        
        if(!players.hasOwnProperty(playerName)){
            players[playerName]=cards;
        }else{
            players[playerName].push.apply(players[playerName],cards);
        }
    }
 
    for(let player in players){
        let currSet=new Set(players[player]);
        players[player]=Array.from(currSet);
        players[player]["totalPoints"]=0;
    }
 
    for(let player in players){
 
        for(let card of players[player]){
            let cardPower;
            let cardType;
 
            if(card.length==2){
                [cardPower,cardType]=card.split('');
            }else{
                cardType=card.split('').pop();
                cardPower=card.slice(0,2);
            }
 
            switch(cardPower){
                case'2':
                    cardPower=2;
                    break;
                case'3':
                    cardPower=3;
                    break;
                case '4':
                    cardPower=4;
                    break;
                case'5':
                    cardPower=5;
                    break;
                case'6':
                    cardPower=6;
                    break;
                case'7':
                    cardPower=7;
                    break;
                case'8':
                    cardPower=8;
                    break;
                case'9':
                    cardPower=9;
                    break;
                case'10':
                    cardPower=10;
                    break;
                case'J': 
                    cardPower=11;
                    break;
                case'Q': 
                    cardPower=12;
                    break;
                case'K': 
                    cardPower=13;
                    break;
                case'A': 
                    cardPower=14;
                    break;
            }
            switch(cardType){
                case 'S': cardType=4;break;
                case 'H': cardType=3;break;
                case 'D': cardType=2;break;
                case 'C': cardType=1;break;
            }
            players[player]["totalPoints"]+=cardType*cardPower;
        }
    }
 
    for(let player in players){
        console.log(`${player}: ${players[player]["totalPoints"]}`)
    }
}

function cardGame(players) {
    let eachPlayer = players.shift();
    let objCardPlayers = [];
    let resultArray = [];
    let cards = [];
    let type = [];
    let card = [];
    let power = [];
 
    while (eachPlayer !== undefined) {
        let input = eachPlayer.split(": ");
        let name = input[0];
        cards = input[1].split(", ");
 
        if (!objCardPlayers[name]) {
            objCardPlayers[name] = cards.toString(); //join(',')
        } else {
            objCardPlayers[name] += "," + cards;
        }
        eachPlayer = players.shift();
    }
 
    for (const obj in objCardPlayers) {
        let set = new Set(objCardPlayers[obj].split(","));
        cards = Array.from(set);
        objCardPlayers[obj] = cards;
    }
 
    for (const key in objCardPlayers) {
        let sum = 0;
        resultArray = objCardPlayers[key];
        for (let i = 0; i < resultArray.length; i++) {
            card = resultArray[i].split("");
            type = card.pop();
            for (const num of card) {
                if (num === "J") {
                    power = 11;
                } else if (num === "Q") {
                    power = 12;
                } else if (num === "K") {
                    power = 13;
                } else if (num === "A") {
                    power = 14;
                } else {
                    power += num;
                }
            }
            switch (type) {
                case "S":
                    sum += Number(power) * 4;
                    break;
                case "H":
                    sum += Number(power) * 3;
                    break;
                case "D":
                    sum += Number(power) * 2;
                    break;
                case "C":
                    sum += Number(power) * 1;
                    break;
            }
            power = "";
        }
        console.log(`${key}: ${sum}`);
    }
}

function cardGame(data) {
    let cardPowerEnum = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14
    }

    let cardTypeEnum = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1
    }

    let players = new Map();

    for (let line of data) {
        let [playerName, cards] = line.split(": ");
        if (!players.has(playerName)) {
            players.set(playerName, new Set());
        } 
        cardsArray = cards.split(", ");
        for (let card of cardsArray) {
            players.get(playerName).add(card);
        }
    }

    for (let playerInfo of Array.from(players)) {
        let sum = 0;
        for (let card of Array.from(playerInfo[1])) {
            let cardInfo = card.split("");
            let powerAsString = cardInfo.splice(0, cardInfo.length - 1).join("");
            let typeAsString = cardInfo[cardInfo.length - 1]; 
            let power = cardPowerEnum[powerAsString];
            let type = cardTypeEnum[typeAsString];
            sum += power * type;
        }
        console.log(playerInfo[0] + ": " + sum);
    }
}

cardGame([

    'Peter: 2C, 4H, 9H, AS, QS',
    
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    
    'Andrea: QH, QC, QS, QD',
    
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    
    'Andrea: QH, QC, JS, JD, JC',
    
    'Peter: JD, JD, JD, JD, JD, JD'
    
]);

cardGame([

    'John: 2C, 4H, 9H, AS, QS',
    
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'John: JD, JD, JD, JD'
    
])