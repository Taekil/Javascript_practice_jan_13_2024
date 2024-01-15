/**
 * Data Types
 * 
 * 6 EA Primitive Types and 1 EA Object type
 * 
 *  1) Number
 *  2) String
 *  3) Boolean
 *  4) Undefined
 *  5) null
 *  6) Symbol: built-in object, symbol() call is guranteed to return
 * a unique symbol.  
 *  
 *  7) Object: storeing various keyed collections and more complex
 * entities.
 *      ex) object() constructor
 *      function, array, object
 *  
 */

/**
 * Number Type
 */
const age = 32; // number type
const temperature_c = -10; // negative number
const pi = 3.14; // float number

console.log(typeof age); // return type of a variable
console.log(typeof temperature_c);
console.log(typeof pi);
console.log('----------------');

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);
console.log('----------------');

/**
 * String Type
 */

const codeFactory = '"Code"_Factory';
console.log(codeFactory);
console.log(typeof codeFactory);
const ive = "'ive' Ann";
console.log(ive);

/**
 * Template literal
 * 
 * Escaping Character
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) back-slash(\) -> \\
 */

const iveYuJin = 'Ann\nYuJin';
console.log(iveYuJin);
const iveYoung = 'ive\tYoung';
console.log(iveYoung);
const backSlash = 'ive\\CodeFactory';
console.log(backSlash)
const smallQuotation = 'ive\'codefactory\'';
console.log(smallQuotation);

// template literal
const iveWonYoung2 = `ive ''////
WonYoung`;
console.log(iveWonYoung2);
console.log(typeof iveWonYoung2);
const groupName = 'ive';
console.log(groupName + ' Ann');
console.log(`${groupName} Ann`);
console.log('--------------------');

/**
 * Boolean Type
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * undefined
 * 
 * not initialized by user directly. 
 * 
 */

// let noInit = undefined; never do this!
let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 * null type
 * like undefined, no value
 * but a developer can declare by 'null in JS. 
 */

let init = null; // this is possible, null is value
console.log(init);
console.log(typeof init); // return is object -> bug
// but not fix this bug. 
console.log('-----------------------')
/**
 * symbol type
 * unique value 
 * symbol -> called in functions
 */
const test1 = '1'; 
const test2 = '2';
console.log(test1 === test2); // false

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2); //false, why? 

console.log('-------------------------')

/**
 * Object type
 * 
 * Map
 * key:value (key value pair) 
 */

const dictionary = {
    red: 'RED',
    orange: 'ORANGE',
    yellow: 'YELLOW'
};

console.log(dictionary); 
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

console.log(typeof dictionary);

/**
 * array type
 * 
 */

const iveMembersArray = [
    'Ann',
    'Young',
    'Ray',
    'Gaul',
    'Reads',
    'ISEO',
];

console.log(iveMembersArray);

/**
 * idex in array 0 -> 1 -> 2 ....
 */

console.log(iveMembersArray[0]);
console.log(iveMembersArray[5]);

iveMembersArray[0] = 'Code_Factory';

console.log(iveMembersArray);
console.log(typeof iveMembersArray);

/**
 * static typing
 * 
 * dynamic typing -> not declaring datatype, but guessing the 
 * type by the given value. 
 * JS -> dynamic typing
 * ex) let, var, const
 */


