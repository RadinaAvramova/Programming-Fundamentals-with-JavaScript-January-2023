function requiredReading (numberPages, numberPagesPerHour, daysCounter){
    let totalTime = numberPages / numberPagesPerHour;
    let requiredHoursPerDay = totalTime / daysCounter;
    console.log(requiredHoursPerDay);
}

requiredReading(212,20,2);
requiredReading(432,15,4);
