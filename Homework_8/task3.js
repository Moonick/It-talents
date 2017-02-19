function Student(name, subject, grade, yearInCollage, age, money) {
    this.name = name;
    this.subject = subject;
    this.grade = grade;
    this.yearInCollage = yearInCollage;
    this.age = age;
    if (this.yearInCollage < 4) {
        this.hasDegree = false;
    } else if (this.yearInCollage == 4) {
        this.hasDegree = true;
    }
    this.money = money;
};

Student.prototype.yearUp = function() {
    if (this.yearInCollage < 4) {
        this.yearInCollage++;
        if (this.yearInCollage == 4) {
            this.hasDegree = true;
        }
    } else {
        console.log("Student can't change his year in collage. He is in his 4th year.")
    }
};

Student.prototype.receiveScholarship = function(min, amount) {
    if (this.grade >= min && this.age < 30) {
        this.money += amount;
        console.log(this.money);
    }
};

function StudentGroup(groupSubject) {
    this.groupSubject = groupSubject;
    this.students = [];
    this.freePlaces = 5;
};

StudentGroup.prototype.addStudent = function(student) {
    if (student instanceof Student && student !== null) {
        if (this.groupSubject == student.subject && this.freePlaces >= 1) {
            this.students.push(student);
            this.freePlaces--;
        }
    }
};

StudentGroup.prototype.emptyGroup = function() {
    this.students.length = 0;
    this.freePlaces = 5;
};

StudentGroup.prototype.theBestStudentName = function() {
    var maxGrade = -Infinity;
    var maxGradeStudent = null;
    for (var index = 0; index < this.students.length; index++) {
        if (this.students[index].grade > maxGrade) {
            maxGrade = this.students[index].grade;
            maxGradeStudent = this.students[index];
        }
    }
    if (maxGradeStudent !== null) {
        console.log(maxGradeStudent.name);
    } else {
        console.log("No Students in this group!")
    }
};

StudentGroup.prototype.printStudentsInGroup = function() {
    console.log(this.students);
};


var student1 = new Student("Ned Ivanov", "Computer Science", 4.50, 3, 21, 0);
var student2 = new Student("Med Sotirov", "Horology", 6, 3, 21, 245);
var student3 = new Student("Leshnik Nutellov", "Ethical Hacking", 5.48, 3, 30, 100);
var student4 = new Student("Fystyk Hikimyanov", "Horology", 5.65, 3, 19, 600);

var groupOfStudents = new StudentGroup("Horology");
groupOfStudents.addStudent(student4);
groupOfStudents.addStudent(student2);

console.log(groupOfStudents.freePlaces);

console.log(groupOfStudents.students);
console.log(groupOfStudents.freePlaces);
student3.receiveScholarship(5, 200);
student1.yearUp();
groupOfStudents.theBestStudentName();
groupOfStudents.printStudentsInGroup();