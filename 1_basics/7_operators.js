/**
 * Operators
 * 
 */

/**
 * 1) +
 * 2) -
 * 3) *
 * 4) /
 * 5) remaines? %
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);

console.log('--------------------');

console.log(10 * (10 + 10));

/**
 * ++, --
 */

let number = 1;
number++;
console.log(number);
number--;
console.log(number);
console.log('-------------------');
/**
 * the positions of operator
 */

let result = 1;
console.log(result);
result = number++;
console.log(result, number);

result = number--;
console.log(result, number);

result = ++number;
console.log(result, number);

result = --number;
console.log(result, number);

console.log('-------------------');

/**
 * number type + and -
 */

let sample = '99'; // String

console.log(+sample); // change to number
console.log(typeof +sample); // return is number
console.log(typeof sample);

sample = true; // also change to number 1
console.log(+sample); // return 1
console.log(typeof +sample);

sample = false; // also change to number 0
console.log(+sample); // return 0
console.log(typeof +sample);

sample = 'Ann';
console.log(+sample); // return NaN (not a number)

sample = '99';
console.log(-sample); // return -99
console.log(typeof -sample); // return number

/**
 * assignment operator
 * +=, -=
 */
number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);

/**
 * >, <
 * 1) value
 * 2) value and type
 */

console.log(5==5);




