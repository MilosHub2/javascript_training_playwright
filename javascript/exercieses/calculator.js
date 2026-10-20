function add(a, b) {
  console.log(a + b);
}

function substract(a, b) {
  console.log(a - b);
}

function multiply(a, b) {
  console.log(a * b);
}

function divide(a, b) {
  console.log(a / b);
}

function exponentiation(a, b) {
  console.log(a ** b);
}

add(2, 2);
substract(5, 2);
multiply(8, 8);
divide(8, 4);
exponentiation(8, 2);

function add2(a, b) {
  const result = a + b;
  console.log(`${a} + ${b} = ${result}`);
}

function subtract2(a, b) {
  const result = a - b;
  console.log(`${a} - ${b} = ${result}`);
}

const multiply2 = (a, b) => {
  const result = a * b;
  console.log(`${a} * ${b} = ${result}`);
};

const divide2 = (a, b) => {
  const result = a / b;
  console.log(`${a} / ${b} = ${result}`);
};

add2(15, 48);
subtract2(98, 41);
multiply2(54, 30);
divide2(88, 6);
