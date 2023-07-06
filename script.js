
// ***---*** SELECTORS ***---***
const screenDisplay = document.querySelector('.display');
const btnContainer = document.querySelector('.btnContainer');

// ***---*** BUTTONS ***---***
const clearBtn = document.querySelector('.clearAll');
const deleteBtn = document.querySelector('.delete');
const operatorBtns = document.querySelectorAll('.operator');
const numberBtns = document.querySelectorAll('.number');

let sumArray = [];
let firstNum = [];        // FIRST NUMBER ENTERED //
let operator = null;    // OPERATOR ENTERED //
let secondNum = [];        // SECOND NUMBER ENTERED //
let result;             // RESULT OF CALCULATIONS //



// console.log(numberBtns);

defaultScreenDisplay();


// ***---*** EVENT LISTENERS ***---***
clearBtn.addEventListener('click', clearAll);
deleteBtn.addEventListener('click', deleteDigit);

operatorBtns.forEach(opBtn => {
    opBtn.addEventListener('click', (event) => {
        operator = event.target;
        updateScreenDisplay(event);
        sumArrayCapture(event)
        if(!event.target.classList.contains('operator')) {
            return;
        }
        else {
            operator = event.target.textContent;
            console.log(operator);
        }
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
    sumArray.push(event.target.textContent);
    let index = sumArray.indexOf('x');
    let stringArr1 = sumArray.slice(0, index);
    let stringArr2 = sumArray.slice((index + 1), -1);
    firstNum = stringArr1.map(Number).join('');
    secondNum = stringArr2.map(Number).join('');
    console.log('firstNum', firstNum);
    console.log('secondNum', secondNum);
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
function operate(num1, operator, num2) {
    switch (operator) {
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
        num1 = [];       
        operator = null;    
        num2 = [];        
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


// ***---*** BUTTON CLICK EVENTS ***---***
// btnContainer.addEventListener('click', (event) => {
//     const pressedBtn = event.target;
//     if(!pressedBtn.matches('.btn')) {
//         return;
//     }
//     if(pressedBtn.classList.contains('operator')) {
//         console.log('operator', pressedBtn.textContent);
//         // updateScreenDisplay(pressedBtn);
//         isDepressed(pressedBtn);
//         return;
//     }
//     if(pressedBtn.classList.contains('decimal')) {
//         // console.log('decimal', pressedBtn.textContent);
//         updateScreenDisplay(pressedBtn);
//         return;
//     }
//     if(pressedBtn.classList.contains('clearAll')) {
//         // console.log('clearAll', pressedBtn.textContent);
//         clearAll();
//         return;
//     }
//     if(pressedBtn.classList.contains('delete')) {
//         // console.log('delete', pressedBtn.textContent);
//         deleteKey();
//         return;
//     }
//     // console.log('digit', pressedBtn.textContent)
//     updateScreenDisplay(pressedBtn);
// })

// ***---*** BUTTON CLICK EVENTS ***---***



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

// ***---*** ISDEPRESSED FUNCTION FOR OPERATOR SELECTED ***---***
// function isDepressed(pressedBtn) {
//     if(pressedBtn.classList.contains('isDepressed')) {
//         pressedBtn.classList.remove('isDepressed');
//     } else {
//         pressedBtn.classList.add('isDepressed');
//     }

// }



// ***---*** STORE NUM1 VARIABLE ***---***

