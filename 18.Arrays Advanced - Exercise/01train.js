function train(input) {
    let numbers = input
      .shift()
      .split(" ")
      .map((x) => Number(x));
    //   console.log(numbers);
   
    let max = Number(input.shift()); // for each wagon in the train
    //   console.log(max);
   
    for (let i = 0; i < input.length; i++) {
      let arrNew = input[i].split(" ");
      let command = arrNew[0];
      let firstValue = arrNew[1];
   
      // console.log(arrNew);
      // console.log(command);
      // console.log(firstValue);
      if (arrNew.length === 2 && command === "Add") {
        numbers.push(firstValue);
      } else {
        let passengers = Number(arrNew[0]);
        for (let j = 0; j < numbers.length; j++) {
          if (passengers + numbers[j] <= max) {
          numbers[j] += passengers;
          }
          break;
        }
      }
    }
    console.log(numbers.join(" "));
}

function train(input) {
    let wagons = input.shift().split(" ").map(Number);    //map(el => Number(el));
    //for(let i = 0; i < wagons.length; i++) {
    //    wagons[i] = Number(wagons[i]); 
    //}
    let maxCapacity = Number(input.shift());

    for(let el of input) {
        let command = el.split(" ");   //"add 10" -> ["add", "10"] // 30 -> ["30"]
        if(command[0] = "Add") {
            wagons.push(Number(command[1]));
        } else {
            let passengers = Number(command[0]);
            for(let i = 0; i < wagons.length; i++) {
                if(wagons[i] + passengers <= maxCapacity) {
                    wagons += passengers;
                    break;
                }
            }
        }
    }

    console.log(wagons.join(" "));
}

train(['32 54 21 12 4 0 23','75','Add 10','Add 0','30','10','75']);
train(['0 0 0 10 2 4','10','Add 10','10','10','10','8','6']);