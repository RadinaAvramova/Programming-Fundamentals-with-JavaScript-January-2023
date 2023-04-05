function sumDigits (num) {
    let text = num.toString();
    let sum = 0;

    for (let i = 0; i < text.length; i++) {
        sum += Number(text[i]);
    }

    console.log(sum);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);
