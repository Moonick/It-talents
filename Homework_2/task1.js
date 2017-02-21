var numbers = " ";

for (var i = 1; i <= 100; i++) {
    if (i == 100) {
        numbers = numbers + i;
        break;
    }
    numbers = numbers + i + ", ";
}
console.log(numbers);