function cityInfo(city) {
    let entries = Object.entries(city);
    for (let [ key, value ] of entries) {
        console.log(`${key} -> ${value}`);
    }
}

function printCity(city) {
    for (const key of Object.keys(city)) {
        console.log(`${key} -> ${city[key]}`);
    }
}

function city(obj){
    for(let key of Object.keys(obj)){
        console.log(`${key} -> ${obj[key]}`);
    }
}

function city(obj){
    for(let key of Object.keys(obj)){
        console.log(`${key} -> ${obj[key]}`);
    }
}

function city(obj){
    for(let [key,value] of Object.entries(obj)){
        console.log(`${key} -> ${value}`);
    }
}

city({
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})

city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
})