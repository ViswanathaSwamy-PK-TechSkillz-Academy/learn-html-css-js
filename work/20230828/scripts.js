let output = '100';
showStringToNumberConversion(output);

output = 'hello';
showStringToNumberConversion(output);

output = 100;
showNumberToString(output);

output = '99.99';
showStringToDecimalConversion(output);

// We can have -1, 0, 1
num1 = 10;
showNumberToBooleanConversion(num1);

num1 = 0;
showNumberToBooleanConversion(num1);

num1 = -125;
showNumberToBooleanConversion(num1);

// // Ways to get NaN
// console.log(Math.sqrt(-1));
// console.log(1 + NaN);
// console.log(undefined + undefined);
// console.log('foo' / 3);

// console.log(amount, typeof amount);

// Convert number to boolean
function showNumberToBooleanConversion(numberToConvert) {
    console.group('Number to Boolean Conversion');

    displayDataAndType(numberToConvert);

    output = Boolean(numberToConvert);
    displayDataAndType(output);

    console.groupEnd();
}

// Convert string to decimal
function showStringToDecimalConversion(stringToConvert) {
    console.group('String to Decimal Conversion');

    displayDataAndType(stringToConvert);

    output = parseFloat(stringToConvert);
    displayDataAndType(output);

    console.groupEnd();
}

// Convert number to string
function showNumberToString(numberToConvert) {
    console.group('Number to String Conversion');

    displayDataAndType(numberToConvert);

    output = numberToConvert.toString();
    displayDataAndType(output);

    output = String(numberToConvert);
    displayDataAndType(output);

    console.groupEnd();
}

// Convert String to Number. Convert string to number in 3 ways
function showStringToNumberConversion(stringToConvert) {

    console.group('String to Number Conversion');

    displayDataAndType(stringToConvert);


    output = parseInt(stringToConvert);
    displayDataAndType(output);

    output = +stringToConvert;
    displayDataAndType(output);

    output = Number(stringToConvert);
    displayDataAndType(output);

    console.groupEnd();
}

function displayDataAndType(itemToDispaly) {
    console.log('Data: ', itemToDispaly, 'Type Of: ', typeof itemToDispaly);
}
