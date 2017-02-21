var numberA = 2;
var numberB = 5;

for (var row = 1; row <= numberA; row++) {
    for (var col = 1; col <= numberB; col++) {
        var result = row * col;
        console.log(row + " * " + col + " = " + result);
    }
}