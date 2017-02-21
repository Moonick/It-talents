var decimalNumber = 89;
var binaryArr = [];

var counter = 0;
do {
    binaryArr[counter] = decimalNumber % 2;
    decimalNumber = Math.floor(decimalNumber / 2);
    counter++;
} while (decimalNumber > 0);

var result = binaryArr.reverse();
console.log(result);