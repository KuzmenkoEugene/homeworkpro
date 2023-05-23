class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    welcome() {
        
        return `Hi! I'm ${this.name} ${this.surname}`
    }
}

const person = new Person('John', 'Smith');

person.welcome();

class Student extends Person {
    constructor(name, surname, faculty, arrayNumbers) {
        super(name, surname)

        this.faculty = faculty;
        this.arrayNumbers = arrayNumbers;
    }
    getAvgMark() {
        let totalNumber = this.arrayNumbers.reduce(function (accumulator, currentValue) {
            return  accumulator += currentValue
        }) 
    
        return totalNumber / this.arrayNumbers.length;
    }

    getMedianMark() {
        let sortGrades = this.arrayNumbers.slice().sort((a, b) => a - b)
        let length = sortGrades.length;
        let middleIndex = Math.floor(length / 2);

        if(length % 2 === 0) {
            return ([sortGrades[middleIndex - 1] + sortGrades[middleIndex]]) / 2;
        } else {
            return sortGrades[middleIndex];
        }
    }

    getMaxMark() {
        let max = this.arrayNumbers[0];

        for (let i = 1; i < this.arrayNumbers.length; i++) {
            if (this.arrayNumbers[i] > max) {
                max = this.arrayNumbers[i];
            } 
        } 

        return max;
    }

    getMinMark() {
        let min = this.arrayNumbers[0];

        for (let i = 1; i < this.arrayNumbers.length; i++) {
            if (this.arrayNumbers[i] < min) {
                min = this.arrayNumbers[i];
            } 
        } 

        return min;
    }

    getTotal() {
        let totalNumber = this.arrayNumbers.reduce(function (accumulator, currentValue) {
            return accumulator += currentValue
        }) 
    
        return totalNumber;
    }

    getInfo() {

        return  `${this.name} ` + `${this.faculty} ` + `${this.getTotal()}`;
    }
}

const student = new Student('Jane', 'Smith', 'Gryfindor', [8, 7, 9, 6, 3, 7, 10, 8, 9, 10]);

student.welcome();
student.getAvgMark(); 
student.getMedianMark(); 
student.getMaxMark(); 
student.getMinMark(); 
student.getTotal(); 
student.getInfo();

class Headman extends Student {
    defendGroup() {

       return `This is my group. I'm their hero!`;
    }
}

const headman = new Headman('Bruce', 'Smith', 'Slytherin', [3, 1, 4, 5, 2, 7, 2, 4, 1, 8]);

headman.welcome(); 
headman.defendGroup(); 
headman.getAvgMark(); 
headman.getMedianMark(); 
headman.getMaxMark(); 
headman.getMinMark(); 
headman.getTotal(); 
headman.getInfo(); 