function numbers(input = String) {
    let betterInput = input.split(' ').map(Number);
    let avg = 0;
    for (let i = 0; i < betterInput.length; i++) {
        avg += betterInput[i];
    }
    let finalSum = avg / betterInput.length;

    let newAvg = [];

    for (let i = 0; i < betterInput.length; i++) {
        if (finalSum < betterInput[i]) {
            newAvg.push(betterInput[i])
        }
    }
    
    if (newAvg.length <= 0) {
        console.log('No');
    }
    if (newAvg.length > 5) {
        let go = newAvg.sort((a, b) => b - a);
        let sliced = go.splice(0, 5);
        console.log(sliced.join(' '));

    }
    
    else if (newAvg.length < 5 && newAvg.length !== 0) {
        let sorted = newAvg.sort((a, b) => b - a);
        console.log(sorted.join(' '));
    } 
}



function numbers(input) {
    let arr = input.split(" ");
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
        sum += arr[i];
    }
    let avg = sum / arr.length;

    let result = [];
    for(let el of arr) {
        if(el>avg) {
            result.push(el);
        }
    }
    result.sort((a,b) => b - a);
    let buff = "";
    for (let i = 0; i < 5; i++) {
        if (result[i]) {
            buff += result[i] + " ";
        }
    }
    if (buff.length === 0) {
        console.log("No");
    } else {
        console.log(buff);
    }
}


function numbers(input) {
    let arr = input.split(" ")
        .map(x => Number(x))
    let sum = arr.reduce((acc, currentValue) => acc + currentValue, 0);
    let res = arr.filter(value => value > sum / arr.length)
                    .sort((a,b) => b - a)
                    .splice(0,5);
    console.log(res.length > 0 ? res.join(" ") : "No");

    //let arr = input.split(" ");
    // = 0;
    //for(let i = 0; i < arr.length; i++) {
        //arr[i] = Number(arr[i]);
        //sum += arr[i];
    //}
    //let avg = sum / arr.length;

    //let result = [];
    //for(let el of arr) {
    //    if(el>avg) {
    //        result.push(el);
    //    }
    //}
    //result.sort((a,b) => b - a);
    //let buff = "";
    //for (let i = 0; i < 5; i++) {
    //    if (result[i]) {
    //        buff += result[i] + " ";
    //    }
   // }
    //if (buff.length === 0) {
    //    console.log("No");
    //} else {
    //    console.log(buff);
    //}
}

numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
numbers('1')
numbers('-1 -2 -3 -4 -5 -6')