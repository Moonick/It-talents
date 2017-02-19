function Task(name, workingHours) {
    this.name = name;
    this.workingHours = workingHours;
};

function Employee(name, currentTask) {
    this.name = name;
    this.currentTask = currentTask;
    this.hoursLeft = 8;
};

Employee.prototype.work = function() {
    if (this.hoursLeft > 0) {
        if (this.hoursLeft > this.currentTask.workingHours) {
            this.hoursLeft -= this.currentTask.workingHours;
            this.currentTask.workingHours = 0;
        } else {
            this.currentTask.workingHours -= this.hoursLeft;
            this.hoursLeft = 0;
        }
    } else {
        console.log("The Employee has no hours left to work.");
    }
};

Employee.prototype.showReport = function() {
    console.log("The name of the employee is " + this.name);
    console.log(this.name + " is working on task: '" + this.currentTask.name + "'");
    console.log(this.name + " has " + pesho.hoursLeft + " hours left to work.");
    console.log("hours left for the task " + taskSpecial.workingHours + ".");
};

var taskSpecial = new Task("Chek the status codes", 15);
var pesho = new Employee("Petyr Stoyanov", taskSpecial);

pesho.work();
pesho.showReport();