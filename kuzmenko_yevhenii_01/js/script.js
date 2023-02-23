alert("Hello user!");

const myName = prompt("What is your name?");
const myBirth = prompt("What is your birth year?");
const myCountry = prompt("Where are you from?");

const myResult = confirm('Nice to meet you, ' + myName + '!' + ' You are ' + (2023 - myBirth) + ' years old! You are from ' + myCountry + '!' )

console.log(myResult)

