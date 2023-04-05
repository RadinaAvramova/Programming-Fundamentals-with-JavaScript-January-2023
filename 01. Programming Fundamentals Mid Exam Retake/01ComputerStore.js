function computerStore(input){
 
    let priceWithoutTaxes = 0;
    let type = input.pop().toLowerCase();    // removes the last element from an array and returns that element.
    let taxes = 0;
    let totalPrice = 0;
 
    // if(input.length === 0)
    // {
    //     return console.log("Invalid order!")
    // }
 
    for(price of input)
    {
       const currentPrice = Number(price);

        if(price > 0){
            priceWithoutTaxes += currentPrice;
        } else {
            console.log("Invalid price!");
            continue;
        }
 
    }

    // VALIDATION needs to be positioned after for-of on priceWithoutTaxes
    if(priceWithoutTaxes === 0)
    {
        return console.log("Invalid order!");
    }

    taxes = priceWithoutTaxes * 0.2;
    totalPrice = taxes + priceWithoutTaxes;

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


function computerStore(arr){
   let clientType = arr.pop();
   let totalPriceBeforTaxes= 0;
   let finalPrice = 0;
   
   for(let i = 0; i < arr.length ; i++){
      arr[i] = Number(arr[i]);
   }
   for(let num of arr){
     if(num > 0){
         totalPriceBeforTaxes+=num;
     }else{
      console.log('Invalid price!');
     }
   }
   
   if(clientType !== "special"){
      finalPrice = totalPriceBeforTaxes + (totalPriceBeforTaxes * 0.2);
   }else{
      let discount = 0.1;
      finalPrice = (totalPriceBeforTaxes +(totalPriceBeforTaxes * 0.2)) - ((totalPriceBeforTaxes +(totalPriceBeforTaxes * 0.2))* discount);
   } 
 
   if (finalPrice > 0) {
   console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${totalPriceBeforTaxes.toFixed(2)}$
Taxes: ${(totalPriceBeforTaxes * 0.2).toFixed(2)}$`);
   console.log("-----------")
   console.log(`Total price: ${finalPrice.toFixed(2)}$`)
   } else {
     console.log('Invalid order!')
   }
}

function computerStore(input) {
    let index = 0;
    let command = input[index];
    index++;

    let priceNoTax = 0;
    let finalPrice = 0;
    let tax = 0;

    while (command !== "special" && command !== "regular") {
        let currPrice = Number(command);

        if (currPrice <= 0) {
            console.log("Invalid price!");
        } else {
            priceNoTax += currPrice;
        }

        command = input[index];
        index++;
    }

    tax = (priceNoTax * 1.20) - priceNoTax;
    finalPrice = priceNoTax + tax;

    if (finalPrice === 0) {
        return console.log("Invalid order!");
    }

    if (command === "special") {
        finalPrice *= 0.90;
    } else {
        finalPrice = finalPrice
    }

    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${priceNoTax.toFixed(2)}$`)
    console.log(`Taxes: ${tax.toFixed(2)}$`)
    console.log("-----------")
    console.log(`Total price: ${finalPrice.toFixed(2)}$`)
}
computerStore(['1050','200','450','2','18.50','16.86','special']);
computerStore(['1023','15','-20','-5.50','450','20', '17.66','19.30', 'regular']);
computerStore((['regular']));