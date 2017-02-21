var arr1 = [18, 19, 32, 1, 3, 4, 5, 6, 7, 8];
var arr2 = [1, 2, 3, 4, 5, 16, 17, 18, 27, 11];

var arrMix = new Array(arr1.length);

for (var index = 0; index < arr1.length; index++) {
    if (arr1[index] > arr2[index]) {
        arrMix[index] = arr1[index];
    } else {
        arrMix[index] = arr2[index];
    }
}

console.log(arr1);
console.log(arr2);
console.log(arrMix);