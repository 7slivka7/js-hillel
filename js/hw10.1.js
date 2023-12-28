/*
function Student(name, surname, birthdate, course) {
    this.name = name;
    this.surname = surname;
    this.birthdate = birthdate;
    this.course = course;
    this.grades = [];
    this.attendance = [];
  
    this.addGrade = function (grade) {
      this.grades.push(grade);
    };
  
    this.averageGrade = function () {
      if (this.grades.length === 0) {
        return 0;
      } else {
        return this.grades.reduce((acc, grade) => acc + grade, 0) / this.grades.length;
      }
    };
  
    this.addAttendance = function (attendance) {
      this.attendance.push(attendance);
    };
  
    this.averageAttendance = function () {
      if (this.attendance.length === 0) {
        return 0;
      } else {
        return this.attendance.reduce((acc, attendance) => acc + attendance, 0) / this.attendance.length;
      }
    };
  
    this.lessonAttendance = function () {
      return this.attendance;
    };
  
    this.changeCourse = function (newCourse) {
      this.course = newCourse;
    };
  
    this.infoStudent = function () {
      return `
      Name: ${this.name}, 
      Surname: ${this.surname}, 
      Birthdate: ${this.birthdate}, 
      Course: ${this.course}, 
      Grades: ${this.grades}, 
      Attendance: ${this.attendance}`;
    };
  }
  
  const student1 = new Student("Helen", "Fox", 2003, 1);
  
  student1.addGrade(75);
  student1.addAttendance(25);
  student1.changeCourse(2);

  console.log(student1.averageGrade());
  console.log(student1.averageAttendance());
  console.log(student1.lessonAttendance());   
  
  console.log(student1.infoStudent());
*/

/*
function Student(name, surname, birthdate) {
    this.name = name;
    this.surname = surname;
    this.birthdate = birthdate;
    this.courses = [];
  
    this.addCourse = function (course) {
      this.courses.push(course);
    };
  
    this.removeCourse = function (course) {
      const index = this.courses.indexOf(course);
      if (index !== -1) {
        this.courses.splice(index, 1);
      }
    };
  
    this.getStudentInfo = function () {
      return `
        Name: ${this.name}, 
        Surname: ${this.surname}, 
        Birthdate: ${this.birthdate},
        Courses: ${this.courses.join(', ')}`;
    };
  }
  
  const student1 = new Student("Ann", "Johnson", 2002);
  
  student1.addCourse("Math");
  student1.addCourse("History");
  student1.addCourse("Biology");
  student1.addCourse("Physics");
//student1.removeCourse("Biology");
//student1.removeCourse("History");
  console.log(student1.getStudentInfo());
*/

/*
function Student(name, surname, birthdate, course) {
    this.name = name;
    this.surname = surname;
    this.birthdate = birthdate;
    this.course = course;
    this.grades = [];
    this.attendance = [];
  
    this.addGrade = function (grade) {
      this.grades.push(grade);
    };
  
    this.getAverageGrade = function () {
      if (this.grades.length === 0) {
        return 0;
      } else {
        return (
          this.grades.reduce((acc, grade) => acc + grade, 0) / this.grades.length
        );
      }
    };
  
    this.addAttendance = function (attendance) {
      this.attendance.push(attendance);
    };
  
    this.getAverageAttendance = function () {
      if (this.attendance.length === 0) {
        return 0;
      } else {
        return (
          this.attendance.reduce((acc, attendance) => acc + attendance, 0) /
          this.attendance.length
        );
      }
    };
  
    this.lessonAttendance = function () {
      return this.attendance;
    };
  
    this.infoStudent = function () {
      return `
        Name: ${this.name}, 
        Surname: ${this.surname}, 
        Birthdate: ${this.birthdate}, 
        Course: ${this.course}, 
        Grades: ${this.grades}, 
        Attendance: ${this.attendance}`;
    };
  }
  
  function Group() {
    this.students = [];
  
    this.addStudent = function (student) {
      this.students.push(student);
    };
  
    this.removeStudent = function (student) {
      const index = this.students.indexOf(student);
      if (index !== -1) {
        this.students.splice(index, 1);
      }
    };
  
    this.studentsGrade = function () {
      return this.students
        .map((student) => ({
          student: student,
          averageGrade: student.getAverageGrade(),
        }))
        .sort((a, b) => b.averageGrade - a.averageGrade);
    };
  
    this.studentsAttendance = function () {
      return this.students
        .map((student) => ({
          student: student,
          averageAttendance: student.getAverageAttendance(),
        }))
        .sort((a, b) => b.averageAttendance - a.averageAttendance);
    };
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
