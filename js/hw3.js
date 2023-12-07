// дз-3
/*
        Вам необхідно написати програму, яка приймає на вхід число
і виводить у консоль повідомлення у форматі: 
Число N є простим числом, якщо число N просте, 
та Число N не є простим числом, якщо число N складене.
*/

/*
let anyNum = prompt("Input a number");
anyNum = parseInt(anyNum);

if (!isNaN(anyNum)) {
  if (isPrime(anyNum)) {
    console.log(`${anyNum} просте число`);
  } else {
    console.log(`${anyNum} не є простим числом`);
  }
  } else {
    console.log("Input a number, please");
  }

  function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
*/



/*
        Вам необхідно написати програму, яка приймає на вхід 
число N і знаходить усі числа в діапазоні від 1 до N, 
які є досконалими числами.
*/
/*
let anyNum = prompt("Input a number");
  anyNum = parseInt(anyNum);

  if (!isNaN(anyNum) && anyNum > 0) {
      for (let i = 1; i <= anyNum; i++) {
          if (isPerfectNumber(i)) {
              console.log(i);
          }
      }
  } else {
      alert("Input a number, please");
  }

  function isPerfectNumber(num) {
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) {
                sum += num / i;
            }
        }
    }
    return sum === num && num !== 1;
  }
*/


/*
        Вам необхідно написати програму, яка приймає на вхід число, 
що буде висотою вершини вашої ялинки.
Уся ялинка має бути реалізована одним рядком:
     *
    ***
   *****
  *******
*/

/*
let h = prompt("Input a height of the Tree");
h = parseInt(h);

if (!isNaN(h) && h > 0) {
  for (let i = 1; i <= h; i++) {
    const spaces = ' '.repeat(h - i);
    const stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
  }
} else {
  console.log("Input a number");
}
*/
