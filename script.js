// numbers 1 -9, multiplication, division, sub, add, squared, and equals
// querySelector corresponds to id and classes in html
const calculatorButtons = document.querySelector('#calculator-buttons');

//^ vars go on top
const inputDisplay = document.querySelector('#inputDisplay');

// global scoped variables to store numbers and operators
let solution = 0;
let currentNumber = '';
let lastNumber = '';
let operator = '';
let display = '';

function clear() {
  display = '';
  currentNumber = '';
  lastNumber = '';
  operator = '';
  solution = 0;
  updateDisplay();
}

function setDisplay(text, override) {
  if (override) {
  
  display = toFixedIfNecessary(text, 4);
  return;
  }
  display += text;
}

function toFixedIfNecessary( value, decimal ){
  return +parseFloat(value).toFixed( decimal );
}

function updateDisplay() {
  if (display === '') {
    inputDisplay.innerText = '0';
  } else {
    inputDisplay.innerText = display;
  }
}

function solve(operator, first, second) {
  // create variable to store solution value
  let value;
  switch(operator) {
    case 'X': value = Number(first) * Number(second);
    break;

    case '-': value = Number(first) - Number(second);
    break;

    case '+': value = Number(first) + Number(second);
    break;

    case '/': value = Number(first) / Number(second);
    break;  
  }
  return value;
}

// Click functions
function handleClick(event) {
  if (event.target.localName !== 'button') {
    return;
  }

  // if solution exists, reset
  if (solution !== 0) {
    clear()
  }

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

  // An array of different operator options
  let operatorOptions = ['X', '-', '+', '/'];

  // if innerText is an operator
  if (operatorOptions.includes(innerText)) {
    lastNumber = currentNumber;
    operator = innerText;
    currentNumber = ''
    
  }
  else if (innerText === '=') {
    if (operator) {
      solution = solve(operator, lastNumber, currentNumber);
      setDisplay(solution.toString(), true);
      updateDisplay()
    }
  } else {
    // sets currentNumber global variable equal to it's original value PLUS the value of innerText
    currentNumber = currentNumber + innerText;
}
}

// event listeners
// event listeners are listening/waiting for you to click a button. Something's gonna happen!
calculatorButtons.addEventListener('click', handleClick);