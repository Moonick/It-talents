function Person(name, age, isMale) {
    this.name = name;
    this.age = age;
    this.isMale = isMale;
};

Person.prototype.showPersonInfo = function() {
    console.log("Person's info");
    console.log("Name:" + this.name);
    console.log("Age:" + this.age);
    if (this.isMale) {
        console.log("Gender: Male");
    } else {
        console.log("Gender: Female");
    }
};

Student.prototype = Object.create(Person.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: Student,
        writable: true
    }
});

function Student(name, age, isMale, score) {
    Person.call(this, name, age, isMale);
    this.score = score;
};

Student.prototype.showStudentInfo = function() {
    console.log("Student's info");
    console.log("Name: " + this.name);
    console.log("Age: " + this.age);
    if (this.isMale) {
        console.log("Gender: Male");
    } else {
        console.log("Gender: Female");
    }
    console.log("Score: " + this.score);
};

Employee.prototype = Object.create(Person.prototype, {
    constructor: {
        configurable: true,
        enumerable: true,
        value: Employee,
        writable: true
    }
});

function Employee(name, age, isMale, daySalary) {
    Person.call(this, name, age, isMale);
    this.daySalary = daySalary;
};

Employee.prototype.calculateOvertime = function(hours) {
    if (typeof hours === "number" && !isNaN(hours)) {
        var salaryPerHour = this.daySalary / 8;
        if (this.age >= 18) {
            return hours * salaryPerHour * 1.5;
        } else {
            return 0
        }
    } else {
        console.log("Invalid input!")
    }
};

Employee.prototype.showEmployeeInfo = function() {
    console.log("Employee's info");
    console.log("Name: " + this.name);
    console.log("Age: " + this.age);
    if (this.isMale) {
        console.log("Gender: Male");
    } else {
        console.log("Gender: Female");
    }
    console.log("Day salary: " + this.daySalary);
};

//1. add 10 persons in an array
var arrayOfPersons = [
    new Person("Moni", 26, true), new Person("Moni", 27, true),
    new Person("Moni", 29, true), new Person("Moni", 20, true),
    new Person("Moni", 21, true), new Person("Moni", 22, true),
    new Person("Moni", 23, true), new Person("Moni", 24, true),
    new Person("Moni", 25, true), new Person("Moni", 28, true)
];

//2. create two of each object: person, stunet, employee
arrayOfPersons.push(new Person("Tooni", 31, true));
arrayOfPersons.push(new Person("Boni", 21, false));
arrayOfPersons.push(new Student("Roni", 21, false, 5));
arrayOfPersons.push(new Student("Doni", 20, true, 3));
arrayOfPersons.push(new Employee("Bori", 30, true, 60));
arrayOfPersons.push(new Employee("Mori", 35, true, 120));

//3. walk throught the array and call function for info depending of the object
for (var index in arrayOfPersons) {
    console.log("---------------------");
    if (arrayOfPersons[index] instanceof Student) {
        arrayOfPersons[index].showStudentInfo();
    } else if (arrayOfPersons[index] instanceof Employee) {
        arrayOfPersons[index].showEmployeeInfo();
    } else {
        arrayOfPersons[index].showPersonInfo();
    }
}

//4. walk throught the array again and for each person who is employee print the overtime for 2 hours
for (var index in arrayOfPersons) {
    console.log("---------------------");

    if (arrayOfPersons[index] instanceof Employee) {
        console.log(arrayOfPersons[index].calculateOvertime(2));
    }
    console.log("---------------------");
}

//5. How can we avoid the check for different type of persons?
// Name the info showing method the same in all subtypes of person.