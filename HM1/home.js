function addStrings(num1, num2) {
  let result = '';
  let carry = 0;
  let i = num1.length - 1;
  let j = num2.length - 1;

  while (i >= 0 || j >= 0 || carry !== 0) {
    const digit1 = i >= 0 ? parseInt(num1.charAt(i)) : 0;
    const digit2 = j >= 0 ? parseInt(num2.charAt(j)) : 0;
    const sum = digit1 + digit2 + carry;
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
    i--;
    j--;
  }

  return result;
}

function subtractStrings(num1, num2) {
  let result = '';
  let carry = 0;
  let i = num1.length - 1;
  let j = num2.length - 1;

  while (i >= 0 || j >= 0) {
    const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
    const digit2 = j >= 0 ? parseInt(num2[j]) : 0;

    let sub = digit1 - digit2 - carry;

    if (sub < 0) {
      sub += 10;
      carry = 1;
    } else {
      carry = 0;
    }

    result = sub + result;

    i--;
    j--;
  }

  return result.replace(/^0+/, '');
}

function multiplyStrings(num1, num2) {
  let result = '';
  const n = num1.length;
  const m = num2.length;
  const product = Array(n + m).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      const digit1 = parseInt(num1[i]);
      const digit2 = parseInt(num2[j]);

      const prod = digit1 * digit2 + product[i + j + 1];

      product[i + j + 1] = prod % 10;
      product[i + j] += Math.floor(prod / 10);
    }
  }

  let start = 0;
  while (start < product.length && product[start] === 0) {
    start++;
  }

  if (start === product.length) {
    return '0';
  }

  for (let i = start; i < product.length; i++) {
    result += product[i];
  }

  return result;
}

function divideStrings(dividend, divisor) {
  if (divisor === '0') {
    throw new Error('Division by zero');
  }

  if (dividend === '0') {
    return '0';
  }

  let quotient = '';
  let currentIndex = 0;
  let remainder = '';

  while (currentIndex < dividend.length) {
    remainder += dividend[currentIndex];

    let count = 0;

    while (isGreaterOrEqual(remainder, divisor)) {
      remainder = subtractStrings(remainder, divisor);
      count++;
    }

    quotient += count;
    currentIndex++;
  }

  return quotient.replace(/^0+/, '');
}

function isGreaterOrEqual(num1, num2) {
  if (num1.length > num2.length) {
    return true;
  }

  if (num1.length < num2.length) {
    return false;
  }

  for (let i = 0; i < num1.length; i++) {
    if (num1[i] > num2[i]) {
      return true;
    }

    if (num1[i] < num2[i]) {
      return false;
    }
  }

  return true;
}

console.log(addStrings('1237', '456'));
console.log(subtractStrings('3456', '123'));
console.log(multiplyStrings('123', '456'));
console.log(divideStrings('4568', '123'));