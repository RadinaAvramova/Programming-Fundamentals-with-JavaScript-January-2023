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
            newAvg.push(betterInput[i]); //push() method adds one or more elements to the end of an array and returns the new length of the array.
        }
    }
    
    if (newAvg.length <= 0) {
        console.log('No');
    }
    if (newAvg.length > 5) {
        let go = newAvg.sort((a, b) => b - a);
        let sliced = go.splice(0, 5);  //splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
        console.log(sliced.join(' '));

    }
    
    else if (newAvg.length < 5 && newAvg.length !== 0) {
        let sorted = newAvg.sort((a, b) => b - a);
        console.log(sorted.join(' '));
    } 
}

numbers('10 20 30 40 50');
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');
numbers('1');
numbers('-1 -2 -3 -4 -5 -6');