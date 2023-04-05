function login(input) {
    let username = input[0];
    let password ="";

    for (let i= username.length - 1; i >= 0; i--){
        password += username[i];
    }

    let incorrectPasswordCount = 0;

    for (let i = 1; i < input.length; i++) {
        let tempPassword = input[i];
        
        if (tempPassword === password){
            console.log(`User ${username} logged in.`);
        } else {
           incorrectPasswordCount++;
           if (incorrectPasswordCount === 4) {
            console.log(`User ${username} blocked!`);
            break;
        }
           console.log("Incorrect password. Try again.");
        }
    }
}

//ili split reverse join


function login(input) {
    let user = input.shift();
    let password = user.split('').reverse().join('');
    let count = 0;
    while (true) {
        let enter = input.shift();
        if (enter === password) {
            console.log(`User ${user} logged in.`);
            break;
        } else if (count >= 3) {
            console.log(`User ${user} blocked!`);
            break;
        } else {
            console.log('Incorrect password. Try again.');
            count++;
        }
    }
}


function login(str) {
    let i = 0;
    let user = str[0].toString();
    let count = 0;
    let password = '';
    for (let index = user.length - 1; index >= 0; index--) {
        password += user[index];
    }
    while (true) {
        if (str[i + 1] === password) {
            console.log(`User ${user} logged in.`);
            break;
        } else if (count >= 3) {
            console.log(`User ${user} blocked!`);
            break;
        } else {
            console.log('Incorrect password. Try again.');
        }
        count++;
        i++;
    }
}

login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);
