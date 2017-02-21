var arr = [
    [48, 72, 13, 14, 15],
    [21, 22, 53, 24, 75],
    [31, 57, 33, 34, 35],
    [41, 95, 43, 44, 45],
    [59, 52, 53, 54, 55],
    [61, 69, 63, 64, 65],
];

maxValue = -Infinity;
for (var row = 0; row < arr.length; row++) {
    for (var col = 0; col < arr[row].length; col++) {
        if (arr[row][col] > maxValue) {
            maxValue = arr[row][col];
        }
    }
}

var minValue = Infinity;
for (var row = 0; row < arr.length; row++) {
    for (var col = 0; col < arr[row].length; col++) {
        if (arr[row][col] < minValue) {
            minValue = arr[row][col];
        }
    }
}

console.log(maxValue);
console.log(minValue);