var hour = 0;
var money = 0;
var amIHealhty = false;

if (!amIHealhty) {
    if(money > 0){
        console.log("Get some medicine.")
    } else {
        console.log("Stay home and drink a lot of tea.")
    }
} else {
    if (money < 10) {
        console.log("Go to the coffee bar.")
    }
}