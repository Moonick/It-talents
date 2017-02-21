var arr = [7.1, 8.5, 0.2, 3.7, 0.99, 1.4, -3.5, -110, 212, 341, 1.2];

var count = 0;
var index = 0;
var newArr = [];

while (count < arr.length) {
    if (arr[count] >= -2.99 && arr[count] <= 2.99) {
        newArr[index] = arr[count];
        index++;
    }
    count++;
}

console.log(newArr);