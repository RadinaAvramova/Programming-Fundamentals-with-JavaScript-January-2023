function treasureHunt(arr) {
    let treasureChestItems = arr.shift().split('|');
   
    while (arr[0] !== 'Yohoho!') {
      let tokens = arr.shift().split(' ');
      let command = tokens.shift();
   
      if (command === 'Loot') {
        while (tokens.length) {
          let item = tokens.shift();
          if (!treasureChestItems.includes(item)) {
            treasureChestItems.unshift(item);
          }
        }
      } else if (command === 'Drop') {
        let index = Number(tokens.shift());
        if (index >= 0 && index < treasureChestItems.length) {
          treasureChestItems.push(treasureChestItems.splice(index, 1));
        }
      } else if (command === 'Steal') {
        let count = Math.min(treasureChestItems.length, Number(tokens.shift()));
        let index = treasureChestItems.length - count;
        let stolen = treasureChestItems.splice(index, count);
        console.log(stolen.join(', '));
      }
    }
   
    if (treasureChestItems.length) {
      let averageTreasureGain = treasureChestItems.reduce((prevSum, item) => prevSum + item.length, 0) / treasureChestItems.length;
      console.log(`Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`);
    } else {
      console.log('Failed treasure hunt.');
    }
  }

  function treasureHunt(arr) {
    let initialLoot = arr.shift().split("|");
    let arrayL = initialLoot.length;

    // CAREFULL do not iterate an array that is being modified with shift() 
    // or unshift() !!!
    // for (let i = 0; i < arrayL; i++) {
    for (const line of arr) {
        // let currentCommandArray = arr.shift().split(" ");
        // let command = currentCommandArray.shift();
        let [command, ...currentCommandArray] = line.split(" ");

        switch (command) {
            case "Loot":
                for (let el of currentCommandArray) {
                    if (!initialLoot.includes(el)) {
                        initialLoot.unshift(el);
                    }
                }

                break;
            case "Drop":
                let startingIndex = Number(currentCommandArray[0]);

                if (startingIndex >= 0 && startingIndex < initialLoot.length) {
                    let oldLoot = initialLoot.splice(startingIndex, 1)
                    initialLoot.push(...oldLoot);
                    // initialLoot.push(initialLoot.splice(startingIndex, 1).join(""));
                }

                break;
            case "Steal":
                // let itemCount = Number(currentCommandArray[0]);
                // let index = initialLoot.length - itemCount;
                // let itemsToPrint = initialLoot.splice(index, itemCount);
                // console.log(itemsToPrint.join(", "));

                let index = Number(currentCommandArray);
                let stolenTreasure = initialLoot.slice(-index);
                initialLoot.splice(-index);
                console.log(stolenTreasure.join(', '));

                break;
        }
    }

    let itemSum = initialLoot.reduce((sum, initialTresure) => {
        return sum + initialTresure.length;
    }, 0) / initialLoot.length;

    // for (let el of initialLoot) {
    //     let itemLength = el.length;
    //     itemSum += itemLength;
    // }

    // initialLoot.length > 0 !!!
    // if (initialLoot.length >= 0) {
    if (initialLoot.length > 0) {
        // let averageGain = itemSum / initialLoot.length;
        // console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
        console.log(`Average treasure gain: ${itemSum.toFixed(2)} pirate credits.`);
    } else {
        console.log(`Failed treasure hunt.`);
    }
}


function treasureHunt(input) {
  let state = input.shift().split("|");

  let command = input.shift();
  while(command !== "Yohoho!") {
    let tokens = command.split(" "); //"Loot Wood Gold Coins"
    let action = tokens.shift(); 
    switch(action) {
      case "Loot":
        for(let el of tokens) {
          if(state.includes(el)) {
            continue;
          }
          state.unshift(el);
        }
        break;
      case "Drop":
        let index = Number(tokens[0]);
        if (index < 0 || index > state.length -1) {
          command = input.shift();
          continue;
        }
        let el = state.splice(index, 1);
        state.push(el[0]);
        break;
      case "Steal":
        let count = Number(tokens[0]);
        let elements = state.splice(-count);
        console.log(elements.join(", "));
    }
    command = input.shift();
  }
  if(state.length == 0) {
    console.log("Failed treasure hunt.");
  } else {
    let sum = 0;
    for(let el of state) {
      sum += el.length;
    }
    let avg = sum / state.length;
    console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
  }
}



function treasureHunt(input) {
  let state = input.shift().split("|");

  let command = input.shift();
  while(command !== "Yohoho!") {
    let tokens = command.split(" "); //"Loot Wood Gold Coins"
    let action = tokens.shift(); 
    switch(action) {
      case "Loot":
        loot(tokens, state);
        break;
      case "Drop":
        drop(tokens,state);
        break;
      case "Steal":
        steal(tokens,state);
        break;
    }
    command = input.shift();
  }
  if(state.length == 0) {
    console.log("Failed treasure hunt.");
  } else {
    let sum = 0;
    for(let el of state) {
      sum += el.length;
    }
    let avg = sum / state.length;
    console.log(`Average treasure gain: ${avg.toFixed(2)} pirate credits.`);
  }

  function loot (arr, state) {
    for(let el of arr) {
      if(state.includes(el)) {
        continue;
      }
      state.unshift(el);
    }
  }

  function drop(tokens, state) {
    let index = Number(tokens[0]);
    if (index < 0 || index > state.length -1) {
      return;
    }
    let el = state.splice(index, 1);
    state.push(el[0]);
  }

  function steal(tokens, state){
    let count = Number(tokens[0]);
    let elements = state.splice(-count);
    console.log(elements.join(", "));
  }
}

treasureHunt(["Gold|Silver|Bronze|Medallion|Cup","Loot Wood Gold Coins","Loot Silver Pistol","Drop 3","Steal 3","Yohoho!"]);
treasureHunt(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"]);