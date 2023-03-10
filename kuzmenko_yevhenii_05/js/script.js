let firstNumber; 
let secondNumber;
let result;

do {
    do {
        choice = +prompt(`Выберите номер нужной вам операции: \n1. Сложение  \n2. Вычетание \n3. Умножение \n4. Деление \n5. Возвести в степень \n6. Cos \n7. Sin`);
    } while(choice > 7 || isNaN(choice) || choice === 0)
    
    do {
        switch(choice) {
            case 1: firstNumber = +prompt(`Введите число`);
            secondNumber = +prompt(`Введите второе число`); 
            result = firstNumber + secondNumber; 
            alert(`Operation sum finished with result ${result}`);
            break;
            case 2: firstNumber = +prompt(`Введите число`);
            secondNumber = +prompt(`Введите второе число`); 
            result = firstNumber - secondNumber; 
            alert(`Operation subtract finished with result ${result}`);
            break;
            case 3: firstNumber = +prompt(`Введите число`);
            secondNumber = +prompt(`Введите второе число`);
            result = firstNumber * secondNumber; 
            alert(`Operation multiply finished with result ${result}`);
            break;
            case 4: firstNumber = +prompt(`Введите число`);
            secondNumber = +prompt(`Введите второе число`);
            result = firstNumber / secondNumber; 
            alert(`Operation division finished with result ${result}`);
            break;
            case 5: firstNumber = +prompt(`Основание степени`);
            secondNumber = +prompt(`Показатель степени`);
            result = Math.pow(firstNumber, secondNumber); 
            alert(`Operation pow finished with result ${result}`);
            break;
            case 6: firstNumber = +prompt(`Введите число`);
            result = Math.cos(firstNumber); 
            alert(`Operation cos finished with result ${result}`);
            break;
            case 7: firstNumber = +prompt(`Введите число`);
            result = Math.sin(firstNumber); 
            alert(`Operation sin finished with result ${result}`);
            break;
            case 8: 
        }
    } while(isNaN(firstNumber, secondNumber))
    
    doItAgain = confirm(`Вы хотите совершить еще одну операцию?`)
} while(doItAgain === true)