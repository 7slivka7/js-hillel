//дз-5

/* reverseArray
Створіть функцію reverseArray, 
яка приймає масив і повертає новий масив, 
елементи якого розташовані у зворотному порядку.

const originalArray = [1, 2, 3, 4, 5]; 
const reversedArray = reverseArray(originalArray); 

console.log(reversedArray); // [5, 4, 3, 2, 1]
*/
/*
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);

function reverseArray(originalArray) {
  let i = originalArray.reverse(originalArray);
  return i;
}
console.log(reversedArray);
*/

/* uniqueValues
Створіть функцію uniqueValues, яка приймає два масиви і повертає 
новий масив, що містить тільки унікальні значення 
з обох масивів (без дублікатів).

const array1 = [1, 2, 3, 4, 5]; 
const array2 = [3, 4, 5, 6, 7]; 
const uniqueValuesArray = uniqueValues(array1, array2); 

console.log(uniqueValuesArray); // [1, 2, 3, 4, 5, 6, 7]
*/

/*
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const uniqueValuesArray = uniqueValues(array1, array2);

function uniqueValues(array1, array2) {
  arr = [...array1, ...array2];
  a = [...new Set(arr)];
  return a;
}

console.log(uniqueValuesArray);
*/

/*calculateAverageGrade
Напишіть функцію calculateAverageGrade, 
яка приймає на вхід масив об'єктів з інформацією 
про студентів (ім'я, вік, середній бал) і повертає 
середній бал усіх студентів.

const students = [
{ name: "Alice", age: 20, grade: 4.5 }, 
{ name: "Bob", age: 21, grade: 3.9 }, 
{ name: "Charlie", age: 19, grade: 4.8 } 
];

console.log(calculateAverageGrade(students)); // 4.4
*/

/*РЕШЕНИЕ-1:

const students = [
  { name: "Alice", age: 20, grade: 4.5 },
  { name: "Bob", age: 21, grade: 3.9 },
  { name: "Charlie", age: 19, grade: 4.8 },
];

function calculateAverageGrade(students) {
  let averageGrade = 0;
  for (let i = 0; i < students.length; i++) {
    averageGrade += students[i].grade / students.length;
  }
  return averageGrade.toFixed(1);
}

console.log(calculateAverageGrade(students));
*/

/*РЕШЕНИЕ-2:

const students = [
  { name: "Alice", age: 20, grade: 4.5 },
  { name: "Bob", age: 21, grade: 3.9 },
  { name: "Charlie", age: 19, grade: 4.8 },
];

function calculateAverageGrade(students) {
  let a = students.reduce((acc, students) => {
    return acc + students.grade;
  }, 0);
  return a / students.length;
}

console.log(calculateAverageGrade(students).toFixed(1));
*/