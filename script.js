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
let solution = 0;
let currentNumber = '';
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
  currentNumber = '';
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
  if ( innerText === 'X' || innerText === '-' || innerText === '+' || innerText === '/' ) {
  // insert number value and operator value into arrays
  numbers.push(currentNumber);
  operators.push(innerText);
  currentNumber = ''; 
  console.log('number array', numbers, 'operator array', operators)

  // TODO: clear display
  // display = numbers[0];
  // updateDisplay();

  }
  else if (innerText === '=') {
    for (let index = 0; index < numbers.length - 1; index++) {
      if (index === 0) {
        solution = numbers[0]
      } else {
        let thisNumber = numbers[index];
        let thisOperator = operators[index - 1]
        if (thisOperator === 'X') {
          solution = solution * thisNumber
        } else if (thisOperator === '-') {
          solution = solution = thisNumber
        } else if (thisOperator === '+') {
          solution = solution + thisNumber
        } else if (thisOperator === '/') {
          solution = solution / thisNumber
        }
      }
    }
    console.log(solution)
  } else {
    // sets currentNumber global variable equal to it's original value PLUS the value of innerText
    currentNumber = currentNumber + innerText;
    console.log(currentNumber)
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
