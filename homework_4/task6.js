var arr = [
    [11, 12, 13, 14, 15, 16],
    [21, 22, 23, 24, 25, 26],
    [31, 32, 33, 34, 35, 36],
    [41, 42, 43, 44, 45, 46],
    [51, 52, 53, 54, 55, 56],
    [61, 62, 63, 64, 65, 66]
];

// sum of the elements on even rows
var sumOfRow = 0;
var sumOfElements = 0;
for (var row = 1; row < arr.length; row += 2) {
    for (var col = 0; col < arr[row].length; col++) {
        sumOfRow += arr[row][col];
    }
    sumOfElements += sumOfRow;
    console.log(arr[row] + " the sum of row is: " + sumOfRow)
    sumOfRow = 0;
}

console.log("Sum of the elements is: " + sumOfElements);