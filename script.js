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



// ***---*** DEFAULT DISPLAY ***---***
// defaultScreenDisplay()

// function defaultScreenDisplay() {
//     displayCurrent.textContent = '0';
//     displayPrevious.textContent = '';
// }

// ***---*** UPDATE SCREEN DISPLAY ***---***
function updateDisplay() {
    const displayCurrent = document.querySelector('[data-current-operand]');
    const displayPrevious = document.querySelector('[data-previous-operand]');
    displayCurrent.textContent = calculator.currentDisplayValue;
    displayPrevious.textContent = calculator.prevDisplayValue;
}
updateDisplay()


// ***---*** EVENT LISTENERS ***---***
// clearBtn.addEventListener('click', clearAll);
// deleteBtn.addEventListener('click', deleteDigit);
// equalsBtn.addEventListener('click', operate);

// operatorBtns.forEach(opBtn => {
//     opBtn.addEventListener('click', (event) => {
//         sumParts.operator = event.target.textContent;
//         // console.log('operator', operator);
//         updateScreenDisplay(event);
//         sumArrayCapture(event);
//     })
// })

// numberBtns.forEach(numBtn => {
//     numBtn.addEventListener('click', (event) => {
//         updateScreenDisplay(event);
//         // sumArrayCapture(event)
//     })
// })










// ***---*** CAPTURE DISPLAY SUM AND SEPARATE INTO VARIABLES ***---***
// function sumArrayCapture(event) {
//     sumParts.sumArray.push(event.target.textContent); //Array from buttons clicked//

//     let index = sumParts.sumArray.indexOf('x'); // find index of operator//

//     firstNum = sumParts.sumArray.slice(0, index).map(Number).join(''); //slice off first number//
//     secondNum = sumParts.sumArray.slice((index + 1)).map(Number).join(''); //slice off second number//
//     operator = sumParts.sumArray.slice(index, (index +1));

//     console.log(sumParts);
    // console.log('firstNum', firstNum);
    // console.log('secondNum', secondNum);
    // console.log('operator', operator);
// }


// ***---*** GET AND SET CALC INPUT INFO***---***
// function getFirstNum(arr, num) {
//     arr.slice(0, num).map(Number).join('');
//     return;
// }
// function getsecondNum(arr, num) {
//     arr.slice((num + 1)).map(Number).join('');
//     return;
// }
// function getOperator(arr, num) {
//     arr.slice(num, (num +1));
//     return;
// }


// ***---*** CALCULATION FUNCTIONS ***---***
// function add(num1, num2) {
//     result = num1 + num2;
//     return result;
// }
// function subtract(num1, num2) {
//     result = num1 - num2;
//     return result;
// }
// function multiply(num1, num2) {
//     result = num1 * num2;
//     return result;
// }
// function divide(num1, num2) {
//     result = num1 / num2;
//     return result;
// }



// ***---*** OPERATE FUNCTION - WHICH FUNCTION TO RUN ***---***
// function operate(num1, sign, num2) {
//     switch (sign) {
//         case '+':
//             add(num1, num2);
//             break;
//         case '-':
//             subtract(num1, num2);
//             break;
//         case '*':
//             multiply(num1, num2);
//             break;
//         case '/':
//             divide(num1, num2);
//             break;
//         default:
//             break;    
//     }
// }





// ***---*** CLEAR ALL FUNCTION ***---***
// function clearAll() {
//     if(screenDisplay.textContent === '0') {
//         return;
//     }
//     else {
//         screenDisplay.textContent = '0';
//         sumArray = [];
//         firstNum;       
//         operator;    
//         secondNum;        
//         result;
//     }
// }

// ***---*** DELETE KEY FUNCTION ***---***
// function deleteDigit() {
//     if(screenDisplay.textContent === '0') {
//         return;
//     }
//     else if (screenDisplay.textContent.length === 1 || screenDisplay.textContent === '') {
//         defaultScreenDisplay();
//     }
//     else {
//         screenDisplay.textContent = screenDisplay.textContent.slice(0, -1);
//         sumArray.pop();
//     }
// }





