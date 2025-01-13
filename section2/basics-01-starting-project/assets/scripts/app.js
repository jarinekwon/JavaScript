// alert('This works');
const defualtResult = 0;
// let currentResult = 0;
let currentResult = defualtResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {

    return parseInt(userInput.value);
} // 함수를 만들어 놓음으로써 다른 함수에서도 모두 사용 가능하도록 변수 만듦

// Generates and writes calcultation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

// function add(num1, num2) {
function add() {
    // const result = num1 + num2;
    // const enteredNumber = parseInt(userInput.value); // 변수명이 변했을 때 여러번 수정을 피함
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    // const calcDescription = `${currentResult} + ${parseInt(userInput.value)}`;
    // const calcDescription = `${currentResult} + ${enteredNumber}`;
    // currentResult = currentResult + userInput.value;
    // currentResult = currentResult + enteredNumber;
    currentResult += enteredNumber;
    // alert('The result is ' + result);
    // return result;
    // outputResult(currentResult, calcDescription);
    createAndWriteOutput('+', initialResult, enteredNumber);
    /*
    const logEntry = {
        operation: 'ADD',
        prevResult: initialResult,
        number: enteredNumber,
        result: currentResult
    };
    // logEntries.push(enteredNumber);
    logEntries.push(logEntry);
    // console.log(logEntry.operation);
    console.log(logEntries);
    */
   writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    // const calcDescription = `${currentResult} - ${enteredNumber}`;
    currentResult -= enteredNumber;
    // outputResult(currentResult, calcDescription);
    createAndWriteOutput('-', initialResult, enteredNumber);
    /* 
    const logEntry = {
        operation: 'SUBTRACT',
        prevResult: initialResult,
        number: enteredNumber,
        result: currentResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
    */
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

// add(1, 2);
// add(5, 5);
// const additionalResult = add(1, 2);

// currentResult = (currentResult + 10) * 3 / 2 - 1;
// currentResult = additionalResult;

/*
currentResult = add(1, 2);

// let calculationDescription = '(' + defualtResult + ' + 10) * 3 / 2 - 1';
let calculationDescription = `(${defualtResult} + 10) * 3 / 2 - 1`; // 백틱을 사용해야만 ${} 가능
*/

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// outputResult(currentResult, calculationDescription);