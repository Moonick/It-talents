function Computer(year, price, isNotebook, hardDiskMemory, freeMemory, operationSystem) {
    this.year = year;
    this.price = price;
    this.isNotebook = isNotebook;
    this.hardDiskMemory = hardDiskMemory;
    this.freeMemory = freeMemory;
    this.operationSystem = operationSystem;
};

Computer.prototype.comparePrice = function(computer) {
    if (this !== null && this !== computer &&
        computer instanceof Computer) {
        if (this.price > computer.price) {
            console.log(-1);
        } else if (this.price < computer.price) {
            console.log(1);
        } else {
            console.log(0);
        }
    } else {
        console.log("Invalid input!");
    }
};

var computer1 = new Computer(2005, 1000, false, 150, 145, "Linux");
var computer2 = new Computer(2015, 2500, true, 528, 98, "Windows");
var computer3 = new Computer(2016, 2356, true, 645, 600, "OS");
var computer4 = new Computer(2017, 2500, false, 747, 687, "Windows");
var com = "mos";

computer2.comparePrice(computer4);
computer2.comparePrice(computer3);
computer1.comparePrice(computer2);
computer2.comparePrice(com);