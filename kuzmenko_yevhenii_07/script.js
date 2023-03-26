let exampleArray = [10, 2, 3, 'hello world!', undefined, 65, 32, 1, 100, 'three', 'world'];

let exampleArray2 = [1, 2, 3, 4, 5, 6, 15, 25];

let exampleString = 'EXAMPLE';
 
const utils = {
    reverse: function (myData) {
        let myArray = [];
        let myString = "";

        if (typeof myData === "object") {
            for (let i = 0; i < myData.length; i++) {
                myArray[i] = myData[(myData.length - 1) - i];
            }    
        } else if (typeof myData === "string") {
            for (let i = 0; i < myData.length; i++) {
                let current = myData[i];
                myString = current + myString;
            }    
        }

        if (typeof myData === "object") {
            return myArray
        } else if (typeof myData === "string") {
            return myString
        }
    },
    verifyNumbers: function (myData) { 
        let myArray = [];
        for (let i = 0; i < myData.length; i++) {
            if (typeof myData[i] === "number") {
                myArray[i] = myData[i];
            }
        }
        return myArray
    },
    getMin: function (myData) {
        let min = myData[0];
        for (let i = 0; i < myData.length; i++) {
            if (myData[i] < min) {
                min = myData[i];
            }
        }
        return min
    }, 
    getAverage: function (myData) {
        let averegeNumber = 0;
        for (let i = 0; i < myData.length; i++) {
            averegeNumber += myData[i];
        }
        return averegeNumber / myData.length
    },
    getMaxstring: function (myData) {
        let myString = '';
        for (let i = 0; i < myData.length; i++) {
            if (typeof myData[i] === 'string' && myData[i].length > myString.length) {
                myString = myData[i];
            }
        }
        return myString
    }
}

console.log(utils.reverse(exampleArray));
console.log(utils.reverse(exampleString));  

console.log(utils.verifyNumbers(exampleArray));  

console.log(utils.getMin(exampleArray));  

console.log(utils.getAverage(exampleArray2));  

console.log(utils.getMaxstring(exampleArray));  

