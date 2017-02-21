var arr = [1, 2, 3, 4, 5, 6, 7];
// swap index 0 and 1
var storage = arr[0];
arr[0] = arr[1];
arr[1] = storage;

// swap index 2 and 3
arr[2] = arr[2] + arr[3];
arr[3] = arr[2] - arr[3];
arr[2] = arr[2] - arr[3];

//swap index 4 and 5
arr[4] = arr[4] * arr[5];
arr[5] = arr[4] / arr[5];
arr[4] = arr[4] / arr[5];


console.log(arr);