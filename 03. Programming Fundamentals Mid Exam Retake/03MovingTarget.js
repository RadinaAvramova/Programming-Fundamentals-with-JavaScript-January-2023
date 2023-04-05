function movingTarget(input) {
    let sequenceOfTargets = input.shift().split(" ").map(Number);
    while (input.length > 0) {
      let command = input.shift();
  
      if (command == "End") {
        break;
      }
      let curCommand = command.split(" ")[0];
      switch (curCommand) {
        case "Shoot":
          let indexOfShoot = Number(command.split(" ")[1]);
          let power = Number(command.split(" ")[2]);
          if (indexOfShoot >= 0 && indexOfShoot < sequenceOfTargets.length) {
            sequenceOfTargets[indexOfShoot] -= power;
            if (sequenceOfTargets[indexOfShoot] <= 0) {
              sequenceOfTargets.splice(indexOfShoot, 1);
            }
          }
          break;
        case "Add":
          let indexOfAdd = Number(command.split(" ")[1]);
          let value = Number(command.split(" ")[2]);
          if (indexOfAdd >= 0 && indexOfAdd < sequenceOfTargets.length) {
            sequenceOfTargets.splice(indexOfAdd, 0, value);
          } else {
            console.log(`Invalid placement!`);
          }
          break;
        case "Strike":
          let indexOfStrice = Number(command.split(" ")[1]);
          let radius = Number(command.split(" ")[2]);
          if (indexOfStrice >= 0 && indexOfStrice < sequenceOfTargets.length) {
            if (
              indexOfStrice - radius >= 0 &&
              indexOfStrice + radius < sequenceOfTargets.length
            ) {
              sequenceOfTargets.splice(
                indexOfStrice - radius,
                radius + radius + 1
              );
            } else {
              console.log(`Strike missed!`);
            }
          }
          break;
      }
    }
  
    console.log(sequenceOfTargets.join("|"));
  
    function shootCommand(arr, index, power) {
      let curItem = arr[index];
      let itemForRemove = arr[index];
  
      if (curItem == undefined) {
        return arr;
      }
      if (index <= arr.length - 1) {
        curItem = curItem - power;
      }
      if (curItem <= 0) {
        arr = arr.filter((x) => x != itemForRemove); //filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
      } else {
        arr[index] = curItem;
      }
      return arr;
    }
}

function movingTarget(arr) {

 

  let sequence = arr.shift().split(' ').map(Number);
  
   
  
  let commands = arr.shift();
  
   
  
  while (commands !== 'End') {
  
   
  
  let splitted = commands.split(' ');
  
   
  
  let command = splitted[0];
  
   
  
  let index = Number(splitted[1]);
  
   
  
  let value = Number(splitted[2]);
  
   
  
  switch (command) {
  
   
  
  case 'Shoot': shoot(index, value); break;
  
   
  
  case 'Add': add(index, value); break;
  
   
  
  case 'Strike': strike(index, value); break;
  
   
  
  }
  
  
  
   
  
  function shoot(index, power) {
  
   
  
  if (sequence[index]) {
  
   
  
  sequence[index] -= power;
  
   
  
  if (sequence[index] <= 0) {
  
   
  
  sequence.splice(index, 1);
  
   
  
  }
  
  // else {
  
   
  
  // sequence.splice(index, 1, sequence[index]);
  
   
  
  // }
  
   
  
  }
  
   
  
  }
  
  
  
   
  
  function add(index, value) {
  
   
  
  if (index >= 0 && index < sequence.length) {
  
   
  
  sequence.splice(index, 0, value);
  
   
  
  } else {
  
   
  
  console.log(`Invalid placement!`);
  
   
  
  }
  
   
  
  }
  
  
  
   
  
  function strike(index, radius) {
  
   
  
  const radiusRange = 1 + (radius * 2);
  
  const radiusStart = index - radius;
  
  const radiusEnd = index + radius;
  
   
  
  if (radiusStart >= 0 && radiusEnd < sequence.length) {
  
   
  
  sequence.splice(radiusStart, radiusRange);
  
   
  
  } else {
  
   
  
  console.log(`Strike missed!`);
  
   
  
  }
  
   
  
  }
  
   
  
  commands = arr.shift();
  
  }
  
   
  
  console.log(sequence.join('|'));
  
  }

movingTarget(["52 74 23 44 96 110","Shoot 5 10","Shoot 1 80","Strike 2 1","Add 22 3","End"]);
movingTarget(["1 2 3 4 5","Strike 0 1","End"]);