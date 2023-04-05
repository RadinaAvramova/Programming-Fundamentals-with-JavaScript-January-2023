function nXNNatrix(num){
 
    let row = '';
    for(let i = 0; i < num; i++){
        row += num + ' ';
    }
 
    for(let j = 0; j < num; j++){
        console.log(row);
    } 
}

function nXNNatrix(num){

    let col = '';
    for(let i = 0; i < num; i++){
        col += num + ' ';
    }

    row = col + '\n'
   console.log(row.repeat(num));
}

function nXNNatrix(num) {
    let res = "";
   
    for (let i = 1; i <= num; i++) {
      res += num + " ";
    }
   
    for (let i = 1; i <= num; i++) {
      console.log(`${res}`);
    }
}

nXNNatrix(3);
nXNNatrix(7);
nXNNatrix(2);