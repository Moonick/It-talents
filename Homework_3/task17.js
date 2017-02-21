var arr = [1, 5, 2, 4, 3, 7];
var isZigZag = true;

for (var index = 1; index < arr.length - 1; index += 2) {
    if (arr[index - 1] > arr[index] || arr[index] < arr[index + 1]) {
        isZigZag = false;
        break;
    }
}

if (isZigZag) {
    console.log("The array is zig-zag.");
} else {
    console.log("The array is not zig-zag.");
}