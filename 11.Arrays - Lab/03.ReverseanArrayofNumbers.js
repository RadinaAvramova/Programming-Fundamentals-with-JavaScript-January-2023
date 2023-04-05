function reverseAnArrayOfNumbers(n, arr){
    //Get first n elements from arr
    let newArr = [];
    for (let i=n-1; i>=0; i--) {
        const element = arr[i];
        //put them in another array
        newArr.push(element);
    }
    console.log(newArr.join(' '));
    //reverse new arr
    //print
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);