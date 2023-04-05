function dayOfWeeek(day) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday","Sunday"];
    if(day >= 1 && day <= 7) {
        console.log(days[day - 1]);
    } else {
        console.log("Invalid day!");
    }
}

function dayOfWeeek(num) {
    let daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday","Sunday"];
    if(num < 1 || num > 7) {
        console.log('Invalid day!');
    } else {
        console.log(daysOfTheWeek[num - 1]);
    }
}

dayOfWeeek(3);
dayOfWeeek(6);
dayOfWeeek(11);
