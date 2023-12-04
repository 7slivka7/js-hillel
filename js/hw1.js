//ДЗ 1. Перетворення примітивів
/* Вам необхідно вказати, яким буде результат операції
та описати крок за кроком у вигляді коментарів,
як відбувається перетворення в кожному прикладі: */

'number' + 23 + 32 /* результат: number2332;
console.log('number' + 23 + 32);
строковое преобразование: после типа данных String
последующие числа преобразуются в String (работает с +):
'number' + 23 = 'number23';
'number23' + 32 = 'number2332' */

41 + 1 + 'number' /* результат: 42number;
console.log(41 + 1 + 'number');
выполняется сложение первых двух чисел и
преобразование в String:
41 + 1 = 42;
42 + 'number' = 42number */

null + 1 /* результат: 1;
console.log(null + 1);
null и underfined не несут в себе
функциональности, приравниваются к нулю,
при численном преобразовании null становится 0,
а underfined становится NaN;
0 + 1 = 1 */

'five' + + 'two' /* результат: fiveNaN;
console.log('five' + + 'two');
'five' и 'two' - типы данных String;
'five' в консоль выводит String;
Number('two') - is not a number;
'five'+ NaN = fiveNaN */

2 && 7 /* результат: 7;
console.log(2 && 7);
2 - true;
7 - true;
2 && 7 - выводит последнее true - 7 */

+'40' + +'2' /* результат: 42;
console.log(+'40' + +'2');
унарный оператор + применяется к типу данных String,
преобразуя их в тип данных Number:
+'40' = Number('40');
+'2' = Number('2');
Number('40') + Number('2') = 42 */

'10' - 5 === 6; /* результат: false;
console.log('10' - 5 === 6;);
'10' - 5 = 5 - String '10' преобразуется в Number;
5 === 6 - false */

true + false /* результат: 1;
console.log(true + false);
численное преобразование:
true = 1;
false = 0;
1 + 0 = 1 */

'4px' - 3 /* результат: NaN;
console.log('4px' - 3);
'4px' - String - так как присутствуют буквы,
не может преобразоваться в Number;
String - 3 = NaN */

'4' - 3 /* результат: 1;
console.log('4' - 3);
'4'(String) преобразуется в Number;
4 - 3 = 1 */

'2' + 3 ** 2; /* результат: 29;
console.log('2' + 3 ** 2);
3 ** 2 = 9;
строковое преобразование: после типа данных String
последующие числа преобразуются в String (работает с +):
'2' + 9 = 29 */

12 / '6' /* результат: 2;
console.log(12 / '6');
численное преобразование '6'(String) в Number;
12 / 6 = 2 */

23 + 42 + 'number' /* результат: 65number;
console.log(23 + 42 + 'number');
выполняется сложение первых двух чисел и
преобразование в String:
23 + 42 = 65;
65 + 'number' = 65number */

'10' + (5 === 6); /* результат: 10false;
console.log('10' + (5 === 6));
5 === 6 - false;
преобразование в String (работает с +):
'10' + false = 10false */

'number' + 15 + 3 /* результат: number153;
console.log('number' + 15 + 3);
после типа данных String
последующие числа преобразуются в String (работает с +):
'number' + 15 = 'number15'
'number15' + 3 = 'number153' */

undefined + 1; /* результат: NaN;
console.log(undefined + 1);
null и underfined не несут в себе
функциональности, приравниваются к нулю,
при численном преобразовании null становится 0,
а underfined становится NaN;
NaN + 1 = NaN */

'true' == true /* результат: false;
console.log('true' == true);
'true' - String - NaN;
true - Boolean - 1;
NaN == 1 - false */

false == 'false' /* результат: false;
console.log(false == 'false');
false - Boollean - 0;
'false' - String - NaN;
0 == NaN - false */

null == '' /* результат: false;
console.log(null == '');
'' - false = 0 - все строки - true, кроме пустой;
undefined и null равны друг другу и больше ничему не равны; null <= и >= 0;
null == 0 - false */

3 ** (9 / 3); /* результат: 27;
console.log(3 ** (9 / 3));
приоритет имеют скобки:
9 / 3 = 3;
3 ** 3 = 27 */

!!'false' == !!'true' /* результат: true;
console.log(!!'false' == !!'true');
!!'false' - Boolean('false') - true;
!!'true' - Boolean('true') - true;
'false' и 'true' это String, не пустые String всегда true;
true == true - true */

0 || '0' && 1 /* результат: 1;
console.log(0 || '0' && 1);
приоритет у оператора &&:
'0' && 1 - String(true) и Number(true) - выводит последнее true - 1;
0 || 1 - Number 0 - false; || выводит true - 1 */

1 < 2 < 3 /* результат: true;
console.log(1 < 2 < 3);
1 < 2 - true;
true = 1;
1 < 3 - true */

'foo'+ + +'bar' /*результат: fooNaN;
console.log('foo'+ + +'bar');
'foo' и 'bar' - типы данных String;
'foo' в консоль выводит String;
+'bar' - Number('bar') - is not a number;
'foo'+ NaN = fooNaN - строковое преобразование */

3 ** 2 / 3; /* результат: 3;
console.log(3 ** 2 / 3);
3 ** 2 = 9;
9 / 3 = 3 */

1 < 2 > 3; /* результат: false;
console.log(1 < 2 > 3);
1 < 2 - true;
true = 1;
1 > 3 - false */

(+null == false) < 1; /* результат: false;
console.log((+null == false) < 1);
+null - Number(null) - 0;
false - 0;
приоритет у оператора == так как он в скобках:
0 == 0 - true;
true < 1 - false - потому что true <= и >= 1 */

false && true || true /* результат: true;
console.log(false && true || true);
false && true - false - оператор &&(и) ищет и выводит false;
false || true - true - оператор ||(или) ищет и выводит true */

false && (true || true); /* результат: false;
console.log(false && (true || true));
приоритет у оператора || так как он в скобках:
true || true - true - оператор ||(или) ищет и выводит последнее true;
false && true - false - оператор &&(и) ищет и выводит false */

(+null == false) < 1 ** 5; /* результат: false;
console.log((+null == false) < 1 ** 5);
+null - Number(null) - 0;
false = 0;
(0 == 0) - true;
1 ** 5 = 1;
true < 1 - false - потому что true <= и >= 1 */