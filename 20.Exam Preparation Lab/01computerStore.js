function computerStore(input){
 
    let priceWithoutTaxes = 0
    let type = input.pop().toLowerCase();
    let taxes = 0
    let totalPrice = 0
 
    // if(input.length === 0)
    // {
    //     return console.log("Invalid order!")
    // }
 
    for(price of input)
    {
       const currentPrice = Number(price);

        if(price > 0){
            priceWithoutTaxes += currentPrice
        } else {
            console.log("Invalid price!")
            continue;
        }
 
    }

    // VALIDATION needs to be positioned after for-of on priceWithoutTaxes
    if(priceWithoutTaxes === 0)
    {
        return console.log("Invalid order!")
    }

    taxes = priceWithoutTaxes * 0.2
    totalPrice = taxes + priceWithoutTaxes 

    if(type === "special")
    {
        totalPrice = totalPrice - (totalPrice * 0.1)
    }

    console.log(`Congratulations you've just bought a new computer!`)
    console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`) // toFixed(2) !!!
    console.log(`Taxes: ${taxes.toFixed(2)}$`)
    console.log("-----------")
    console.log(`Total price: ${totalPrice.toFixed(2)}$`)
 
}

function computerStore(input) {
    let sum = 0;
    let command = input.shift();

    while(command !== "special") {
        if(command === "regular") {
            break;
        }
        let price = Number(command);
        if(price < 0) {
            console.log("Invalid price!");
            command = input.shift();
            continue;
        }
        sum += price;
        command = input.shift();
    }
    if(sum === 0) {
        return "Invalid order!"
    } else {
        let taxes = sum * 0.20;
        let totalPrice = sum * 1.2;
        if(command === "special") {
            totalPrice *= 0.90;
        }
        return `Congratulations you've just bought a new computer!\n` + 
        `Price without taxes: ${sum.toFixed(2)}$\n` + 
        `Taxes: ${taxes.toFixed(2)}$\n` +
        `-----------\n` + 
        `Total price: ${totalPrice.toFixed(2)}$`
    }
}


function computerStore(input) {
    let sum = 0;
    let index  = 0;
    let command = input[index];
    index++;

    while(command !== "special") {
        if(command === "regular") {
            break;
        }
        let price = Number(command);
        if(price < 0) {
            console.log("Invalid price!");
            command = input[index];
            index++;
            continue;
        }
        sum += price;
        command = input[index];
        index++;
    }
    if(sum === 0) {
        return "Invalid order!"
    } else {
        let taxes = sum * 0.20;
        let totalPrice = sum * 1.2;
        if(command === "special") {   // if(input[input.length - 1] === "special")
            totalPrice *= 0.90;
        }
        return `Congratulations you've just bought a new computer!\n` + 
        `Price without taxes: ${sum.toFixed(2)}$\n` + 
        `Taxes: ${taxes.toFixed(2)}$\n` +
        `-----------\n` + 
        `Total price: ${totalPrice.toFixed(2)}$`
    }
}

function computerStore(input) {
    let sum = 0;
    let index  = 0;
    let command = input[index];
    index++;


    for(let i = 0; i < input.length; i++) {
        if(command === "regular" || command === "special") {
            break;
        }
    
        let price = Number(command);
        if(price < 0) {
            console.log("Invalid price!");
            command = input[index];
            index++;
            continue;
        }
        sum += price;
        command = input[index];
        index++;
    }

    if(sum === 0) {
        return "Invalid order!"
    } else {
        let taxes = sum * 0.20;
        let totalPrice = sum * 1.2;
        if(command === "special") {   // if(input[input.length - 1] === "special")
            totalPrice *= 0.90;
        }
        return `Congratulations you've just bought a new computer!\n` + 
        `Price without taxes: ${sum.toFixed(2)}$\n` + 
        `Taxes: ${taxes.toFixed(2)}$\n` +
        `-----------\n` + 
        `Total price: ${totalPrice.toFixed(2)}$`
    }
}

computerStore(['1050','200','450','2','18.50','16.86','special']);
computerStore(['1023','15','-20','-5.50','450','20','17.66','19.30','regular']);
computerStore(['regular']);