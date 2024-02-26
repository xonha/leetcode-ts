// 6. Zigzag Conversion

function convert(s: string, numRows: number): string {
    let index = numRows - 1;
    let matrix: string[][] = [];
    let i = 0;
    let j = 0;
    let indexFullCol = index;
    let isFullCol = true;
    let fullString = "";

    for (let char of s) {
        if (!matrix[i]) matrix[i] = [];
        matrix[i][j] = char;

        if (i === index || !isFullCol) {
            isFullCol = false;
            j++;
            if (numRows > 1) i--;
        } else i++;

        if (i === 0 && j === indexFullCol) {
            indexFullCol += index;
            isFullCol = true;
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        fullString += matrix[i].join("");
    }
    return fullString;
}

console.log(convert("AB", 1));
console.log(convert("A", 2));
console.log(convert("PAYPALISHIRING", 4));
