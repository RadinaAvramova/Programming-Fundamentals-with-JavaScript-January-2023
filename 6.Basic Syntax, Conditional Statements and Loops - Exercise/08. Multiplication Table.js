function multiplicationTable(args) {
    let multyply = Number(args);
    let sum = 0;
 
    for (let i = 1; i <= 10; i++) {
        console.log(`${multyply} X ${i} = ${sum=multyply*i}`)
    }
}

multiplicationTable(5);
multiplicationTable(2);