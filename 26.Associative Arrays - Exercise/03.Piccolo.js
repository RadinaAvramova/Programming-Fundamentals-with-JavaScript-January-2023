function piccolo(input) {
    let obj = {};

    obj = input.reduce((acc, cur) => {
        let [command, carNumber] = cur.split(', ');

        if (acc.hasOwnProperty(carNumber)) {
            if (command === 'OUT') {
                acc[carNumber] = 'out';
            }else if (command === 'IN') {
                acc[carNumber] = 'parked';
            }
        } else {
            if (command === 'IN') {
                acc[carNumber] = 'parked';
            }
        }

        return acc;
    }, {});

    obj = Object.entries(obj)
        .filter(([carNumber, status]) => {

            if (status ===  'parked') {
                return carNumber;
            }
        })
        .map(el => el[0])
        .sort((a, b) => a.localeCompare(b))

    if (obj.length > 0) {
        console.log(obj.join('\n'));
    } else {
        console.log('Parking Lot is Empty');
    }
}

function piccolo(input) {
    let obj = {}
 
    for (let element of input) {
        let [direction, carNumber] = element.split(`, `)
        if (direction == `IN`) {
            if (!obj.hasOwnProperty(carNumber)) {
                obj[carNumber] = null
            }
        } else if (direction == `OUT`) {
            delete obj[carNumber]
        }
 
    }
 
    let sorted = Object.keys(obj)
    if (sorted.length >= 1) {
        sorted = sorted.sort()
        for (let element of sorted) {
            console.log(element)
        }
    } else {
        console.log(`Parking Lot is Empty`)
    }
}


function piccolo(data) {
    let parking = new Set();

    for (let cardData of data) {
        let [direction, carNumber] = cardData.split(", ");
        if (direction === "IN") {
            parking.set(carNumber, "");
        } else {
            parking.delete(carNumber);
        }
    }

    let sort = Array.from(parking).sort((a,b) => a[0].localeCompare(b[0]));

    if(parking.size === 0) {
        console.log("Parking Lot is Empty");
    } else {
        for (let carNumber of sort) {
            console.log(carNumber[0]);
        }
    }
}

piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'IN, CA9999TT',

'IN, CA2866HI',

'OUT, CA1234TA',

'IN, CA2844AA',

'OUT, CA2866HI',

'IN, CA9876HH',

'IN, CA2822UU'])


piccolo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'OUT, CA1234TA'])