var numberA = 16;
var numberB = 14;
var numberC = 18;

if ((numberA <= numberB) && (numberB <= numberC)) {
    console.log(numberA);
    console.log(numberB);
    console.log(numberC);
} else if ((numberB <= numberA) && (numberA <= numberC)) {
    console.log(numberB);
    console.log(numberA);
    console.log(numberC);
} else if ((numberA <= numberC) && (numberC <= numberB)) {
    console.log(numberA);
    console.log(numberC);
    console.log(numberB);
} else if ((numberB <= numberC) && (numberC <= numberA)) {
    console.log(numberB);
    console.log(numberC);
    console.log(numberA);
} else if ((numberC <= numberA) && (numberA <= numberB)) {
    console.log(numberC);
    console.log(numberA);
    console.log(numberB);
}