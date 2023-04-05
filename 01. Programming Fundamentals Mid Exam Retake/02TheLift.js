function theLift(input) {
    let people = Number(input.shift());  //removes the first element from an array and returns that removed element.
    let wagons = input.toString().split(" ").map((x) => Number(x)); //takes a pattern and divides a String into an ordered list of substrings by searching for the pattern(split) //map() method creates a new array populated with the results of calling a provided function on every element in the calling array(map)
    let fullWagon = 0;
    let newWagons = [];

    for (let i = 0; i < wagons.length; i++) {
        let singleWagon = wagons[i];
        let emptySpaces = false;
        let noMorePeople = false;

        if (singleWagon < 4 && people > 0) {
            for (let singleSeats = 0; singleSeats <= 3; singleSeats++) {
                people -= 1;
                singleWagon++;
                wagons[i] = singleWagon;
                // fullWagon = singleWagon;
                // if (people == 0 && singleWagon < 4) {
                if (people == 0 && wagons.some(w => w < 4)) {   //some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
                    console.log(`The lift has empty spots!`);
                    emptySpaces = true;
                    break;
                } else if (people == 0) {
                    noMorePeople = true;
                    break;
                }
                if (singleWagon == 4) {
                    break;
                }
            }

            // newWagons.push(fullWagon);
            // wagons[i] = singleWagon;
            if (emptySpaces || noMorePeople) {
                break;
            }
        }
    }
    if (people > 0 && wagons.every(w => w === 4)) {   //every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
        console.log(`There isn't enough space! ${people} people in a queue!`);
    }
    // console.log(newWagons.join(" "));
    console.log(wagons.join(" "));  //join() method creates and returns a new string by concatenating all of the elements in an array
}

function theLift(input) {
    let peopleInQueue = Number(input.shift());
    let wagons = input.toString().split(" ").map((x)=> Number(x));
 
    for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] < 4) {
            if (peopleInQueue >= 4 - wagons[i]) {
                peopleInQueue -= 4 - wagons[i];
                wagons[i] = 4;
            } else {
                wagons[i] += peopleInQueue;
                peopleInQueue = 0;
            }
        }
    }
 
    let isNotFull = false;
 
    for (let i = 0; i < wagons.length; i++) {
        let currenEl = wagons[i];
 
        if (currenEl < 4) {
            isNotFull = true;
        }
    }
 
    if (!isNotFull && peopleInQueue > 0) {
        console.log(`There isn't enough space! ${peopleInQueue} people in a queue!`); 
    }
 
    if (isNotFull && peopleInQueue == 0) {
        console.log("The lift has empty spots!");
    }
 
    console.log(wagons.join(" "));
}

function theLift(input) {
 
    let ppl = Number(input.shift());
    let wagons = input.shift().split(' ');
    let wagonSpaceCount = 0;
 
    for (let i = 0; i < wagons.length; i++) {
 
        let currWagon = Number(wagons[i]);
        if (currWagon < 4) {
            if (ppl >= 4) {
 
                if (currWagon != 0) {
                    ppl -= (4 - currWagon);
                    currWagon = 4;
                    wagons[i] = currWagon;
                    emptySpots = false;
                } else {
                    currWagon = 4;
                    ppl -= currWagon;
                    wagons[i] = currWagon;
                }
 
            } else {
                currWagon += ppl;
                ppl = 0;
                wagons[i] = currWagon;
                emptySpots = true;
            }
        }
    }
    if (ppl != 0) {
        console.log(`There isn't enough space! ${ppl} people in a queue!`);
        console.log(wagons.join(' '));
    } else {
        for (let wagon of wagons) {
            
            if (wagon === 4) {
                wagonSpaceCount++;
            }
        }
        if (wagonSpaceCount != wagons.length) {
            console.log("The lift has empty spots!");
            console.log(`${wagons.join(' ')}`)
        } else {
            console.log(`${wagons.join(' ')}`)
        }
    }
}


theLift(["15","0 0 0 0 0"]);
theLift(["20","0 2 0"]);