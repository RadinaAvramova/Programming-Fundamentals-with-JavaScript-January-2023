function arrayModifier(input = []) {
    let inputArr = input.shift().split(' ').map(Number);
    let betterInput = input.slice(0, input.indexOf('end'));   //slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified
 
    for (const line of betterInput) {
       let [command, index, index2] = line.split(' ');
       index = Number(index);
       index2 = Number(index2);
 
       switch (command) {
          case 'swap':
             let el1 = inputArr[index];
             let el2 = inputArr[index2];
 
             inputArr[index] = el2;
             inputArr[index2] = el1;
             break;
 
          case 'multiply':
             inputArr[index] *= inputArr[index2]
             break;
 
          case 'decrease':
             for (let i = 0; i < inputArr.length; i++) {
                inputArr[i] -= 1;
             }
             break;
 
       }
    }
    return inputArr.join(', ');
}

function arrayModifier(input) {
   // Parse all values in the array to int values
   let initialArray = input[0].split(' ').map(Number);

   for (let i = 1; i < input.length; i++) {

       let [command, index1, index2] = input[i].split(' ');

       // Values need to be parsed from string to int
       index1 = Number(index1);
       index2 = Number(index2);

       if (command === 'swap') {
           let first = initialArray[index1];
           let second = initialArray[index2];
           initialArray[index1] = second;
           initialArray[index2] = first;
       }
       if (command === 'multiply') {
           let first = initialArray[index1];
           let second = initialArray[index2];
           initialArray[index1] = first * second;
       }
       if (command === 'decrease') {
           initialArray = initialArray.map(el => el - 1);

           // ERROR
           // Carefull !!! .join will transform array into a string
           // initialArray = initialArray.map(el => el - 1).join(', ');
       }
   }

   // console.log(initialArray)
   return initialArray.join(', ');
}

function arrayModifier(array) {
   let numbers = array.shift().split(" ").map(array);

   for (let i = 0; i < array.length; i++) {
       let [command, firstNum, secondNum] = array[i].split(" ");

       firstNum = Number(firstNum);
       secondNum = Number(secondNum);

       switch (command) {
           case "swap":
               swapElememts(firstNum, secondNum);
               break;
           case "multiply":
               multiplyElements(firstNum, secondNum);
               break;
           case "decrease":
               decreaseElements();     //nested function, passing parent function variable not needed
               break;
           case "end":
               break;
       }
   }

   function swapElememts(elOne, elTwo) {
       let temp = numbers[elOne];
       numbers[elOne] = numbers[elTwo];
       numbers[elTwo] = temp;
   }

   function multiplyElements(elOne, elTwo) {
       numbers[elOne] = numbers[elOne] * numbers[elTwo];
   }

   function decreaseElements() {
       numbers = numbers.map((element) =>      //map to change all elements based on function
           element - 1
       );
   }

   console.log(numbers.join(", "));
}


arrayModifier(['23 -2 321 87 42 90 -123','swap 1 3','swap 3 6','swap 1 0','multiply 1 2','multiply 2 1','decrease','end']);
arrayModifier(['1 2 3 4','swap 0 1','swap 1 2','swap 2 3','multiply 1 2','decrease','end']);