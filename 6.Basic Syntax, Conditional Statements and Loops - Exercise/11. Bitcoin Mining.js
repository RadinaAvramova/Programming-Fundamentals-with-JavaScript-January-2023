function bitcoinMining(array) {
    let daysCounter = 0;
    let totalGold = 0;
    let bitcoins = 0;
    let day = 0;
    let gram = 67.51;
    let totalPrice = 0;
    let firstDay = 0;
    for (let i = 0; i < array.length; i++) {
        day++;
        daysCounter++;
        totalGold = 0;
        if (day % 3 != 0) {
            totalGold += array[i];
        } else if (day % 3 == 0) {
            totalGold += array[i] * 0.7;
        }
        totalPrice = totalPrice + totalGold * gram;
 
        if (totalPrice >= 11949.16) {
            if (bitcoins == 0) {
                firstDay = daysCounter;
                while (totalPrice >= 11949.16) {
                    totalPrice -= 11949.16;
                    bitcoins++;
                }
            } else if (bitcoins >= 1) {
                while (totalPrice >= 11949.16) {
                    totalPrice -= 11949.16;
                    bitcoins++;
                }
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins >= 1) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalPrice.toFixed(2)} lv.`);
}

function bitcoinMining(array) {
    let bitcoin = 11949.16;
    let gold = 67.51;
    let totalSum = 0;
    let day = 0;
    let firstDay = 0
    let boughtBitcoin = 0;
    let countBitcoin = 0;
    let sumBitcoins = 0;
 
 
    for (let index = 0; index < array.length; index++) {
        day++;
        let element = array[index];
        if (day % 3 == 0) {
            element = element * 0.7;
        }
        let singleDayEarning = element * gold;
        totalSum += singleDayEarning;
 
 
        if (totalSum >= bitcoin) {
            countBitcoin++;
            boughtBitcoin = Math.floor(totalSum / bitcoin);
            totalSum = totalSum - (bitcoin * boughtBitcoin);
            sumBitcoins += boughtBitcoin;
        }
        if (countBitcoin == 1) {
            firstDay = day;
        }
    }
 
    console.log(`Bought bitcoins: ${sumBitcoins}`);
    if (firstDay != 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalSum.toFixed(2)} lv.`);
 
}

bitcoinMining([100,200,300]);
bitcoinMining([3124.15, 504.212, 2511.124]);

