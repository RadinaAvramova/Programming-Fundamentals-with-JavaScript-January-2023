function garage(inputArr) {
    let garagesMap = new Map();
    for (let row of inputArr) {
        let [garage, carKeyValues] = row.split(' - ');
        if (!garagesMap.has(garage)) {
            garagesMap.set(garage, [carKeyValues]);
        } else {
            let availableCars = garagesMap.get(garage);
            availableCars.push(carKeyValues);
            garagesMap.set(garage, availableCars);
        }
    }
    let sortedGarages = [...garagesMap.entries()].sort((a, b) => a[0] - b[0]);
    let output = '';
    for (let [currGarage, currCarKeyValue] of sortedGarages) {
        output += `Garage № ${currGarage}\n`;
        for (let currCarProperties of currCarKeyValue) {
            currCarProperties = currCarProperties.replace(/: /g, ' - ');
            output += `--- ${currCarProperties}\n`;
        }
    }
    console.log(output);
}

function garage(input) {
    let garages = {};
    for (const line of input) {
        let [garage, carInfo] = line.split(' - ');
        if (!garages.hasOwnProperty(garage)) {
            garages[garage] = [];
        }
        garages[garage].push(carInfo);
    }
    let output = '';
    Object.entries(garages).sort((a, b) => a[0] - b[0]).forEach(([garage, cars]) => {
        output += `Garage № ${garage}\n`;
        for (let currCar of cars) {
            currCar = currCar.replace(/: /g, ' - ');
            output += `--- ${currCar}\n`;
        }
    });
    console.log(output);
}

function garage(input) {
    let garages = [];
    for (const line of input) {
        let [garageNumber, carInfo] = line.split(' - ');
        let found = garages.find(g => g.garageNumber === garageNumber);
        if (!found) {
            garages.push({
                garageNumber: garageNumber,
                carInfo: []
            });
            found = garages.find(g => g.garageNumber === garageNumber);
        }
        found.carInfo.push(carInfo);
    }
    let output = '';
    garages.forEach(garage => {
        output += `Garage № ${garage.garageNumber}\n`;
        for (let currCar of garage.carInfo) {
            currCar = currCar.replace(/: /g, ' - ');
            output += `--- ${currCar}\n`;
        }
    });
    console.log(output);
}

garage(['1 - color: blue, fuel type:diesel', '1 - color: red,manufacture: Audi', '2 - fuel type:petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);
garage(['1 - color: green, fuel type:petrol','1 - color: dark red, manufacture:WV','2 - fuel type: diesel','3 - color: dark blue, fuel type:petrol']);