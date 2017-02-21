var result = "";
var fistNumber = 102;
var lastNumber = 987;

for (var num = fistNumber; num <= lastNumber; num++) {
    var firstDigit = Math.floor(num / 100);
    var secondDigit = Math.floor((num % 100) / 10);
    var thirdDigit = num % 10;
    if (firstDigit !== secondDigit && firstDigit !== thirdDigit && secondDigit !== thirdDigit) {
        if (num == lastNumber) {
            result += num;
            break;
        }
        result += num + ", ";
    }
}
console.log(result);