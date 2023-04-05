function printNThElement(arr) {
    let lastNum = arr.pop();
    let resultArr = [];
    for (let index in arr) {
        if (index % lastNum === 0) {
            resultArr.push(arr[index]);
        }
    }
    console.log(resultArr.join(' '));
}

printNThElement(['5', '20', '31', '4', '20', '2']);
printNThElement(['dsa', 'asd', 'test', 'test', '2']);
printNThElement(['1', '2', '3', '4', '5', '6']);
