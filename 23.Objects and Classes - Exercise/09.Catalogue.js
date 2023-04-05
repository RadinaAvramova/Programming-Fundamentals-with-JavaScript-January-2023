function catalogue(array){
    let catalogue = [];
    for (let i = 0; i < array.length; i++) {
        let elements = array[i].split(' : ');
        let product = {
            name: elements[0],
            price: parseFloat(elements[1])
        };
        catalogue.push(product);
    }
    // catalogue.sort((a,b) => a.name > b.name ? 1 : -1);
    catalogue.sort((a,b) => a.name.localeCompare(b.name));
 
    let currentLetter = '';
    for (const product of catalogue) {
        if (product.name.charAt(0).toUpperCase() === currentLetter){
            console.log(`  ${product.name}: ${product.price}`)
        }else {
            currentLetter = product.name.charAt(0).toUpperCase();
            console.log(currentLetter);
            console.log(`  ${product.name}: ${product.price}`)
 
        }
    }
}

function catalogue(arr) {
    let obj = {};

    for (let line of arr) {
        let [productName, price] = line.split(' : ');
        obj[productName] = price;
    }

    let sortedItem = Object.entries(obj)
        .sort((a, b) => a[0].localeCompare(b[0]));

    let string = print2(sortedItem);
    console.log(string);

    // print(sortedItem);

    function print(arr) {
        let lastName = '';
        for (let line of arr) {
            let name = line[0];
            let firstChar = name.charAt(0);

            if (firstChar !== lastName[0]) {
                console.log(`${firstChar}`);
            }
            console.log(`  ${name}: ${line[1]}`);
            lastName = name;
        }
    }

    function print2(arr) {
        let lastName = '';
        let result = '';

        for (let line of arr) {
            let name = line[0];
            let firstChar = name.charAt(0);

            if (firstChar !== lastName[0]) {
                result +=`${firstChar}\n`;
            }

            result += `  ${name}: ${line[1]}\n`;
            lastName = name;
        }

        return result;
    }
}

function catalogue(input) {
    const catalog = {};
    
    for (let line of input) {
        const arr = line.split(' : ');
        const [product, price] = line.split(' : ');
        const letter = product[0];

        if (catalog.hasOwnProperty(letter) === false) {
            catalog[letter] = {};
        }

        catalog[letter][product] = price;
    }

    const sortedKeys = Object.keys(catalog).sort((a, b) => a.localeCompare(b));

    for (let key of sortedKeys) {
        console.log(key);
        const sortedProducts = Object.keys(catalog[key])
            .sort((a, b) => a.localeCompare(b));

        for (let keyP of sortedProducts) {
            console.log(`  ${keyP}: ${catalog[key][keyP]}`);
        }
    }
}

function catalogue(data) {
    let result = {};

    for(let line of data) {
        let [name, price] = line.split(" : ");
        result[name] = Number(price);
    }

    let sortKeys = Object.keys(result).sort((a,b) => a.localeCompare(b));

    let groupChar = "";
    for(let key of sortKeys) {
        let name = key;
        if(groupChar !== name[0]) {
            groupChar = name[0];
            console.log(groupChar);
        }
        let price = result[key];
        console.log(`${name}: ${price}`);
    }
}

function catalogue(data) {
    let result = {};

    for(let line of data) {
        let [name, price] = line.split(" : "); // {A: []}
        let groupChar = name[0];
        if (result.hasOwnProperty(groupChar)){
            result[groupChar].push({name, price: Number(price)})
        } else {
            result[groupChar] = [];
            result[groupChar].push({name, price: Number(price)})
        }
    }

    let sortKeys = Object.keys(result).sort((a,b) => a.localeCompare(b));

    for(let key of sortKeys) {
        console.log(key);
        let sortValue = result[key].sort((a,b) => a.name.localeCompare(b.name));
        for(let product of sortValue) {
            console.log(` ${product.name}: ${product.price}`);
        }
    }
}

catalogue([

    'Appricot : 20.4',
    
    'Fridge : 1500',
    
    'TV : 1499',
    
    'Deodorant : 10',
    
    'Boiler : 300',
    
    'Apple : 1.25',
    
    'Anti-Bug Spray : 15',
    
    'T-Shirt : 10'
    
]);

catalogue([

    'Omlet : 5.4',
    
    'Shirt : 15',
    
    'Cake : 59'
    
])