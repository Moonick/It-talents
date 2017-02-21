var num = 5;
var count = 2;
var factorial = 1;
do {
    factorial *= count;
    count++;
} while (count <= num);

console.log(factorial);