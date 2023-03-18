let result;
let secondNumber;
let firstNumber;
let firstNumberResult;
let operation;
let myArray = [];

function choiceOperations() {
    return choice = prompt(`Выберите номер нужной вам операции: \n1. Сложение  \n2. Вычетание \n3. Умножение \n4. Деление \n5. Возвести в степень \n6. Cos \n7. Sin \n8. History`);
}

function firstOperand() {
    return firstNumber = prompt(`Введите число`);
}

function secondOperand() {
    return secondNumber = +prompt(`Введите второе число`);
}

function firstOperandPow() {
    return firstNumber = +prompt(`Введите основание степени`);
}

function secondOperandPow() {
    return secondNumber = +prompt(`Введите показатель степени`);
}

function additionOperation(firstNumber, secondNumber) {
    return result = firstNumber + secondNumber;
}

function subtractionOperation(firstNumber, secondNumber) {
    return result = firstNumber - secondNumber;
}

function multiplicationOperation(firstNumber, secondNumber) {
    return result = firstNumber * secondNumber;
}

function divisionOperation(firstNumber, secondNumber) {
    return result = firstNumber / secondNumber;
}

function powOperation(firstNumber, secondNumber) {
    return result = Math.pow(firstNumber, secondNumber);
}

function cosOperation(firstNumber) {
    return result = Math.cos(firstNumber);
}

function sinOperation(firstNumber) {
    return result = Math.sin(firstNumber);
}

function callAdditionOperation() {
    alert(`Operation сложение, ${firstNumber} + ${secondNumber} = ${result}`);
}

function callSubtractionOperation() {
    alert(`Operation вычетание, ${firstNumber} - ${secondNumber} = ${result}`);
}

function callMultiplicationOperation() {
    alert(`Operation умножение, ${firstNumber} * ${secondNumber} = ${result}`);
}

function callDivisionOperation() {
    alert(`Operation деление, ${firstNumber} / ${secondNumber} = ${result}`);
}

function callPowOperation() {
    alert(`Operation Pow, основание степени: ${firstNumber}, показатель степени: ${secondNumber} finished with result ${result}`);
}

function callCosOperation() {
    alert(`Operation Cos, число: ${firstNumber} finished with result ${result}`);
}

function callSinOperation() {
    alert(`Operation Sin, число: ${firstNumber} finished with result ${result}`);
}

function historyOperation() {
    alert(`История операций: \n${myArray}`);
}

function doItAgainWindow() {
    doItAgain = confirm(`Вы хотите совершить еще одну операцию?`);
}

function saveAdditionOperationInHistory() {
    operation = `Operation сложение, ${firstNumber} + ${secondNumber} = ${result}`;
    return myArray[myArray.length] = operation;
}

function saveSubtractionOperationInHistory() {
    operation = `Operation сложение, ${firstNumber} - ${secondNumber} = ${result}`;
    return myArray[myArray.length] = operation;
}

function saveMultiplicationOperationInHistory() {
    operation = `Operation сложение, ${firstNumber} * ${secondNumber} = ${result}`;
    return myArray[myArray.length] = operation;
}

function saveDivisionOperationInHistory() {
    operation = `Operation сложение, ${firstNumber} / ${secondNumber} = ${result}`;
    return myArray[myArray.length] = operation;
}

function savePowOperationInHistory() {
    operation = `Operation Pow, основание степени: ${firstNumber}, показатель степени: ${secondNumber} finished with result ${result}`;
    myArray[myArray.length] = operation;
}

function saveCosOperationInHistory() {
    operation = `Operation Cos, число: ${firstNumber} finished with result ${result}`;
    myArray[myArray.length] = operation;
}

function saveSinOperationInHistory() {
    operation = `Operation Sin, число: ${firstNumber} finished with result ${result}`;
    myArray[myArray.length] = operation;
}

do {
    do {
        choiceOperations();
    } while(isNaN(choice) || choice > 8 || choice == 0);

    if (choice == 1) {
        do {
            firstOperand();
        } while(Number(firstNumber) === 0 && !Number(firstNumber) || !firstNumber);
        do {
            secondOperand();
        } while(!secondNumber);
        additionOperation(firstNumber, secondNumber);
        saveAdditionOperationInHistory();
        callAdditionOperation();
    } else if (choice == 2) {
        do {
            firstOperand();
        } while(!firstNumber);
        do {
            secondOperand();
        } while(!secondNumber);
        subtractionOperation(firstNumber, secondNumber);
        saveSubtractionOperationInHistory();
        callSubtractionOperation();
    } else if (choice == 3) {
        do {
            firstOperand();
        } while(!firstNumber);
        do {
            secondOperand();
        } while(!secondNumber);
        multiplicationOperation(firstNumber, secondNumber);
        saveMultiplicationOperationInHistory();
        callMultiplicationOperation();
    } else if (choice == 4) {
        do {
            firstOperand();
        } while(!firstNumber);
        do {
            secondOperand();
        } while(!secondNumber);
        divisionOperation(firstNumber, secondNumber);
        saveDivisionOperationInHistory();
        callDivisionOperation();
    } else if (choice == 5) {
        do {
            firstOperandPow()
        } while(!firstNumber);
        do {
            secondOperandPow()
        } while(!secondNumber);
        powOperation(firstNumber, secondNumber);
        savePowOperationInHistory();
        callPowOperation();
    } else if (choice == 6) {
        do {
            firstOperand();
        } while(!firstNumber);
        cosOperation(firstNumber);
        saveCosOperationInHistory();
        callCosOperation();
    } else if (choice == 7) {
        do {
            firstOperand();
        } while(!firstNumber);
        sinOperation(firstNumber);
        saveSinOperationInHistory();
        callSinOperation();
    } 

    if (choice == 8) {  
        historyOperation();
    }

    doItAgainWindow();

} while(doItAgain === true);