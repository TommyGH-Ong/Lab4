// let course1 = {
//     code: "ACIT 1630",
//     name: "Database Systems"
// };

// let course2 = {
//     code: "ACIT 1620",
//     name: "Fundamental Web Technologies"
// };

// let course3 = {
//     code: "ACIT 1515",
//     name: "Scripting for IT"
// };

// const courseList = [course1, course2,  course3];
// let user;
// do {
//     user = prompt("Enter the course number");
// } 
// while (isNaN(user) || user.length != 4);

// let foundCourse = false;

// for (let item of courseList) {
//     if (item.code.includes(user)) {
//         foundCourse = true;
//         console.log(`Yes, I am taking the course: ${item.code} - ${item.name}`);
//         break;
//     }
// }

// if (!foundCourse) {
//     let newCourse = {
//         code: user,
//         name: null
//     };
//     courseList.push(newCourse);
//     console.log(`Course ${user} successfully created!`);
// }


function createCourseArray() {
    let courses = [];
    let courseItem = document.querySelectorAll('.courses');

    for (let i = 0; i < courseItem.length; i++) {
      const item = courseItem[i];
      const code = item.querySelector('.item1').textContent;
      const date = item.querySelector('.item2').textContent; 
      const course = {code,date};
      courses.push(course);
    };
    return courses;
};

function createCourse(courseList){
    let user;
    do {
        user = prompt("Enter the course number");
    } 
    while (isNaN(user) || user.length != 4);

    let foundCourse = false;

    for (let i = 0; i < courseList.length; i++) {
        if (courseList[i].code.includes(user)) {
          foundCourse = true;
          console.log(`Yes, I am taking the course: ${courseList[i].code} - ${courseList[i].name}`);
          let courseItem = document.querySelectorAll('.courses')[i];
          courseItem.style.backgroundColor = 'green';
          break;
        };
    };

    if (!foundCourse) {
        let newCourse = {
            code: user,
            date: 'Fall 2020'
        };
        console.log(`Course ${user} successfully created!`);

        let courseItem = document.createElement('li');
        courseItem.className = 'courses';
        courseItem.innerHTML = `<a class="item1">${newCourse.code}</a><p class="item2">${newCourse.date}</p><p class="item3">N/A</p>`;
        document.querySelector('section ul').appendChild(courseItem);
    };
};

let courseList = createCourseArray()
createCourse(courseList)
