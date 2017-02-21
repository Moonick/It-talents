var array = [1, 2, 5, 5, 5, 6, 7];
var numberOfElements = 7;
var sumOfElements = 0;
for (var index = 0; index < array.length; index++) {

    sumOfElements += array[index];
}

var average = (sumOfElements / numberOfElements).toFixed(2);
var elementToAverage = 0;

for (var index = 1; index < array.length; index++) {
    if (average > array[index - 1] && average < array[index]) {
        if (average + array[index - 1] > average + array[index]) {
            elementToAveraage = array[index - 1];
        } else {
            elementToAverage = array[index];
        }
    }

    if (average === array[index]) {
        elementToAverage = array[index];
    }
}

console.log("The average is: " + average);
console.log("The closest element is: " + elementToAverage);