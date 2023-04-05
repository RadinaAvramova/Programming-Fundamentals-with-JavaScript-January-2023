function negativeOrPositiveNumbers(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        let element = Number(arr[i]);
        if(element < 0) {
            result.unshift(element);
        } else {
            result.push(element);
        }
    }

    return result.join('\n');
}

function negativeOrPositiveNumbers(arr) {
    let result = [];
    for (let num of arr) {
        if (num < 0) {
            result.unshift(num);  //Insert at the start
        } else {
            result.push(num);  //Append at the end
        }
    }

    console.log(result.join('\n'));
}

negativeOrPositiveNumbers(['7', '-2', '8', '9']);
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);