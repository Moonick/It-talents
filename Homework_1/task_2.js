
var numberA = 7;
var numberB = 48;

// var numberA = 4.0;
// var numberB = 15.5;


var sum = numberA + numberB;
var product = numberA * numberB;
var divisionNoRemainder  = numberA / numberB;
var divisionWithRemainder  = numberA % numberB;

console.log("Sum of numberA and numberB: " + sum);
console.log("Product of numberA and numberB: " + product.toFixed(2));
console.log("Division without remainder of numberA and numberB: " + divisionNoRemainder.toFixed(2));
console.log("Division with remainder of numberA and numberB: " + divisionWithRemainder);