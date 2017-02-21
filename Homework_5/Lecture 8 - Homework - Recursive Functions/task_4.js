function triangleOfSymbols(a, b) {
    if (b == a) {
        console.log(a)
        return;
    }
    triangleOfSymbols(a, b - 1);
    var result = "";
    for (var index = a; index <= b; index++) {
        result += index + " ";
    }
    console.log(result);
}

triangleOfSymbols(5, 9);