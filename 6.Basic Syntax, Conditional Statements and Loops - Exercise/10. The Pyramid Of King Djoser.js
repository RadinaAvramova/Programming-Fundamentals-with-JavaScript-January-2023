function thePyramidOfKingDjoser(baseSide, blockHeight) {
    baseSide = Number(baseSide);
    blockHeight = Number(blockHeight);
    let floor = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    while (baseSide > 1) {
        let totalBlocks = (baseSide * baseSide * blockHeight);
        let innerBlocks = ((baseSide - 2) * (baseSide - 2)) * blockHeight;
        let outerBlocks = totalBlocks - innerBlocks;

        if (baseSide - 2 === 0) {
            break;
        }

        floor++;
        baseSide -= 2;

        if (floor % 5 === 0) {
            lapis += outerBlocks;
            stone += innerBlocks;
        } else {
            marble += outerBlocks;
            stone += innerBlocks;
        }

    }
    floor++;
    height = Math.floor(floor * blockHeight);
    gold += Math.ceil(baseSide * baseSide * blockHeight);

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${gold}`);
    console.log(`Final pyramid height: ${height}`);
}

function thePyramidOfKingDjoser(base, increment) {
 
    let totalstone = 0;
    let totalmarble = 0;
    let totallapis = 0;
    let totalgold = 0;
    let row = 0;
    let currentbase=base;
 
    while (currentbase>2) {
     let marbel=currentbase*4-4;
     let stone=currentbase*currentbase-marbel;
        totalstone+=stone;
 
        row++;
        if(row%5===0){
            totallapis+=marbel;
        }else{
            totalmarble+=marbel;
        }
        currentbase-=2;
    }
    row++;
    let gold=currentbase*currentbase;
 
    stone = Math.ceil(totalstone * increment);
    marble = Math.ceil(totalmarble * increment);
    lapis = Math.ceil(totallapis * increment);
    totalgold = Math.ceil(gold * increment);
    totalHeight = Math.floor(row*increment);
 
    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${totalgold}`);
    console.log(`Final pyramid height: ${totalHeight}`);
 
}

thePyramidOfKingDjoser(12,1);
thePyramidOfKingDjoser(23,0.5);