// function demo(food, hay, cover, weight) {
    function guineaPig(input) {
        // exam input comes as array
        let [food, hay, cover, weight] = input;
    
        let foodGr = food * 1000;
        let hayGr = hay * 1000;
        let coverGr = cover * 1000;
        let weightGr = weight * 1000;
        let days = 1;
    
        while (days <= 30) {
            foodGr -= 300;
            if (days % 2 === 0) {
                hayGr -= (foodGr * 5) / 100;
            }
            if (days % 3 === 0) {
                coverGr -= weightGr * 0.3333;
            }
            // days++ used at the end of the cycle
            days++;
        }
        let foodKg = foodGr / 1000;
        let hayKg = hayGr / 1000;
        let coverKg = coverGr / 1000;
    
        // foodKg, hayKg, coverKg in validations
        if (foodKg >= 0 && hayKg >= 0 && coverKg >= 0) {
            console.log(`Everything is fine! Puppy is happy! Food: ${foodKg.toFixed(2)}, Hay: ${hayKg.toFixed(2)}, Cover: ${coverKg.toFixed(2)}.`)
            // || must be used for other case
        } else if (foodKg < 0 || hayKg < 0 || coverKg < 0) {
            console.log('Merry must go to the pet store!') // '!' must be used in message
        }
    }

    function guineaPig(input) {
        //1. Read input
        let foodKg = Number(input.shift());
        let hayKg = Number(input.shift());
        let coverKg = Number(input.shift());
        let weightKg = Number(input.shift());
        let hasToGoStore = false;

        //1.5 Iterate over 30 days
        for(let i = 1; i <= 30; i++) {
            //2. Modify food amount
            foodKg = foodKg - 0.3;
        

       
            //3. Modify has every 2nd day
            if(i % 2 === 0) {
                hayKg -= foodKg * 0.05;
            }       

            //4. Modify cover every 3rd day
            if(i % 3 === 0) {
                coverKg -= weightKg / 3;
            }

            if(foodKg - 0 < 1e-3 || hayKg - 0 < 1e-3 || coverKg - 0 < 1e-3) {
                hasToGoStore = true;
                break;
            }
        }

        return hasToGoStore
            ? `Merry must go to the pet store!`
            : `Everything is fine! Puppy is happy! Food: ${foodKg.toFixed(2)}, Hay: ${hayKg.toFixed(2)}, Cover: ${coverKg.toFixed(2)}.`;
    }

    function guineaPig(input) {
        //1. Read input
        let food = Number(input.shift()) * 1000;
        let hay = Number(input.shift()) * 1000;
        let cover = Number(input.shift()) * 1000;
        let weight = Number(input.shift()) * 1000;
        let hasToGoStore = false;

        //1.5 Iterate over 30 days
        for(let i = 1; i <= 30; i++) {
            //2. Modify food amount
            food = food - 300;
        
            //3. Modify has every 2nd day
            if(i % 2 === 0) {
                hay -= food * 0.05;
            }       

            //4. Modify cover every 3rd day
            if(i % 3 === 0) {
                cover -= weight / 3;
            }

            if(food <= 0 || hay <= 0 || cover <= 0) {
                hasToGoStore = true;
                break;
            }
        }

        return hasToGoStore
            ? `Merry must go to the pet store!`
            : `Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay /1000).toFixed(2)}, Cover: ${(cover /1000).toFixed(2)}.`;
    }
guineaPig(["10","5","5.2","1"]);
guineaPig(["1","1.5","3","1.5"]);