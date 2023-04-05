function solve(input) {
    const patternBarcode = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
    const patternDigit = /\d/;
    
    input.shift();
  
    input.forEach(barcode => {
      if (patternBarcode.test(barcode)) {
        const productGroup = [...barcode]
          .filter(char => patternDigit.test(char))
          .join('');
  
        if (productGroup.length > 0) {
          console.log(`Product group: ${productGroup}`);
        } else {
          console.log(`Product group: 00`);
        }
      } else {
        console.log('Invalid barcode');
      }
    });
}



  function solve(input) {
    const patternBarcode = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
    const patternDigits = /[0-9]/g;
  
    input.slice(1).forEach(barcode => {
      if (patternBarcode.test(barcode)) {
        const productGroup = (barcode.match(patternDigits) || ['0', '0']).join('');
        console.log(`Product group: ${productGroup}`);
      } else {
        console.log('Invalid barcode');
      }
    });
  }

  function solve(input) {
    let numberOfbarcode = Number(input.shift());
    let pattern = /^(?<start>@#+)(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])(?<end>@#+)$/;
    for (const line of input) {
        let code = '';
        match = pattern.exec(line);
        if (match) {
            for (const el of match.groups.barcode) {
                if (el.charCodeAt() >= 48 && el.charCodeAt() <= 57) {
                    code += el;
                }
            }
            code == '' ? console.log(`Product group: 00`) : console.log(`Product group: ${code}`);
        } else {
            console.log(`Invalid barcode`);
        }
    }
}

function solve(input) {
  let numberOfbarcode = Number(input.shift());

  let pattern = /(?<start>@#+)(?<barcode>[A-Z][A-Za-z0-9]{4,})(?<end>[A-Z]@#+)/;
  let code = "";

  for (const line of input) {
    match = pattern.exec(line);

    if (match) {
      let digitPattern = /\d/g;
      code = line.match(digitPattern);
      code === null
        ? console.log(`Product group: 00`)
        : console.log(`Product group: ${code.join("")}`);
    } else {
      console.log(`Invalid barcode`);
    }
  }
}

function fancyBarcode(input) {
  let patternOne = /^(?<start>@#+)(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])(?<end>@#+)$/
  let patternTwo = /\d/g

  let number = input.shift()

  let digits = 0
  for (let i = 0; i < number; i++) {
      let currBarcode = input[i].match(patternOne)

      if (currBarcode !== null) {
          let allDigits = '' // CORRECTION
          currBarcode = currBarcode[0].toString() // CORRECTION
          digits = currBarcode.match(patternTwo)
          if (patternTwo.test(digits)) {

              digits.forEach(digit => {
                  allDigits = allDigits + digit
              });
              // digits = 0 /// ???
              console.log(`Product group: ${allDigits}`);
          } else {
              console.log('Product group: 00');
          }
      } else {
          console.log("Invalid barcode");
      }
  }
}

