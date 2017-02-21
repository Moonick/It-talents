var str = "капак";

var isPalindrom = true;


for (index = 0; index < str.length / 2; index++) {
    if (str[index] !== str[str.length - 1 - index]) {
        isPalindrom = false;
        break;
    }
}

if (isPalindrom) {
    console.log("Да.");
} else {
    console.log("Не.");
}