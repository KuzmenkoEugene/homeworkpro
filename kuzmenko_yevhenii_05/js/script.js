let result;
let secondNumber;
let firstNumber;
let operation;
let myArray = [];

do {
    do {
        choice = prompt(`Выберите номер нужной вам операции: \n1. Сложение  \n2. Вычетание \n3. Умножение \n4. Деление \n5. Возвести в степень \n6. Cos \n7. Sin \n8. History`);
    } while(isNaN(choice) || choice > 8 || choice == 0);

    if (choice == 1) {
        do {
            firstNumber = +prompt(`Введите число`);
        } while(!firstNumber);
        do {
            secondNumber = +prompt(`Введите второе число`);
        } while(!secondNumber);
        result = firstNumber + secondNumber;
        operation = `Operation сложение, ${firstNumber} + ${secondNumber} = ${result}`;
        myArray[myArray.length] = operation;
        alert(`Operation сложение, ${firstNumber} + ${secondNumber} = ${result}`);
    } else if (choice == 2) {
        do {
            firstNumber = +prompt(`Введите число`);
        } while(!firstNumber);
        do {
            secondNumber = +prompt(`Введите второе число`);
        } while(!secondNumber);
        result = firstNumber - secondNumber;
        operation = `Operation вычетание, ${firstNumber} - ${secondNumber} = ${result}`;
        myArray[myArray.length] = operation;
        alert(`Operation вычетание, ${firstNumber} - ${secondNumber} = ${result}`);
    } else if (choice == 3) {
        do {
            firstNumber = +prompt(`Введите число`);
        } while(!firstNumber);
        do {
            secondNumber = +prompt(`Введите второе число`);
        } while(!secondNumber);
        result = firstNumber * secondNumber;
        operation = `Operation умножение, ${firstNumber} * ${secondNumber} = ${result}`;
        myArray[myArray.length] = operation;
        alert(`Operation умножение, ${firstNumber} * ${secondNumber} = ${result}`);
    } else if (choice == 4) {
        do  {
            firstNumber = +prompt(`Введите число`);
        } while(!firstNumber);
        do {
            secondNumber = +prompt(`Введите второе число`);
        } while(!secondNumber);
        result = firstNumber / secondNumber;
        operation = `Operation деление, ${firstNumber} / ${secondNumber} = ${result}`;
        myArray[myArray.length] = operation;
        alert(`Operation деление, ${firstNumber} / ${secondNumber} = ${result}`);
    } else if (choice == 5) {
        do {
            firstNumber = +prompt(`Введите основание степени`);
        } while(!firstNumber);
        do {
            secondNumber = +prompt(`Введите показатель степени`);
        } while(!secondNumber);
        result = Math.pow(firstNumber, secondNumber);
        operation = `Operation Pow, основание степени: ${firstNumber}, показатель степени: ${secondNumber} finished with result ${result}`;
        myArray[myArray.length] = operation;
        alert(`Operation Pow, основание степени: ${firstNumber}, показатель степени: ${secondNumber} finished with result ${result}`);
    } else if (choice == 6) {
        do {
            firstNumber = +prompt(`Введите число`);
        } while(!firstNumber);
        result = Math.cos(firstNumber);
        operation = `Operation Cos, число: ${firstNumber} finished with result ${result}`;
        myArray[myArray.length] = operation;
        alert(`Operation Cos, число: ${firstNumber} finished with result ${result}`);
    } else if (choice == 7) {
        do {
            firstNumber = +prompt(`Введите число`);
        } while((!firstNumber));
        result = Math.sin(firstNumber);
        operation = `Operation Sin, число: ${firstNumber} finished with result ${result}`;
        myArray[myArray.length] = operation;
        alert(`Operation Sin, число: ${firstNumber} finished with result ${result}`);
    } 

    if (choice == 8) {  
        alert(`История операций: \n${myArray}`);
    }
    
    doItAgain = confirm(`Вы хотите совершить еще одну операцию?`);

} while(doItAgain === true);