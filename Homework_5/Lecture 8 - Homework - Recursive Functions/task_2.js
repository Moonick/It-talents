function product(a, b) {

    if (b == 0) return 0;
    return a + product(a, b - 1);
    // var productOfAB = 0;
    // for (var index = a; index > 0; index--) {
    //     productOfAB += b;
    // }
    // return productOfAB;
}

console.log(product(4, 5));