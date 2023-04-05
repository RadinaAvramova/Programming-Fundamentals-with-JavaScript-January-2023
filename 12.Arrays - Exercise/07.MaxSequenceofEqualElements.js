function maxSequenceOfEqualElements(arr) {
    let currentItem = "";
    let isEqual = false;
    let times = 1;
    let bestResult = {
      times: 0,
      element: null,
    };
  
    arr.forEach((e, i, ar) => {
  
      //Check current element with next element
  
      if (e === ar[i + 1]) {
        isEqual = true;
        currentItem = e;
        times++;
  
        //store to object first best result
  
        if (times > bestResult.times) {
          bestResult.times = times;
          bestResult.element = e;
        }
  
      } else {
  
        // null all variables

        currentItem = null;
        isEqual = false;
        times = 1;
      }
    });
  
        return new Array(bestResult.times).fill(bestResult.element).join(' ')
}

function maxSequenceOfEqualElements(arr) {
    let longestSequence = [];
    let leftMostIndex = 0;
 
    for (let i = 0; i < arr.length; i++) {
      currentEl = Number(arr[i]);
      let currentSequence = [currentEl];
 
 
      for (let j = i + 1; j < arr.length; j++) {
          let nextEl = Number(arr[j]);
 
          if (nextEl === currentEl) {
              currentSequence.push(nextEl)
          } else {
              break;
          }
 
      }
 
        if (currentSequence.length > longestSequence.length) {
            longestSequence = [];
            for (let j = 0; j < currentSequence.length; j++) {
              longestSequence.push(currentSequence[j]);
            }
        } else if (currentSequence.length === longestSequence.length) {
            if (i < leftMostIndex) {
              leftMostIndex = i;
            }
        }
    }
    console.log(longestSequence.join(' '));
}

function maxSequenceOfEqualElements(arr) {
    let longestSeq = [];
   
    for (let i = 0; i < arr.length; i++) {
      let currNum = arr[i];
      let currentSeq = [currNum];
   
      for (let j = i + 1; j < arr.length; j++) {
        let nextNum = arr[j];
   
        if (currNum === nextNum) {
          currentSeq.push(nextNum);
        } else {
          break;
        }
      }
      if (currentSeq.length > longestSeq.length) {
        longestSeq = currentSeq;
      }
    }
   
    console.log(longestSeq.join(" "));
}
  

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEqualElements([4, 4, 4, 4]);
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);