function armies(input) {
    let leaderArmyMap = new Map();
    for (let inputRow of input) {
        if (inputRow.includes("arrives")) {
            var [leader, arrives] = inputRow.split(' ');
            leaderArmyMap.set(leader, new Map());
        } else if (inputRow.includes(":")) {
            var [leader, armyData] = inputRow.split(": ");
            var [armyName, armyCount] = armyData.split(", ");
            armyCount = +armyCount;
            if (leaderArmyMap.has(leader)) {
                leaderArmyMap.get(leader).set(armyName, armyCount);
            }
        } else if (inputRow.includes("+")) {
            let [armyName1, armyCountToAdd] = inputRow.split(" + ");
            armyCountToAdd = +armyCountToAdd;
            if (leaderArmyMap.get(leader).has(armyName1)) {
                leaderArmyMap.get(leader).set(armyName1, armyCount += armyCountToAdd);
            }
        } else if (inputRow.includes("defeated")) {
            let [leader, defeated] = inputRow.split(' ');
            if (leaderArmyMap.has(leader)) {
                leaderArmyMap.delete(leader);
            }
        }
    }
    let arrFromLeaderArmyMap = [...leaderArmyMap];
    for (let row of arrFromLeaderArmyMap) {
        let totalArmy = [...row[1]
            .values()]
            .reduce((a, b) => a + b);
        row.push(totalArmy);
        totalArmy = 0;
    }
 
    let comparator = (a, b) => b[2] - a[2];
    arrFromLeaderArmyMap.sort(comparator);
    let comparator1 = (a, b) => b[1] - a[1];
 
    for (let row of arrFromLeaderArmyMap) {
        row[1] = [...row[1]];
        row[1] = row[1].sort(comparator1);
    }
 
    for (let row of arrFromLeaderArmyMap) {
        console.log(`${row[0]}: ${row[2]}`);
        for (let data of row[1]) {
            console.log(`>>> ${data[0]} - ${data[1]}`);
        }
    }
}

armies(['Rick Burr arrives', 'Fergus:Wexamp, 30245', 'Rick Burr: Juard,50000', 'Findlay arrives', 'Findlay:Britox, 34540', 'Wexamp + 6000',

'Juard + 1350', 'Britox + 4500','Porter arrives', 'Porter: Legion,55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']);

armies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500','Wexamp arrives', 'Findlay: Wexamp,34540', 'Wexamp + 340', 'Wexamp:Britox, 1155', 'Wexamp: Juard,43423'])
