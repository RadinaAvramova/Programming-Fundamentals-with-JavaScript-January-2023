function companyUsers(input) {
    let companies = {};
    for (const elem of input) {
        let [company, id] = elem.split(' -> ');
        if (!companies.hasOwnProperty(company)) {
            companies[company] = [];
        }
        companies[company].push(id);
    }
    let sorted = Object.entries(companies);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    for (let elem of sorted) {
        console.log(elem[0]);
        let set = new Set(elem[1]);
        for (let number of set) {
            console.log(`-- ${number}`);
        }
    }
}


function companyUsers(input) {
    let arr = [];
    let createObj = input.map(el => {
        let obj = {};
        let [company, id] = el.split(' -> ');
        obj.company = company;
        obj.id = id;
        arr.push(obj);
    })

    let map = {};

    for (let i = 0; i < arr.length; i++) {
        let key = arr[i].company;
        let value = arr[i].id;

        if (key in map) {
            if (!map[key].includes(value)) {
                map[key].push(value);
            }
        } else {
            map[key] = [value];
        }
    }

    const ordered = Object.keys(map)
        .sort()
        .reduce((obj, key) => {
            obj[key] = map[key];
            return obj;
        }, {});

    for (let key in ordered) {
        if (ordered[key].length > 1) {
            console.log(key);
            console.log(`-- ${ordered[key].join('\n-- ')}`);
        } else {
            console.log(`${key}`);
            console.log(`-- ${ordered[key]}`);
            // console.log(`${key}-- ${ordered[key]}`);
        }
    }
}

companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ]);
companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111' ])