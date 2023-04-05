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


function muOnline(line) {
    let health = 100;
    let bitcoins = 0;

    //1 split rooms from input
    let rooms = line.split('|');

    //1.5 iterate rooms 
    for (let i = 0; i < rooms.length; i++) {
        //2 split input for each room
        let room = rooms[i];
        let tokens = room.split(' ');
        let command = tokens[0];
        let value = Number(tokens[1]);

        //3 execute room logic 
        if (command === 'potion') {
            let missingHealth = 100 - health;   
            let restoredHealth = Math.min(missingHealth, value);
            health += restoredHealth;
            console.log(`You healed for ${restoredHealth} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command ==='chest') {
            bitcoins += value;
            console.log(`You found ${value} bitcoins.`);
        } else {
            health -= value;

            if (health <= 0) {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i + 1}`);
                return
            }

            console.log(`You slayed ${command}.`);
        }
    } 

    console.log(`You've made it!`);
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);

}

muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");