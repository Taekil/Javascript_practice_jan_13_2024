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
console.log(5 == '5');
console.log(0 == '');
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');
console.log(false == ''); // True? true!

console.log(5 === 5); // including type
console.log(5 === '5'); // including type, so return false

console.log(5 === 5);
console.log(5 === '5');
console.log(0 === '');
console.log(true === 1);
console.log(false === 0);
console.log(true === '1');
console.log(false === ''); // false

// using '===' instead of '==' for practical usage. 
console.log('\n---------------------\n') // divider
console.log(5 != 5);
console.log(5 != '5');
console.log(0 != '');
console.log(true != 1);
console.log(false != 0);
console.log(true != '1');
console.log(false != '');
console.log('\n---------------------\n') // divider
// using '!==' also used for practical, not using !=
console.log(5 !== 5); //return false
console.log(5 !== '5');
console.log(0 !== '');
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== '1');
console.log(false !== '');
console.log('\n---------------------\n') // divider

/**
 * comparison operators for big and small
 */

console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);
console.log('\n---------------------\n') // divider
/**
 * ternary operator
 */
// return true comment
console.log(10 > 0 ? '10 > 0':'10 < 0'); // return 10 > 0 
console.log('\n---------------------\n') // divider
/**
 * logic operator
 * 1) &&(and)
 * 2) ||(or)
 */
// && -> all true -> return true
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
// || -> one true -> return true
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false); // return false
console.log('\n---------------------\n') // divider
// extanded usages
console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 < 2); // return false

console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2); // return false

console.log('\n---------------------\n') // divider

/**
 * Short circuit evaluation
 * 
 */
console.log(true || 'ive'); // return true
console.log(false || 'ive'); // return ive
console.log(false && 'ive'); // return false
console.log(true && 'ive'); // return ive

console.log(true && true &&  'ive'); // return ive
console.log(true && false &&  'ive'); // return false

console.log('\n---------------------\n') // divider

/**
 * power
 */

console.log(2 ** 2);
console.log(10 ** 3);

console.log('\n---------------------\n') // divider

/**
 * null oerator
 */
let name
console.log(name);
name = name ?? 'code'; // if name is undefined
// return 'code' -> saving 'code' at name variable
console.log(name);

name = name ?? 'ive';
console.log(name); // return code becuase name is not null. 

let name2;
name2 ??= 'code';
console.log(name2);


