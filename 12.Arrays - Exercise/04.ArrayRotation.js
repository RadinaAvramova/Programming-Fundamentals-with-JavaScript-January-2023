function arrayRotation(arr, rotationCount) {
    let buffArr = [];
    for (let i = 0; i < rotationCount; i++) {
        let currentElement = arr[0];
        for (let j = 1; j < arr.length; j++) {
            buffArr.push(arr[j]);
        }
        buffArr.push(currentElement);
        arr = buffArr;
        buffArr = [];
    }
    console.log(arr.join(" "));
}

function arrayRotation(arr, rotationCount) {
    for (let i = 0; i < rotationCount; i++) {
        arr.push(arr.shift());
    }
    console.log(arr.join(" "));
}

function arrayRotation(arr, rotations) {
    let rotationsExcecuted = 0;
    let lastItem = ``;
   
    while (rotations > rotationsExcecuted) {
        let newArr = [];
        lastItem = arr[0]
        for (let i = 0; i < arr.length-1; i++) {
            newArr.push(arr[i + 1])
        }
        newArr.push(lastItem)
        rotationsExcecuted++;
        arr = newArr;
    }
 
    console.log(arr.join(` `));
 
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);