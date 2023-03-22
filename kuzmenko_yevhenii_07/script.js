let exampleArray = [10, 2, 3, 'hello', undefined, 65, 32, 1]


const utils = {
    reverseArray: function () {
        let myArray = []
        for (i = 0; i < exampleArray.length; i++) {
            myArray[i] = exampleArray[(exampleArray.length - 1) - i]
        }
        return myArray
    },
    verifyNumbers: function myArrayNumbers () {
        let myArray = [];
        for (let i = 0; i < exampleArray.length; i++) {
            if (Number(exampleArray[i])) {
                myArray[i] = exampleArray[i]
            }
        }
        return myArray
    },
    getMin: function () {
        let min = exampleArray[0]
        for (let i = 0; i < exampleArray.length; i++) {
            if (exampleArray[i] < min) {
                min = exampleArray[i]
            }
        }
        return min
    }
}

console.log(utils.reverseArray())
console.log(utils.verifyNumbers())
console.log(utils.getMin())



