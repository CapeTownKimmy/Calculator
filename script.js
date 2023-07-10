const calculator = {
    currentDisplayValue: '0',
    prevDisplayValue: '',
    firstOperand: null,
    secondOperand: null,
    waitingForSecondOperand: false,
    operator: null, 
}

// ***---*** SELECTORS ***---***
const btnContainer = document.querySelector('.btnContainer');

// ***---*** BUTTONS ***---***
const clearBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const operatorBtns = document.querySelectorAll('[data-operation]');
const numberBtns = document.querySelectorAll('[data-number]');
const equalsBtn = document.querySelector('[data-equals]');


// ***---*** UPDATE SCREEN DISPLAY ***---***
function updateDisplay() {
    const displayCurrent = document.querySelector('[data-current-operand]');
    const displayPrevious = document.querySelector('[data-previous-operand]');
    displayCurrent.textContent = calculator.currentDisplayValue;
    displayPrevious.textContent = calculator.prevDisplayValue;
}
updateDisplay()


// ***---*** EVENT LISTENERS MOUSE***---***
clearBtn.addEventListener('click', () => {
    clearAll();
    updateDisplay();
});
deleteBtn.addEventListener('click', () => {
    deleteDigit();
    updateDisplay();
});

//OPERATORS//
operatorBtns.forEach(opBtn => {
    opBtn.addEventListener('click', (event) => {
        clickedOperator(event.target.textContent);
        updateDisplay();
    })
})
//NUMBERS//
numberBtns.forEach(numBtn => {
    numBtn.addEventListener('click', (event) => {
        inputDigit(event.target.textContent);
        updateDisplay();
    })
})


// ***---*** EVENT LISTENERS KEYBOARD***---***
document.addEventListener('keydown', keyboardInput);

function keyboardInput(event) {
    let key = event.key;
    if (key >= 0 && key <= 9 || key === '.') {
        inputDigit(key);
        updateDisplay();
    }
    if (key === '+' || key === '-' || key === '*' || key === '/' || key === '=' || key === 'Enter') {
        clickedOperator(key);
        updateDisplay();
    }
    if (key === 'Escape') {
        clearAll();
        updateDisplay();
    }
    if (key === 'Backspace') {
        deleteDigit();
        updateDisplay();
    }
}


// ***---*** CAPTURE INPUT & DISPLAY ON SCREEN ***---***
function inputDigit(digit) {
    const currentDisplayValue = calculator.currentDisplayValue;
    const waitingForSecondOperand = calculator.waitingForSecondOperand;
    if((currentDisplayValue === '0' && digit !== '.')|| waitingForSecondOperand === true) {        
        calculator.currentDisplayValue = digit;
        calculator.waitingForSecondOperand = false;
        calculator.prevDisplayValue = digit;
    } 
    else if (currentDisplayValue.includes('.') && digit === '.') { return
    }
    else {
        calculator.currentDisplayValue = currentDisplayValue + digit;
        calculator.prevDisplayValue = currentDisplayValue + digit;
    }
    // console.log(calculator);
}


// ***---*** STORE FIRST OPERAND AND OPERATOR ***---***
function clickedOperator(nextOperator) {
    const firstOperand = calculator.firstOperand;
    const currentDisplayValue = calculator.currentDisplayValue;
    const operator = calculator.operator;
    const inputValue = parseFloat(currentDisplayValue);
    if (operator && calculator.waitingForSecondOperand) {
        calculator.operator = nextOperator;
        // console.log(calculator);
        return;
    }
    if (firstOperand === null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue;
    } 
    else if (operator) {
        const result = operate(firstOperand, operator, inputValue);
        calculator.secondOperand = inputValue;
        if (operator === '/' && inputValue === 0) {
            calculator.prevDisplayValue = `Nope, can't do that...`;
            calculator.currentDisplayValue = ``;
        } 
        else {
        calculator.currentDisplayValue = `${parseFloat(result.toFixed(7))}`;
        calculator.firstOperand = result;
        }
    }
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    // console.log(calculator);
}




// ***---*** OPERATE FUNCTION - WHICH FUNCTION TO RUN ***---***
function operate(firstOperand, operator, secondOperand) {
    if (operator === '+') {
        calculator.prevDisplayValue = `${firstOperand + ' ' + operator + ' ' + secondOperand}`
        return firstOperand + secondOperand;
    }
    else if (operator === '-') {
        calculator.prevDisplayValue = `${firstOperand + ' ' + operator + ' ' + secondOperand}`
        return firstOperand - secondOperand;
    }
    else if (operator === '*') {
        calculator.prevDisplayValue = `${firstOperand + ' ' + 'x' + ' ' + secondOperand}`
        return firstOperand * secondOperand;
    }
    else if (operator === '/') {
        calculator.prevDisplayValue = `${firstOperand + ' ' + '÷' + ' ' + secondOperand}`
        return firstOperand / secondOperand;
    }
    return secondOperand;
}



// ***---*** CLEAR ALL FUNCTION ***---***
function clearAll() {
    calculator.currentDisplayValue = '0';
    calculator.prevDisplayValue = '';
    calculator.firstOperand = null;
    calculator.secondOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null; 
}

// ***---*** DELETE KEY FUNCTION ***---***
function deleteDigit() {
    if(calculator.currentDisplayValue === '0') {
        return;
    }
    else if (calculator.currentDisplayValue.length === 1 || calculator.currentDisplayValue === '') {
        clearAll();
    }
    else {
        calculator.currentDisplayValue = calculator.currentDisplayValue.slice(0, -1);
        calculator.prevDisplayValue = calculator.prevDisplayValue.slice(0, -1);
    }
}
