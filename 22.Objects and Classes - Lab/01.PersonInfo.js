function personInfo(firstName, lastName, age) {
    let person = {};
    person.firstName = firstName;
    //TODO: Add other properties
    return person;
}

function printInfo(firstName, lastName, age) {
    let info = {
        firstName: firstName,
        lastName: lastName,
        age: age,
    }

    return info;
}

function personInfo(firstName, lastName, age) {

    let myPersonInfo = {
        firstName: firstName,
        lastName: lastName,
        age: age
    }

    return myPersonInfo;
}

function personInfo(fName, lName, incomeAge) {

    let myPersonInfo = {
        firstName: fName,
        lastName: lName,
        age: incomeAge
    }

    return myPersonInfo;
}

function personInfo(firstName, lastName, age) {

    let myPersonInfo = {
        firstName,
        lastName,
        age
    }

    return myPersonInfo;
}

function personInfo(firstName, lastName, age) {

    let myPersonInfo = {}

    myPersonInfo.firstName = firstName;
    myPersonInfo.lastName = lastName;
    myPersonInfo.age = age;

    return myPersonInfo;
}

console.log(personInfo("Peter", 
"Pan",
"20"))
console.log(personInfo("George", 
"Smith",
"18"));