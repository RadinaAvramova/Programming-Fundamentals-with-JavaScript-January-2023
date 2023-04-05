function shootForTheWin(input) {
    let targets = input.shift().split(" ").map(Number);
 
    let count = 0;
    let command = input.shift();
 
    while (command !== "End") {
        let indexOfTheTarget = Number.parseInt(command);
 
        if (indexOfTheTarget >= 0 && indexOfTheTarget < targets.length) {
            for (let i = 0; i < targets.length; i++) {
                let currentTarget = targets[indexOfTheTarget];
        
                if (i !== indexOfTheTarget && targets[i] !== -1) {
                    if (targets[i] > currentTarget) {
                        targets[i] -= currentTarget;
                    } else {
                        targets[i] += currentTarget;
                    }
                }
            }
 
            targets[indexOfTheTarget] = -1;
            count++;
        }
 
        command = input.shift();
    }
 
    console.log(`Shot targets: ${count} -> ${targets.join(" ")}`);
}

function shootForTheWin(sequence) {
    let shotTargets = 0;
    let targetsArray = sequence[0].split(' ').map(el => Number(el));
    sequence.shift();
 
    for (const element of sequence) {
        if(element == 'End') {
            console.log(`Shot targets: ${shotTargets} -> ${targetsArray.join(' ')}`);
        }
        if(targetsArray.length > element) {
            let currentTarget = targetsArray[element];
            
            for (const i in targetsArray) {
                if(targetsArray[i] != -1) {
                    if(targetsArray[i] > currentTarget) {
                        targetsArray[i] -= currentTarget;
                    } else {
                        targetsArray[i] += currentTarget;
                    }
                }
            }
            targetsArray[element] = -1;
            shotTargets += 1;
        }
    }
}

function shootForTheWin(input) {
    let targets = input.shift();

    targets = targets.split(" ").map(x => Number(x));
    // targets = targets.map(x => Number(x));

    // input.pop();

    // let shots = input.map(x => Number(x))

    let numberOfShots = 0;
    let command = input.shift();

    while (command !== 'End') {
        const index = Number(command);
        if (index < 0 || index >= targets.length || targets[index] === -1) {
            command = input.shift();
            continue;
        }

        const currentTargetNumber = targets[index];
        targets[index] = -1;
        numberOfShots++;

        for (let i = 0; i < targets.length; i++) {
            if (targets[i] === -1) {
                continue;
            }

            if (targets[i] > currentTargetNumber) {
                targets[i] -= currentTargetNumber;
            } else {
                targets[i] += currentTargetNumber;
            }
        }

        command = input.shift();
    }



    // for (let i = 0; i < shots.length; i++) {

    //     let currentShot = shots[i];

    //     let currentTarget = targets[currentShot];

    //     if (currentTarget > -1) {

    //         targets[currentShot] = -1;

    //         numberOfShots++;

    //         for (let j = 0; j < targets.length; j++) {

    //             if (targets[j] > -1) {

    //                 if (targets[j > currentTarget]) {

    //                     targets[j] -= currentTarget;

    //                 } else {

    //                     targets[j] += currentTarget;

    //                 }

    //             }

    //         }
    //     }
    // }

    console.log(`Shot targets: ${numberOfShots} -> ${targets.join(' ')}`)
}

shootForTheWin(["24 50 36 70","0","4","3","1","End"]);
shootForTheWin(["30 30 12 60 54 66","5","2","4","0","End"])