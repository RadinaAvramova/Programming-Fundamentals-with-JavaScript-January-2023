function solve(arr) { 
    let result = 'no'; 
    for (let i = 0; i < arr.length ; i++) { 
        let leftSum = 0;
        let rightSum = 0; 
        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        } 
        for (let k = arr.length - 1; k > i; k--) {
            rightSum += arr[k];
        } 
        if (leftSum === rightSum){
            result = i;
            break;
        }
    } 
    console.log(result);
}

function equalSums(arr){
    let position = 'no'
    arr.forEach((e, i, arrs) => {
      let newArr = arrs.slice(0)
      let leftPart = newArr.splice(0, i+1)
      newArr.shift()
      sumArrays(leftPart) === sumArrays(newArr) ? position = i+1 : 'no';
    })
    arr.length <= 1 ? position = 0 : null 
    console.log(position)
  
    function sumArrays(a){
        return a.reduce((acc, e) => acc + e, 0)
    }
}


equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99,3, 4, 2, 5, 1,1, 4]);