function lettersChangeNumbers(str) {
    let words = str.split(' ').filter(x => x.length > 1);
    let final = 0;
    
    for(let item of words){
        let first = item[0];
        let last = item[item.length - 1];
        let num = item.substring(1, item.length - 1);
        let firstPos = 0;
        let lastPos = 0;
 
        
        if(first.charCodeAt(0) >= 97 && first.charCodeAt(0) <= 122){
            firstPos = first.charCodeAt(0) - 96;
            num = num * firstPos;
        }else{
            firstPos = first.charCodeAt(0) - 64;
            num = num / firstPos;
        }
        
        if(last.charCodeAt(0) >= 97 && last.charCodeAt(0) <= 122){
            lastPos = last.charCodeAt(0) - 96;
            num += lastPos;
        }else{
            lastPos = last.charCodeAt(0) - 64;
            num -= lastPos;
        }
        
        final += num;
    }
 
    console.log(final.toFixed(2));
}


function lettersChangeNumbers(input) {
    let sequences = input.split(/\s+/);
    let sum = 0;
    const isLowerCase = (string) => /^[a-z]$/.test(string); 
    const isUpperCase = (string) => /^[A-Z]$/.test(string);
 
    for (let el of sequences) {
        let result = 0;
        let firstChar = el.charAt(0);
        let firstCharPosition = el.toLowerCase().charCodeAt(0) - 96;
        let lastChar = el.charAt(el.length - 1);
        let lastCharPosition = el.toLowerCase().charCodeAt(el.length - 1) - 96;
        let numberPart = Number(el.substring(1, el.length - 1));
 
        if(isUpperCase(firstChar)){
            result = numberPart/firstCharPosition;
            sum += result;    
        }
        if(isLowerCase(firstChar)){
            result = numberPart * firstCharPosition;
            sum += result;
        }
        if(isUpperCase(lastChar)){
            sum -= lastCharPosition;
        }
        if(isLowerCase(lastChar)){
            sum += lastCharPosition;
        }   
    }
    console.log(sum.toFixed(2));
}


lettersChangeNumbers('A12b s17G');
lettersChangeNumbers('P34562Z q2576f H456z');
lettersChangeNumbers('a1A');