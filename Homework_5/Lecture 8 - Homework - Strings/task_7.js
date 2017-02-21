var str = "asd fg hjkl";

var words = str.split(" ");
var maxSymbols = words[0].length;
for (index = 0; index < words.length - 1; index++) {
    if (words[index].length < words[index + 1].length) {
        maxSymbols = words[index + 1].length
    }
}

console.log(words.length + " думи, най-дългата е с " + maxSymbols + " симвила.");