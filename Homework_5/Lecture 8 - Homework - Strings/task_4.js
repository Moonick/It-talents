function valueOfName(name) {
    var strCodeVaLue = 0;
    for (index = 0; index < name.length; index++) {
        strCodeVaLue += name.charCodeAt(index);
    }
    return strCodeVaLue;
}

var str = "Anna Dosewa Asenowa, Iwo Peew Peew";
var strNames = str.split(", ");

var firstValue = valueOfName(strNames[0]);
var secondValue = valueOfName(strNames[1]);

if (firstValue > secondValue) {
    console.log(strNames[0]);
} else {
    console.log(strNames[1]);
}