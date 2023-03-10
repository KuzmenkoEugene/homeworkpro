const choice = +prompt(`Выберите номер нужной вам операции: \n1. Сложение  \n2. Вычетание \n3. Умножение \n4. Деление \n5. Возвести в степень \n6. Cos \n7. Sin`);

switch(choice) {
    case 1:
        const firstNumberSum = +prompt(`Введите число`);
        const secondNumberSum = +prompt(`Введите второе число`);
        const resultNumberSum = firstNumberSum + secondNumberSum;
        alert(`${firstNumberSum} + ${secondNumberSum} = ${resultNumberSum}`); break;
    case 2:
        const firstNumberDiff = +prompt(`Введите число`);
        const secondNumberDiff = +prompt(`Введите второе число`);
        const resultNumberDiff = firstNumberDiff - secondNumberDiff;
        alert(`${firstNumberDiff} - ${secondNumberDiff} = ${resultNumberDiff}`); break;
    case 3:
        const firstNumberMult = +prompt(`Введите число`);
        const secondNumberMult = +prompt(`Введите второе число`);
        const resultNumberMult = firstNumberMult * secondNumberMult;
        alert(`${firstNumberMult} * ${secondNumberMult} = ${resultNumberMult}`); break;
    case 4:
        const firstNumberDiv = +prompt(`Введите число`);
        const secondNumberDiv = +prompt(`Введите второе число`);
        const resultNumberDiv = firstNumberDiv / secondNumberDiv
        alert(`${firstNumberDiv} / ${secondNumberDiv} = ${resultNumberDiv}`); break;
    case 5: 
        const firstNumberPow = +prompt(`Основание степени`);
        const secondNumberPow = +prompt(`Показатель степени`);
        const resultPow = Math.pow(firstNumberPow, secondNumberPow);
        alert(`Результат: ${resultPow}`); break;
    case 6:
        const myNumberCos = +prompt(`Введите число`);
        const resultCos = Math.cos(myNumberCos);
        alert(`Результат: ${resultCos}`); break;
    case 7:    
        const myNumberSin = +prompt(`Введите число`);
        const resultSin = Math.sin(myNumberSin);
        alert(`Результат: ${resultSin}`); break;
    default: alert(`Ошибка! \nВы выбрали неправильный номер операции \nВы ввели "${choice}".`); break;
}