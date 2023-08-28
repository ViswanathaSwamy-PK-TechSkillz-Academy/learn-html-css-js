let amount = '100';
showStringToNumberConversion(amount);

amount = 'hello';
showStringToNumberConversion(amount);

// Convert number to string
amount = amount.toString();
amount = String(amount);

// Convert string to decimal
amount = parseFloat(amount);

// Convert number to boolean
amount = Boolean(amount);

// Ways to get NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);

console.log(amount, typeof amount);

// Convert String to Number
function showStringToNumberConversion(stringToConvert) {

    console.group('String to Number Conversion');

    displayDataAndType(stringToConvert);

    // Convert string to number in 3 ways
    amount = parseInt(stringToConvert);
    displayDataAndType(amount);

    amount = +stringToConvert;
    displayDataAndType(amount);

    amount = Number(stringToConvert);
    displayDataAndType(amount);

    console.groupEnd();
}

function displayDataAndType(itemToDispaly) {
    console.log('Data: ', itemToDispaly, 'Type Of: ', typeof itemToDispaly);
}
