function bonusScoringSystem(arr) {
    let studentsCount = Number(arr.shift());
    let allLectures = Number(arr.shift());
    let initialBonus = Number(arr.shift());
    let maxAtt = 0;
    let maxBonus = 0;
    for (let i = 0; i < studentsCount; i++) {
        let attendances = arr[i];
        let bonus = (attendances / allLectures) * (5 + initialBonus);
        if (bonus >= maxBonus) {
            maxBonus = bonus;
            maxAtt = attendances;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAtt} lectures.`);
}

function bonusScoringSystem(input) {
    input = input.map(x=>Number(x))
    let students = input.shift()
    let lectures = input.shift()
    let initBonus = input.shift()
    let highestScore =0;
    let totalBonus = 0;
    for (let i = 0; i < students; i++) {
        let student = input[i];
        if(student <= lectures){
            if (student>highestScore) {
                highestScore=student;
                totalBonus = Math.ceil(highestScore/lectures*(5+initBonus))
            }
        }
        
    }
    console.log(`Max Bonus: ${totalBonus}.`);
    console.log(`The student has attended ${highestScore} lectures.`);
}

bonusScoringSystem(['5',  '25', '30','12', '19', '24','16','20']);
bonusScoringSystem(['10', '30', '14', '8','23', '27', '28', '15','17', '25', '26', '5','18']);