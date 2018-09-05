// Rewrite function as arrow function
const convertToNumber = (string) => {
  return (+string)
}
  // function receives a string representation
  // of a number convert it to a number and return it


// Rewrite function as arrow function
const convertToNegativeNumber = (string) => {
  if (string[0] !== '-') {
    return (-string);
  } else {
    return (+string);
  }
}
// Rewrite function as arrow function
const invertBoolean = (input) => {
  if (typeof input === 'boolean') {
    return (!input);
  } else {
      return input;
  }
}
  // function receives one argument which could be of any type

  // if it is a boolean negate it, true -> false, false to true

  // if the input is not a boolean return the input


// Rewrite function as arrow function
const convertToBoolean = (list) => { 
  const arrBoolean = []
  for (let i = 0; i < list.length; i++) {
    arrBoolean.push(!!list[i]);
  }
  return arrBoolean;
  // Function receives an array of values which could be of any type

  // Convert all values in array to boolean and return the array
}

// Rewrite function as arrow function
const deleteStrings = (list) => {
for (let i = 0; i < list.length; i++) {
  if (typeof list[i] === 'string') { 
    delete list[i]
  } 
}
  // Function receives an array of strings and numbers

  // delete strings in array, (make them undefined)

  // return resulting array
  return list;
}

// Rewrite function as arrow function
const deleteYear = (cars) => {
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].year < 1995) {
      delete cars[i].year;
    }
  }
return cars
  // cars is an array of objects. Each object has a make, model and year property

  // For example { make: 'Ford', model: 'Fiesta', year: 1991 }

  // return an array of cars with year property deleted if the year is before 1995
}

// Rewrite function as arrow function
const isBetween = (number, from, to) => {
  if ((number >= from) && (number < to)) {
    return true 
  } else {
    return false
  }
  // function receives three numbers as arguments

  // return true if number is equal to or greater than from and less than to

  // return false otherwise
}

// Rewrite function as arrow function
const evens = (a, b, c, d) => ((!(a % 2)) && (!(b % 2)) && (!(c % 2)) && (!(d % 2)));

  // function receives 4 numbers return true if all numbers are even and false otherwise

  // do not use if/else or ternary

// Rewrite function as arrow function
const averageOfStrings = (list) => {
  let avgArray = [];
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === 'string') {
      avgArray.push(+list[i])
    } 
} for (let u = 0; u < avgArray.length; u++) {
  sum += avgArray[u];
} return sum / avgArray.length
  };
  // function receives an array of numbers and string representation of numbers

  // calculate an average value of numbers represented as strings and return it.


// Rewrite function as arrow function
const footballScores = (results) => {
 let winners = [];
  for (let i = 0; i < results.length; i++) { 
    if (results[i].home > results[i].away) { 
winners.push('home'); 
    } else if (results[i].away > results[i].home) {
      winners.push('away');
    } else {
      winners.push('draw')
    }
  } return winners;
  // results is an array of football scores represented as objects

  // for example: [{home: 0, away: 2}, {home: 3, away: 1}, {home: 1, away: 1}]

  // return an array of winning teams or draw if results are same
  // for example: [away, home, draw]
}

module.exports = {
  convertToNumber,
  convertToNegativeNumber,
  invertBoolean,
  convertToBoolean,
  deleteStrings,
  deleteYear,
  isBetween,
  evens,
  averageOfStrings,
  footballScores
};
