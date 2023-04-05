function travelTime(input) {

    let destination = generateDestination(input);

    function generateDestination(arr) {

        let obj = {}

        arr.forEach(line => {
            let tokens = line.split(" > ");
            let [country, city, price] = tokens;

            if (!obj.hasOwnProperty(country)) {
                obj[country] = {}
            }

            if (!obj[country].hasOwnProperty(city)) {

                obj[country][city] = price;
            }

            let oldPrice = obj[country][city];

            if (oldPrice > price) {
                obj[country][city] = price;
            }

        });
        return obj

    }

    let sorted = Object.keys(destination).sort((a, b) => a.localeCompare(b));

    for (const country of sorted) {
        console.log(`${country} -> ${cityPrice(destination[country])}`);
    }

    function cityPrice(obj) {
        let result = [];
        for (const key of Object.keys(obj)) {
            // result += `${key} -> ${obj[key]}`
            result.push(`${key} -> ${obj[key]}`);
        }
        return result.join(' ');
    }
}

function travelTime(arr) {
 
    let result = {};
 
    for (let line of arr) {
 
        let [state, town, price] = line.split(" > ").map(x=>x.trim());
 
        town = town.charAt(0).toUpperCase() + town.slice(1);
 
        if (!result.hasOwnProperty(state)) {
            result[state] = {};
        }
        if (!result[state].hasOwnProperty(town)) {
            result[state][town] = Number.POSITIVE_INFINITY;
        }
        if (result[state].hasOwnProperty(town)) {
            if ( result[state][town] > Number(price)) {
                result[state][town] = Number(price);
            }
        }
    }
    let sortedStates = Object.keys(result).sort((a, b)=>{
        "use strict";
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
 
    for (let state of sortedStates) {
        let innerResult = "";
        innerResult += (state + " -> ");
 
        let sortedTownsByPrice = Object.keys(result[state]).sort((t1,t2)=>{
            "use strict";
            return result[state][t1] - result[state][t2];
        });
 
        for (let obj of sortedTownsByPrice) {
            innerResult += (obj + " -> ");
            innerResult += (result[state][obj]+ " ");
        }
 
        console.log(innerResult.trim());
    }
}

function travelTime(input) {
    let destinations = {};
 
    for (let i = 0; i < input.length; i++) {
        let [country, town, price] = input[i].split(" > ").filter(e => e !== "");
        price = +price;
        town = town[0].toUpperCase() + town.slice(1);
 
        if (!destinations.hasOwnProperty(country)) {
            destinations[country] = {};
        }
        if (!destinations[country].hasOwnProperty(town)) {
            destinations[country][town] = price;
        }
        let prevPrice = destinations[country][town];
        if (prevPrice > price) {
            destinations[country][town] = price;
        }
    }
 
    let orderedCountries = [...Object.keys(destinations)].sort((a,b) => a.localeCompare(b));
    let result = "";
    for (let country of orderedCountries) {
        result += country + " -> ";
        let sortedPrices = [...Object.keys(destinations[country])].sort((a, b) => travelCost(a, b, destinations, country));
        for (let town of sortedPrices) {
            result += `${town} -> ${destinations[country][town]} `;
        }
        result += "\n";
    }
    console.log(result);
 
    function travelCost(town1, town2, destination, country) {
        let priceOne = destination[country][town1];
        let priceTwo = destination[country][town2];
 
        return priceOne - priceTwo
    }
}

travelTime([

    "Bulgaria > Sofia > 500",
    
    "Bulgaria > Sopot > 800",
    
    "France > Paris > 2000",
    
    "Albania > Tirana > 1000",
    
    "Bulgaria > Sofia > 200"  
])

travelTime([

    'Bulgaria > Sofia > 25000',
    
    'Bulgaria > Sofia > 25000',
    
    'Kalimdor > Orgrimar > 25000',
    
    'Albania > Tirana > 25000',
    
    'Bulgaria > Varna > 25010',
    
    'Bulgaria > Lukovit > 10'
])
