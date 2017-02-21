    var str = "uchilishe uchenik";

    var words = str.split(" ");


    if (words[0].length > words[1].length) {
        var firstPart = words[1].slice(0, 5);
        var secondPart = words[0].slice(5, words[0].length);
        var result = firstPart + secondPart;
        var longest = words[0].length;
    } else {
        var firstPart = words[0].slice(0, 5);
        var secondPart = words[1].slice(5, words[1].length);
        var result = firstPart + secondPart;
        var longest = words[1].length;
    }
    console.log(longest + " " + result);