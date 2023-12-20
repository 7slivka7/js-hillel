/*
function summarize(num) {
    return function (a = 1) {
      return a + num;
    };
  }
  
  const addFive = summarize(8);
  
  console.log(addFive(7));
  */

/*
  function counter(startValue, step) {
    let num = startValue;
  
    function increment() {
      num += step;
      return num;
    }
  
    function decrement() {
      num -= step;
      return num;
    }
  
    function reset() {
      num = startValue;
      return num;
    }
  
    return {
      increment: increment,
      decrement: decrement,
      reset: reset
    };
  }
  
  const result = counter(1, 3);
  
  console.log(result.increment()); 
  console.log(result.increment()); 
  */

/*
  function sequence(...fns) {
    return function(...args) {
      let result;
      for (const fn of fns) {
        result = fn(...args);
        args = [result];
      }
      return result;
    };
  }
  
  const add = a => a + 1;
  const multiply = a => a * 2;
  const subtract = a => a - 5;
  const num = sequence(add, multiply, subtract);
    
  const result = num(7);
  console.log(result);
  */
