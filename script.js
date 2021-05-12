'use strict';
//////////////////////////////////////////////////////  Javascript Fundamentals - Part 2
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive !');

// const interface = 'Audio';
// const private = 234;
// const if = 23;


//////////////////////////////////////////////////////  Functions

function logger() {
  console.log(`My name is Jonas`);
}
// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');



//////////////////////////////////////////////////////  Function Decalrations vs. Expressions

//  Function Declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

//  Function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
} 
const age2 = calcAge2(1991);

console.log(age1, age2);



//////////////////////////////////////////////////////  Arrow Functions

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear,firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));



//////////////////////////////////////////////////////  Functions Calling Other Functions


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));



//////////////////////////////////////////////////////  Reviewing Functions

const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear,firstName)  {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

if(retirement > 0) {
  console.log(`${firstName} retires in ${retirement} years`);
  return retirement; 
} else {
  console.log(`${firstName} has already retired`);
  return -1;
}

}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));



/////////////////////////////////////////////////////////////////////////   Introduction to Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);


  //  Exercise
  const calcAge = function (birthYear) {
  return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);



/////////////////////////////////////////////////////////////////////////  Basic Array Operations (Methods)

const friends = ['Michael', 'Steven', 'Peter'];

//  Add Elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove Elements
friends.pop();  //Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();  // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}




/////////////////////////////////////////////////////////////////////////  Introduction to Objects

const jonas = {     // Object Literal Syntax
  firstName: 'Jonas', 
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);




/////////////////////////////////////////////////////////////////////////  Dot vs. Bracket Notation


const jonas = {     // Object Literal Syntax
  firstName: 'Jonas', 
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if(jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtmann';
console.log(jonas);

//  Challenge
//  "Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);




/////////////////////////////////////////////////////////////////////////  Object Methods


const jonas = {     // Object Literal Syntax
  firstName: 'Jonas', 
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: function(birthYear) {
  //   return 2037 - birthYear;
  // }

  // calcAge: function() {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // }

   calcAge: function() {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//  Challenge

// console.log(`${jonas.firstName} is a ${jonas.age} year old ${jonas.job}, and he has ${jonas.hasDriversLicense === true ('a')} driver's license`)
console.log(jonas.getSummary());
*/




/////////////////////////////////////////////////////////////////////////  Iteration: the For Loop


// for loop keeps running while condition is TRUE
for(let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} `);
  
}