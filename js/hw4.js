//дз-4
/*
Вам необхідно написати функцію reverseString(str), 
яка приймає на вхід рядок і повертає його у зворотному порядку.
*/
/*
var str = prompt('Input a word or a message');
reverseString(str);
function reverseString(str) {
  let str1 = str.split('');
  let myArr = str1.reverse('');
  let j = myArr.join('');
  return console.log(j);
}
*/

/*
Вам необхідно написати функцію isPalindrome(str), 
яка приймає на вхід рядок і перевіряє, 
чи є введений рядок паліндромом.
*/
/*
// примеры палиндромов:
// дед
// шабаш
// потоп
// Аргентина манит негра
// А роза упала на лапу Азора

var str = prompt('Input a word or a message');
isPalindrome(str);

function isPalindrome(str) {
  str = str.toLowerCase('');
  str = str.replace(/\s/g,'');
  let str1 = str.split('');
  let myArr = str1.reverse('');
  let j = myArr.join('');
  return console.log(str == j);
}
*/

/*
Вам необхідно написати функцію findGCD(a, b), 
яка приймає на вхід два числа і повертає їхній НСД.
*/
/*
var a = prompt("Input first number");
    a = parseInt(a);
var b = prompt("Input second number");
    b = parseInt(b);

while (a != 0 & b != 0){
    if(a > b){
      a = a % b;
    } else {
      b = b % a;
    }
}
console.log(a + b);
*/
