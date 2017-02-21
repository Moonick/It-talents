var array = [2, 3, 7, -5];
var lastIndex = array.length - 1;
for (var index = 0; index < array.length / 2; index++) {
    array[index] = array[index] + array[lastIndex];
    array[lastIndex] = array[index] - array[lastIndex];
    array[index] = array[index] - array[lastIndex];
    lastIndex--;
}
console.log(array);