//var enterRandom = Number(prompt("Въведете 4-цифренo естествено число от интервала [1000.. 9999]:"));


var randomNumber = Math.floor(Math.random() * (9999 - 1000) + 1000); // 1000..9999

var firstNumber = ((Math.floor(randomNumber / 1000) * 10) + (randomNumber % 10));
var secondNumber = (Math.floor((randomNumber % 1000) / 10));

console.log(randomNumber);

if (firstNumber > secondNumber) {
    console.log("по-голямо " + firstNumber + ">" + secondNumber)
} else {
    console.log("по-малко " + firstNumber + "<" + secondNumber)
}
if (firstNumber === secondNumber) {
    console.log("равни" + firstNumber + "=" + secondNumber)
}