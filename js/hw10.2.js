/*
function fibonacci(num) {
  if (num < 2) {
    return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log(fibonacci(8));
*/

/*
function isPalindrome(num) {
  const numStr = num.toString();
  return numStr === numStr.split("").reverse().join("");
}
const aNum = isPalindrome(45);
console.log(aNum);

function lychrelNumber(num, steps = 0) {
  if (steps >= 100) {
    return { result: null, steps: -1 };
  }

  const reversedNum = parseInt(num.toString().split("").reverse().join(""), 10);
  const sum = num + reversedNum;

  if (isPalindrome(sum)) {
    return { result: sum, steps };
  }
  return lychrelNumber(sum, steps + 1);
}

const resultObj = lychrelNumber(45);
console.log(resultObj);
*/

/*
function safeNum(arr) {
  const result = [];

  function change(arr, i, j) {
    const num = arr[i];
    arr[i] = arr[j];
    arr[j] = num;
  }

  function permute(index) {
    if (index === arr.length - 1) {
      result.push([...arr]);
      return;
    }

    for (let i = index; i < arr.length; i++) {
      change(arr, index, i);
      permute(index + 1);
      change(arr, index, i);
    }
  }

  permute(0);
  return result;
}

const arr = [1, 2, 3];
const diff = safeNum(arr);
console.log(diff);
*/

