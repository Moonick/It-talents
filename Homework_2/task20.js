for (var row = 0; row <= 9; row++) {
    for (var col = row + 1; col <= 9; col++) {
        process.stdout.write(col + " ");
    }
    for (var col = 0; col <= row; col++) {
        process.stdout.write(col + " ");
    }
    console.log();
}