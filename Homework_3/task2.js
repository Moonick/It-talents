var array1 = [12, 4, 6, 23, -5, 8, 5];
var reversedIndex = array1.length - 1;
var index = array1.length;

while (reversedIndex >= 0) {
    array1[index] = array1[reversedIndex];
    reversedIndex--;
    index++;
}

console.log(array1);