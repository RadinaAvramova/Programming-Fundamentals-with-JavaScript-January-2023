function distinctArray(input) {
    let uniqArr = [];
    for(let el of input) {
        //if(uniqArr.indexOf(el) === -1) {
        if(!uniqArr.includes(el)) {
                uniqArr.push(el);
        }
    }
    console.log(uniqArr.join(" "));
}

distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3,4, 1, 2]);
distinctArray([20, 8, 12, 13, 4,4, 8, 5]);