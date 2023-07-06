
// ***---*** BUTTONS ***---***
const screenDisplay = document.querySelector('.display');
const btnContainer = document.querySelector('.btnContainer');


let num1;       // FIRST NUMBER ENTERED //
let operator;   // OPERATOR ENTERED //
let num2;       // SECOND NUMBER ENTERED //
let result;     // RESULT OF CALCULATIONS //



// console.log(btnContainer);

defaultScreenDisplay();

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
    }
}

// ***---*** UPDATE SCREEN DISPLAY ***---***
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
    }
}

// ***---*** DELETE KEY FUNCTION ***---***
function deleteKey() {
    if(screenDisplay.textContent === '0') {
        return;
    }
    else {
        screenDisplay.textContent = screenDisplay.textContent.slice(0, -1);
    }
}


// ***---*** BUTTON CLICKS ***---***
btnContainer.addEventListener('click', (event) => {
    const pressedBtn = event.target;
    if(!pressedBtn.matches('.btn')) {
        return;
    }
    if(pressedBtn.classList.contains('operator')) {
        console.log('operator', pressedBtn.textContent);
        // screenDisplay.textContent = pressedBtn.textContent;
        updateScreenDisplay(pressedBtn)
        return;
    }
    if(pressedBtn.classList.contains('decimal')) {
        console.log('decimal', pressedBtn.textContent);
        // screenDisplay.textContent = pressedBtn.textContent;
        updateScreenDisplay(pressedBtn)
        return;
    }
    if(pressedBtn.classList.contains('clearAll')) {
        console.log('clearAll', pressedBtn.textContent);
        clearAll();
        return;
    }
    if(pressedBtn.classList.contains('delete')) {
        console.log('delete', pressedBtn.textContent);
        deleteKey();
        return;
    }
    console.log('digit', pressedBtn.textContent)
    // screenDisplay.textContent = pressedBtn.textContent;
    updateScreenDisplay(pressedBtn)
})

function updateScreenDisplay(pressedBtn) {
    if(screenDisplay.textContent === '0') {
        screenDisplay.textContent = pressedBtn.textContent;
    }
    else {
        screenDisplay.textContent = screenDisplay.textContent + pressedBtn.textContent;
    }
}

// console.log(screenDisplay.textContent.length)