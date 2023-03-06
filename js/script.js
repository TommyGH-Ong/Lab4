let course1 = {
    code: "ACIT 1630",
    name: "Database Systems"
};

let course2 = {
    code: "ACIT 1620",
    name: "Fundamental Web Technologies"
};

let course3 = {
    code: "ACIT 1515",
    name: "Scripting for IT"
};

const courseList = [course1, course2,  course3];
let user;
do {
    user = prompt("Enter the course number");
    console.log(user.length)
} while (isNaN(user) || user.length != 4);

