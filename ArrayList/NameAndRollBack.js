let numberOfStudents = 25;
let studentNames = [];
let rollNumbers = [];

for (let i = 0; i < numberOfStudents; i++) {
    studentNames[i] = "Student" + (i + 1);
    rollNumbers[i] = i + 1;
}

console.log("Student Details:");
for (let i = 0; i < numberOfStudents; i++) {
    console.log(`Roll No: ${rollNumbers[i]}, Name: ${studentNames[i]}`);
}
