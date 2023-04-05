function treasureHunt(arr) {
    let treasureChestItems = arr.shift().split('|');
   
    while (arr[0] !== 'Yohoho!') {
      let tokens = arr.shift().split(' ');
      let command = tokens.shift();
   
      if (command === 'Loot') {
        while (tokens.length) {
          let item = tokens.shift();
          if (!treasureChestItems.includes(item)) {
            treasureChestItems.unshift(item); // unshift() method adds one or more elements to the beginning of an array and returns the new length of the array
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
                let stolenTreasure = initialLoot.slice(-index); //slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
                initialLoot.splice(-index); //splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
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


function tresureHunt(array) {
  let initialTresure = array.shift().split('|');
  let total = 0;
  let isIndexValid = (index, arr) => index >= 0 && index < arr.length;

  for (const line of array) {
      let [command, ...elements] = line.split(' ');

      if (command === 'Yohoho!') {
          break;
      }

      if (command === 'Loot') {
          for (const item of elements) {
              if (!initialTresure.includes(item)) {
                  initialTresure.unshift(item);
              }
          }
      } else if (command === 'Drop') {
          let index = Number(elements[0]);
          if (isIndexValid(index, initialTresure)) {
              let dropped = initialTresure.splice(index, 1);
              initialTresure.push(...dropped);
          }
      } else if (command === 'Steal') {
          let index = Number(elements[0]);
          let stealedTresure = initialTresure.slice(-index);
          initialTresure.splice(-index);
          console.log(stealedTresure.join(', '));
      }
  }
  total = initialTresure
      .reduce((sum, initialTresure) => sum + initialTresure.length, 0) / initialTresure.length;

  if (initialTresure.length > 0) {
      return `Average treasure gain: ${total.toFixed(2)} pirate credits.`
  } else {
      return "Failed treasure hunt."
  }
}




treasureHunt(["Gold|Silver|Bronze|Medallion|Cup","Loot Wood Gold Coins","Loot Silver Pistol","Drop 3","Steal 3","Yohoho!"])
treasureHunt(["Diamonds|Silver|Shotgun|Gold","Loot Silver Medals Coal","Drop -1","Drop 1","Steal 6","Yohoho!"]);