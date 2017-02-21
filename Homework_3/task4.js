var numberN = 5;

var array = [10, 66, 1, 66, 10];
var isMirror = true;
var reversedIndex = array.length - 1;
for (var index = 0; index < array.length / 2; index++) {
    if (array[index] !== array[reversedIndex]) {
        isMirror = false;
        break;
    }
    reversedIndex--;
}
if (isMirror) {
    console.log("The array is mirrored.");
} else {
    console.log("The array is not mirrored.");
}