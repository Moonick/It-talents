var firstWord = "шапка";
var secondWord = "машина";

for (var index = 0; index < secondWord.length; index++) {
    if (firstWord.charAt(0) === secondWord.charAt(index)) {
        console.log(firstWord)
    } else {
        console.log(secondWord.charAt(index));
    }
}