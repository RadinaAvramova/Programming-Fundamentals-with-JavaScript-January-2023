function mergeArrays(firstArr, secondArr){
    let result = [];

    for(let i = 0; i < firstArr.length; i++) {
        let valueA = firstArr[i];
        let valueB = secondArr[i];
        if (i % 2 === 0) {
            valueA = Number(valueA);
            valueB = Number(valueB);
        }
        let currentResult = valueA + valueB;
        result.push(currentResult);
    }
    console.log(result.join(" - "));
}


function mergeArrays(firstArr, secondArr){
    let result = [];

    for(let i = 0; i < firstArr.length; i++) {
        let valueA = firstArr[i];
        let valueB = secondArr[i];
        if (i % 2 === 0) {
            valueA = Number(valueA);
            valueB = Number(valueB);
        }
        let currentResult = valueA + valueB;
        result.push(currentResult);
    }
    //console.log(result.join(" - "));
    let buff = "";
    for (let i = 0; i < result.length - 1; i++) {
        buff += result[i] + " - ";
    }
    buff += result[result.length - 1];
    console.log(buff);
}

function mergeArrays(arr1, arr2) {
    let arr3 = arr1.map((el, i) => {
        return i % 2 === 0
            ? Number(el) + Number(arr2[i])
            : el.concat(arr2[i]); // If the index of the element is odd, add the concatenation of both elements at that index
    })
    console.log(arr3.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'],['17', '22', '87', '36', '11']);
mergeArrays(['13', '12312', '5', '77', '4'],['22', '333', '5', '122', '44']);