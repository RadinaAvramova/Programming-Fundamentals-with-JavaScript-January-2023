function storeProvision(stock, ordered) {
    let storeObj = {};
    let inStock = restock(stock, storeObj);
    let inOrder = restock(ordered, inStock);

    for (let product in inOrder) {
        console.log(`${product} -> ${inOrder[product]}`);
    }

    function restock(arr, obj) {
        while (arr.length !== 0) {
            let [product, qty] = [arr.shift(), arr.shift()];
            if (!obj.hasOwnProperty(product)) {
                obj[product] = Number(qty);
            } else {
                obj[product] += Number(qty);
            }
        }
        return obj;
    }
}

function storeProvision(stock, orderedProducts) {
    let currentStock = {};
 
    stock.forEach((e, index) => {
        if (index % 2 == 0) {
            if (!currentStock[e]) {
                currentStock[e] = Number(stock[index + 1]);
            } else {
                currentStock[e] += Number(stock[index + 1]);
            }
        }
    });
 
    orderedProducts.forEach((el, index) => {
        if (index % 2 == 0) {
            if (!currentStock[el]) {
                currentStock[el] = Number(orderedProducts[index + 1]);
            } else {
                currentStock[el] += Number(orderedProducts[index + 1]);
            }
        }
    });
 
    Object.keys(currentStock)
        .forEach(product => console.log(`${product} -> ${currentStock[product]}`));
}

function storeProvision(store,orderStore) {
    let myStore = {};
    for(let i = 0; i < store.length; i+=2) {
        let name = store[i];
        let quantity = store[i+1];
        myStore[name] = Number(quantity);
    }

    for(let i = 0; i < orderStore.length; i+=2) {
        let name = orderStore[i];
        let quantity = Number(orderStore[i+1]);
        if(myStore.hasOwnProperty(name)){
            myStore[name] += quantity;
        } else {
            myStore[name] = quantity;
        }
    }

    for(let product of Object.keys(myStore)) {
        console.log(`${product} -> ${myStore[product]}`);
    }
}


function storeProvision(store,orderStore) {
    let myStore = {};
    addProduct(store);
    addProduct(orderStore);


    for(let product of Object.keys(myStore)) {
        console.log(`${product} -> ${myStore[product]}`);
    }

    function addProduct(data) {
        for(let i = 0; i < data.length; i+=2) {
            let name = data[i];
            let quantity = Number(data[i+1]);
            if(myStore.hasOwnProperty(name)){
                myStore[name] += quantity;
            } else {
                myStore[name] = quantity;
            }
        }
    }
}

storeProvision([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
]);


storeProvision([

    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
]);

storeProvision([ 'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5' ]);

storeProvision([ 'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30' ]);
