    var arr = [
        [1, 4, 6, 3],
        [5, 9, 7, 2],
        [4, 8, 1, 9],
        [2, 3, 4, 5]
    ];

    var leftDiagonal = "";
    var rigthDiagonal = "";
    for (var row = 0; row < arr.length; row++) {
        for (var col = 0; col < arr[row].length; col++) {
            if (row === col) {
                leftDiagonal += arr[row][col] + " ";
            }
            if (col + row === arr.length - 1) {
                rigthDiagonal += arr[row][col] + " ";
            }
        }
    }

    console.log(leftDiagonal);
    console.log(rigthDiagonal);