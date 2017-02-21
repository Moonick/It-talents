var numberA = 16;
var numberB = 14;
var numberC = 18;

/*
numberA = numberA + numberB;
numberB = numberA - numberB;
numberA = numberA - numberB;

numberA = numberA + numberC;
numberC = numberA - numberC;
numberA = numberA - numberC;
*/

numberA = numberA ^ numberB;
numberB = numberA ^ numberB;
numberA = numberA ^ numberB;

numberA = numberA ^ numberC;
numberC = numberA ^ numberC;
numberA = numberA ^ numberC;


console.log("a = " + numberA);
console.log("b = " + numberB);
console.log("c = " + numberC);


