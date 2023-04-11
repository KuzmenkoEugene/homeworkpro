function createStack() {
    let stack = [];
  
    return {
      push(element) {
        stack.push(element);
      },
      pop() {
        return stack.pop();
      },
      getStack() {
        return console.log(stack);
      }
    };
}

// const stack = createStack() 

// stack.push(1)
// stack.push(10)
// stack.getStack()

// stack.pop()
// stack.getStack()


function isBetween(min, max) {
    if (min < max && min <= 9 && max <= 10) {
        return function(number) {
            return number >= min && number <= max;
        }
    } else if(min => max && max <= min) {
        return console.log('Вы ввели не число или первое число равно/больше второго')
    }
}
 
// let myNewArrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(isBetween(3, 5))
// console.log(myNewArrayNumber)


function calculate(operation) {
  return function(firstNumber, secondNumber) {
    if (typeof firstNumber !== "number" || typeof secondNumber !== "number") {
      return console.log('Вы ввели не число');
    }
    if (operation === "+") {
      return firstNumber + secondNumber;
    } else if (operation === "-") {
      return firstNumber - secondNumber;
    } else if (operation === "*") {
      return firstNumber * secondNumber;
    } else if (operation === "/") {
      return firstNumber / secondNumber;
    } else if (operation === "pow") {
      return Math.pow(firstNumber, secondNumber);
    } else {
      return console.log('Нет такой операции.');
    }
  };
}

// const result = calculate("pow")(5, 4);
// console.log(result); 