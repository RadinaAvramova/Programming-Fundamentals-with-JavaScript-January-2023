function sorting(input) {
    let array = input.map(Number).sort(function(a, b) {
      return a - b;
    });
    let arrayCopy = array.slice(0);
    let result = [];
  
    for (let i = 0; i < array.length; i++) {
      result.push(arrayCopy[arrayCopy.length - 1]);
      if (result.length === array.length) {
        break;
      }
      result.push(arrayCopy[0]);
  
      if (result.length === array.length) {
        break;
      }
      arrayCopy.shift();
  
      arrayCopy.pop();
    }
  
    console.log(result.join(" "));
}

function sorting(input){
    let result = [];
    array = input.sort((a, b) => a - b);
    while(array.length !== 0){
      result.push(array[array.length-1]) && array.pop();
      result.push(array[0]) && array.shift();
    }
 console.log(result.join(' '));
}

function sorting(input) {
    let sortArr = input.sort((a,b) => b - a);

    let res = [];
    if(sortArr.length % 2 !== 0) {
        res.push(sortArr.shift());
    }

    for(let i = 0; i < sortArr.length / 2; i++) {
        res.push(sortArr[i]);
        res.push(sortArr[(sortArr.length - 1) - i]);

        //if(sortArr.length % 2 === 1 && !((i === sortArr.length - 1)  / 2 === 1)) {
            //res.push(sortArr[(sortArr.length - 1) - i]);
        //} else if (sortArr.length % 2 === 0) {
        //    res.push(sortArr[(sortArr.length - 1) - i]);
        //}
    }
    console.log(res);
}

function sorting(arr) {
    arr.sort((a,b) => a -b);

    let sorted = [];
    while (arr.length !== 0) {
        sorted.push(arr.pop());
        sorted.push(arr.shift());
    }

    console.log(sorted.join(' '));
}


sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32,7, 19, 47]);