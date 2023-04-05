function convertToObject(json) {
    //TODO use the tips to write the function
    let person = JSON.parse(json);
    let entries = Object.entries(person);

    for(let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}

function convertToObject(data) {
    let info = JSON.parse(data);

    for (const key of Object.keys(info)) {
        console.log(`${key}: ${info[key]}`);
    }
}


convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');