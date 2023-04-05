function convertMetersToKilometers (input) {
    let distanceMeteres = Number(input)
    let distanceKilometeres = distanceMeteres/ 1000;
    console.log(distanceKilometeres.toFixed(2)); 
}

convertMetersToKilometers(1852);
convertMetersToKilometers(798);