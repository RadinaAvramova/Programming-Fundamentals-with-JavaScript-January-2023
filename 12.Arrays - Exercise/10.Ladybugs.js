function ladyBugs(arr) {
	let sizeOfField = arr[0];
	let ladybugsPositions = arr[1]
		.split(' ')
		.map(Number);
	let ladybugsArray = [];
 
	// fill the array with 0
	for (let i = 0; i < sizeOfField; i++) {
		ladybugsArray.push(0);
	}
	// mark starting ladybugs index
	for (let i = 0; i < sizeOfField; i++) {
		let ladybugIndex = ladybugsPositions[i];
		if (ladybugIndex >= 0 && ladybugIndex < sizeOfField) {
			ladybugsArray[ladybugIndex] = 1;
		}
	}
 
	for (let i = 2; i < arr.length; i++) {
		// JS destructuring
		let [ladybugIndex, command, jumpLength] = arr[i].split(' ');
		ladybugIndex =+ ladybugIndex;
		jumpLength =+ jumpLength;
 
		if (ladybugsArray[ladybugIndex] !== 1 || ladybugIndex < 0 || ladybugIndex >= ladybugsArray.length) {
			continue;
		}
		// check for negative steps
		if (jumpLength < 0) {
			jumpLength = Math.abs(jumpLength);
			if (command === 'right') {
				command = 'left';
			} else if (command === 'left') {
				command = 'right';
			}
		}
		// Free Position
		ladybugsArray[ladybugIndex] = 0;
		if (command === 'right') {
			// Ladybug jumps one time
			let newPosition = ladybugIndex + jumpLength;
			// Jump another time if there is a lady bug
			if (ladybugsArray[newPosition] === 1) {
				newPosition = newPosition + jumpLength;
			}
			if (newPosition <= ladybugsArray.length) {
				ladybugsArray[newPosition] = 1;
			}
 
		} else {
			// Lady bug jumps to the left
			let newPosition = ladybugIndex - jumpLength;
			// Jump another time if there is a lady bug
			if (ladybugsArray[newPosition] === 1) {
				newPosition = newPosition - jumpLength;
			}
			if(newPosition >= 0 ){
				ladybugsArray[newPosition] = 1;
			}
		}
 
	}
 
	console.log(ladybugsArray.join(' '));
 
}


function ladybugs(array) {
    let workingArray = array.slice();
    let fieldSize = workingArray.shift();
    let bugsPosition = workingArray.shift().split(' ');
    let finalBugsArray = new Array(fieldSize).fill(0);
  
    for (const position of bugsPosition) {
      let currentBug = Number(position);
      if (currentBug < 0 || currentBug >= fieldSize) {
        continue;
      }
      finalBugsArray[currentBug] = 1;
    }
  
    for (let i = 0; i < workingArray.length; i++) {
      let [ladybugIndex, command, jumpLength] = workingArray[i].split(' ');
  
      ladybugIndex = Number(ladybugIndex);
  
      if (ladybugIndex < 0 || ladybugIndex >= finalBugsArray.length || finalBugsArray[ladybugIndex] !== 1) {
        continue;
      }
  
      // Free Position
      finalBugsArray[ladybugIndex] = 0;
  
      jumpLength = Number(jumpLength);
      
      if (command === 'left') {
        jumpLength = -jumpLength;
      }
  
      ladybugIndex += jumpLength;
      while (ladybugIndex >= 0 && ladybugIndex < finalBugsArray.length) {
        if (finalBugsArray[ladybugIndex] === 0) {
          finalBugsArray[ladybugIndex] = 1;
          break;
        }
        ladybugIndex += jumpLength;
      }
    }
  
    console.log(finalBugsArray.join(' '));
}

function ladyBugs(input) {
    let fieldSize = input[0];
    let ladybugPositions = input[1].split(' ').map(Number);

    // Create Field
    // let createField = [];
    // for (let f = 0; f < fieldSize; f++) {
    //     createField.push(0);
    // }
    let createField = new Array(fieldSize).fill(0);

    // Put the Ladybugs on the field (starting positions)
    // for (let s = 0; s < ladybugPositions.length; s++) {
    //     if (ladybugPositions[s] >= 0 && ladybugPositions[s] < fieldSize) {
    //         createField.splice(ladybugPositions[s], 1, 1);
    //     }
    // }
    ladybugPositions.forEach((i) => {
        if (i >= 0 && i < fieldSize) {
            createField[i] = 1;
        }
    });

    for (let i = 2; i < input.length; i++) {
        // create directions
        let command = input[i].split(' '); // split the current input into 3 parts
        // let direction = command[1]; // 1 - left or right
        // let travelFrom = Number(command[0]); // 2- starting position
        // let travelTo = Number(command[2]); // 3 - ending position
        let [travelFrom, direction, travelTo] = command;
        travelFrom = Number(travelFrom);
        travelTo = Number(travelTo);

        // if (travelFrom < 0 || travelFrom > fieldSize) {
        if (travelFrom < 0 || travelFrom >= fieldSize || createField[travelFrom] !== 1) {
            continue;
        }

        if (direction === 'right') {
            createField[travelFrom] = 0;
            let newIndex = travelFrom + travelTo;

            while (newIndex < fieldSize) {
                if (createField[newIndex] === 1) {
                    newIndex += travelTo;
                    continue;
                }
                createField[newIndex] = 1;
                break;
            }
        } else if (direction === 'left') {
            createField[travelFrom] = 0;
            let newIndex = travelFrom - travelTo;

            while (newIndex >= 0) {
                if (createField[newIndex] === 1) {
                    newIndex -= travelTo;
                    continue;
                }
                createField[newIndex] = 1;
                break;
            }
        }

        // negative steps reversal
        // if (travelTo < 0) {
        //     travelTo = Math.abs(travelTo);
        //     if (direction === "right") {
        //         direction = 'left';
        //     } else if (direction === "left") {
        //         direction = 'right';
        //     }
        // }
        // Move Right
        // if (direction === "right" && createField[travelFrom] === 1) {
        //     travelTo = travelFrom + travelTo;
        //     // first remove remove the bug 
        //     createField[travelFrom] = 0;
        //     // then if the spot is taken
        //     if (createField[travelTo] !== 0) {
        //         // fly until you find one
        //         for (let x = 0; x < fieldSize; x++) {
        //             if (createField[travelTo] !== 0) {
        //                 travelTo++
        //             }
        //             if (createField[travelTo] === 0) {
        //                 break;
        //             }
        //         }
        //     }
        //     // land on the free one
        //     if (createField[travelTo] === 0) {
        //         let ladybugIsMoving = createField.splice(travelTo, 1, 1);
        //     }
        //     // Move left
        // } 
        // else if (direction === "left" && createField[travelFrom] === 1) {
        //     travelTo = travelFrom - travelTo;
        //     // first remove remove the bug 
        //     createField[travelFrom] = 0;
        //     // if the spot is taken
        //     if (createField[travelTo] !== 0) {
        //         // fly until you find one
        //         for (let x = 0; x < fieldSize; x++) {
        //             if (createField[travelTo] !== 0) {
        //                 travelTo--;
        //             }
        //             if (createField[travelTo] === 0) {
        //                 break;
        //             }
        //         }
        //     }
        //     // land on the free one
        //     if (createField[travelTo] === 0) {
        //         let ladybugIsMoving = createField.splice(travelTo, 1, 1);
        //     }
        // }
    }

    console.log(createField.join(' '));
}

function ladyBugs(tokens = []) {
    let fieldSize = +tokens[0];
    let ladyBugs = [];
    
    for (let i = 0; i < fieldSize; i++) { // Initialize field
      ladyBugs[i] = 0;
    }
  
    let initialIndexes = tokens[1].split(' ').map(index => +index);
  
    for (let i = 0; i < ladyBugs.length; i++) { // Fill bugs on field
      if (initialIndexes.includes(i)) {
        ladyBugs[i] = 1;
      }
    }
  
    //------------------------------------------------------------------------------------------
    for (let i = 2; i < tokens.length; i++) {
      let command = tokens[i].split(' ');
  
      if (command[0].toLowerCase() !== 'end') {
        let index = +command[0];
  
        if (index < 0 || index >= ladyBugs.length) {   // If index is inside the field
          continue;
        }
  
        if (ladyBugs[index] === 0) {  // cell is empty (NO Lady Bug)
          continue;
        }
  
        //------------- Fly like the wind -------------
        let direction = command[1];
        let flyLength = +command[2];
  
        if (flyLength < 0) { // If flyLength is negative, change direction, and make it positive
          flyLength = Math.abs(flyLength);
          switch (direction) {
            case 'right':
              direction = 'left';
              break;
            case 'left':
              direction = 'right';
              break;
          }
        }
  
        ladyBugs[index] = 0; // Lift off in 3...2...1
        let isBugFlying = true;
  
        while (isBugFlying) {
          switch (direction) {
            case 'right':
              if (index + flyLength >= ladyBugs.length) { // Lady Bug flew away (outside field) 
                isBugFlying = false;
              } else {
                if (ladyBugs[index + flyLength] === 0) { //  is cell empty (no Lady Bug at index)
                  ladyBugs[index + flyLength] = 1; // Lady Bug landed
                  isBugFlying = false;
                } else {
                  isBugFlying = true; // Lady Bug continues to fly
                  index += flyLength;
                }
              }
              break;
  
            case 'left':
              if (index - flyLength < 0) { // Lady Bug flew away (outside field)
                isBugFlying = false;
              } else {
                if (ladyBugs[index - flyLength] === 0) { //  is cell empty (no Lady Bug at index)
                  ladyBugs[index - flyLength] = 1; // Lady Bug landed
                  isBugFlying = false;
                } else {
                  isBugFlying = true; // Lady Bug continues to fly
                  index -= flyLength;
                }
              }
              break;
          }
        }
      }
    }
  
    console.log(ladyBugs.join(' '));
  }

ladyBugs([3, '0 1','0 right 1','2 right 1']);
ladyBugs([3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
ladyBugs([[5, '3', '3 left 2', '1 left -2']]);