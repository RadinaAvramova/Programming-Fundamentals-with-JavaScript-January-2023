//The first parameter - lost fights count - is an integer in the range [0, 1000].

//The second parameter - helmet price - is the floating-point number in the range [0, 1000].

//The third parameter - sword price - is the floating-point number in the range [0, 1000].

//The fourth parameter - shield price - is the floating-point number in the range [0, 1000].

// The fifth parameter - armor price - is the floating-point number in the range [0, 1000].

//· Every second lost game, his helmet is broken.

//· Every third lost game, his sword is broken.

//· When both his sword and helmet are broken in the same lost fight, his shield also breaks.

//· Every second time, when his shield brakes, his armor also needs to be repaired.

function gladiatorExpenses (lostFight, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let sum = 0;
    for (let i = 1; i <= lostFight; i++) {
        if (i % 2 === 0) {
            sum += helmetPrice;
        }
        if (i % 3 === 0) {
            sum += swordPrice;
        }
        if (i % 6 === 0) {
            sum += shieldPrice;
        }
        if (i % 12 === 0) {
            sum += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}

gladiatorExpenses(7,2,3,4,5);
gladiatorExpenses(23,12.50,21.50,40,200);