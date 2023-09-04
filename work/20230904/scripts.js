let x;

displayDataAndType(x, 'x');

// Coerced to a string
x = 5 + '5';
displayDataAndType(x, 'x = 5 + "5"');

x = 5 + Number('5');
displayDataAndType(x, 'x = 5 + Number("5")');

// Coerced to a number
x = 5 * '5';
displayDataAndType(x, 'x = 5 * "5"');

// null is coerced to 0 as it is a `falsy` value
x = 5 + null;
displayDataAndType(x, 'x = 5 + null');

x = Number(null);
displayDataAndType(x, 'x = Number(null)');

x = Number(true);
displayDataAndType(x, 'x = Number(true)');

x = Number(false);
displayDataAndType(x, 'x = Number(false)');

// true is coerced to a 1
x = 5 + true;
displayDataAndType(x, 'x = 5 + true');

// false is coerced to 0 (falsy)
x = 5 + false;
displayDataAndType(x, 'x = 5 + false');

// Undefined is coerced to 0 (falsy)
x = 5 + undefined;
displayDataAndType(x, 'x = 5 + undefined');

function displayDataAndType(itemToDispaly, stringExpression) {
    console.log('Expression: ', stringExpression, 'Output: ', itemToDispaly, 'Type Of: ', typeof itemToDispaly);
}