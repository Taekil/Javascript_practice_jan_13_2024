/**
 * loops
 * 
 * 1) for
 * 2) while
 * 
 */
console.log('---------------------------');
for(let i = 0; i < 10; i ++) {
    console.log(i + '\'s loop');
}
console.log('---------------------------');
for(let i = 10; i > 0; i --) {
    console.log(i + '\'s loop');
}
console.log('---------------------------');
for (let i = 0; i < 3; i ++) {
    for (let j = 3; j >0; j --) {
        console.log(i, j);     
    }
}
console.log('---------------------------');
// * 6 x 6 square
let square = '';
let side = 6;

for(let i = 0; i < 6; i ++) {
    for(let j = 0; j < side; j ++){
        square += '*';
    }
    square += '\n';
}
console.log(square);
console.log('---------------------------');
/**
 * for...in
 */
const yuJin = {
    name: 'Ann',
    year: 2003,
    group: 'ive',
}

for(let key in yuJin) {
    console.log(key);
}
console.log('---------------------------');
const iveMembersArray = ['Ann', 'Fall', 'Ray', 'Jang', 'Leeds', 'Iseo'];

for(let key in iveMembersArray) {
    console.log(key);
    console.log(key +':'+iveMembersArray[key]);
}
console.log('---------------------------');
/**
 * for...of
 */
for(let value of iveMembersArray){
    console.log(value);
}
console.log('---------------------------');
/**
 * while
 */

let number = 0;

// while('true')
while(number < 10){
    number ++;   
}

console.log(number);

/**
 * do...while (not using because causing confusing)
 */

number = 0;

do{
    number ++;
}while(number < 10);

console.log(number);

/**
 * break
 */
for (let i = 0; i < 10; i ++) {
    if(i === 5) {
        break;
    }
    console.log(i);
}

while (number < 10) {
    if(number === 5) {
        break;
    }

    number ++;
    console.log(number);
}

/**
 * continue
 */

for (let i = 0; i < 10; i ++) {
    if (i === 5) {
        continue // skip the current loop
    }
    console.log(i);
}

number = 0;
while (number < 10) {
    number ++;
    
    if(number === 5) {
        continue
    }

    console.log(number);
}




