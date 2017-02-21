//input
var arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

//create a copy
var modifyArr = arr.slice();

// or create an empty array
// var modifyArr = new Array(arr.length);
// for (var row = 0; row < arr.length; row++) {
//     modifyArr[row] = new Array(arr[0].length);
// }

// fill the empty array
for (var row = 0; row < arr.length; row++) {
    for (var col = 0; col < arr[row].length; col++) {
        modifyArr[col][arr.length - 1 - row] = arr[row][col];
    }
}

//print 
console.log(arr);
console.log();
console.log(modifyArr);