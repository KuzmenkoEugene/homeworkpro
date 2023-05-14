function Student(name, faculty, marks) {
    this.name = name;
    this.faculty = faculty
    this.marks = marks

    this.getAvgMark = getAvgMark;
    this.getMedianMark = getMedianMark;
    this.getMaxMark = getMaxMark;
    this.getMinMark = getMinMark;
    this.getTotal = getTotal;
    this.getInfo = getInfo;
}

function getAvgMark() {
    let totalNumber = this.marks.reduce(function (accumulator, currentValue) {
        return  accumulator += currentValue
    }) 

    return totalNumber / this.marks.length;
}

function getMedianMark() {
    let sortGrades = this.marks.slice().sort((a, b) => a - b)
    let length = sortGrades.length;
    let middleIndex = Math.floor(length / 2);

    if(length % 2 === 0) {
        return ([sortGrades[middleIndex - 1] + sortGrades[middleIndex]]) / 2;
    } else {
        return sortGrades[middleIndex];
    }
}

function getMaxMark() {
    let max = this.marks[0];

    for (let i = 1; i < this.marks.length; i++) {
        if (this.marks[i] > max) {
            max = this.marks[i];
        } 
    } 

    return max;
}

function getMinMark() {
    let min = this.marks[0];

    for (let i = 1; i < this.marks.length; i++) {
        if (this.marks[i] < min) {
            min = this.marks[i];
        } 
    } 

    return min;
}

function getTotal() {
    let totalNumber = this.marks.reduce(function (accumulator, currentValue) {
        return accumulator += currentValue
    }) 

    return totalNumber;
}

function getInfo() {
    return `Name: ${this.name}, ` + `Faculty: ${this.faculty}, ` + `Total: ${this.getTotal()}`
}

const student = new Student('John', 'Computer engineering', [1, 2, 44, 4, 5, 6, 54, 8, 9, 10, 99, 12])

console.log(student.getAvgMark()); 
console.log(student.getMedianMark()); 
console.log(student.getMaxMark()); 
console.log(student.getMinMark()); 
console.log(student.getTotal()); 
console.log(student.getInfo());
