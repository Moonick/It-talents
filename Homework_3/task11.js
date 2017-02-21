var array = [-23, -55, 17, 75, 56, 105, 134];
var numbersOfmultiples = 0;
var result = "";
for (var index = 0; index < array.length; index++) {
    if ((array[index] > 5) && (array[index] % 5 === 0)) {
        result += array[index] + ", "
        numbersOfmultiples++;
    }
}
result += numbersOfmultiples + " numbers";

console.log(result);