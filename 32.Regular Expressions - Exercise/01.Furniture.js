function furniture(data)
{
    let pattern = new RegExp(">>(?<furniture>[\\w]+)<<(?<price>[\\d]+[.]?[\\d]+)!(?<quantity>[\\d]+)");
    let command = data.shift()
    let furniture = []
    let currMoney = 0
    let moneyTotal = 0
    let quantity = 0       
    while(command!='Purchase')
    {
        let match = pattern.exec(command) 
        if(match!=null)
        {
            furniture.push(match.groups['furniture'])
            currMoney = Number(match.groups['price'])
            quantity = Number(match.groups['quantity'])
            moneyTotal += currMoney*quantity
        } 
        command = data.shift()
    }
    console.log('Bought furniture:')
    console.log(furniture.join('\n'))
    console.log(`Total money spend: ${moneyTotal.toFixed(2)}`)
}

function furniture(data) {
    let pattern = new RegExp(">>(?<furniture>[\\w]+)<<(?<price>[\\d]+[.]?[\\d]+)!(?<quantity>[\\d]+)");
    let command = data.shift();
    let furniture = [];
    let currMoney = 0;
    let moneyTotal = 0;
    let quantity = 0; 
      
    while (command !== 'Purchase') {
        let match = pattern.exec(command);
      
        if (match !== null) {
            furniture.push(match.groups['furniture']);
            currMoney = Number(match.groups['price']);
            quantity = Number(match.groups['quantity']);
            moneyTotal += currMoney * quantity;
        } 
      
        command = data.shift();
    }
 
    console.log('Bought furniture:');
    
    if (furniture.length > 0) {
        console.log(furniture.join('\n'));
    }
  
    console.log(`Total money spend: ${moneyTotal.toFixed(2)}`);
}


function furniture(data) {
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>[0-9.]+)!(?<quantity>\d+)/;
    let totalMoney = 0;
    console.log("Bought furniture:");

    for(let line of data) {
        if(line === "Purchase") {
            break;
        }

        if(pattern.test(line)) {
            let product = pattern.exec(line);
            debugger
            let price  = Number(product.groups.price) * Number(product.groups.quantity);
            console.log(product.groups.name);
            totalMoney += price;
        }
    }

    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);

}

furniture(['>>Sofa<<312.23!3',

'>>TV<<300!5',

'>Invalid<<!5',

'Purchase']);

furniture(['>>Laptop<<312.2323!3',

'>>TV<<300.21314!5',

'>Invalid<<!5',

'>>TV<<300.21314!20',

'>>Invalid<!5',

'>>TV<<30.21314!5',

'>>Invalid<<!!5',

'Purchase'])

furniture(['>Invalid<<!4', '>Invalid<<!2', '>Invalid<<!5', 'Purchase'])