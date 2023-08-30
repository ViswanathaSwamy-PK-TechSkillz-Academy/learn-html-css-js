// 1. Arithmetic Operators

let x;
displayDataAndType(x);

x = 5 + 5;
displayDataAndType(x);

x = 5 - 5;
displayDataAndType(x);

x = 5 * 5;
displayDataAndType(x);

x = 5 / 5;
displayDataAndType(x);

x = 7 % 5;
displayDataAndType(x);

// Concatenation
x = 'Hello' + ' ' + 'World';
displayDataAndType(x);

// Exponent
x = 2 ** 3;
displayDataAndType(x);

// Increment
x = 1;
displayDataAndType(x);

// x = x + 1;
x++;
displayDataAndType(x);

// Decrement
// x = x - 1;
x--;
displayDataAndType(x);

// 2. Assignment Operators

x = 10;
displayDataAndType(x);

x += 5;
displayDataAndType(x);

x -= 5;
displayDataAndType(x);

x *= 5;
displayDataAndType(x);

x /= 5;
displayDataAndType(x);

x %= 5;
displayDataAndType(x);

x **= 5;
displayDataAndType(x);

// 3. Comparison Operators

// Equal to (Just the value, not the type)
x = 2 == '2';
displayDataAndType(x);

// Equal to (Type and value)
x = 2 === '2';
displayDataAndType(x);

// Not equal to (Just the value, not the type)
x = 2 != '2';
displayDataAndType(x);

// Not equal to (Type and value)
x = 2 !== 2;
displayDataAndType(x);

// Greater than and less than
x = 10 > 5;
displayDataAndType(x);

x = 10 < 5;
displayDataAndType(x);

x = 10 <= 5;
displayDataAndType(x);

x = 10 >= 5;
displayDataAndType(x);

// console.log(x);

function displayDataAndType(itemToDispaly) {
    console.log('Data: ', itemToDispaly, 'Type Of: ', typeof itemToDispaly);
}
