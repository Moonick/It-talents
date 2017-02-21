var str = "хипопотам, хипопотук";

var words = str.split(", ");


if (words[0].length == words[1].length) {
    console.log("Двата низа са с равна дължина.");
} else {
    console.log("Двата низа не са с равна дължина.");
}
if (words[0].length < words[1].length) {
    var cont = words[0];
    words[0] = words[1];
    words[1] = cont;
}

var firstWord = words[0].split("");
var secondWord = words[1].split("");

for (var index = 0; index < words[1].length; index++) {
    if (firstWord[index] !== secondWord[index]) {
        console.log((index + 1) + " " + firstWord[index] + "-" + secondWord[index])
    }
}