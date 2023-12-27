/*
let g = "Hello,";
let d = "world!";

function text(g, d) {
  return g, d;
}

function logArguments(fn) {
  return function (...args) {
    console.log(args);
    return fn.apply(this, args);
  };
}

decorFunc = logArguments(text);

console.log(decorFunc(g + " " + d));
*/

/*
let a = 'Hello,';
let b;
let c = 'world!';

function text(a, b, c) {
  return a + " " + b + " " + c;
}

const validator = function (args) {
    return args.every((arg) => typeof arg === 'string');
  };

function validate(fn, validator) {
  return function (...args) {
    if (validator(args)) {
      return fn.apply(this, args);
    } else {
      throw new Error("Validation failed.");
    }
  };
}

const validateText = validate(text, validator);

try {
  console.log(validateText(a, "new", c));
  console.log(validateText("apple", true, 7));
} catch (error) {
  console.error(error.message);
}
*/

/*
async function retry(fn, maxAttempts) {
    let attempts = 0;

    return async function (...args) {
        while (attempts < maxAttempts) {
            try {
                attempts++;
                return await fn.apply(this, args);
            } catch (error) {
                console.error(`Attempt ${attempts} failed. Retrying...`);
            }
        }
        throw new Error(`Max attempts (${maxAttempts}) reached. Unable to succeed.`);
    };
}


async function exampleFunction() {
    const random = Math.random();
    if (random < 0.8) {
        throw new Error('Random error');
    }
    return 'Success!';
}

const retryExampleFunction = retry(exampleFunction, 3);

retryExampleFunction().then(result => {
    console.log(result);
}).catch(error => {
    console.error(error.message);
});
*/