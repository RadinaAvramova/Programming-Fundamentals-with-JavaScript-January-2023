function primeNumberChecker(number) {
    if(number == 0 || number == 1) {
        return false;
    }     
    for (let divider = 2; divider < number; divider++) {
        if(number % divider == 0) {
            return false;
        }
    }
    return true;
}


function primeNumberChecker(num) {
    let sqrtnum=Math.floor(Math.sqrt(num));
      let prime = num != 1;
      for(let i=2; i<sqrtnum+1; i++) { // sqrtnum+1
          if(num % i == 0) {
              prime = false;
              break;
          }
      }
      return prime;
  }

primeNumberChecker(7);
primeNumberChecker(8);
primeNumberChecker(81);
