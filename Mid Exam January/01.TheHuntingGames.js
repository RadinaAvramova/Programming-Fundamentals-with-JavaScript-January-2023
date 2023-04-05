function theHuntingGames(input){

    let days = Number(input.shift());
    let playersCount = Number(input.shift());
    let groupEnergy = Number(input.shift());
    let waterPerPerson = Number(input.shift());
    let foodPerPerson = Number(input.shift());

    let water = days * playersCount * waterPerPerson;
    let food = days * playersCount * foodPerPerson;

    let consumedEnergy = input.map(Number); //Обикаля през всеки елемент и извършва нещо (в случая Number)

    for(let day = 1; day <= days; day++){
        let energy = consumedEnergy.shift();
        groupEnergy -= energy;

        if(groupEnergy <= 0){
            break;
        }

        if(day % 2 === 0){
            groupEnergy *= 1.05; //Вдига с 5%
            water *= 0.7;
        }

        if(day % 3 === 0){
            groupEnergy *= 1.10;
            food -= food / playersCount;
        }
    }

    if(groupEnergy <= 0){
        console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`);
    } else {
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
    }
}

function huntingGames(input) {

    let days = Number(input.shift());
    let players = Number(input.shift());
    let energy = Number(input.shift());
    let waterPerPerson = Number(input.shift());
    let foodPerPerson = Number(input.shift());
    let totalWater = waterPerPerson * players * days;
    let totalFood = foodPerPerson * players * days;
    
    let currentDay = 1;

    for (let i = 0; i < input.length; i++) {
        let lostEnergy = Number(input[i]);
        energy -= lostEnergy;
        if (energy <= 0) {
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
            return;
        }
        if (currentDay % 2 === 0) {
            totalWater *= 0.7;
            energy *= 1.05;
        }
        if (currentDay % 3 === 0) {
            totalFood -= totalFood / players;
            energy *= 1.10;
        }
        currentDay++;
    }
    if (energy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
    }
}