var number = 53635;

var numberN = number;
var reversedNumber = "";
do {
    reversedNumber += (numberN % 10);
    numberN = Math.floor(numberN / 10);
} while (numberN > 0);

if (reversedNumber === number) {
    console.log("Number" + number + "is palindrome.");
} else {
    console.log("Number " + number + " is not palindrome.");
}