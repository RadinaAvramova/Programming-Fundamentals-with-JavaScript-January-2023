function partyTime(input) {
    let invitedList = input.splice(0, input.indexOf("PARTY"));
    input.splice(0, 1);
    let VIP = [];
    let regular = [];
    for (let guest of invitedList) {
        if (guest[0] >= '0' && guest[0] <= '9') {
            VIP.push(guest);
        } else {
            regular.push(guest);
        }
    }
    for (let guest of input) {
        if (VIP.includes(guest)) {
            VIP.splice(VIP.indexOf(guest), 1);
        }
        if (regular.includes(guest)) {
            regular.splice(regular.indexOf(guest), 1);
        }
    }
    console.log(VIP.length + regular.length);
    VIP.forEach((x) => console.log(x));
    regular.forEach((x) => console.log(x));
}

function partyTime(input) {
    let vipGuestsList = [];
    let regularGuestsList = [];
    let reservation = input.shift();
    while (reservation !== 'PARTY') {
        if (/^\d+/.test(reservation)) {
            vipGuestsList.push(reservation);
        } else {
            regularGuestsList.push(reservation);
        }
        reservation = input.shift();
    }
    for (let guest of input) {
        if (vipGuestsList.indexOf(guest) >= 0) {
            vipGuestsList.splice(vipGuestsList.indexOf(guest), 1);
        }
        if (regularGuestsList.indexOf(guest) >= 0) {
            regularGuestsList.splice(regularGuestsList.indexOf(guest), 1);
        }
    }
    console.log(vipGuestsList.length + regularGuestsList.length);
    vipGuestsList.forEach(el => console.log(el));
    regularGuestsList.forEach(el => console.log(el));
}

function partyTime(list) {
 
    let reservations = {};
    let member = list.shift();
    let marker = ' ';
    let count = 1;
 
    while (member !== 'PARTY') {
        let isVip = !isNaN(member[0])
        if (!isVip) {
            if (reservations[member]) {
                reservations[marker.repeat(count).concat(member)] = 'Regular';
            }
            else reservations[member] = 'Regular';
 
        } else {
            if (reservations[member]) {
                reservations[marker.repeat(count).concat(member)] = 'VIP';
            }
            else reservations[member] = 'VIP';
        }
        count++
        member = list.shift();
    }
 
    list.forEach(guest => {
        if (reservations[guest]) delete reservations[guest];
        else {
            let filter = Object.entries(reservations).find(el => el[0].trim() === guest)
            delete reservations[filter[0]]
        }
    });
 
    let regularGuestsNotComing = [];
    let vipGuestsNotComing = [];
 
    let guestsNotCome = Object.entries(reservations);
 
    guestsNotCome.forEach(guest => {
        if (guest[1] === 'VIP') {
            vipGuestsNotComing.push(guest[0]);
        } else {
            regularGuestsNotComing.push(guest[0]);
        }
    });
    let allGuest = vipGuestsNotComing.concat(regularGuestsNotComing);
 
    console.log(allGuest.length);
    allGuest.forEach(el => console.log(el.trim()))
}

function partyTime(input) {
    let partyIndex = input.indexOf('PARTY');
    let guestList = input.slice(0, partyIndex);
    let comingGuests = input.slice(partyIndex + 1);

    let reservationList = generateGuestList(guestList);

    comingGuests.forEach(guest => {
        let status = checkForVIP(guest);
        let correctList = status ? 'vip' : 'regular';
        let currentGuest = reservationList[correctList].find(g => g.guest === guest);

        if (status && currentGuest) {
            currentGuest.isHere = true;
        } else if (currentGuest) {
            currentGuest.isHere = true;
        }
    });

    let vipGuests = reservationList.vip.filter(g => !g.isHere);
    let regularGuests = reservationList.regular.filter(g => !g.isHere);

    console.log(vipGuests.length + regularGuests.length);
    vipGuests.concat(regularGuests).forEach(g => {
        console.log(g.guest);
    })

    function generateGuestList(guests) {
        let obj = {
            vip: [],
            regular: [],
        };

        guests.forEach(guest => {
            let guestObj = { guest, isHere: false };

            if (checkForVIP(guest)) {
                obj.vip.push(guestObj);
            } else {
                obj.regular.push(guestObj);
            }
        });

        return obj;
    }

    function checkForVIP(guest) {
        return !isNaN(Number(guest[0]));
    }
}

function partyTime(guests) {
    let guestListArr = guests.splice(0, guests.indexOf('PARTY'));
    let guestList = new Map();
    guestList.set('VIP', []);
    guestList.set('regular', []);
    guests.splice(1, guests.length - 1).forEach(x => {
        if (guestListArr.includes(x)) { guestListArr.splice(guestListArr.indexOf(x), 1) }
    });

    guestList.set('VIP', guestList.get('VIP').concat(guestListArr.filter(x => !isNaN(x[0]))));
    guestList.set('regular', guestList.get('regular').concat(guestListArr.filter(x => isNaN(x[0]))));
    console.log(guestList.get('VIP').length + guestList.get('regular').length);
    [...guestList].map(x => console.log(x[1].join('\n')));
}

partyTime(['7IK9Yo0h',

'9NoBUajQ','Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc' ])

partyTime(['m8rfQBvl', 'fc1oZCE0','UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ' ])