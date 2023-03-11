let firstNumber; 
let secondNumber;
let result;
let myArrayCase;
const myArray = [];

do {
    do {
        choice = +prompt(`Выберите номер нужной вам операции: \n0. Выход \n1. Сложение  \n2. Вычетание \n3. Умножение \n4. Деление \n5. Возвести в степень \n6. Cos \n7. Sin \n8. History`);
    } while(choice > 8 && choice < 1 || isNaN(choice)) 
    
    do {
        switch(choice) {
            case 1: firstNumber = +prompt(`Введите число`);
            secondNumber = +prompt(`Введите второе число`); 
            result = firstNumber + secondNumber; 
            alert(`Operation sum finished with result ${result}`);
            operation = `Operation sum finished with result ${result}`
            myArray[myArray.length] = operation; 
            break;
            case 2: firstNumber = +prompt(`Введите число`);
            secondNumber = +prompt(`Введите второе число`); 
            result = firstNumber - secondNumber; 
            alert(`Operation subtract finished with result ${result}`);
            operation = `Operation subtract finished with result ${result}`
            myArray[myArray.length] = operation; 
            break;
            case 3: firstNumber = +prompt(`Введите число`);
            secondNumber = +prompt(`Введите второе число`);
            result = firstNumber * secondNumber; 
            alert(`Operation multiply finished with result ${result}`);
            operation = `Operation multyply finished with result ${result}`
            myArray[myArray.length] = operation; 
            break;
            case 4: firstNumber = +prompt(`Введите число`);
            secondNumber = +prompt(`Введите второе число`);
            result = firstNumber / secondNumber; 
            alert(`Operation division finished with result ${result}`);
            operation = `Operation division finished with result ${result}`
            myArray[myArray.length] = operation; 
            break;
            case 5: firstNumber = +prompt(`Основание степени`);
            secondNumber = +prompt(`Показатель степени`);
            result = Math.pow(firstNumber, secondNumber); 
            alert(`Operation pow finished with result ${result}`);
            operation = `Operation pow finished with result ${result}`
            myArray[myArray.length] = operation; 
            break;
            case 6: firstNumber = +prompt(`Введите число`);
            result = Math.cos(firstNumber); 
            alert(`Operation cos finished with result ${result}`);
            operation = `Operation cos finished with result ${result}`
            myArray[myArray.length] = operation; 
            break;
            case 7: firstNumber = +prompt(`Введите число`);
            result = Math.sin(firstNumber); 
            alert(`Operation sin finished with result ${result}`);
            operation = `Operation sin finished with result ${result}`
            myArray[myArray.length] = operation; 
            break;
            case 8: myArrayCase = alert(myArray); break;
        } 
    } while(isNaN(firstNumber, secondNumber), myArrayCase !== undefined)

    doItAgain = confirm(`Вы хотите совершить еще одну операцию?`)
    
} while(doItAgain === true)