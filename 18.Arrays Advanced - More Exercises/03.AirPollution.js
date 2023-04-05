// FIRST METHOD
mapOfSofia.forEach((line, rowIndex) => {
    line.forEach((number, colIndex) => {
      if (number >= 50) {
        return (result += `[${rowIndex}-${colIndex}], `);
      }
    });
  });

  airPollution(['5 7 72 14 4','41 35 37 27 33','23 16 27 42 12','2 20 28 39 14','16 34 31 10 24'],['breeze 1', 'gale 2', 'smog 25']);
  airPollution(['5 7 3 28 32','41 12 49 30 33','3 16 20 42 12','2 20 10 39 14','7 34 4 27 24'],['smog 11', 'gale 3', 'breeze 1','smog 2']);
  airPollution(['5 7 2 14 4','21 14 2 5 3','3 16 7 42 12','2 20 8 39 14','7 34 1 10 24'],['breeze 1', 'gale 2', 'smog 35']);