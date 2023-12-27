/*
class Student {
  constructor(name, surname, birthdate, course) {
    this.name = name;
    this.surname = surname;
    this.birthdate = birthdate;
    this.course = course;
    this.grades = [];
    this.attendance = [];
  }

  addGrade(grade) {
    this.grades.push(grade);
  }

  averageGrade() {
    if (this.grades.length === 0) {
      return 0;
    } else {
      return (
        this.grades.reduce((acc, grade) => acc + grade, 0) / this.grades.length
      );
    }
  }
  
  addAttendance(attendance) {
    this.attendance.push(attendance);
  }

  averageAttendance() {
    if (this.attendance.length === 0) {
      return 0;
    } else {
      return (
        this.attendance.reduce((acc, attendance) => acc + attendance, 0) /
        this.attendance.length
      );
    }
  }

  lessonAttendance() {
    return this.attendance;
  }

  changeCourse(newCourse) {
    this.course = newCourse;
  }

  infoStudent() {
    return `
    Name: ${this.name}, 
    Surname: ${this.surname}, 
    Birthdate: ${this.birthdate}, 
    Course: ${this.course}, 
    Grades: ${this.grades}, 
    Attendance: ${this.attendance}`;
  }
}

const student1 = new Student("Helen", "Fox", 2003, 2);

student1.addGrade(45);
student1.addAttendance(25);
student1.changeCourse(3);

console.log(student1.averageGrade());
console.log(student1.averageAttendance()); 
console.log(student1.lessonAttendance());

console.log(student1.infoStudent());
*/

/*
class Student {
  constructor(name, surname, birthdate) {
    this.name = name;
    this.surname = surname;
    this.birthdate = birthdate;
    this.courses = [];
  }

  addCourse(course) {
    this.courses.push(course);
  }

  removeCourse(course) {
    const index = this.courses.indexOf(course);
    if (index !== -1) {
      this.courses.splice(index, 1);
    }
  }

  getStudentInfo() {
    return `
    Name: ${this.name}, 
    Surname: ${this.surname}, 
    Birthdate: ${this.birthdate},
    Courses: ${this.courses}`;
  }
}

const student1 = new Student("Ann", "Johnson", 2002);

student1.addCourse("Math");
student1.addCourse("History");
student1.addCourse("Biology");
student1.addCourse("Physics");
// student1.removeCourse("Biology");
// student1.removeCourse("History");
console.log(student1.getStudentInfo());
*/

/*
class Student {
  constructor(name, surname, birthdate, course) {
    this.name = name;
    this.surname = surname;
    this.birthdate = birthdate;
    this.course = course;
    this.grades = [];
    this.attendance = [];
  }

  addGrade(grade) {
    this.grades.push(grade);
  }

  getAverageGrade() {
    if (this.grades.length === 0) {
      return 0;
    } else {
      return (
        this.grades.reduce((acc, grade) => acc + grade, 0) / this.grades.length
      );
    }
  }

  addAttendance(attendance) {
    this.attendance.push(attendance);
  }

  getAverageAttendance() {
    if (this.attendance.length === 0) {
      return 0;
    } else {
      return (
        this.attendance.reduce((acc, attendance) => acc + attendance, 0) /
        this.attendance.length
      );
    }
  }

  lessonAttendance() {
    return this.attendance;
  }

  infoStudent() {
    return `
    Name: ${this.name}, 
    Surname: ${this.surname}, 
    Birthdate: ${this.birthdate}, 
    Course: ${this.course}, 
    Grades: ${this.grades}, 
    Attendance: ${this.attendance}`;
  }
}

class Group {
  constructor() {
    this.students = [];
  }

  addStudent(student) {
    this.students.push(student);
  }

  removeStudent(student) {
    const index = this.students.indexOf(student);
    if (index !== -1) {
      this.students.splice(index, 1);
    }
  }

  studentsGrade() {
    return this.students
      .map((student) => ({student, averageGrade: student.getAverageGrade()}))
      .sort((a, b) => b.averageGrade - a.averageGrade);
  }

  studentsAttendance() {
    return this.students
      .map((student) => ({student, averageAttendance: student.getAverageAttendance(),}))
      .sort((a, b) => b.averageAttendance - a.averageAttendance);
  }
}

const group = new Group();

const student1 = new Student("Helen", "Fox", 2002, 3);
student1.addGrade(7);
student1.addAttendance(5);
group.addStudent(student1);

const student2 = new Student("Jane", "Smith", 2003, 2);
student2.addGrade(5);
student2.addAttendance(6);
group.addStudent(student2);

const student3 = new Student("Ann", "Johnson", 2002, 3);
student3.addGrade(5);
student3.addAttendance(4);
group.addStudent(student3);
// group.removeStudent(student3);

console.log("Students Grade:");
console.log(group.studentsGrade());

console.log("Students Attendance:");
console.log(group.studentsAttendance());
*/