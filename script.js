
// ***---*** SELECTORS ***---***
const screenDisplay = document.querySelector('.display');
const btnContainer = document.querySelector('.btnContainer');

// ***---*** BUTTONS ***---***
const clearBtn = document.querySelector('.clearAll');
const deleteBtn = document.querySelector('.delete');
const operatorBtns = document.querySelectorAll('.operator');
const numberBtns = document.querySelectorAll('.number');
const equalsBtn = document.querySelector('.equals');

let sumArray = [];
let firstNum;        
let operator;          
let secondNum;        
// let result;             


defaultScreenDisplay();


// ***---*** EVENT LISTENERS ***---***
clearBtn.addEventListener('click', clearAll);
deleteBtn.addEventListener('click', deleteDigit);
equalsBtn.addEventListener('click', operate);

operatorBtns.forEach(opBtn => {
    opBtn.addEventListener('click', (event) => {
        // let operator = event.target.textContent;
        // console.log('operator', operator);
        updateScreenDisplay(event);
        sumArrayCapture(event);
    })
})

numberBtns.forEach(numBtn => {
    numBtn.addEventListener('click', (event) => {
        updateScreenDisplay(event);
        sumArrayCapture(event)
    })
})



// ***---*** CAPTURE DISPLAY SUM AND SEPARATE INTO VARIABLES ***---***
function sumArrayCapture(event) {
    sumArray.push(event.target.textContent); //Array from buttons clicked//

    let index = sumArray.indexOf('x'); // find index of operator//

    firstNum = sumArray.slice(0, index).map(Number).join(''); //slice off first number//
    secondNum = sumArray.slice((index + 1)).map(Number).join(''); //slice off second number//
    operator = sumArray.slice(index, (index +1));

    console.log('firstNum', firstNum);
    console.log('secondNum', secondNum);
    console.log('operator', operator);
}


// ***---*** GET AND SET CALC INPUT INFO***---***
function getFirstNum(arr, num) {
    arr.slice(0, num).map(Number).join('');
    return;
}
function getsecondNum(arr, num) {
    arr.slice((num + 1)).map(Number).join('');
    return;
}
function getOperator(arr, num) {
    arr.slice(num, (num +1));
    return;
}


// ***---*** CALCULATION FUNCTIONS ***---***
function add(num1, num2) {
    result = num1 + num2;
    return result;
}
function subtract(num1, num2) {
    result = num1 - num2;
    return result;
}
function multiply(num1, num2) {
    result = num1 * num2;
    return result;
}
function divide(num1, num2) {
    result = num1 / num2;
    return result;
}



// ***---*** OPERATE FUNCTION - WHICH FUNCTION TO RUN ***---***
function operate(num1, sign, num2) {
    switch (sign) {
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
        default:
            break;    
    }
}

// ***---*** DEFAULT DISPLAY ***---***
function defaultScreenDisplay() {
    screenDisplay.textContent = '0';
}



// ***---*** CLEAR ALL FUNCTION ***---***
function clearAll() {
    if(screenDisplay.textContent === '0') {
        return;
    }
    else {
        screenDisplay.textContent = '0';
        sumArray = [];
        firstNum;       
        operator;    
        secondNum;        
        result;
    }
}

// ***---*** DELETE KEY FUNCTION ***---***
function deleteDigit() {
    if(screenDisplay.textContent === '0') {
        return;
    }
    else if (screenDisplay.textContent.length === 1 || screenDisplay.textContent === '') {
        defaultScreenDisplay();
    }
    else {
        screenDisplay.textContent = screenDisplay.textContent.slice(0, -1);
        sumArray.pop();
    }
}


// ***---*** UPDATE SCREEN DISPLAY ***---***
function updateScreenDisplay(event) {
    if(screenDisplay.textContent === '0') {
        screenDisplay.textContent = event.target.textContent;
    }
    else {
        screenDisplay.textContent = screenDisplay.textContent + event.target.textContent;
    }
    // console.log('on screen', screenDisplay.textContent);
}


