var sum = 3;
var result = "";

for (var num = 100; num <= 999; num++) {
    var firstDigit = Math.floor(num / 100);
    var secondDigit = Math.floor((num % 100) / 10);
    var thirdDigit = num % 10;      
    var sumOfDigits = firstDigit + secondDigit + thirdDigit;
    if (sum === sumOfDigits) {

        result += num + ", ";
    }
}

console.log(result);