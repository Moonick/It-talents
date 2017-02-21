//input
var arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

//max sum of rows
var maxSumRow = -Infinity;
var currentSumRow = 0;
for (var row = 0; row < arr.length; row++) {
    for (var col = 0; col < arr[row].length; col++) {
        currentSumRow += arr[row][col];
        if (maxSumRow < currentSumRow) {
            maxSumRow = currentSumRow;
        }
    }
    currentSumRow = 0;
}

console.log("Max sum of rows is : " + maxSumRow);

//max sum of cols
var maxSumCol = -Infinity;
var currentSumCol = 0;
for (var col = 0; col < arr[0].length; col++) {
    for (var row = 0; row < arr.length; row++) {
        currentSumCol += arr[row][col];
        if (maxSumCol < currentSumCol) {
            maxSumCol = currentSumCol;
        }
    }
    currentSumCol = 0;
}
console.log("Max sum of cols is : " + maxSumCol);

if (maxSumRow > maxSumCol) {
    console.log("Max sum of rows is > then max sum of cols.");
} else {
    console.log("Max sum of cols is > then max sum of rows.");

}