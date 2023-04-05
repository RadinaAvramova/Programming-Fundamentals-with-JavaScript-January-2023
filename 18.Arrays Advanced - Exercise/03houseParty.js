function houseParty(arr) {
    let list = [];
    let guestName = ''
   
    for (let i = 0; i < arr.length; i++) {
        let line = arr[i].split(" ");
        let name = line[0];
        let command = line[2];
            if (command !== 'not') {
              if (list.includes(name) === true) {
                console.log(`${name} is already in the list!`);
                continue;
            } 
            list.push(name);             
            } else {
              if (list.includes(name) === false) {
                console.log(`${name} is not in the list!`);
                continue;
              } 
                list = list.filter(x => x!= name);
            }
    }
    console.log(list.join('\n'));
}

function houseParty(input) {
    let myList = [];
    for(let el of input) {
        let commands = el.split(" is ");
        let name = commands[0];
        let command = commands[1];
        if(command === "going!") {
            //if (myList.indexOf(name) === -1) {
            if(!myList.includes(name)) {
                myList.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }  
        } else {
            //if (myList.indexOf(name) === -1) {
                if(!myList.includes(name)) {
                    console.log(`${name} is not in the list!`);
                } else {
                    myList.splice(myList.indexOf(name), 1);
                }
        }
    }
    console.log(myList.join("\n"));
}

houseParty(['Allie is going!','George is going!','John is not going!','George is not going!']);
houseParty(['Tom is going!','Annie is going!','Tom is going!','Garry is going!','Jerry is going!']);