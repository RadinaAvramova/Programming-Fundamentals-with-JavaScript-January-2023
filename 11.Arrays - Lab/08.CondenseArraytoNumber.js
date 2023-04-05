function condenseArrayToNumber(nums) {
    while (nums.length > 1) {
        let condensed = Array(nums.length-1);
        for (let i = 0; i < nums.length - 1; i++) {
            condensed[i] = Number(nums[i]) + Number(nums[i + 1]);
        }
        nums = condensed;
    }
    console.log(nums[0])
}

function condense(nums) {
    if (nums.length === 1) {
        console.log(nums[0]);
        return;
    }
    for (let i = 0; i < nums.length - 1; i++) {
        nums[i] = Number(nums[i]) + Number(nums[i + 1]);
    }
    nums.pop();
    condense(nums);
}

function condenseArrayToNumber(arr){
    let currArr = arr;
    while(currArr.length > 1) {
        let newArr = [];
        for (let i = 0; i < currArr.length - 1; i++) {
            let firstElement = currArr[i];
            let secondElement = currArr[i+1];

            newArr.push(firstElement + secondElement);
        }
        currArr = newArr;
    }
    console.log(currArr[0]);
}

condenseArrayToNumber([2,10,3]);
condenseArrayToNumber([1]);
condenseArrayToNumber([5,0,4,1,2]);