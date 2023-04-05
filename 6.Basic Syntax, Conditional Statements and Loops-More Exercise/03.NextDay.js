function nextDay(year, month, day) {
    let nextDay = new Date(year, month - 1, day + 1);
    let newYear = nextDay.getFullYear();
    let newMonth = nextDay.getMonth() + 1;
    let newDate = nextDay.getDate();
    console.log(`${newYear}-${newMonth}-${newDate}`);
}

function nextDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    date.setDate(date.getDate() + 1);
    let newYear = date.getFullYear();
    let newMonth = date.getMonth() + 1;
    let newDate = date.getDate();
    console.log(`${newYear}-${newMonth}-${newDate}`);
}

function nextDay(year, month, day) {
    if (year <= 99) year += 1900;
    let date = new Date(`${year}-${month}-${day} 12:00`);
    date.setDate(date.getDate() + 1);
    let newDate = date.toISOString().split('T')[0];
    [yyyy, mm, dd] = newDate.split('-');
    console.log(`${yyyy}-${removeLeadingZeroe(mm)}-${removeLeadingZeroe(dd)}`);

    function removeLeadingZeroe (str) {
        return str.replace(/^0+/, '');
    }
}

function nextDay(year, month, day) {
    let myDate = new Date(year, month - 1, day + 1);
    console.log(`${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`);
    //console.log(myDate.getFullYear());
    //console.log(myDate.getMonth() + 1);
    //console.log(myDate.getDate());
}

nextDay(2016,9,30);
nextDay(2020,3,24);
