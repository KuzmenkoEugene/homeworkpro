let exampleArray = [10, 2, 3, 'hello', undefined, 65, 32, 1, 100, 'three', 'world']

let exampleArray2 = [1, 2, 3, 4, 5, 6, 15, 25]


const utils = {
    reverseArray: function () {
        let myArray = []
        for (i = 0; i < exampleArray.length; i++) {
            myArray[i] = exampleArray[(exampleArray.length - 1) - i] 
        }
        return myArray
    },
    verifyNumbers: function () {
        let myArray = [];
        for (let i = 0; i < exampleArray.length; i++) {
            if (typeof exampleArray[i] === "number") {
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
    }, 
    getAverage: function () {
        let averegeNumber = 0
        for (let i = 0; i < exampleArray2.length; i++) {
            averegeNumber += exampleArray2[i]
        }
        return averegeNumber / exampleArray2.length
    },
    getMaxstring: function () {
        let myString = ''
        for (let i = 0; i < exampleArray.length; i++) {
            if (typeof exampleArray[i] === 'string' && exampleArray[i] > myString) {
                myString = exampleArray[i]
            }
        }
        return myString
    }
}

console.log(utils.reverseArray())
console.log(utils.verifyNumbers()) 
console.log(utils.getMin())
console.log(utils.getAverage())
console.log(utils.getMaxstring())  