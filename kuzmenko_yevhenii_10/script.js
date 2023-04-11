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
//  stack.getStack()


function isBetween() {
    let min = +prompt('От')
    let max = +prompt('До')
    if (min < max && min <= 9 && max <= 10) {
        return function(number) {
            return number >= min && number <= max;
        }
    } else {
        return isBetween()
    }
}
 
let myNewArrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(isBetween())
console.log(myNewArrayNumber)

function calculate()