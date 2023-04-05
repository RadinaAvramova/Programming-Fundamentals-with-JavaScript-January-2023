function dungeonestDark(input){
    let rooms = input[0].split("|");
    let health = 100;
    let isOver = false;
    let roomCounter = 0;
    let coins = 0;

    for(let room of rooms){
        roomCounter++;
        let commands = room.split(" ");
        let command = commands[0];
        let value = Number(commands[1]);
        switch(command) {
            case "potion":
                if (value + health > 100) {
                    //health = 90;
                    //value = 30;
                    value = value - (value + health - 100);
                    //10   
                }                 
                health += value;
                console.log(`You healed for ${value} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                coins += value;
                console.log(`You found ${value} coins.`);
                break;
            default:
                health -= value;
                if (health > 0) {
                    console.log(`You slayed ${command}.`);
                } else {
                    console.log(`You died! Killed by ${command}.`);
                    isOver = true;
                    console.log(`Best room: ${roomCounter}`);
                }
                break;

        }
        if(isOver) {
            break;
        }
    }
    if(!isOver){
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

function dungeonestDark(arr){
    let dungen = arr[0].split('|');
    let health = 100;
    let coins = 0;
    let counterRooms = 0;
    let allCoins = 0;
   
    for(let i = 0; i < dungen.length;i++){
        let currentRoom = dungen[i].split(' ');
        let command = currentRoom[0];
        let num = Number(currentRoom[1]); // Може още тук да го направим число
        counterRooms++;
   
        if(command === 'potion'){
  //Коригирана проверка за здравето
          if (health + num > 100) {
            num = 100 - health;
            health = 100;
          } else
          {
            health += num;
          }
          console.log(`You healed for ${num} hp.`);
          console.log(`Current health: ${health} hp.`);
   
                 
        }else if(command === 'chest'){
          coins = Number(num);
          allCoins += Number(num);
          console.log(`You found ${coins} coins.`);
   
        }else{
          health -= Number(num);
          if(health > 0){
            console.log(`You slayed ${command}.`);
          }else{
            console.log(`You died! Killed by ${command}.`);
            console.log(`Best room: ${counterRooms}`);
            //Може направо да прекъснем програмата
            return;
          }
         
        }           
    }
    // Като използваме return проврката се обесмисля
      console.log(`You've made it!`);
      console.log(`Coins: ${allCoins}`);
      console.log(`Health: ${health}`); 
  }

  function dungeonestDark(input = []) {
    let rooms = input.shift().split("|");
    let coins = 0;
    let bestRoom = 0;
    let health = 100;
   
    for (let i = 0; i < rooms.length; i++) {
      let tokens = rooms[i].split(" ");
      let encounter = tokens[0];
      let value = +tokens[1];
   
      switch (encounter) {
        case "chest":
          coins += value;
          console.log(`You found ${value} coins.`);
          bestRoom++;
          break;
   
        case "potion":
          if (health + value > 100) {
            console.log(`You healed for ${100 - health} hp.`);
            health = 100;
          } else {
            console.log(`You healed for ${value} hp.`);
            health += value;
          }
          console.log(`Current health: ${health} hp.`);
          bestRoom++;
          break;
   
        default:
          bestRoom++;
          health -= value;
          if (health > 0) {
            console.log(`You slayed ${encounter}.`);
          } else {
            console.log(`You died! Killed by ${encounter}.`);
            console.log(`Best room: ${bestRoom}`);
            return;
          }
          break;
      }
    }
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }

  function dungeonestDark([string]) {
    let health = 100;
    let coins = 0;
    let rooms = string.split('|');
    for (let i = 0; i < rooms.length; i++) {
        let [command, number] = rooms[i].split(' ');
        number = Number(number);
        switch (command) {
            case 'potion':
                healed = health + number > 100 ? 100 - health : number;
                health += healed;
                console.log(`You healed for ${healed} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                coins += number;
                console.log(`You found ${number} coins.`);
                break;
            default:
                health -= number;
                if (health <= 0) {
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${i + 1}`);
                    return;
                } else {
                    console.log(`You slayed ${command}.`);
                }
                break;
        }
    }
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}

function dungeonestDark([string]) {
    let mainIndex = 0;
    let insideIndex = 0;
    let word = '';
    let array = [];
    let counter = 0;
 
    while (mainIndex < string.length) {
        for (let i = mainIndex; i < string.length; i++) {
            let letter = string[i];
            if (letter !== ' ' && letter !== '|') {
                word += letter;
            } else {
                break;
            }
            counter++;
        }
        array.push(word);
        counter++;
        mainIndex = counter;
        word = '';
    }
 
    let indexArray = 0;
    let health = 100;
    let coins = 0;
    let room = 1;
    let isDead = false;
 
    while (indexArray < array.length) {
        let itemOrMonster = array[indexArray];
        indexArray++;
        let number = Number(array[indexArray]);
        if (itemOrMonster == 'potion') {
            health += number;
            if (health > 100) {
                number = 100 - (health - number);
                health = 100;
            }
            console.log(`You healed for ${number} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (itemOrMonster == 'chest') {
            coins += number;
            console.log(`You found ${number} coins.`);
        } else {
            health -= number;
            if (health <= 0) {
                console.log(`You died! Killed by ${itemOrMonster}.`);
                console.log(`Best room: ${room}`);
                isDead = true;
                break;
            } else if (health > 0) {
                console.log(`You slayed ${itemOrMonster}.`);
            }
        }
        room++;
        indexArray++;
    }
 
    if (isDead == false) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);