var array1 = [1, 2, 3];
var array2 = [1, 2, 3, 8];

var areEqual = true;
var isLengthEqual = true;

if (array1.length !== array2.length) {
    areEqual = false;
}
if (array1.length > array2.length) {
    var lastIndex = array2.length;
} else {
    var lastIndex = array1.length;
}


for (var index = 0; index < lastIndex; index++) {
    if (array1[index] !== array2[index]) {
        areEqual = false;
        break;
    }
}
if (areEqual) {
    console.log("The arrays are equal.");
} else {
    console.log("The arrays are not equal.");
}
if (isLengthEqual) {
    console.log("The arrays are with equal lengths.");
} else {
    console.log("The arrays are not with equal lengths.");
}