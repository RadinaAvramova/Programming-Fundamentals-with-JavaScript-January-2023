function arrayManipulator(arr, commands) {
    let newArr = [];
    for (let el of commands) {
        let [command, index, element] = el.split(' ');
        switch (command) {
            case 'add':
                arr.splice(index, 0, +element);
                break;
            case 'addMany':
                let currentEl = 0;
                let removeFirst = el.split(' ');
                for (let i = removeFirst.length - 1; i >= 2; i--) {
                    currentEl = removeFirst[i];
                    arr.splice(index, 0, +currentEl);
                }
                break;
            case 'contains':
                // if (arr.indexOf(+index) !== -1) {
                //     console.log('0');
                // } else {
                //     console.log('-1');
                // }
                console.log(arr.indexOf(+index));
                break;
            case 'remove':
                arr.splice(index, 1);
                break;
            case 'shift':
                let position = +index;
                for (let i = 0; i < position; i++) {
                    let firstEl = arr.shift();
                    arr.push(firstEl);
                }
                break;
            case 'sumPairs':
                // if (arr.length % 2 === 0) {
                    let els = arr.reduce(function(total, el, index) {
                        if (index % 2 === 0) {
                            total.push(+arr[index] + (+arr[index + 1] || 0));
                        }
                        return total;
                    }, []);
                    arr = els;
                // }
                break;
            case 'print':
                for (let el of arr) {
                    newArr.push(el);
                }
                break;
        }
    }
    // console.log(newArr);
    console.log('[ ' + newArr.join(', ') + ' ]');
}

function arrayManipulator(array, manipulations) {
    let actualManipulation = [];
 
    let index = 0;
    let element = 0;
 
    while (manipulations.length > 0) {
        actualManipulation = manipulations.shift().split(' ');
        switch (actualManipulation.shift()) {
            case 'add':
                index = Number(actualManipulation.shift());
                if (index < 0) {
                    index = 0;
                    element = Number(actualManipulation.shift());
                    array.splice(index, 0, element);
                } else {
                    element = Number(actualManipulation.shift());
                    array.splice(index, 0, element);
                }
                break;
            case 'addMany':
                index = Number(actualManipulation.shift());
                let many = 0;
                for (let i = 0; i < actualManipulation.length; i++) {
                    if (index < 0) {
                        index = 0;
                        many = Number(actualManipulation[i]);
                        array.splice(index + i, 0, many);
                    } else {
                        many = Number(actualManipulation[i]);
                        array.splice(index + i, 0, many);
                    }
                }
                break;
            case 'contains':
                element = Number(actualManipulation.shift());
                // if (array.indexOf(element) === -1) {
                //     console.log('-1');
                // } else {
                //     console.log('0');
                // }
                console.log(array.indexOf(element));
                break;
            case 'remove':
                index = Number(actualManipulation.shift());
                if (index < 0 || index > array.length - 1) {
                } else {
                    array.splice(index, 1);
                }
                break;
            case 'shift':
                index = Number(actualManipulation.shift());
                index = index % array.length;
                let arrayForShift = array.slice(index - 1);
                if (index < 0) {
                    index = 0;
                    array.splice(index, 0);
                    for (let i = arrayForShift.length - 1; i > 0; i--) {
                        array.unshift(arrayForShift[i]);
                        array.pop();
                    }
                } else {
                    array.splice(index, 0);
                    for (let i = arrayForShift.length - 1; i > 0; i--) {
                        array.unshift(arrayForShift[i]);
                        array.pop();
                    }
                }
                break;
            case 'sumPairs':
                let sumArr = [];
                let lastNumFromOddArr = 0;
                if (array.length % 2 !== 0) {
                    lastNumFromOddArr = Number(array.pop());
                    for (let i = 0; i < array.length; i += 2) {
                        sumArr.push(Number(array[i]) + Number(array[i + 1]));
                    }
                    sumArr.push(lastNumFromOddArr);
                } else {
                    for (let i = 0; i < array.length; i += 2) {
                        sumArr.push(Number(array[i]) + Number(array[i + 1]));
                    }
                }
                array = sumArr;
 
                break;
        }
 
        if (manipulations[0] === 'print') {
            break;
        }
    }
    console.log(`[ ${array.join(', ')} ]`);
}

function arrayManipulator(array = [], commands = []) {
    let result = array.slice(0);
    let output = [];
    for (let i = 0; i < commands.length; i++) {
      let command = commands[i].split(" ");
      if (command[0] === "add") {
        let index = +command[1];
        let element = +command[2];
        result.splice(index, 0, element);
      }
      if (command[0] === "addMany") {
        let index = command[1];
        let newArray = command.slice(2).map(Number);
        result.splice(index, 0, ...newArray);
      }
      if (command[0] === "contains") {
        let element = +command[1];
        let index = result.indexOf(element);
        console.log(index);
      }
      if (command[0] === "remove") {
        let index = +command[1];
        result.splice(index, 1);
      }
      if (command[0] === "shift") {
        let rotations = +command[1];
        for (let j = 0; j < rotations; j++) {
          let element = result.shift();
          result.push(element);
        }
      }
      if (command[0] === "sumPairs") {
        if (result.length % 2 === 0) {
          for (let k = 0; k < result.length; k += 2) {
            output.push(result[k] + result[k + 1]);
          }
        } else {
          for (let k = 0; k < result.length - 1; k += 2) {
            output.push(result[k] + result[k + 1]);
          }
          output.push(result.pop());
        }
        result = output;
        output = [];
      }
      if (command[0] === "print") {
        console.log("[ " + result.join(", ") + " ]");
      }
    }

    function manipulateArr(nums, commands) {

        for (let el of commands) {
    
            let [command, num1, ...rest] = el.split(' ');
            num1 = Number(num1);
            rest = rest.map(Number);
    
            switch (command) {
                case 'add':
                    nums.splice(num1, 0, rest[0]);
                    break;
                case 'addMany':
                    nums.splice(num1, 0, ...rest);
                    break;
                case 'contains':
                    console.log(nums.indexOf(num1));
                    break;
                case 'remove':
                    nums.splice(num1, 1);
                    break;
                case 'shift':
                    // nums = shift(nums);
                    shift(num1);
                    break;
                case 'sumPairs':
                    let newArr = [];
                    nums = sumPairs(nums, newArr);
                    break;
                case 'print':
                    console.log(`[ ${nums.join(', ')} ]`);
                    break;
                default:
                    break;
            }
        }
    
    
        function shift(shiftAmount) {
            for (let j = 0; j < shiftAmount; j++) {
                // for (let i = 0; i < nums.length - 1; i++) {
                //     let temp = nums[i];
                //     nums[i] = nums[i + 1];
                //     nums[i + 1] = temp;
                // }
                let temp = nums.shift();
                nums.push(temp);
            }
            // return arr;
        }
    
        function sumPairs(arr, newArr) {
            for (let i = 0; i < arr.length - 1; i = i + 2) {
                let currEl = arr[i];
                let nextEl = arr[i + 1];
                let sum = currEl + nextEl;
                newArr.push(sum);
            }
            
            if (arr.length % 2 !== 0){
                newArr.push(arr[arr.length - 1]);
            }
            return newArr;
        }
    }
}


  

arrayManipulator([1, 2, 4, 5, 6, 7],['add 1 8', 'contains 1', 'contains 3', 'print']);
arrayManipulator([1, 2, 3, 4, 5],['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3','shift 1', 'print']);