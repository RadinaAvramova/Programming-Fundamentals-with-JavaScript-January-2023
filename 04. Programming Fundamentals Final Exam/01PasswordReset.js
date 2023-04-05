function solve(input) {
    let pass = input.shift();
 
    for(const line of input) {
        const tokens = line.split(' ');
        const cmd = String(tokens[0]);
 
        if(cmd === 'TakeOdd') {
            let raw = ''
            for(let i = 0; i < pass.length; i++) {
                if(i % 2 !== 0) {
                    raw += pass[i];
                }
            }
            pass = raw;
            console.log(pass);
 
        } else if (cmd === 'Cut') {
            const index = tokens[1];
            const length = tokens[2];
            const substr = pass.substr(index, length);
            pass = pass.replace(substr, '');
            console.log(pass);
 
        } else if (cmd === 'Substitute') {
            const substr = tokens[1];
            const substitute = tokens[2];
 
            if(!pass.includes(substr)) {
                console.log("Nothing to replace!");
            } else {
                pass = pass.split(substr).join(substitute);
                console.log(pass);
            }
 
        }
 
    }
    console.log(`Your password is: ${pass}`);   
}

function pwReset(input = []) {
    let inputPassword = input.shift();
    let lines = input.slice(0, input.indexOf('Done'));
    for (const line of lines) {
        let [command, value, value2] = line.split(' ');
 
        switch (command) {
            case 'TakeOdd':
                let tempStr = '';
                for (let i = 0; i < inputPassword.length; i++) {
                    if (i % 2 !== 0) {
                        tempStr += inputPassword[i]
                    }
                }
                inputPassword = tempStr;
                console.log(inputPassword);
                break;
 
            case 'Cut':
                let index = Number(value);
                let length = Number(value2);
                let arr = Array.from(inputPassword).splice(index, length).join('');
                inputPassword = inputPassword.replace(arr, '');
                console.log(inputPassword);
                break;
            case 'Substitute':
                let substring = value;
                let substitute = value2;
                if (!inputPassword.includes(substring)) {
                    console.log('Nothing to replace!');
                } else {
                while (inputPassword.includes(substring)) {
                    inputPassword = inputPassword.replace(substring, substitute);
                }
                console.log(inputPassword);
            };
        }
    }
 
    console.log(`Your password is: ${inputPassword}`);
}

function pwReset(input = []) {
    let rawPw = input.shift();
    for (const line of input) {
        let tokens = line.split(' ');
        if (tokens === 'Done') {
            break;
        }
        if (tokens[0] === 'TakeOdd') {
            let newPw = '';
            for (let i = 0; i < rawPw.length; i++) {
                if (i % 2 !== 0) {
                    newPw += rawPw[i];
                }
            }
            rawPw = newPw;
            console.log(rawPw);
        } else if (tokens[0] === 'Cut') {
            let index = Number(tokens[1]);
            let length = Number(tokens[2]);
            let firstPart = rawPw.substring(0, index);
            let secondPart = rawPw.substring(index + length);
            rawPw = firstPart + secondPart;
            console.log(rawPw);
        } else if (tokens[0] === 'Substitute') {
            let elToReplace = tokens[1];
            let substitute = tokens[2];
 
            if (rawPw.indexOf(elToReplace) === -1) {
                console.log('Nothing to replace!');
                continue;
            } else {
                while (rawPw.indexOf(elToReplace) >= 0) {
                    rawPw = rawPw.replace(elToReplace, substitute);
                }
            }
            console.log(rawPw);
        }
    }
    console.log(`Your password is: ${rawPw}`);
}

function password(inp) {
    let count = 0;
    let sum = '';
    let sentencetoworkat = inp.shift();


    while (inp[0] != "Done") {
        let [name, p1, p2] = inp.shift().split(' ');
        // let name = tokens[0]
        // let p1 = tokens[1]
        // let p2 = tokens[2]

        switch (name) {
            case "TakeOdd":
                for (let el of sentencetoworkat) {
                    if (count !== 0) {
                        if (count % 2 !== 0 || count == 1) {
                            sum += el;
                        }
                    }

                    count++;
                }
                count = 0;
                sentencetoworkat = sum;
                sum = '';
                console.log(sentencetoworkat);

                break;
            case "Cut":
                let index = Number(p1);
                let length = Number(p2);
                let substring = sentencetoworkat.substring(index, index + length);
                sentencetoworkat = sentencetoworkat.replace(substring, '');
                console.log(sentencetoworkat);

                break;
            case "Substitute":
                if (sentencetoworkat.includes(p1)) {
                    let replaced = sentencetoworkat.split(p1).join(p2)
                    sentencetoworkat = replaced;

                    console.log(sentencetoworkat);
                } else { console.log("Nothing to replace!") }

                break;
        }
    }

    console.log(`Your password is: ${sentencetoworkat}`);
}

function passwordReset(input) {
    // First, you will receive a string, and afterward, until the command "Done" is given, 
    // you will be receiving strings with commands split by a single space.
    let password = input.shift();

    // The destructuring assignment syntax is a JavaScript expression that makes it possible 
    // to unpack values from arrays, or properties from objects, into distinct variables.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    let [line0, line1, line2] = input[0].split(' ');
    let finalPass = password;


    while (line0 !== 'Done') {
        // if (line[0] === 'Done') {
        //     break;
        // }

        if (line0 === 'TakeOdd') {
            // TakeOdd => Takes only the characters at odd indices and concatenates them to obtain 
            // the new raw password and then prints it.
            let newPass = '';

            for (let i = 1; i < finalPass.length; i = i + 2) {
                newPass += finalPass[i];
                // finalPass = finalPass + password[i];
            }
            finalPass = newPass;
            console.log(finalPass);
        } else if (line0 === 'Cut') {
            // Cut => Gets the substring with the given length starting from the given index from the password 
            // and removes its first occurrence, then prints the password on the console.
            let substring = finalPass.substr(Number(line1), Number(line2));
            finalPass = finalPass.replace(substring, '');
            console.log(finalPass);

            // let oldFinalPass = finalPass.substring(0, Number(line[1]));
            // finalPass = oldFinalPass + finalPass.substring((Number(line[1]) + Number(line[2])), finalPass.length);
            // } else if (line[0] === 'Substitute' && finalPass.includes(line[1])) {
        } else if (line0 === 'Substitute') {
            // Substitute => If the raw password contains the given substring, replaces all of its occurrences 
            // with the substitute text given and prints the result.
            if (finalPass.includes(line1) === false) {
                // If it doesn't, prints "Nothing to replace!".
                console.log('Nothing to replace!');
            } else {
                while (finalPass.includes(line1)) {
                    finalPass = finalPass.replace(line1, line2);
                }
                
                console.log(finalPass);
            }
            
            // finalPass = finalPass.split(line[1]);
            // finalPass = finalPass.join(line[2]);
        }
        // else {
        //     console.log('Nothing to replace!');
        // }

        input.shift();
        [line0, line1, line2] = input[0].split(' ');


        // line = input.shift().split(' ')
        // if (line[0] != 'Done') {
        // } else {
        //     break;
        // }
    }

    console.log(`Your password is: ${finalPass}`);
}

function solve(input) {
    let password = input.shift();

    let line = input.shift();

    while (line !== 'Done') {
        let [command, ...rest] = line.split(' ');

        switch (command) {
            case 'TakeOdd':
                let newPassword = '';

                for (let i = 0; i < password.length; i++) {
                    if (i % 2 !== 0) {
                        newPassword += password[i];
                    }
                }

                password = newPassword;
                console.log(password);
                break;
            case 'Cut':
                let index = Number(rest[0]);
                let length = Number(rest[1]);

                let string = password.substring(index, index + length);
                password = password.replace(string, '');
                console.log(password);
                break;
            case 'Substitute':
                let stringTarget = rest[0];
                let replace = rest[1];

                if (password.includes(stringTarget)) {
                    while (password.includes(stringTarget)) {
                        password = password.replace(stringTarget, replace);
                    }
                    console.log(password);
                } else {
                    console.log('Nothing to replace!');
                }

                break;
        }

        line = input.shift();
    }

    console.log(`Your password is: ${password}`);
}


function solve(input) {
    let password = input.shift();

    let line = input.shift();

    while (line !== 'Done') {
        let [command, ...rest] = line.split(' ');

        switch (command) {
            case 'TakeOdd':
                let newPassword = '';

                for (let i = 0; i < password.length; i++) {
                    if (i % 2 !== 0) {
                        newPassword += password[i];
                    }
                }
                password = newPassword;
                console.log(password);
                break;
            case 'Cut':
                let index = Number(rest[0]);
                let length = Number(rest[1]);

                let string = password.substring(index, index + length);
                password = password.replace(string, '');
                console.log(password);
                break;
            case 'Substitute':
                let stringTarget = rest[0];
                let replace = rest[1];
                if (password.includes(stringTarget)) {
                    while (password.includes(stringTarget)) {
                        password = password.replace(stringTarget, replace);
                    }
                    console.log(password);
                } else {
                    console.log('Nothing to replace!');
                }

                break;
        }

        line = input.shift();
    }

    console.log(`Your password is: ${password}`);
}