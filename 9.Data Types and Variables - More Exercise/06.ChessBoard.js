function chessBoard(arg) {
    let size = Number(arg)
    let currentColour = 'black'
    let previousColour = ''
    console.log('<div class="chessboard">')
 
    for (let rows = 1; rows <= size; rows++) {
        console.log('  <div>')
 
        for (let columns = 1; columns <= size; columns++) {
            console.log(`    <span class="${currentColour}"></span>`);
 
            previousColour = currentColour
            currentColour = previousColour === 'black' ? 'white' : 'black'
        }
 
        console.log('  </div>')
        if (size % 2 === 0) {
            previousColour = currentColour
            currentColour = previousColour === 'black' ? 'white' : 'black'
        }
    }
 
    console.log('</div>')
}

function chessBoard(number) {
        let table = 0;
        console.log(`<div class="chessboard">`);
        for (let i = 1; i <= number; i++) {
            console.log(`  <div>`);
            for (let j = 1; j <= number; j++) {
                table++;
                if (table % 2 === 0) {
                    console.log(`    <span class="white"></span>`);
                } else {
                    console.log(`    <span class="black"></span>`);
                }
                if (j === number) {
                    if (j % 2 === 0) {
                        table++;
                    }
                }
            }
            console.log(`  </div>`);
        }
    console.log(`</div>`);
}

chessBoard(3);