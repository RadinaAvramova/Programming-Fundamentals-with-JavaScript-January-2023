function schoolRegister(arr) {
    let schoolRegister = {};
    for (let line of arr) {
        let tokens = line.split(', ');
        let grade = Number(tokens[1].split(': ')[1]) + 1;
        let name = tokens[0].split(': ')[1];
        let score = Number(tokens[2].split(': ')[1]);
        if (score > 3) {
            let student = {name, score};
            if (!schoolRegister.hasOwnProperty(grade)) {
                schoolRegister[grade] = [];
            }
            schoolRegister[grade].push(student);
        }
    }
    let sortedGrades = Object.keys(schoolRegister).sort((a,b) => a - b);
    for (let grade of sortedGrades) {
        let students = schoolRegister[grade];
        console.log(`${grade} Grade`);
        console.log(`List of students: ${students.map(s => s.name).join(', ')}`);
        console.log(`Average annual score from last year: ${average(students.map(s => s.score)).toFixed(2)}`);
        console.log();
    }

    function average(arr) {
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }
}

function schoolRegister(arr) {
	let register = {};
	for (const line of arr) {
		const tokens = line.split(' ');
		const studentName = tokens[2].slice(0, tokens[2].length - 1);
		const stundentGrade = Number(tokens[4].slice(0, tokens[4].length - 1));
		const graduatedWithAverage = Number(tokens[tokens.length - 1]);

		if (graduatedWithAverage >= 3) {
			if (!register.hasOwnProperty(stundentGrade)) {
				register[stundentGrade] = {
					name: [studentName],
					average: [graduatedWithAverage],
				};
			} else {
				register[stundentGrade].name.push(studentName);
				register[stundentGrade].average.push(graduatedWithAverage);
			}
		}
	}
	for (const grade in register) {
		const student = register[grade]
		console.log(`${Number(grade) + 1} Grade`);
		console.log(`List of students: ${student.name.join(', ')}`);
		const averageNote = student.average.reduce((a,b) => a + b) / student.average.length
		console.log(`Average annual score from last year: ${averageNote.toFixed(2)}`);
		console.log(" ");
	}
}


schoolRegister([

    "Student name: Mark, Grade: 8,Graduated with an average score: 4.75",
    
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90", 
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15", 
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95", 
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00", 
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05", 
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88", 
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00" ])


schoolRegister([

        'Student name: George, Grade: 5, Graduated with an average score: 2.75',
        
        'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
        
        'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
        
        'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
        
        'Student name: John, Grade: 9, Graduated with an average score: 2.90',
        
        'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
        
        'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
])