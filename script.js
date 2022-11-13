// numbers 1 -9, multiplication, division, sub, add, squared, and equals
// querySelector corresponds to id and classes in html
const numberZero = document.querySelector('#zero');
const numberOne = document.querySelector('#one');
const numberTwo = document.querySelector('#two');
const numberThree = document.querySelector('#three');
const numberFour = document.querySelector('#four');
const numberFive = document.querySelector('#five');
const numberSix = document.querySelector('#six');
const numberSeven = document.querySelector('#seven');
const numberEight = document.querySelector('#eight');
const numberNine = document.querySelector('#nine');
const symbolMultiply = document.querySelector('#multiply');
const symbolDivision = document.querySelector('#divide');
const symbolPlus = document.querySelector('#plus');
const symbolMinus = document.querySelector('#minus');
const symbolDecimalPoint = document.querySelector('#decimal');
const symbolEquals = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');

//^ vars go on top
const inputDisplay = document.querySelector('#inputDisplay');

// global scoped variables to store numbers and operators
let numbers = [];
let operators = [];
let display = '';

// arithmetic functions
function multiply(param1, param2) {
  // multiply param1 and param2
  return param1 * param2;
}

function division(param1, param2) {
  return param1 / param2;
}

function plus(param1, param2) {
  return param1 + param2;
}

function clear() {
  display = '';
  numbers = [];
  operators = [];
  updateDisplay();
}

function setDisplay(text) {
  display += text;
}

function updateDisplay() {
  if (display === '') {
    inputDisplay.innerText = '0';
  } else {
    inputDisplay.innerText = display;
  }
}

function insertNumber(param1) {
  numbers.push(param1);
  console.log(numbers);
}

function insertOperator(inputOperator) {
  operators.push(inputOperator);
  console.log(operators);
}

// Click functions
function handleClick(event) {
  // set innerText to a variable
  const innerText = event.target.innerText;

  if (innerText === 'C') {
    clear();
    return;
  }

  // add button value to display global variable
  setDisplay(innerText);
  updateDisplay();

  // LOGIC
  if (
    innerText === 'X' ||
    innerText === '-' ||
    innerText === '+' ||
    innerText === '/'
  ) {
    console.log(display.slice(-1));
    // insertNumber(display.slice(-1));
  }
}

// event listeners
// event listeners are listening/waiting for you to click a button. Something's gonna happen!
numberZero.addEventListener('click', handleClick);
numberOne.addEventListener('click', handleClick);
numberTwo.addEventListener('click', handleClick);
numberThree.addEventListener('click', handleClick);
numberFour.addEventListener('click', handleClick);
numberFive.addEventListener('click', handleClick);
numberSix.addEventListener('click', handleClick);
numberSeven.addEventListener('click', handleClick);
numberEight.addEventListener('click', handleClick);
numberNine.addEventListener('click', handleClick);
symbolMultiply.addEventListener('click', handleClick);
symbolPlus.addEventListener('click', handleClick);
symbolMinus.addEventListener('click', handleClick);
symbolDivision.addEventListener('click', handleClick);
symbolDecimalPoint.addEventListener('click', handleClick);
symbolEquals.addEventListener('click', handleClick);
clearButton.addEventListener('click', handleClick);
