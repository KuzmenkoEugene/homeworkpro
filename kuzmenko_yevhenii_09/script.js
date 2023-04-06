let obj = {
    a: 'f',
    b: 78,
    c: 'R',
    d: {
      a: {
        a: null,
        b: 'E',
        c: {
          a: true,
          b: 'C',
          c: 'test'
        },
        d: 'U'
      },
      b: {
       a: 'R',
       b: ['S', 4, 6, 'I'],
       c: 0,
      },
      c: ['O'],
      d: null,
      e: 'N'
    }
}

const recursion = (obj) => {
  let myWord = '';
  for (let key in obj) {

    if (obj[key] === 'R' || obj[key] === 'E' || obj[key] === 'C' || obj[key] === 'U' || obj[key] === 'S' || obj[key] === 'I' || obj[key] === 'O' || obj[key] === 'N') {
      myWord += obj[key];
    } else if (typeof obj[key] === 'object') {
      myWord += recursion(obj[key]);
    }

  }

  return myWord;
}

const myRecursion = recursion(obj)

console.log(myRecursion);



