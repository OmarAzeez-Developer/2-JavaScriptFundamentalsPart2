// activate strict mode
'use strict';

// Activating Strict Mode
/*
// must be before any code in order to work
// activate strict mode
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    // error was caught because of strict mode activated
    // it should be hasDriversLicense 
    hasDriverLicense = true;
}

// strict mode can sense the reserved word ==> interface / private
const interface = 'Audio';
const private = 123;
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Functions
/*
function logger() {
    console.log("My name is Omar");
}

// running / invoking / calling the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

// calling the function
fruitProcessor(4, 3);

// store the value in a variable
const appleJuice = fruitProcessor(7, 0);
console.log(appleJuice);

// store the value in a variable
const orangeJuice = fruitProcessor(0, 7);
console.log(orangeJuice);

// log it directly to the console
console.log(fruitProcessor(4, 3));
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Function Declarations vs Expressions 
/*
// function declaration ==> function have a name
function calcAge1(birthYear) {
    const age1 = 2024 - birthYear;
    return age1;
}

// log it directly to the console
console.log(calcAge1(1989));

// function declaration ==> function have a name
function calcAge2(birthYear) {
    return 2024 - birthYear;
}

// store it in a variable then log variable to the console
const age2 = calcAge2(1991)
console.log(age2);

// function expression ==> function do not have a name
const calcAge3 = function(birthYear) {
    return 2024 - birthYear;
}

// store it in a variable then log variable to the console
const age3 = calcAge3(1957)
console.log(age3);

//  difference between function declaration and function expression is that 
//  you can call function declaration before you define it, but you can not do that 
//  with function expression.
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Arrow Function
/*
// function declaration ==> function DO have a name
function calcAge1(birthYear) {
    const age1 = 2024 - birthYear;
    return age1;
}

// function expression ==> function DO NOT have a name
const calcAge3 = function(birthYear) {
    return 2024 - birthYear;
}

// arrow function
const calcAge4 = birthYear => 2024 - birthYear;

const age4 = calcAge4(1957);
console.log(age4);

console.log(calcAge4(1957));

const yearsUntillRetirement1 = birthYear => {
    const currentAge = 2024 - birthYear;
    const retireAge = 65 - currentAge;
    return retireAge;
}

const yearsLeftToRetire = yearsUntillRetirement1(1989);
console.log(yearsLeftToRetire);

// arrow function with multiple parameters
const yearsUntillRetirement2 = (birthYear, firstName) => {
    const currentAge = 2024 - birthYear;
    const retireAge = 65 - currentAge;
    return `${firstName} has ${retireAge} years to retire!`;
}

console.log(yearsUntillRetirement2(1989, "Omar"));
console.log(yearsUntillRetirement2(1991, "Abdullah"));
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Functions Calling Other Functions
/*
// function to cut the each fruit into 4 pieces
function fruitCutter(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applesPieces = fruitCutter(apples);
    const orangesPieces = fruitCutter(oranges);
    const juice = `Juice with ${applesPieces} pieces of apples and ${orangesPieces} pieces of oranges.`
    return juice;
}

console.log(fruitProcessor(1, 2));
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Reviewing Functions
/*
// arrow function to calculate current age
const calcAge = birthYear => 2024 - birthYear

const calcYearsLeftToRetire = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const yearsLeftToRetire = 65 - age;
    
    if(yearsLeftToRetire > 0) {
        return (`${firstName} is ${age} years old and has ${yearsLeftToRetire} years to retire`);
    } else {
        return (`${firstName} is ${age} years old and You should be retired already!`)
    }
}

console.log(calcYearsLeftToRetire(1989, "Omar"));
console.log(calcYearsLeftToRetire(1991, "Abdullah"));
console.log(calcYearsLeftToRetire(1957, "Hayfaa"));

// function declaration
// function can be used before it is declared
function calcAge(birthYear) {
    return 2024 - birthYear;
}

// function expression
// function value stored in a variable
const calcAge = function(birthYear) {
    return 2024 - birthYear;
}

// arrow function
// great for a quick one line function
const calcAge = birthYear => 2024 - birthYear;
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #1
/*
// arrow functtion to calculate the average of three scores
const calcAverage = (teamName, firstScore, secondScore, thirdScore) => {
      const averageScore = (firstScore + secondScore + thirdScore) / 3;
      return averageScore;
}
const dolophinsAverage = calcAverage("Dolophins", 85, 54, 41);
console.log(dolophinsAverage);

const koalasAverage = calcAverage("Koalas", 23, 34, 27);
console.log(koalasAverage);

const checkWinner = function(avgDolhins, avgKoalas) {
    if(avgDolhins >  2 * avgKoalas) {
        return (`Dolphins wins! ${avgDolhins} vs ${avgKoalas}`);
    } else if (avgKoalas > 2 * avgDolhins) {
        return (`Koalas wins!${avgKoalas} vs ${avgDolhins}`); 
    } else {
        return (`No winner!`)
    }
}

// calling function to check winner
console.log(checkWinner(dolophinsAverage, koalasAverage));
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Introduction to Arrays
/*
// array
const friends = ["Munem", "Azeez", "Omar", "Abdullah"];
console.log(friends);

const y = new Array (1927, 1957, 1989, 1991);
console.log(y);

console.log(friends[0]);

// array length
console.log(friends.length);

// last element of the array
console.log(friends[friends.length - 1]);

// mutate array element
friends[2] = "Omar JR";
console.log(friends);

// different type of data in one array
const firstName = "Omar";
const omar = [firstName, "Azeez", 2024 - 1989, "Developer", friends];
console.log(omar);

const calcAge = function (birthYear) {
    return 2024 - birthYear;
}

// array of birth years
const years = [1947, 1957, 1989, 1991];

// you can not do this 
console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years.length - 1);
console.log(age1, age2, age3);

// put values in a new array
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years.length - 1)];
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Basic Array Operations(Methods)
/*
const friends = ["Munem", "Azeez", "Omar", "Abdullah"];

// add element to the end of the array
friends.push("Omar JR");
console.log(friends);

// add element to the end of the array then return the length of the array
const friendsNewLength1 = friends.push("Abdullah JR");
console.log(friendsNewLength1);

// add element to the beginning of the array
friends.unshift("Munem JR");
console.log(friends);

// add element to the end of the array then return the length of the array
const friendsNewLength2 = friends.push("Azeez JR");
console.log(friendsNewLength2);

// remove last element of the array
friends.pop();
console.log(friends);

// remove last element of the array and return removed element
const popped1 = friends.pop();
console.log(popped1);
const popped2 = friends.pop();
console.log(popped2);
console.log(friends);

// remove first element of the array
friends.shift();
console.log(friends);

// remove first element of the array and return removed element
const shifted = friends.shift();
console.log(shifted);
console.log(friends);

// return the position of that element
console.log(friends.indexOf("Omar"));

// return true if element exist in the array 
console.log(friends.includes("Abdullah"));

// return false if not exist in the array
console.log(friends.includes("Omar JR"));

// even after we added an element to the array, it still return false
// because it is testing with strict equality which means it does not do type coercion
// return false because we are checking for a string
friends.push(7);
console.log(friends.includes("7"));

// return true because we are checking for number
console.log(friends.includes(7));

// we can use includes in if statement
if (friends.includes("Omar")) {
    console.log("Omar is in the array");
}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #2
/*
const calcTip = function(bill) {
    let tip;
    // The Conditional (Ternary) Operator
    return bill >= 50 && bill <= 300 ?  tip = bill * 0.15 : tip = bill * 0.20;
}
console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [calcTip(bills[0]) + bills[0], calcTip(bills[1]) + bills[1], calcTip(bills[2]) + bills[2]];

console.log(bills);
console.log(tips);
console.log(total);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Introduction to Objects
/*
// omar object
const omar = {
    firstName: "Omar",
    lastName: "Azeez",
    age: 2024 - 1989,
    job: "Developer",
    family: ["Azeez", "Hayfaa", "Abdullah"]
};
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Dot Notation VS Bracket Notation
/*
// omar object
const omar = {
    firstName: "Omar",
    lastName: "Azeez",
    age: 2024 - 1989,
    job: "Developer",
    family: ["Azeez", "Hayfaa", "Abdullah"]
};

console.log(omar);

// retrieve object property useing dot notiation
console.log(omar.lastName);

// retrieve object property useing bracket notiation
console.log(omar["lastName"]);


// compute the property name first use bracket notation
// bracket notation is a string that hold, look then return the matched value
const nameKey = "Name";
console.log(omar["first" + nameKey]);
console.log(omar["last" + nameKey]);

// can not do that
// console.log(omar[omar."last" + nameKey]);

const interestedIn = prompt("What do you want to know about Omar? choose between firstName, lastName, age, job and friends");

// can not use dot notation
// console.log(omar.interestedIn);

// use bracket notation
console.log(omar[interestedIn]);

if(omar[interestedIn]) {
    console.log(omar[interestedIn]);
} else {
    console.log("Wrong request! choose between firstName, lastName, age, job and friends");
}

// add proberty to the object
omar.location = "Pittsburgh";
omar["school"] = "PPU";

console.log(omar);

// challenge
// "Omar has 3 friends, and hist BEST friend is Abdullah"
console.log(`${omar.firstName} has ${omar.family.length} friends, and his BEST friend is ${omar.family[2]}`);
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Object Methods
/*
const omar = {
    firstName: "Omar",
    lastName: "Azeez",
    birthYear: 1989,
    job: "Developer",
    family: ["Azeez", "Hayfaa", "Abdullah"],
    hasDriversLicense: false,

    
    // object function ==> it is called a method because it is attached to an object
    calcAge1: function(birthYear) {
        return 2024 - birthYear
    },
    
    // more efficient way to have a method (object function) is to use (this) keyword
    // in simple words (this) keyword refers to omar object
    calcAge2: function() {
        console.log(this)
        return 2024 - this.birthYear
    },

    // added new property to the object named age to store your age
    calcAge3: function () {
        this.age = 2024 - this.birthYear;
        return this.age;
    },

    // challenge method
    getSummary: function () {
        return `${this.firstName} is a ${this,this.calcAge2()} years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }
};


// dot notation
console.log(omar.calcAge1(1989));

// bracket notation
console.log(omar["calcAge1"](1989));

// dot notation
// using (this) keyword in the method
console.log(omar.calcAge2());

// dot notation
console.log(omar.calcAge3());

// we calculated age once then retrieve it by using (omar.age)
// calcAge must be called before in order to use (.age)
console.log(omar.age);

// challenge
// "Omar is a 35 years old developer, and he has a driver's license"

// dot notation
// using (this) keyword in the method
console.log(omar.getSummary());
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #3
/*
// Mark object
const mark = {
    fullName: "Mark",
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
};

// John object
const john = {
    fullName: "John",
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
};

// John BMI
// call the method so I can access the bmi property
john.calcBMI();
console.log(john.bmi);

// Mark BMI
// call the method so I can access the bmi property
mark.calcBMI();
console.log(mark.bmi);

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})`);
}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Iteration: The For Loop
/*
// i = i + 1 same as i++

// keep looping as long as conditiob is true
for(let i = 7; i <= 17; i++) {
    console.log(`loop number ${i}`);
}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Looping Arrays, Breaking and Continuing
/*
// empty arrays
const types1 = [];
const types2 = [];

const omar = [
    "Omar",
    "Azeez",
    2024 - 1989,
    "Developer",
    ["Munem","Azeez", "Abdullah"],
    true
]

for(let i = 0; i < omar.length ; i++) {
    console.log(omar[i], typeof omar[i]);

    // filling type of (omar) array in (types1) array by assigning
    types1[i] = typeof omar[i];

    // filling type of (omar) array in (types2) array by pushing
    types2.push(typeof omar[i])
}

console.log(types1);
console.log(types2);


const years = [1947, 1957, 1989, 1991];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2024 - years[i]);
}

console.log(ages);

// continue
console.log("-------ONLY STRINGS-------")
for(let i = 0; i < omar.length ; i++) {
    if (typeof omar[i] !== "string") continue;
    console.log(omar[i], typeof omar[i]);
}

// break
console.log("-------BREAK WITH NUMBER-------")
for(let i = 0; i < omar.length ; i++) {
    if (typeof omar[i] === "number") break;
    console.log(omar[i], typeof omar[i]);
}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Looping Backwards and Lopp in Loops
/*
const omar = [
    "Omar",
    "Azeez",
    2024 - 1989,
    "Developer",
    ["Munem","Azeez", "Abdullah"],
    true
]

// loop backward
for (let i = omar.length - 1; i >= 0; i--) {
    console.log(i, omar[i]);
}

for (let i = 1; i <= 4; i++){
    console.log(`-------Start Running------- ${i}`);

    for (let j = 1; j <= 1; j++) {
        console.log(`-------Take a Break-------`)
    }
}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// The While Loop
/*
// for loop
console.log(`-------For Loop-------`);
for(let i = 1; i <= 7; i++) {
    console.log(`loop number ${i}`);
}

// while loop
console.log(`-------While Loop-------`);
let i = 1;
while (i <= 7) {
    console.log(`loop number ${i}`);
    i++;
}

// random number between 1 and 6 
let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

// you might roll a 6 the first time so you will never enter the while loop
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    
    if (dice === 6) {
        console.log(`You rolled a ${dice}`)
        console.log("Loop is about to end...");
    }
}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #4
/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

// calaculate tip
const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills);
console.log(tips);
console.log(totals);

const arr = [];

// calculate average
const calcAverage = function(arr) {
    let sum = 0;
    let average;
    for (let k = 0; k < arr.length; k++) {
        sum = sum + arr[k];
    }
    average = sum / arr.length;
    return average;
}

const average = calcAverage(totals);
console.log(average);

const tip = calcAverage(tips);
console.log(tip);

console.log(calcAverage([2, 3, 7]));
*/