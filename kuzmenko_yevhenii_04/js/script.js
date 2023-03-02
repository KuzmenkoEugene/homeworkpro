const choice = +prompt(`Выберите номер нужной вам операции: \n1. Сложение  \n2. Вычетание \n3. Умножение \n4. Деление \n5. Возвести в степень \n6. Cos \n7. Sin`);

switch(true) {
    case choice === 1:
        const firstNumberSum = +prompt(`Введите число`);
        const secondNumberSum = +prompt(`Введите второе число`);
        const resultNumberSum = firstNumberSum + secondNumberSum
        alert(`${firstNumberSum} + ${secondNumberSum} = ${resultNumberSum}`); break;
    case choice === 2:
        const firstNumberDiff = +prompt(`Введите число`);
        const secondNumberDiff = +prompt(`Введите второе число`);
        const resultNumberDiff = firstNumberDiff - secondNumberDiff
        alert(`${firstNumberDiff} - ${secondNumberDiff} = ${resultNumberDiff}`); break;
    case choice === 3:
        const firstNumberMult = +prompt(`Введите число`);
        const secondNumberMult = +prompt(`Введите второе число`);
        const resultNumberMult = firstNumberMult * secondNumberMult
        alert(`${firstNumberMult} * ${secondNumberMult} = ${resultNumberMult}`); break;
    case choice === 4:
        const firstNumberDiv = +prompt(`Введите число`);
        const secondNumberDiv = +prompt(`Введите второе число`);
        const resultNumberDiv = firstNumberDiv / secondNumberDiv
        alert(`${firstNumberDiv} / ${secondNumberDiv} = ${resultNumberDiv}`); break;
    case choice == 5: 
        const firstNumberPow = +prompt(`Основание степени`);
        const secondNumberPow = +prompt(`Показатель степени`);
        case 5 === choice: 
            const resultPow = Math.pow(firstNumberPow, secondNumberPow);
            alert(`Результат: ${resultPow}`); break;
    case 6 === choice:
        const myNumberCos = +prompt(`Введите число`);
        case choice == 6:
            const resultCos = Math.cos(myNumberCos);
            alert(`Результат: ${resultCos}`); break;
    case 7 === choice:    
        const myNumberSin = +prompt(`Введите число`);
        case choice == 7:
            const resultSin = Math.sin(myNumberSin);
            alert(`Результат: ${resultSin}`); break;
    default: alert(`Ошибка! \nВы выбрали неправильный номер операции \nВы ввели "${choice}".`); break;
}