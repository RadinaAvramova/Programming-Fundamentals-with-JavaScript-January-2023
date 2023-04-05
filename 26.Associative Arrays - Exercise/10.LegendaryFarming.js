function legendaryFarming(params) {
    let str = params.split(' ');
    const materials = {};
    const legendaryItems = {
        shards: 'Shadowmourne',
        fragments: 'Valanyr',
        motes: 'Dragonwrath',
    };
    let result = '';
    for (let i = 0; i < str.length; i += 2) {
        let quantity = Number(str[i]);
        let material = str[i + 1].toLowerCase();
        if (!materials.hasOwnProperty(material)) {
            materials[material] = 0;
        }
        materials[material] += quantity;
        if (materials[material] >= 250 && material in legendaryItems) {
            result += `${legendaryItems[material]} obtained!\n`;
            materials[material] -= 250;
            break;
        }
    }
    for (let item in legendaryItems) {
        if (!materials.hasOwnProperty(item)) {
            materials[item] = 0;
        }
    }
    const legendaryItemsCollected = Object.entries(materials)
        .filter((item) => hasLegendaryItems(legendaryItems, item[0]))
        .sort((a, b) => sortDescending(a[1], b[1]) || sortAlphabetically(a[0], b[0]))
        .map(formatText)
        .join('\n');
    const junkItemsCollected = Object.entries(materials)
        .filter((item) => !hasLegendaryItems(legendaryItems, item[0]))
        .sort((a, b) => sortAlphabetically(a[0], b[0]))
        .map(formatText)
        .join('\n');
    result += legendaryItemsCollected + '\n' + junkItemsCollected;
 
    function hasLegendaryItems(items, item) {
        return items.hasOwnProperty(item);
    }
 
    function formatText(textArr) {
        return `${textArr[0]}: ${textArr[1]}`;
    }
 
    function sortAlphabetically(a, b) {
        return a.localeCompare(b);
    }
 
    function sortDescending(a, b) {
        return b - a;
    }
 
    return result;
}

function legendaryFarming(str = '') {
    let input = str.toLowerCase().split(' ');
    let legendary = { fragments: 0, shards: 0, motes: 0 };
    let junk = {};
    let hasToBreak = false;
    while (!hasToBreak && input.length > 0) {
        let quantity = +input.shift();
        let material = input.shift();
        switch (material) {
            case 'shards':
                legendary[material] += quantity;
                if (legendary[material] >= 250) {
                    console.log(`Shadowmourne obtained!`);
                    legendary[material] -= 250;
                    hasToBreak = true;
                }
                break;
            case 'fragments':
                legendary[material] += quantity;
                if (legendary[material] >= 250) {
                    console.log(`Valanyr obtained!`);
                    legendary[material] -= 250;
                    hasToBreak = true;
                }
                break;
            case 'motes':
                legendary[material] += quantity;
                if (legendary[material] >= 250) {
                    console.log(`Dragonwrath obtained!`);
                    legendary[material] -= 250;
                    hasToBreak = true;
                }
                break;
            default:
                if (!junk.hasOwnProperty(material)) {
                    junk[material] = 0;
                }
                junk[material] += quantity;
                break;
        }
    }
    let legendItems = Object.entries(legendary)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach((item) => {
            console.log(`${item[0]}: ${item[1]}`);
        });
 
    let junkItems = Object.entries(junk)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach((item) => {
            console.log(`${item[0]}: ${item[1]}`);
        });
}

function legendaryFarming(input){
    let arr = input.split(' ');
    let materials = {};
    let keyMaterails = {
        'shards': 0,
        'fragments': 0,
        'motes': 0
    };
    let winner = '';
    for(let i = 0 ; i <= arr.length-1; i+=2){
      let quantity = Number(arr[i]);
      let  material = arr[i+1].toLowerCase();
 
      if(material === 'shards' || material === 'fragments' || material === 'motes'){
          keyMaterails[material] += Number(quantity);
          if(keyMaterails[material]>= 250 && material === 'shards'){
              winner = 'Shadowmourne' ;
              keyMaterails[material] -= 250;
              break;
           }
           else if(keyMaterails[material]>= 250 && material === 'fragments'){
               winner = 'Valanyr' ;
               keyMaterails[material] -= 250;
               break;
            }
            else if(keyMaterails[material]>= 250 && material === 'motes'){
               winner = 'Dragonwrath' ;
               keyMaterails[material] -= 250;
               break;
            }
      }  
 
      else{
          if(!materials.hasOwnProperty(material)){
              materials[material] = Number(quantity);
          }
          else{
              materials[material] += Number(quantity);
          }
      }
 
    }
    console.log(`${winner} obtained!`);
 
    let sortedkeyMaterails = Object.entries(keyMaterails);
    //console.log(sortedkeyMaterails);
    sortedkeyMaterails.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    // for (let [material, quantity] of sortedkeyMaterails) {
    //   sortedkeyMaterails.sort(sortDescending);
    //   if(quantity === sortedkeyMaterails[1][1] ){
    //       sortedkeyMaterails.sort(sortAlphabetically);
    //   }
    // }
 
    let sortedMaterails = Object.entries(materials);
	sortedMaterails.sort(sortAlphabetically);
    //for (let [material, quantity] of sortedMaterails) {
     // sortedMaterails.sort(sortAlphabetically);
    //}
 
    function sortDescending(firstMaterial, secondMaterial){
      let firstQuantity = firstMaterial[1];
      let secondQuantity = secondMaterial[1];
      return secondQuantity - firstQuantity;
     }
 
      function sortAlphabetically(firstMaterial, secondMaterial){
         let firstMaterialName = firstMaterial[0];
         let secondMaterialName = secondMaterial[0];
        return firstMaterialName.localeCompare(secondMaterialName);
      }
      for(let [material, quantity] of sortedkeyMaterails){
          console.log(`${material}: ${quantity}`);
      }
      for(let [material, quantity] of sortedMaterails){
          console.log(`${material}: ${quantity}`);
      }
  }

legendaryFarming(['3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards'])
legendaryFarming(['123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver'])