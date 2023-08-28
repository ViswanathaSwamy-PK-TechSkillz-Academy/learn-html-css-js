// Value is stored in the stack
const personName = 'John';
const age = 30;

let personNewName = personName;
console.log(personName, personNewName); // John, John

personNewName = 'Jonathan';
console.log(personName, personNewName); // John, Jonathan

// Reference is stored in the heap
const person = {
    name: 'Brad',
    age: 40,
};

let newPerson = person;
console.log(person, newPerson); // { name: 'Brad', age: 40 }, { name: 'Brad', age: 40 }

newPerson.name = 'Bradley';
console.log(person, newPerson); // { name: 'Bradley', age: 40 }, { name: 'Bradley', age: 40 }
