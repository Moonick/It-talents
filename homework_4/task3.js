    var arr = [
        [1, 4, 6, 3],
        [5, 9, 7, 2],
        [4, 8, 1, 9],
        [2, 3, 4, 5]
    ];

    var sumOfElements = 0;
    var numberOfElements = 0;
    for (var row = 0; row < arr.length; row++) {
        for (var col = 0; col < arr[row].length; col++) {
            sumOfElements += arr[row][col];
            if (arr[row][col] > 0) {
                numberOfElements++;
            }
        }
    }
    var averege = Math.floor((sumOfElements / numberOfElements) * 100) / 100;

    console.log(averege)