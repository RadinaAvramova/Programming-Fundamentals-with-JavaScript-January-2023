function softUniBarIncome(arr) { 
    arr.pop();
    let totalIncome = 0;
    arr.forEach((line) => {
        let pattern = /%([A-Z][a-z]+)%[^|$%.]*<(\w+)>[^|$%.]*\|([0-9]+)\|[^|$%.]*?([0-9]+\.?[0-9]*)\$/gm; 
        let result = pattern.exec(line);
	if (result) {
		let currentSum = Number(result[3]) * Number(result[4]);
		console.log(`${result[1]}: ${result[2]} - ${currentSum.toFixed(2)}`);
		totalIncome += currentSum;
	}        
    });
    console.log(`Total income: ${totalIncome.toFixed(2)}`); 
}

function softUniBarIncome(input) {
    let pattern = /%(?<customer>[A-Z][a-z]*)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<count>\d+)\|[^|$%.]*?(?<price>[0-9]+(\.[0-9]+)?)\$/;
    let currentLine = input.shift();
    let totalPrice = 0;
   
    while (currentLine != 'end of shift') {
      let currentOrder;
      if ((currentOrder = pattern.exec(currentLine))) {
        let { customer, product, count, price } = currentOrder.groups;
        totalPrice += count * price;
        console.log(`${customer}: ${product} - ${(count * price).toFixed(2)}`);
      }
      currentLine = input.shift();
    }
   
    console.log(`Total income: ${totalPrice.toFixed(2)}`);
}


softUniBarIncome(['%George%<Croissant>|2|10.3$','%Peter%<Gum>|1|1.3$',

'%Maria%<Cola>|1|2.4$','end of shift']);

softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$','%Peter%<Gum>1.3$',

'%Maria%<Cola>|1|2.4','%Valid%<Valid>valid|10|valid20$',

'end of shift'])
  