function counterStrike(input) {
    let wonBattle = 0;
    let health = Number(input.shift());
    for (const commands of input) {
        if (commands !== 'End of battle') {
            let energy = Number(commands);
            if (health - energy < 0) {
                console.log(`Not enough energy! Game ends with ${wonBattle} won battles and ${health} energy`);
                return;
            }
            health -= energy;
            wonBattle++;
        } else {
            console.log(`Won battles: ${wonBattle}. Energy left: ${health}`);
        }
        if (wonBattle % 3 === 0) {
            health += wonBattle;
        }
    }
}

function counterStrike(input) {
    let energy = Number(input.shift());
    let distance = input.shift();
    let gamesWon = 0;

    while (distance != "End of battle") {
        // if (Number.isNaN(energy)) {
        //     energy = 0;
        // }

        let numDistance = Number(distance);

        // The energy you need for reaching an enemy is equal to the distance you receive. 
        // Each time you reach an enemy, you win a battle, and your energy is reduced. 
        if (energy >= numDistance) {
            gamesWon++;
            energy -= numDistance;
        } else {
            // if (energy <= -1) {
            // }
            // energy = 0;

            // Otherwise, if you don't have enough energy to reach an enemy, end the program and print: 
            // "Not enough energy! Game ends with {count} won battles and {energy} energy".
            console.log(`Not enough energy! Game ends with ${gamesWon} won battles and ${energy} energy`);
            // subtract from energy in order to avoid printing win message below
            energy -= numDistance;
            break;
        }

        if (gamesWon % 3 === 0) {
            energy += gamesWon;
        }

        distance = input.shift();
    }

    // if (distance === "End of battle") {
    if (energy >= 0) {
        console.log(`Won battles: ${gamesWon}. Energy left: ${energy}`);
    }
}

counterStrike(["100","10","10","10","1","2","3","73","10"]);
counterStrike(["200","54","14","28","13","End of battle"]);