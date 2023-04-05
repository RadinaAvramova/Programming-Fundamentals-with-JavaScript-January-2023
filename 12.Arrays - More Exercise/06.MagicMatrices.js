function magicMatrices(matrix) {
    for (let i = 0; i < matrix.length - 1; i++) {
        let sumROne = matrix[i].reduce((a, b) => a + b, 0);
        let sumRTwo = matrix[i + 1].reduce((a, b) => a + b, 0);
        let sumCOne = 0;
        let sumCTwo = 0;

        for (let j = 0; j < matrix.length; j++) {
            sumCOne += matrix[i][j];
            sumCTwo += matrix[i + 1][j];
        }

        if (sumROne !== sumRTwo || sumCOne !== sumCTwo) {
            return false;
        }
    }

    return true;
}

function magicMatrices(matrix) {
    const reduce = (prev, curr) => prev + curr;
    let sum = matrix[0].reduce(reduce);
    for (let row = 0; row < matrix.length; row++) {
        let rowSum = matrix[row].reduce(reduce);
        if (rowSum !== sum) {
            return false;
        }
        if (row === 0) {
            for (let col = 0; col < matrix[row].length; col++) {
                let columSum = 0;
                for (let i = 0; i < matrix.length; i++) {
                    columSum += matrix[col][i];
                }
                if (columSum !== sum) {
                    return false;
                }
            }
        }
    }
    return true;
}

magicMatrices([[4, 5, 6],[6, 5, 4],[5, 5, 5]]);
magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);
magicMatrices([[1, 0, 0], [0, 0, 1], [0, 1, 0]]);
 