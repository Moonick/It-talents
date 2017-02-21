var arr = [
    [11, 12, 13, 14, 15, 16],
    [21, 22, 23, 24, 25, 26],
    [31, 32, 33, 34, 35, 36],
    [41, 42, 43, 44, 45, 46],
    [51, 52, 53, 54, 55, 56],
    [61, 62, 63, 64, 65, 66]
];

var printedRow = "";
var sumOfRow = 0;
var sumOfElements = 0;
for (var row = 0; row < arr.length; row++) {
    for (var col = 0; col < arr[row].length; col++) {
        // add to the printed row only elements that have an even sum of indexs
        if ((col + row) & 1) {
            printedRow += ", ";
        } else {
            printedRow += arr[row][col] + ", ";
            sumOfRow += arr[row][col];
        }

    }
    //trim the extra symbols
    if (row & 1) {
        printedRow = printedRow.slice(2, printedRow.length - 1);
    } else {
        printedRow = printedRow.slice(0, printedRow.length - 1);
    }
    //sum the elements of the row
    sumOfElements += sumOfRow;
    //print the elements and there sum
    console.log(printedRow + " the sum of row is: " + sumOfRow);
    //clear the variables for next row
    sumOfRow = 0;
    printedRow = "";
}
//print the sum of all rows
console.log("\nSum of the elements is: " + sumOfElements);