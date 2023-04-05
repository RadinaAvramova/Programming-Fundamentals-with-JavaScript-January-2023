function equalArrays(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log(`Arrays are not identical. Found difference at ${i} index`);
        return;
      }
   
        sum += Number(arr1[i]);
    }
   
    console.log(`Arrays are identical. Sum: ${sum}`);
}
   
function equalArrays(arr1, arr2) {
    let sum = 0;
    for (let i in arr1) {
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
        sum += arr1[i] - 0; //ASCII hack
    }
  
    console.log(`Arrays are identical. Sum: ${sum}`);
}
  
// Don't copy the calling of the function in judge, you won't get any points, just the code above

function equalArrays(arr1, arr2) {
    let areEqual = true;
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        }
        arr1[i] = Number(arr1[i]);
    }

    for(let i = 0; i < arr2.length; i++) {
        //TODO
        arr2[i] = Number(arr2[i]);   
    }
}
equalArrays(['10', '20', '30'], ['10', '20', '30']);
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArrays(['1'], ['10']);