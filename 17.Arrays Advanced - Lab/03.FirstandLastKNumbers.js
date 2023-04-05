//function firstAndLastKNumbers(lines) {
    //lines=lines.filter(function(entry) { return entry.trim() !== ''; }).map(Number);
    //let result= lines.filter((num,i)=>i%2!==0).map(x=>x*2).reverse();
    //console.log(result.join(' '));
//}

//function firstAndLastKNumbers(lines) {
    //lines=lines.filter(e => String(e).trim()).map(Number);
    //let result= lines.filter((num,i)=>i%2!==0).map(x=>x*2).reverse();
    //console.log(result.join(' '));
//}

function firstAndLastKNumbers(arr) {
    let k = arr.shift();
    console.log(arr.slice(0,k).join(' '));
    console.log(arr.slice(arr.length-k, arr.length).join(' '));
}

firstAndLastKNumbers([2,7,8,9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);