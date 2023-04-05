function divison(number) {
 
    let divNum = 0;
 
    if (number % 10 == 0) {
        divNum = 10;
    } else if (number % 7 == 0) {
        divNum = 7;
    } else if (number % 6 == 0) {
        divNum = 6;
    } else if (number % 3 == 0) {
        divNum = 3;
    } else if (number % 2 == 0) {
        divNum = 2;
    }
    
    if (divNum > 0) {
        console.log(`The number is divisible by ${divNum}`);
    } else {
        console.log("Not divisible")
    }
}
 
divison(30);
divison(15);
divison(12);
divison(1643);