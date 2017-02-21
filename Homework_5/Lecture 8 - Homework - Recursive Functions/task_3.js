function isPrime(x, number) {
    if (x % number == 0) {
        return "не е просто";
    }
    if (x / 2 <= number) {
        return "просто";
    }
    return isPrime(x, number + 1);

    //     var isPrime = true;
    //     for (var index = 2; index < number / 2; index++) {
    //         if (number % index == 0) {
    //             isPrime = false;
    //             break;
    //         }
    //     }
    //     if (isPrime) {
    //         return "просто";
    //     } else {
    //         return "не е просто";
    //     }
}

console.log(isPrime(101, 2));