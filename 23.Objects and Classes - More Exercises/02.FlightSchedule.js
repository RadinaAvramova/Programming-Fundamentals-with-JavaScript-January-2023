function flightSchedule(input) {
    let flights = {};
    input[0].forEach(line => {
        let [numberFly, destination] = line.split(' ')
        flights[numberFly] = {
            Destination: destination,
            Status: 'Ready to fly'
        }
    });
    input[1].forEach(line => {
        let [numberFly, status] = line.split(' ');
        if (flights.hasOwnProperty(numberFly)) {
            flights[numberFly].Status = status;
        }
    });
    for (let fly in flights) {
        if (flights[fly].Status === String(input[2])) {
            console.log(flights[fly]);
        }
    }
}

function flightSchedule(input) {
 
    let firstArr = input.shift();
    let secondArr = input.shift();
    let thirdArr = input.shift();
    let flights = {};
 
    for (const line of firstArr) {
        let [number, Destination] = line.split(' ');
        flights[number] = {Destination, Status: 'Ready to fly'}
    }
 
    for (const line of secondArr) {
        let [number, currentStatus] = line.split(' ');
 
        if (flights.hasOwnProperty(number)) {
            flights[number].Status = currentStatus;
        }
    }
 
    for (const line in flights) {
        if (flights[line].Status == thirdArr) {
            console.log(flights[line])
        }
    }
 
}

flightSchedule([['WN269 Delaware',

'FL2269 Oregon',

'WN498 Las Vegas',

'WN3145 Ohio',

'WN612 Alabama',

'WN4010 New York',

'WN1173 California',

'DL2120 Texas',

'KL5744 Illinois',

'WN678 Pennsylvania'],

['DL2120 Cancelled',

'WN612 Cancelled',

'WN1173 Cancelled',

'SK430 Cancelled'],

['Cancelled']])


flightSchedule([['WN269 Delaware',

'FL2269 Oregon',

'WN498 Las Vegas',

'WN3145 Ohio',

'WN612 Alabama',
'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'], ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK330 Cancelled'], ['Ready to fly']])