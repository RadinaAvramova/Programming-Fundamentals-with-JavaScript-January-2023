function muOnline(input) {
    let rooms = input.shift().split('|');
    let health = 100;
    let bitcoins = 0;
    let notDead = true;
    for (let i = 0; i < rooms.length; i++) {
        let command = rooms[i];
        let splitted = command.split(' ');
        if (splitted[0] === 'potion') {
            let addHealth = Number(splitted[1]);
            let newHealth = (health + addHealth > 100) ? 100 : health + addHealth;
            console.log(`You healed for ${newHealth - health} hp.`);
            health = newHealth;
            console.log(`Current health: ${health} hp.`);
        } else if (splitted[0] == 'chest') {
            bitcoins += Number(splitted[1]);
            console.log(`You found ${splitted[1]} bitcoins.`);
        } else {
            let attack = Number(splitted[1]);
            health -= attack;
            if (health <= 0) {
                console.log(`You died! Killed by ${splitted[0]}.`);
                console.log(`Best room: ${i + 1}`);
                notDead = false;
                break;
            } else if (health > 0) {
                console.log(`You slayed ${splitted[0]}.`);
            }
        }
        if (!notDead) {
            break;
        }
    }
    if (notDead) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}

function muOnline(input) {
    let array = input.split("|");
 
    let initialHealth = 100;
    let totalBitcoins = 0;
    let roomCounter = 0;
    let monster = "";
 
    for (let i = 0; i < array.length; i++) {
        let tokens = array[i].split(" ");
 
        if (tokens[0] == "potion") {
            roomCounter++;
          
            let healingPart = Number.parseInt(tokens[1]);
            let currentHealth = initialHealth + healingPart;
          
            if (currentHealth < 100) {
                initialHealth += healingPart;
                console.log(`You healed for ${healingPart} hp.`);
                console.log(`Current health: ${currentHealth} hp.`);
            } else {
                let potionOfHealingPart = (100 + healingPart) - currentHealth;
                initialHealth += potionOfHealingPart;
                console.log(`You healed for ${potionOfHealingPart} hp.`);
                console.log(`Current health: ${initialHealth} hp.`);
            }
        } else if (tokens[0] == "chest") {
            roomCounter++;
          
            let numberOfBitcoins = Number.parseInt(tokens[1]);
            console.log(`You found ${numberOfBitcoins} bitcoins.`);
          
            totalBitcoins += numberOfBitcoins;
        } else {
            roomCounter++;
 
            monster = tokens[0];
            let attack = Number.parseInt(tokens[1]);
            initialHealth -= attack;
            if (initialHealth > 0) {
                console.log(`You slayed ${monster}.`);
            } else {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${roomCounter}`);
                return;
            }
        }
    }
  
    console.log(`You've made it!\nBitcoins: ${totalBitcoins}\nHealth: ${initialHealth}`);
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");




