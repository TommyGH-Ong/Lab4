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
} 
while (isNaN(user) || user.length != 4);

let foundCourse = false;

for (let item of courseList) {
    if (item.code.includes(user)) {
        foundCourse = true;
        console.log(`Yes, I am taking the course: ${item.code} - ${item.name}`);
        break;
    }
}

if (!foundCourse) {
    let newCourse = {
        code: user,
        name: null
    };
    courseList.push(newCourse);
    console.log(`Course ${user} successfully created!`);
}