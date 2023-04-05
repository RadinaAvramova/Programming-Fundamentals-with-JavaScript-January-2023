function memoryGame(input) {

    const numbers = input.shift().trim().split(' ');  //trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.
    let moves = 0;
    
    while (numbers.length > 1 && input[0].toLowerCase() !== 'end') {
        let [index1, index2] = input.shift().split(' ');
            index1 = Number(index1);
            index2 = Number(index2);
        moves++;
    
        if (index1 < 0 || index1 >= numbers.length || index1 === index2 || index2 < 0 || index2 >= numbers.length) {
            const index = Math.trunc(numbers.length / 2);
            const symbol = '-' + moves + 'a';
            numbers.splice(index, 0, symbol, symbol); //splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
            console.log('Invalid input! Adding additional elements to the board')
        } else {
            const num1 = numbers[index1];
            const num2 = numbers[index2];
            if (num1 === num2) {
                numbers.splice(index1, 1);
                index2 = numbers.indexOf(num2); //indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
                numbers.splice(index2, 1);
                console.log(`Congrats! You have found matching elements - ${num1}!`);
            } else if (num1 !== num2) {
                console.log('Try again!');
            }
        }
    }
    
    if (numbers.length === 0 || numbers.length === 1) {
        console.log(`You have won in ${moves} turns!`);
    } else {
        console.log(`Sorry you lose :(`);
        console.log(`${numbers.join(' ')}`);
    }
}


function memoryGame(input) {
    let sequence = input.shift().split(" ");
    let command = input.shift();
    let counter = 0;
    while(command !== "end") {
        counter++;
        let index = command.split(" ").map(Number);
        if (index[0] < 0 || index[0] > sequence.length - 1 || 
            index[1] < 0 || index[1] > sequence.length - 1 || 
            index[0] === index[1]) {
            //TODO add element
            console.log(`Invalid input! Adding additional elements to the board`);
            let middle = sequence.length / 2
            sequence.splice(middle, 0, `-${counter}a`, `-${counter}a`)
            command = input.shift();
            continue;
        } 
        let firstItem = sequence[index[0]];
        let secondItem = sequence[index[1]];
        if (firstItem === secondItem) {
            console.log(`Congrats! You have found matching elements - ${firstItem}!`);
            sequence.splice(Math.min(index[0], index[1]), 1);
            sequence.splice(Math.max(index[0], index[1]) - 1, 1);
        } else {
            console.log("Try again!");
        }
        if(sequence.length === 0) {
            break;
        }
        command = input.shift();
    }
    if(sequence.length === 0) {
        console.log(`You have won in ${counter} turns!`);
    } else {
        console.log(`Sorry you lose :(`);
        console.log(`${sequence.join(' ')}`);

    }
}


memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0","-1 0","1 0","1 0","1 0","end"]);
memoryGame(["a 2 4 a 2 4","0 3","0 2","0 1","0 1","end"]);
memoryGame(["a 2 4 a 2 4","4 0","0 2","0 1","0 1","end"]);