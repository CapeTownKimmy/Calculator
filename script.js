let num1;       // FIRST NUMBER ENTERED //
let operator;   // OPERATOR ENTERED //
let num2;       // SECOND NUMBER ENTERED //
let result;     // RESULT OF CALCULATIONS //









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
// function percent(num1, num2) {
//     result = num1 + num2;
//     return result;
// }


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
        // case '%':
        //     percent(num1, num2);
        //     break;
    }
}
