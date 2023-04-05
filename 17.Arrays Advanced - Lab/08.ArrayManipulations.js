//function arrayManipulations(commands) {
    //let arr = commands.shift()
                    //.split(' ')
                    //.map(Number);

    //for(let i=0; i< arr.length; i++) {
        //let [command, firstNum, secondNum] = commands[i].split(' ');

        //firstNum = Number(firstNum);
        //secondNum = Number(secondNum);

        //switch (command) {
            //case "Add":
                //break;
            //case "Remove":
                //break;
            //case "RemoveAt":
                //break;
            //case "Insert":
                //break;
        //}
    //}


//function add(el) {
    //arr.push(el);
//}

//function remove(num) {
    //arr = arr.filter(el => el !== num);
//}

//function removeAt(index) {
    //arr.splice(index,1);
//}

//function insert(num,index) {
     //arr.splice(index,0,num);
//}
//}


function arrayManipulations(commands){
    let arr = commands
    .shift()
    .split(' ')
    .map(Number);
    for(let i = 0;i<commands.length;i++){ // въртим по броя на командите
        let [command,firstNum, secondNum]=commands[i].split(' '); // взимаме съответната команда, число и индекс. П.С. Първо бих взела само командата и само, когато тя е insert ще взимам secondNum(който реално е индекса)
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
 
    
    switch(command){
        case "Add":
            add(firstNum); // подаваме параметър
            break;
            case "Remove":
                remove(firstNum); // подаваме параметър
                break;
                case "RemoveAt":
                        removeAt(firstNum); //подаваме параметър
                    break;
                    case "Insert":
                    insert(firstNum, secondNum); // подаваме параметри
                        break;
    }
}
    function add(el){
        arr.push(el)
        }
        function remove(num){
            arr=arr.filter(el=>el!==num);
        }
        function removeAt(index){
            arr.splice(index,1);
        }
        function insert(num,index){
            arr.splice(index,0,num);
        }
        console.log(arr.join(' '))
}
 
solve([ '4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3' ]);

function arrayManipulations(commands) {
    let arr = commands.shift().split(' ').map(Number);
    for (let i = 0; i < commands.length; i++) {
        let [command, firstNum, secondNum] = commands[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        switch (command) {
            case 'Add':
                add(firstNum);
                break;
            case 'Remove':
                remove(firstNum);
                break;
            case 'RemoveAt':
                removeAt(firstNum);
                break;
            case 'Insert':
                insert(firstNum, secondNum);
                break;
        }
    }
    function add(el) {
        arr.push(el);
    }
    function remove(num) {
        arr = arr.filter(el => el !== num);
    }
    function removeAt(index) {
        arr.splice(index, 1);
    }
    function insert(num, index) {
        arr.splice(index, 0, num);
    }
    console.log(arr.join(' '));
}

//function arrayManipulations(input) {
    //let arr = input[0].split(' ').map(Number);
    //let commands = input.slice(1);
    //for(let i = 0; i < commands.length; i++) {
        //let tokens = commands[i].split(' ');
        //Insert 1 6 => ['Insert', '1', '6']
        //let commands = tokens[0];
        //let parameters = tokens.slice(1).map(Number);
    //}

    //function executeCommand(command, parameters, arr) {
        //switch(command){
            //case 'Add': arr.push(parameters[0]);
            //case 'Remove': arr.filter(x => x !== parameters[0]);
            //case 'RemoveAt': arr.splice(index, 1);
            //case 'Insert':arr.splice(index, 0, num)
        //}
    //}
//}


arrayManipulations(['4 19 2 53 6 43','Add 3','Remove 2','RemoveAt 1','Insert 8 3']);
arrayManipulations(['6 12 2 65 6 42','Add 8','Remove 12','RemoveAt 3','Insert 6 2']);