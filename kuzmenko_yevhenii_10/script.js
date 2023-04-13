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
    } 
    
    if(min >= max) return console.log('Вы ввели не число или первое число равно/больше второго')
}
 
// let myNewArrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(isBetween(2, 5))
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



const products = [
  {name: 'Product 1', quantity: 10, price: 25},
  {name: 'Product 2', quantity: 3, price: 55},
  {name: 'Product 3', quantity: 22, price: 35},
]

function sortByField(fieldName, sortType) {
  if(fieldName === 'name' && sortType === 'desc') {
    return function(a, b) {
      if (a.name > b.name) {
         return -1;
      }
      if (a.name < b.name) {
         return 1;
      }
    } 
  } else if(fieldName === 'name' && sortType === 'asc') {
    return function(a, b) {
      if (a.name < b.name) {
         return -1;
      }
      if (a.name > b.name) { 
        return 1;
      }
    } 
  }

  if(fieldName === 'quantity' && sortType === 'desc') {
    return function(a, b) {
      if (a.quantity > b.quantity) {
         return -1;
      }
      if (a.quantity < b.quantity) { 
        return 1;
      }
    } 
  } else if(fieldName === 'quantity' && sortType === 'asc') {
    return function(a, b) {
      if (a.quantity < b.quantity) {
         return -1;
      }
      if (a.quantity > b.quantity) { 
        return 1;
      }
    } 
  }

  if(fieldName === 'price' && sortType === 'desc') {
    return function(a, b) {
      if (a.price > b.price) { 
        return -1;
      }
      if (a.price < b.price) { 
        return 1;
      }
    } 
  } else if(fieldName === 'price' && sortType === 'asc') {
    return function(a, b) {
      if (a.price < b.price) { 
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }
    } 
  }
}

let abc = products.sort(sortByField('quantity', 'desc'));

console.log(abc)

