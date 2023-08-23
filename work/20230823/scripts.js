// String
const firstName = 'Sara';

display(firstName);

// Number
const age = 30;
const temp = 98.9;

display(age);
display(temp);

// Boolean
const hasKids = true;

display(hasKids);

// Null
const aptNumber = null;

display(aptNumber);

// Undefined
let score;

display(score);

const scorev1 = undefined;

display(scorev1);

// Symbol
const id = Symbol('id');

display(id);

// BigInt
const n = 9007199254740991n;

display(n);

// Reference Types

const numbers = [1, 2, 3, 4];

display(numbers);

const person = {
    name: 'Brad',
};

display(person);

function sayHello() {
    console.log('Hello');
}

display(sayHello);

function display(output) {
    console.log('Data: ', output, 'Type Of: ', typeof output);
}

// More info on why typeof null == object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

//  More info on the "function object" type
// https://262.ecma-international.org/5.1/#sec-11.4.3
