//function sumFirstAndLast(arr) {
    //let result = [];

    //for(let i=0; i<arr.length; i++) {
        //if(arr[i] < 0) {
            //result.unshift(arr[i]);
        //} else {
            //result.push(arr[i]);
        //}
    //}

    //console.log(result.join('\n'));
//}


function sumFirstAndLast(input) {

    let first = Number(input[0]);
    let last = Number(input[input.length-1]);

    console.log(first+last);

}
//as(['20', '30', '40']);
//as(['5', '10']);

function sumFirstAndLast(arr){
    arr = arr.map(Number);
    console.log(arr[0] + arr[arr.length-1]);
}
//console.log(solve(['20', '30', '40']))

function sumFirstAndLast(arr) {
    let firstElement = Number(arr.shift());
    let lastElement = Number(arr.pop());
    let sum = firstElement + lastElement;
    return sum;
}

function  sumFirstAndLast(input) {
    input = input.map(Number);
    console.log(input[0] + input.pop());
}

sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);