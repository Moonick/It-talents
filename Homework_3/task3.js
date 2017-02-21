var numberN = 5;

var array = [numberN, numberN];
var startIndex = 2
var lastIndex = 10;

for (var index = startIndex; index < lastIndex; index++) {
    array[index] = array[index - 1] + array[index - 2];
}

console.log(array);