
let exampleArray = [1, 2, 3, 'hello', undefined, 65, 32]

const utils = {
    reverseArray: function () {
        let myArray = []
        for (i = 0; i < exampleArray.length; i++) {
            myArray[i] = exampleArray[(exampleArray.length - 1) - i]
        }
        return myArray
    },

    
}

console.log(utils.reverseArray())