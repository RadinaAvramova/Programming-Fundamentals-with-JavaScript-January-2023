//function lastKNumbersSequence(n, k) {

    // result = [1];

    //for(let i = 1; i < n; i++){

        //result[i] = sumLastK(result, k);

    //}

    //function sumLastK(array = result, k) {

        //k = array.length > k ? k : array.length;

        //let sum = 0;

        //for(let i = 1; i <= k; i++){

            //sum += array[array.length - i];

        //}

        //return sum;

    //}

    //console.log(result);
//}

//function lastKNumbersSequence(n, k) {
    //let seq = [1];
    //for(let current = 1; current < n; current++) {
        //let start = Math.max(0, current - k);
        //let end = current - 1;
        //let sum = // TODO: Sum the values of seq[start...end]
        //seq[current] = sum;
    //}
    //console.log(seq.join(' '));
//}

lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);