// дз-2

            /*Вам необхідно написати програму, яка приймає на вхід число 
і виводить у консоль повідомлення залежно від значення числа. 
Якщо число ділиться на 3, то повідомлення має бути Fizz, 
якщо число ділиться на 5, то повідомлення має бути Buzz, 
а якщо число ділиться і на 3, і на 5, то повідомлення має бути 
FizzBuzz. Наприклад, для числа 15 повідомлення має бути FizzBuzz.*/

/*
const someNum = Number(prompt('Input a number'));

someNum % 3 !== 0 && someNum % 5 !== 0 ?
    alert('we can\'t do it') :
someNum % 3 === 0 && someNum % 5 === 0 ?
    console.log('FizzBuzz') :
someNum % 3 === 0 ?
    console.log('Fizz') :
someNum % 5 === 0 ?
    console.log('Buzz') : alert('alt+F4');
*/


         /*Вам необхідно написати програму, яка приймає на вхід число 
і виводить у консоль повідомлення, що вказує, чи є введений 
рік високосним. */

/*
const yearInput = Number(prompt('Input a year, please'));

isNaN(yearInput) || yearInput == 0 ?
    alert('open your eyes and try to input a YEAR!!!') :
yearInput >= -45 && yearInput <= 2999 ?
yearInput % 4 == 0 && yearInput % 100 != 0 || yearInput % 400 == 0 ?
    console.log('высокосный год') : console.log('невысокосный год') :
    alert ('Sorry, we don\'t believe you were (or will be) alive this year =(')
*/


        /*Вам необхідно написати програму, яка приймає на вхід число 
і виводить у консоль повідомлення у форматі Вам N рік / рoки / 
років. Залежно від числа N слово рік має змінюватися на років або 
року. Наприклад, Вам 1 рік, Вам 5 років, Вам 42 роки.*/

/* 
const inputAge = prompt('Tell us your age, please');

if (isNaN(inputAge)) {
  alert('AGE, please')
} else if(inputAge >= 150) {
    alert('How do you do?')
} else if (inputAge <= 0) {
    alert('Welcome back!')
} else if (inputAge % 10 ==1 && inputAge % 100 != 11) {
    console.log(inputAge, 'рік')
} else if (inputAge % 10 >= 2 && inputAge % 10 <= 4 &&
    (inputAge % 100 < 10 || inputAge % 100 >= 20)){
    console.log(inputAge, 'роки')
} else {console.log(inputAge, 'років')}
*/
