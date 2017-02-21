var numberN = Number(7);

var spaces = numberN - 1;
var stars = 1;

for (var row = 1; row <= numberN; row++) {
    for (var i = 1; i <= spaces; i++) {
        process.stdout.write("-");
    }
    process.stdout.write("*");
    if (row > 1 && row < numberN) {

        for (var j = 1; j <= stars; j++) {
            process.stdout.write("+");
        }
        process.stdout.write("*");
        stars += 2;
    }
    console.log("");
    spaces--;
}