var num = 11;
var result = num;
var print = "";
do {
    if (result & 1) {
        result = 3 * result + 1;
    } else {
        result = 0.5 * result;
    }
    print += result + " ";

} while (result !== 1);
console.log(print);