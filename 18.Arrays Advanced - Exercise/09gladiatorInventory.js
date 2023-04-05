function gladiatorInventory(inputCommands) {
 
    let inventory = inputCommands.shift().split(' ');
 
    for (let i = 0; i < inputCommands.length; i++) {
        let commands = inputCommands.slice()[i].split(' ')
        let command = commands[0];
        let equipment = commands[1];
 
        switch (command) {
            case 'Buy': buy(equipment);
                break;
            case 'Trash': thrash(equipment);
                break;
            case 'Repair': repair(equipment);
                break;
            case 'Upgrade': upgrade(equipment);
                break;
        }
    }
    console.log(inventory.join(' '));
 
    function buy(eqp) {
        if (!inventory.includes(eqp)) {
            inventory.push(eqp);
        }
        return inventory;
    }
 
    function thrash(eqp) {
        for (let i = 0; i < inventory.length; i++) {
            if (eqp === inventory[i]) {
                inventory.splice(i, 1);
            }
        }
        return inventory;
    }
 
    function repair(eqp) {
        for (let i = 0; i < inventory.length; i++) {
            if (eqp === inventory[i]) {
                let repaired = inventory.splice(i, 1);
                inventory.push(repaired.toString());
            }
        }
        return inventory;
    }
 
    function upgrade(eqp) {
        let item = eqp.split('-')
        for (let i = 0; i < inventory.length; i++) {
            if (item[0] === inventory[i]) {
                let newItem = item[0] + ":" + item[1];
                inventory.splice(i+1,0,eqp)
            }
        }
        return inventory;
    } 
}

function gladiatorInvenotory(input) {
    let inventory = input.shift().split(' ');
 
    for (let i = 0; i < input.length; i++) {
        let commands = input[i].split(' ');
 
        if (commands[0] === "Buy") {
            if (!inventory.includes(commands[1])) {
                inventory.push(commands[1]);
            }
        } else if (commands[0] === "Trash") {
            if (inventory.includes(commands[1])) {
                let index = inventory.indexOf(commands[1]);
                inventory.splice(index, 1);
            }
        } else if (commands[0] === "Repair") {
            if (inventory.includes(commands[1])) {
                let index = inventory.indexOf(commands[1]);
                inventory.splice(index, 1);
                inventory.push(commands[1]);
            }
        } else if (commands[0] === "Upgrade") {
            let upgadeElement = commands[1].split('-');
            if (inventory.includes(upgadeElement[0])) {
                let index = inventory.indexOf(upgadeElement[0]);
                inventory.splice(index + 1, 0, `${upgadeElement[0]}:${upgadeElement[1]}`);
            }
        }
    }
    console.log(inventory.join(' '));
}

gladiatorInvenotory(['SWORD Shield Spear','Buy Bag','Trash Shield','Repair Spear','Upgrade SWORD-Steel']);
gladiatorInvenotory(['SWORD Shield Spear','Trash Bow','Repair Shield','Upgrade Helmet-V']);