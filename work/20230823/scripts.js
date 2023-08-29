// String
const firstName = 'Sara';

displayDataAndType(firstName);

// Number
const age = 30;
const temp = 98.9;

displayDataAndType(age);
displayDataAndType(temp);

// Boolean
const hasKids = true;

displayDataAndType(hasKids);

// Null
const aptNumber = null;

displayDataAndType(aptNumber);

// Undefined
let score;

displayDataAndType(score);

const scorev1 = undefined;

displayDataAndType(scorev1);

// Symbol
const id = Symbol('id');

displayDataAndType(id);

// BigInt
const n = 9007199254740991n;

displayDataAndType(n);

// Reference Types

const numbers = [1, 2, 3, 4];

displayDataAndType(numbers);

const person = {
    name: 'Brad',
};

displayDataAndType(person);

function sayHello() {
    console.log('Hello');
}

displayDataAndType(sayHello);

function displayDataAndType(output) {
    console.log('Data: ', output, 'Type Of: ', typeof output);
}

// More info on why typeof null == object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

//  More info on the "function object" type
// https://262.ecma-international.org/5.1/#sec-11.4.3
