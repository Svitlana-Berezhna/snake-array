const snakeArray = (snakeStart) => {
    let startRow = 0;
    let startColumn = 0;
    let endRow = 5;
    let endColumn = 6;
    let snakeArray = new Array(endRow + 1).fill().map(() => new Array(endColumn + 1).fill(""));
    while (startColumn <= endColumn && startRow <= endRow) {
        for (let j = startColumn; j <= endColumn; j++) {
            snakeArray[startRow][j] = snakeStart;
            snakeStart++;
        }
        startRow++;
        for (let i = startRow; i <= endRow; i++) {
            snakeArray[i][endColumn] = snakeStart;
            snakeStart++;
        }
        endColumn--;
        for (let j = endColumn; j >= startColumn; j--) {
            snakeArray[endRow][j] = snakeStart;
            snakeStart++;
        }
        endRow--;
        for (let i = endRow; i >= startRow; i--) {
            snakeArray[i][startColumn] = snakeStart;
            snakeStart++;
        }
        startColumn++;
    }
    return snakeArray;
}

module.exports = snakeArray;
