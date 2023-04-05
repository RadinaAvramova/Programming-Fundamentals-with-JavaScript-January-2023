function reverseInPlace(arr) {
    for(let i=0; i<arr.length /2; i++) {
        let oldElement = arr[i];
        let previousIndex  = arr.length - 1 - i;
        arr[i] = arr[previousIndex];
        arr[previousIndex] = oldElement;
    }
    console.log(arr.join(' '));
}

function reverseInPlace(arr){
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    console.log(arr.join(' '));
}

function reverseInPlace(arr) {
    for(let i=0; i<arr.length /2; i++) {
        swapElements(arr.i, arr.length - 1 - i);
    }

    console.log(arr.join(" "));

    function swapElements(arr, i, j) {
        //TODO
    }
}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig','klm', 'nop']);
reverseInPlace([['33', '123', '0', 'dd']]);