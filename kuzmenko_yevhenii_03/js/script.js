const choice = +prompt(`Выберите номер нужной вам операции: \n1. Сложение  \n2. Вычетание \n3. Умножение \n4. Деление \n5. Возвести в степень \n6. Cos, Sin операции`);

if (choice <= 4 && choice > 0)  {
    const firstNumber = +prompt(`Введите число`);
    const secondNumber = +prompt(`Введите второе число`);
    if (1 === choice) {
        const resultNumberSum = firstNumber + secondNumber
        alert(`${firstNumber} + ${secondNumber} = ${resultNumberSum}`)
    } else if (2 === choice) {
        const resultNumberDiff = firstNumber - secondNumber
        alert(`${firstNumber} - ${secondNumber} = ${resultNumberDiff}`)
    } else if (3 === choice) {
        const resultNumberMult = firstNumber * secondNumber
        alert(`${firstNumber} * ${secondNumber} = ${resultNumberMult}`)
    } else if (4 === choice) {
        const resultNumberDiv = firstNumber / secondNumber
        alert(`${firstNumber} / ${secondNumber} = ${resultNumberDiv}`)
    } else {
    }
} else if (choice == 5) {
    const firstNumber = +prompt(`Основание степени`);
    const secondNumber = +prompt(`Показатель степени`);
    if (5 === choice) {
        const resultPow = Math.pow(firstNumber, secondNumber);
        alert(`Результат: ${resultPow}`)
    } else {
    }
} else if (choice == 6) {
    const resultAdd = +prompt(`Выберите номер нужной вам операции: \n1. Cos \n2. Sin`);
    const myNumber = +prompt(`Введите число`);
    if (resultAdd == 1) {
        const resultCos = Math.cos(myNumber);
        alert(`Результат: ${resultCos}`)
    } else if (resultAdd == 2) {
        const resultSin = Math.sin(myNumber);
        alert(`Результат: ${resultSin}`)
    } else {
        alert(`Ошибка! \nВы выбрали неправильный номер операции \nВы ввели "${resultAdd}".`)
    }
} else {
    alert(`Ошибка! \nВы выбрали неправильный номер операции \nВы ввели "${choice}".`)
}

