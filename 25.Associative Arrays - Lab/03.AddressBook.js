function addressBook(input) {
    let addressBook = {};
    for(let line of input) {
        let [name, adress] = line.split(":");
        addressBook[name] = adress;
    }
    let sorted = Object.entries(addressBook);
    sorted.sort((a,b) => a[0].localeCompare(b[0]));
}

function addressBook(input) {
    let dict = {};
    for(const el of input) {
        let tokens = el.split(":");
        let name = tokens[0];
        let address = tokens[1];
        dict[name] = address;
    }

    let entries = Object.entries(dict).sort((a,b) => a[0].localeCompare(b[0]));
    for (const [name, adress] of entries) {
        console.log(`${name} -> ${adress}`)
    }
}

addressBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])

addressBook(['Bob:Huxley Rd',

'John:Milwaukee Crossing',

'Peter:Fordem Ave',

'Bob:Redwing Ave',

'George:Mesta Crossing',

'Ted:Gateway Way',

'Bill:Gateway Way',

'John:Grover Rd',

'Peter:Huxley Rd',

'Jeff:Gateway Way',

'Jeff:Huxley Rd'])