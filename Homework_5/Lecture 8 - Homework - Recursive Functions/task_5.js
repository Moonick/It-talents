function reverse(text) {
    text = text + "";

    if (text.length == 1) return text;
    return text[text.length - 1] + reverse(text.slice(0, text.length - 1));
}

function isPalindrom(word) {
    word = word + "";
    if (word.length <= 1) return true;


    return word[0] == word[word.length - 1] && isPalindrom(word.slice(1, word.length - 1));

}

console.log(isPalindrom(reverse(1221)));