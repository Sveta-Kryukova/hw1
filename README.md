# String Arithmetic Operations

This repository contains JavaScript functions that perform arithmetic operations on strings. The operations include addition, subtraction, multiplication, and division. The functions handle positive integer inputs represented as strings and return the computed results as strings.

## Functions

### \`addStrings(num1, num2)\`

This function performs string addition on the provided \`num1\` and \`num2\` strings. It calculates the sum of the two numbers and returns the result as a string.

### \`subtractStrings(num1, num2)\`

This function performs string subtraction on the provided \`num1\` and \`num2\` strings. It calculates the difference between the two numbers and returns the result as a string. Negative results are not supported, so if the subtraction results in a negative number, the function returns '0'.

### \`multiplyStrings(num1, num2)\`

This function performs string multiplication on the provided \`num1\` and \`num2\` strings. It calculates the product of the two numbers and returns the result as a string.

### \`divideStrings(dividend, divisor)\`

This function performs string division on the provided \`dividend\` and \`divisor\` strings. It calculates the quotient of the division operation and returns the result as a string. Division by zero is not allowed, and if the divisor is '0', an error will be thrown. If the dividend is '0', the function returns '0'.

## Usage

To use these functions in your JavaScript project, you can simply copy the function definitions into your code. Make sure to include all the functions you need. Then, you can call the functions with the appropriate string inputs to perform arithmetic operations.

## Limitations

- These functions only support positive integer inputs represented as strings. Negative numbers, floating-point numbers, or non-numeric characters are not handled.
- Division by zero is not allowed. Attempting to divide by zero will result in an error being thrown.

Feel free to modify and adapt these functions to suit your specific use case or extend them to handle additional scenarios or input formats.
`;
