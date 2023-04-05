function processOddNumbers(arr)
{
let result = arr
    .filter((arr, x) => x % 2 == 1)
    .map(x => 2 * x)
    .reverse();
console.log(result.join(' '));
}
processOddNum([10, 15, 20, 25]);


//function processOddNumbers(arr) {
    //let newArr = arr.filter((x,i) => i % 2 !== 0);
    //let doubledArr = newArr.map(x => x * 2);
    //doubledArr.reverse();

    //return doubledArr;
//}

//function processOddNumbers(arr) {
    //let newArr = arr.filter((x,i) => i % 2 !== 0).map(x => x * 2);
    //doubledArr.reverse();

    //return doubledArr;
//}

function processOddNumbers(arr) {
    let newArr = arr
            .filter((x,i) => i % 2 !== 0)
            .map(x => x * 2)
            .reverse();

    return newArr.join(' ');
}


//function processOddNumbers(arr) {
    //let result = arr
        //.filter((num,i) => i % 2 == 1)
        //.map(x => x * 2)
        //.reverse();

    //return newArr.join(' ');
//}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);