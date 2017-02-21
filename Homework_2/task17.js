var num = "10 -";
var res = num.split(" ");


for (var row = 1; row <= res[0]; row++) {
    for (var col = 1; col <= res[0]; col++) {
        if (row == 1 || col == 1 || col == res[0] || row == res[0]) {
            process.stdout.write("*");
        } else {
            process.stdout.write(res[1]);
        }
    }
    console.log();
}