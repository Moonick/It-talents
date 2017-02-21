var text = "супер яката задача";
var words = text.split(" ");

function firstLetterUpperCase(words) {
    for (var index = 0; index < words.length; index++) {
        words[index] = words[index].charAt(0).toUpperCase() + words[index].substr(1, words[0].length)
    }
    return words;
}
var result = firstLetterUpperCase(words);

console.log(result.join(" "));