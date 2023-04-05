function shopingList(input) {

    let groceries = input.shift().split('!');
    let line = input.shift();

    while (line != 'Go Shopping!') {
        let [command, item, newItem] = line.split(' ');

        switch (command) {
            case 'Urgent':
                urgent(groceries, item);
                break;
            case 'Unnecessary':
                unnecessery(groceries, item);
                break;
            case 'Correct':
                correct(groceries, item, newItem);
                break;
            case 'Rearrange':
                rearrange(groceries, item);
                break;
            default: break; // needs to include default case for invalid command('Gosho'), otherwise will not break
        }
        line = input.shift();
    }

    console.log(groceries.join(', '));

    function urgent(list, item) {
        if (list.includes(item) == false) {
            list.unshift(item);
        }
    }

    function unnecessery(list, item) {
        if (list.includes(item) == true) {
            let index = list.indexOf(item);
            list.splice(index, 1);
        }
    }

    function correct(list, item, newItem) {
        if (list.includes(item) == true) {   //includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
            let index = list.indexOf(item);
            list[index] = newItem;
        }
    }

    function rearrange(list, item) {
        if (list.includes(item) == true) {
            let index = list.indexOf(item);
            // splice and push can not be chained, otherwise will not include removed item at end of list
            list.splice(index, 1); //splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
            list.push(item); //push() method adds one or more elements to the end of an array and returns the new length of the array
        }
    }
}

function shopingList(input) {
    let shoppingList = input.shift().split('!');
    let commands = input.shift();
    while (commands !== 'Go Shopping!') {
        let tokens = commands.split(' ');
        let command = tokens[0];
        let item = tokens[1];
        let index = shoppingList.indexOf(item);
        switch (command) {
            case 'Urgent':
                if (index < 0) {
                    shoppingList.unshift(item);
                }
                break;
            case 'Unnecessary':
                if (~index) {
                    shoppingList.splice(index, 1); //splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
                }
                break;
            case 'Correct':
                let newItem = tokens[2];
                if (~index) {
                    shoppingList.splice(index, 1, newItem);
                }
                break;
            case 'Rearrange':
                if (~index) {
                    shoppingList.splice(index, 1);
                    shoppingList.push(item);  //push() method adds one or more elements to the end of an array and returns the new length of the array
                }
                break;
            default:
                break;
        }
        commands = input.shift();
    }
    console.log(shoppingList.join(', '));
}


shopingList(["Tomatoes!Potatoes!Bread","Unnecessary Milk","Urgent Tomatoes","Go Shopping!"]);
shopingList(["Milk!Pepper!Salt!Water!Banana","Urgent Salt","Unnecessary Grapes","Correct Pepper Onion","Rearrange Grapes","Correct Tomatoes Potatoes","Go Shopping!"])