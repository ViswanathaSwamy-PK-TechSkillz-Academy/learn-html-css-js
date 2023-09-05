// 1. Arithmetic Operators

let x;
displayDataAndType(x, 'x');

x = 5 + 5;
displayDataAndType(x, 'x = 5 + 5');

x = 5 - 5;
displayDataAndType(x, 'x = 5 - 5');

x = 5 * 5;
displayDataAndType(x, 'x = 5 * 5');

x = 5 / 5;
displayDataAndType(x, 'x = 5 / 5');

x = 7 % 5;
displayDataAndType(x, 'x = 7 % 5');

// Concatenation
x = 'Hello' + ' ' + 'World';
displayDataAndType(x, 'x = "Hello" + " " + "World"');

// Exponent
x = 2 ** 3;
displayDataAndType(x, 'x = 2 ** 3');

// Increment
x = 1;
displayDataAndType(x, 'x = 1');

x = x + 1;
displayDataAndType(x, 'x = x + 1');

x++;
displayDataAndType(x, 'x++');

// Decrement
x = x - 1;
displayDataAndType(x, 'x = x - 1');

x--;
displayDataAndType(x, 'x--');

// 2. Assignment Operators

x = 10;
displayDataAndType(x, 'x = 10');

x += 5;
displayDataAndType(x, 'x += 5');

x -= 5;
displayDataAndType(x, 'x -= 5');

x *= 5;
displayDataAndType(x, 'x *= 5');

x /= 5;
displayDataAndType(x, 'x /= 5');

x %= 5;
displayDataAndType(x, 'x %= 5');

x **= 5;
displayDataAndType(x, 'x **= 5');

// 3. Comparison Operators

// Equal to (Just the value, not the type)
x = 2 == '2';
displayDataAndType(x, 'x = 2 == "2"');

// Equal to (Type and value)
x = 2 === '2';
displayDataAndType(x, 'x = 2 === "2"');

// Not equal to (Just the value, not the type)
x = 2 != '2';
displayDataAndType(x, 'x = 2 != "2"');

// Not equal to (Type and value)
x = 2 !== '2';
displayDataAndType(x, 'x = 2 !== "2"');

// Not equal to (Type and value)
x = 2 !== 2;
displayDataAndType(x, 'x = 2 !== 2');

// Greater than and less than
x = 10 > 5;
displayDataAndType(x, 'x = 10 > 5');

x = 10 < 5;
displayDataAndType(x, 'x = 10 < 5');

x = 10 <= 5;
displayDataAndType(x, 'x = 10 <= 5');

x = 10 >= 5;
displayDataAndType(x, 'x = 10 >= 5');

function displayDataAndType(itemToDispaly, stringExpression) {
    console.log('Expression: ', stringExpression, 'Output: ', itemToDispaly, 'Type Of: ', typeof itemToDispaly);
}
