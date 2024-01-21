/**
 *  if and switch
 */


console.log('---------------');

let number = 5;

if (number % 2 === 0) {
    console.log('number is even');
}
else {
    console.log('number is odd, not even');
}

if (number % 2 === 0) {
    console.log('multiplied by 2');
}
else if (number % 3 === 0) {
    console.log('multiplied by 3');
}
else if (number % 4 === 0) {
    console.log('multiplied by 4');
}
else if (number % 5 === 0) {
    console.log('multiplied by 5');
}
else {
    console.log('not multiplied by 2, 3, 4, 5')
}

console.log('---------------');

const englishDay = 'Monday';

let koreanDay;

switch (englishDay) {
    case 'Monday':
        koreanDay = '월요일';
        break; // out from switch
    case 'Tueday':
        koreanDay = '화요일';
        break;
    case 'Wedensday':
        koreanDay = '화요일';
        break;
    case 'Thursday':
        koreanDay = '화요일';
        break;
    default:
        koreanDay = '주말';
        break;
}

console.log(koreanDay);
console.log('---------------');


