function numberModification(number) {
    let array = [];

    let string = numAsString(number);
    let createdArray = createArray(number);
    let forLoop = loopTheArr(array);
    let final = makeArrOfNumbers(forLoop);

    console.log(final.join(''));

    function numAsString(n) {
        let result = `${n}`;
        return result;
    }

    function createArray(n) {
        array = string.split('');
        return array;
    }

    function loopTheArr(arr) {
        let sum = 0;
        let averageSum = 0;
        let numberCount = 0;
        let arrayLength = 0;

        for (let i = 0; i < arr.length; i++) {
            numberCount++;
            arrayLength++;
            let currentNum = Number(arr[i]);
            sum += currentNum;
            averageSum = sum / numberCount;
            // averageSum = sum / arr.length;

            // if (averageSum <= 5 && arrayLength >= 3) {
            //     array.push('9');
            // } else if (averageSum > 5) {
            //     break;
            // }

            if (averageSum <= 5 && i >= arr.length - 1) {
                // array.push('9');
                arr.push('9');
            } else if (averageSum > 5 && i == arr.length - 1) {
                break;
            }
        }

        // return array;
        return arr;
    }

    function makeArrOfNumbers(arr) {
        let finalArray = [];
        for (let number of arr) {
            let currentNum = Number(number);
            finalArray.push(currentNum);
        }
        return finalArray;
    }
}

function numberModification(number) {
    let num = number.toString();
    let sum = 0;
  
    const append = n => (num += n);
  
    while (sum / num.length <= 5) {
  
      for (let i = 0; i < num.length; i++) {
        let n = Number(num[i]);
        sum += n;
      }
  
      if (sum / num.length <= 5) {
        append(9);
        sum = 0;
      }
    }
    
    console.log(num);
}

numberModification(101);
numberModification(5835);