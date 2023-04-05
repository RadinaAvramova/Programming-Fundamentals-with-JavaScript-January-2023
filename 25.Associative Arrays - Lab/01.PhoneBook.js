function phoneBook(input) {
    let phoneBook = {};
    for(let line of input) {
        let tokens = line.split(' ');
        let name = tokens[0];
        let number = tokens[1];
        phoneBook[name] = number;
    }
    for(let key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}

function solve(input) {
    // let arrOfObj = input
    //     .map(el => {
    //         let obj = {};
    //         let [nameArr, phone] = el.split(' ');
    //         obj.name = nameArr;
    //         obj.phone = phone;
    //         return obj;
    //     })
    // let removeDuplicateObjectFromArray = (arrOfObj) => {
    //     //Когато искаме да филтрираме последният индекс, на който се намира даден ключ.
    //     return arrOfObj.filter((obj, _, arr) =>

    //       arr.lastIndexOf(obj))

    // }

    // for (let obj of removeDuplicateObjectFromArray(arrOfObj)) {
    //     console.log(`${obj.name} -> ${obj.phone}`)
    // }

    let result = input.reduce((acc, curr, i) => {
        let [nameArr, phone] = curr.split(' ');
        acc[nameArr] = phone;

        return acc;
    }, {});

    return Object.entries(result)
        .map(([name, phone]) => {
            return `${name} -> ${phone}`;
        })
        .join('\n');
}

function phoneBook(input) {
    let dict = {};
    
    input.forEach(el => {
        let tokens = el.split(" ");
        let name = tokens[0];
        let phone = tokens[1];
        dict[name] = phone;
    });

    for(const key in dict) {
        console.log(`${key} -> ${dict[key]}`)
    }
}
 
phoneBook(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344']);

phoneBook(['George 0552554',

'Peter 087587',

'George 0453112',

'Bill 0845344'])
