function solve(input) {
    let num = +input.shift();
    let index = 0;
    let arrObjects = [];
    let current = input.shift();

    while (index < num) {
        let obj = {};
        let [hero, hitPoints, manaPoints] = current.split(' ');
        hitPoints = +hitPoints;
        manaPoints = +manaPoints;

        obj = {
            hero,
            hitPoints,
            manaPoints
        };

        arrObjects.push(obj)
        current = input.shift();
        index++;
    }

    while (current !== 'End') {
        if (current.includes('CastSpell')) {
            let [commandName, heroName, manaPoinstNeeded, spellName] = current.split(' - ');
            arrObjects.filter(el => {
                if (el.hero == heroName) {
                    let result = el.manaPoints - manaPoinstNeeded;

                    // if (el.manaPoints >= manaPoinstNeeded && el.manaPoints <= 200) {
                    if (el.manaPoints >= manaPoinstNeeded) {
                        el.manaPoints -= manaPoinstNeeded;
                        console.log(`${el.hero} has successfully cast ${spellName} and now has ${result} MP!`)
                    } else {
                        console.log(`${el.hero} does not have enough MP to cast ${spellName}!`)
                    }
                }
            });
        } else if (current.includes('TakeDamage')) {
            let [commandName, heroName, damage, attacker] = current.split(' - ');
            arrObjects.filter(el => {
                if (el.hero == heroName) {
                    damage = +damage;

                    if (el.hitPoints > damage) {
                        el.hitPoints -= damage;
                        console.log(`${el.hero} was hit for ${damage} HP by ${attacker} and now has ${el.hitPoints} HP left!`)
                    } else {
                        console.log(`${el.hero} has been killed by ${attacker}!`)
                        let index = arrObjects.indexOf(el);
                        arrObjects.splice(index, 1);
                    }
                }
            });
        } else if (current.includes('Heal')) {
            let [commandName, heroName, amount] = current.split(' - ');
            amount = +amount;
            arrObjects.filter(el => {
                if (el.hero == heroName) {
                    let result = el.hitPoints + amount;
                    if (result <= 100) {
                        el.hitPoints += amount;
                        console.log(`${el.hero} healed for ${amount} HP!`)
                    } else if (result > 100) {
                        // let residue = result - 100;
                        // amount = Math.abs(amount - residue);
                        let residue = 100 - el.hitPoints;
                        el.hitPoints = 100;
                        console.log(`${el.hero} healed for ${residue} HP!`)
                        // console.log(`${el.hero} healed for ${amount} HP!`)
                    }
                }
            })
        } else if (current.includes('Recharge')) {
            let [commandName, heroName, amount] = current.split(' - ');
            amount = +amount;
            arrObjects.filter(el => {
                if (el.hero == heroName) {
                    let result = el.manaPoints + amount;

                    if (result > 200) {
                        // let residue = result - amount;
                        // amount = Math.abs(amount - residue);
                        let residue = 200 - el.manaPoints;
                        el.manaPoints = 200;
                        console.log(`${el.hero} recharged for ${residue} MP!`)
                    } else {
                        el.manaPoints += amount;
                        console.log(`${el.hero} recharged for ${amount} MP!`)
                    }
                }
            })
        }

        current = input.shift();
    }

    for (let line of arrObjects) {
        console.log(`${line.hero}
  HP: ${line.hitPoints}
  MP: ${line.manaPoints}`)
    }
    //console.log(arrObjects)

}

function solve(input) {
    // 'Solmyr 85 120',
    // 'Kyrre 99 50',

    // 'Heal - Solmyr - 10',
    // 'Recharge - Solmyr - 50',
    // 'TakeDamage - Kyrre - 66 - Orc',
    // 'CastSpell - Kyrre - 15 - ViewEarth',

    // 'End'

    // 4
    // Adela 90 150
    // SirMullich 70 40
    // Ivor 1 111
    // Tyris 94 61

    // Heal - SirMullich - 50
    // Recharge - Adela - 100
    // CastSpell - Tyris - 1000 - Fireball
    // TakeDamage - Tyris - 99 - Fireball
    // TakeDamage - Ivor - 3 - Mosquito
    // End

    let actions = {
        'CastSpell': castSpell,
        'TakeDamage': takeDamage,
        'Recharge': recharge,
        'Heal': heal,
    }

    let numberOfHeroes = Number(input.shift());
    let heroes = {};

    for (let i = 0; i < numberOfHeroes; i++) {
        // Solmyr 85 120',
        let [heroName, hitPoints, manaPoints] = input.shift().split(' ');
        hitPoints = Number(hitPoints);
        manaPoints = Number(manaPoints);

        heroes[heroName] = {
            hitPoints,
            manaPoints
        }
    }

    while (input[0] !== 'End') {

        let tokens = input.shift().split(' - ');
        let command = tokens[0];
        let action = actions[command];
        action(tokens[1], tokens[2], tokens[3]);
    }

    function heal(heroName, amount) {
        // Heal - Solmyr - 10',

        // Heal – {hero name} – {amount}
        // •	The hero increases his HP. If a command is given that would bring the HP of the hero above the maximum value (100), HP is increased to 100 (the HP can’t go over the maximum value).
        // •	 Print the following message:
        // o	"{hero name} healed for {amount recovered} HP!"
        amount = Number(amount);
        let hero = heroes[heroName]; // we have 70. they heal us with 50. max heal is 100. so we need to heal with (100 - 70). we have 20 on top - we need to remove 20 
        let oldValue = hero.hitPoints;
        hero.hitPoints = Math.min(100, hero.hitPoints + amount);
        console.log(`${heroName} healed for ${hero.hitPoints - oldValue} HP!`);
    }

    function castSpell(heroName, mpNeeded, spellName) {
        mpNeeded = Number(mpNeeded);
        //         CastSpell – {hero name} – {MP needed} – {spell name} 
        // •	If the hero has the required MP, he casts the spell, thus reducing his MP. Print this message: 
        // o	"{hero name} has successfully cast {spell name} and now has {mana points left} MP!"
        // •	If the hero is unable to cast the spell print:
        // o	"{hero name} does not have enough MP to cast {spell name}!"
        // 'CastSpell - Kyrre - 15 - ViewEarth',
        let hero = heroes[heroName];

        if (hero.manaPoints >= mpNeeded) {
            hero.manaPoints -= mpNeeded;

            console.log(`${heroName} has successfully cast ${spellName} and now has ${hero.manaPoints} MP!`);
            // Kyrre has successfully cast ViewEarth and now has 35 MP!
        } else {
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`)
        }
    }

    function takeDamage(heroName, damage, attacker) {
        //      TakeDamage – {hero name} – {damage} – {attacker}
        // •	Reduce the hero HP by the given damage amount. If the hero is still alive (his HP is greater than 0) print:
        // o	"{hero name} was hit for {damage} HP by {attacker} and now has {current HP} HP left!"
        // •	If the hero has died, remove him from your party and print:
        // o	"{hero name} has been killed by {attacker}!"
        // TakeDamage - Kyrre - 66 - Orc',
        damage = Number(damage);
        let hero = heroes[heroName];

        hero.hitPoints -= damage;

        if (hero.hitPoints > 0) {
            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${hero.hitPoints} HP left!`);

        } else {
            delete heroes[heroName];
            console.log(`${heroName} has been killed by ${attacker}!`);
        }
    }

    function recharge(heroName, amount) {
        amount = Number(amount);
        // Recharge - Solmyr - 50'
        // Recharge – {hero name} – {amount}
        // •	The hero increases his MP. If a command is given that would bring the MP of the hero above the maximum value (200), MP is increased to 200. (the MP can’t go over the maximum value).
        // •	 Print the following message:
        // o	"{hero name} recharged for {amount recovered} MP!"
        let hero = heroes[heroName];

        let oldValue = hero.manaPoints;
        hero.manaPoints = Math.min(200, hero.manaPoints + amount);

        console.log(`${heroName} recharged for ${hero.manaPoints - oldValue} MP!`);
    }

    // Solmyr healed for 10 HP!
    // Solmyr recharged for 50 MP!
    // Kyrre was hit for 66 HP by Orc and now has 33 HP left!
    // Kyrre has successfully cast ViewEarth and now has 35 MP!
    // Solmyr
    //   HP: 95   / descending order 
    //   MP: 170
    // Kyrre
    //   HP: 33
    //   MP: 35

    // SirMullich healed for 30 HP!
    // Adela recharged for 50 MP!
    // Tyris does not have enough MP to cast Fireball!
    // Tyris has been killed by Fireball!
    // Ivor has been killed by Mosquito!
    // SirMullich
    //   HP: 100
    //   MP: 40
    // Adela
    //   HP: 90
    //   MP: 200

    //     Print all members of your party who are still alive, sorted by their HP in descending order (b – a) , then by their name in ascending order (a – b) , in the following format (their HP/MP need to be indented 2 spaces):
    // "{hero name}
    //      HP: {current HP}
    //      MP: {current MP}

    // [
    //     [ 'Adela', { hitPoints: 90, manaPoints: 200 } ],
    //     [ 'SirMullich', { hitPoints: 100, manaPoints: 40 } ]
    //   ]

    let sortedHeroes = Object.entries(heroes).
        sort(sortingHeroes);

    function sortingHeroes(a, b) {

        let [aName, aInfo] = a;
        let [bName, bInfo] = b;

        let byHealthDescending = bInfo.hitPoints - aInfo.hitPoints;

        if (byHealthDescending === 0) {
            return aName.localeCompare(bName);
        }

        return byHealthDescending;
    }

    // for (let [heroName, hero] of sortedHeroes) {
    for (let [heroName, hero] of Object.entries(heroes)) {

        console.log(`${heroName}`);
        console.log(`  HP: ${hero.hitPoints}`);
        console.log(`  MP: ${hero.manaPoints}`);
    }
}

function heroesOfCodeAndLogic(array) {

    let heroesNumber = Number(array.shift());
    let commands = array.slice(heroesNumber);


    let objHeroes = {};

    for (let i = 0; i < heroesNumber; i++) {
        let [heroName, hp, mana] = array[i].split(' ');
        objHeroes[heroName] = { ['health']: Number(hp), ['mana']: Number(mana) }


    }

    for (let i = 0; i < commands.length; i++) {

        let command = commands[i].split(' - ');

        if (command[0] === 'CastSpell') {
            let hero = command[1];
            let manaForSpell = Number(command[2]);
            let spellName = command[3];

            if (objHeroes[hero]) {

                let oldMana = objHeroes[hero]['mana'];
                if (oldMana >= manaForSpell) {
                    objHeroes[hero]['mana'] = oldMana - manaForSpell;
                    console.log(`${hero} has successfully cast ${spellName} and now has ${objHeroes[hero]['mana']} MP!`);

                } else {
                    console.log(`${hero} does not have enough MP to cast ${spellName}!`);
                }
            }
        }
        else if (command[0] === 'TakeDamage') {

            let hero = command[1];
            let dmgDone = Number(command[2]);
            let beast = command[3]

            if (objHeroes[hero]) {
                let oldHp = objHeroes[hero]['health']

                if (oldHp - dmgDone > 0) {

                    objHeroes[hero]['health'] = oldHp - dmgDone;
                    console.log(`${hero} was hit for ${dmgDone} HP by ${beast} and now has ${objHeroes[hero]['health']} HP left!`);

                } else {
                    delete objHeroes[hero];
                    console.log(`${hero} has been killed by ${beast}!`);

                }
            }

        } else if (command[0] === 'Recharge') {

            let hero = command[1];
            let mana = Number(command[2]);

            if (objHeroes[hero]) {

                let oldMana = objHeroes[hero]['mana'];
                objHeroes[hero]['mana'] = oldMana + mana;

                if (objHeroes[hero]['mana'] > 200) {
                    objHeroes[hero]['mana'] = 200;
                    let rechargedMana = objHeroes[hero]['mana'] - oldMana

                    console.log(`${hero} recharged for ${rechargedMana} MP!`);

                } else {

                    console.log(`${hero} recharged for ${mana} MP!`);
                }
            }
        } else if (command[0] === 'Heal') {
            let hero = command[1];
            let healthRecovered = Number(command[2]);

            if (objHeroes[hero]) {

                let oldHp = objHeroes[hero]['health'];
                objHeroes[hero]['health'] = oldHp + healthRecovered;

                if (objHeroes[hero]['health'] > 100) {
                    objHeroes[hero]['health'] = 100;

                    let rechargedHealth = objHeroes[hero]['health'] - oldHp
                    console.log(`${hero} healed for ${rechargedHealth} HP!`);

                } else {
                    console.log(`${hero} healed for ${healthRecovered} HP!`);

                }
            }
        }
        else if (command[0] === 'End') {


            let sortedHeroes = Object.entries(objHeroes).sort((a, b) => {

                let firstHero = Object.values(a[1])
                let secondHero = Object.values(b[1])

                if (secondHero[0] - firstHero[0] != 0) {
                    return secondHero[0] - firstHero[0];
                }else{
                    return a[0].localeCompare(b[0])
                }})
            
                sortedHeroes.forEach(hero=>{
                    console.log(`${hero[0]}`);
                    let result = Object.entries(hero[1])
                    console.log(`  HP: ${result[0][1]}`);
                    console.log(`  MP: ${result[1][1]}`);
          
                })

        }
    }

}