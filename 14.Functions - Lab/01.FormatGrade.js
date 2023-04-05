function formatGrade(grade) {
    let gradeText = '';
    if (grade < 3.00){
        gradeText = 'Fail';
    } else if (grade < 3.5) {
        gradeText = 'Poor';
    } else if (grade < 4.5) {
        gradeText = 'Good';
    } else if (grade < 5.5) {
        gradeText = 'Very good';
    } else if (grade <= 6) {
        gradeText = 'Excellent';
    }

    let gradeValueText = grade < 3 ? '2' : grade.toFixed(2);
    console.log(`${gradeText} (${gradeValueText})`);
}

function formatGrade(grade) {
    if(grade < 3.00) {
        console.log('Fail (2)');
    } else if (grade < 3.5) {
        console.log(`Poor (${grade.toFixed(2)})`);
    } else if (grade < 4.5) {
        console.log(`Good (${grade.toFixed(2)})`);
    } else if (grade < 5.5) {
       console.log(`Very good (${grade.toFixed(2)})`);
    } else if (grade <= 6) {
        console.log(`Excellent (${grade.toFixed(2)})`);
    }
}

formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.99);