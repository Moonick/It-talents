var array = [10, 3, 5, 8, 6, -3, 7];
var minDivision = array[0];
for (var count = 0; count < array.length; count++) {
    if (array[count] % 3 === 0 && minDivision > array[count]) {
        minDivision = array[count];
    }
}
if (minDivision % 3 === 0) {

    console.log(minDivision);
} else {
    console.log("No such a number.")
}