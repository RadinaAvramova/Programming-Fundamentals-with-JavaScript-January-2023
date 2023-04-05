function bombNumbers(numbers, params) {
    let [target, power] = params;
  
    for (let i = 0; i < numbers.length; i++) {
      let currentNum = numbers[i];
  
      if (currentNum === target) {
        let startIndex = Math.max(0, i - power); //math.max in cases where index is -1(outside the array)
        let countToEnd = power * 2 + 1;
  
        numbers.splice(startIndex, countToEnd);
        i = i - power - 1; //
      }
    }
    // console.log(numbers);
    console.log(numbers.reduce((a, b) => a + b, 0));
}

function bombNumbers(sequence, bomb) {
    let specialNumber = bomb[0];
    let bombPower = bomb[1];
 
    while (sequence.includes(specialNumber)) {
        let index = sequence.indexOf(specialNumber);
        let elementsToRemove = bombPower * 2 + 1;
        let startIndex = index - bombPower;
 
        if (startIndex < 0) {
            elementsToRemove += startIndex;
            startIndex = 0;
        }
        sequence.splice(startIndex, elementsToRemove);
    }
    console.log(sequence.reduce((a, b) => a + b, 0));
}

bombNumbers([1, 2, 2, 4, 2, 2,2, 9],[4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3],[7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1,2, 1, 1, 1],[2, 1]);