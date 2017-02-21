function fibonacci(n) {
    if (n <= 2) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);

    // var sequence = [1, 1];

    // for (var index = 2; index < n; index++) {
    //     sequence[index] = sequence[index - 1] + sequence[index - 2];
    // }
    // return sequence[n - 1];
}
console.log(fibonacci(8))