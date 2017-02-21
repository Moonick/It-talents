var startCol = 0;
for (var row = 1; row <= 9; row++) {
    for (var col = startCol + 1; col <= 9; col++) {

        process.stdout.write(row + "*" + col + "; ");
    }
    console.log();
    startCol++;

}