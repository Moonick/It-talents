var arr = [7.13, -0.2, 4.9, 5.1, -6.34, 1.12];

for (var index = 0; index < arr.length; index++) {
    if (arr[index] < 0) {
        arr[index] = -arr[index];
    }
}

var maxValue = -Infinity;
var firstIndex = 0;
for (var index = 1; index < arr.length; index++) {
    if (arr[index] > maxValue) {
        maxValue = arr[index];
        firstIndex = index;
    }
}
var reslt = maxValue + ", ";

var maxValue = -Infinity;
var secondIndex = 0;
for (var index = 0; index < arr.length; index++) {
    if (arr[index] > maxValue && index !== firstIndex) {
        maxValue = arr[index];
        secondIndex = index;
    }
}
reslt += maxValue + ", ";

var maxValue = -Infinity;
for (var index = 0; index < arr.length; index++) {
    if (arr[index] > maxValue && index !== secondIndex && index !== firstIndex) {
        maxValue = arr[index];
        indexOfMaxValue = index;
    }
}
reslt += maxValue;

console.log(reslt);