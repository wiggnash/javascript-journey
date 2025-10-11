// nested objects
const ourStorage = {
  cabinet: {
    topDrawer: {
      folderOne: "file 1",
      folderTwo: "file 2",
    },
  },
};

console.log(ourStorage.cabinet);
console.log(ourStorage.cabinet.topDrawer);
console.log(ourStorage.cabinet.topDrawer.folderOne);

console.log("Object Values : ", Object.values(ourStorage));
console.log("Object Keys : ", Object.keys(ourStorage));

const userData = {
  name: {
    first: "",
    last: "",
  },
  jobTitle: "Full Stack Developer",
  email: {
    work: "vigneshwar@work.com",
    personal: "",
  },
  status: {
    isOnline: true,
    isVerified: false,
  },
};

userData.name.first = "Vignshwar";
userData.name.last = "D";
userData.status.isProMember = false;
console.log(userData);

// userData = "Giving new value"; // this will give error

// destructing

let obj = {
  name: "Vigneshwar",
  age: 26,
  designation: "Full stack developer",
};

// 1. method one to take the values of the object
// let name = obj.name;
// let age = obj.age;
// let designation = obj.designation;

// 2. method two to do destructing
let { name, age, designation } = obj; // syntax for destructing
let {
  name: nameVariable,
  age: ageVariable,
  designation: designationVariable,
} = obj; // syntax for destructing : giving custom names

console.log(name);
console.log(age);
console.log(designation);

console.log(nameVariable);
console.log(ageVariable);
console.log(designationVariable);

// array destructing
let newArray = [1, 2, 23, 4];
let [a, b, c] = newArray;
let [, d, e] = newArray;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

console.log(typeof newArray);
console.log(Array.isArray(newArray));

// array of objects

let student_1 = {
  name: "Kevin",
  rollNumber: 10,
  stream: "PCM",
  age: 11,
  marks: 90,
};

let student_2 = {
  name: "Martin",
  rollNumber: 11,
  stream: "PCM",
  age: 12,
  marks: 88,
};

let student_3 = {
  name: "Robert",
  rollNumber: 12,
  stream: "PCB",
  age: 11,
  marks: 75,
};

let students = [];
students.push(student_1);
students.push(student_2);
students.push(student_3);

console.log(students);

let filteredStudents = students.filter((student) => student.age === 11);
console.log(filteredStudents);

let maxMarks = -1;
let studentIndex = -1;
for (let i = 0; i < students.length; i++) {
  if (students[i].marks > maxMarks) {
    maxMarks = students[i].marks;
    studentIndex = i;
  }
}

console.log(students[studentIndex]);

students.sort((student_1, student_2) => {
  student_1.marks - student_2.marks;
});
console.log(students);
