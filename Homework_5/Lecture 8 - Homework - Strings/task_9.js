var str = "asd-12sdf45-56asdf100";
// console.log(str[5].charCodeAt(0));
var numbers = [];
numbers[0] = "";
var counter = 0;

for (var index = 0; index < str.length; index++) {
    if (str.charCodeAt(index) == 45 ||
        (str.charCodeAt(index) >= 48 && str.charCodeAt(index) <= 57)) {
        numbers[counter] += str.substr(index, 1);
    }
    if (str.charCodeAt(index + 1) < 48 || str.charCodeAt(index + 1) > 57 ||
        str.charCodeAt(index + 1) == 45) {
        counter++;
        numbers[counter] = ""
    } else {
        continue;
    }
}
var sum = 0;
for (var index = 0; index < numbers.length; index++) {
    sum += +numbers[index];
}
console.log(sum);