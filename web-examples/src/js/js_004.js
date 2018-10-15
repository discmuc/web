'use strict';

let array1 = [ 0, 1, 2, 3, 4 ];
console.log(`array1 -> ${array1}`);
console.log(`typeof array1 -> ${typeof array1}`);
console.log(`array1 length -> ${array1.length}`);

let array2 = new Array(5, 6, 7, 8, 9);
console.log(`array2 -> ${array2}`);
console.log(`typeof array2 -> ${typeof array2}`);

let array3 = null;

array1.push(5);
console.log(`array1 after push -> ${array1}`);
array2.unshift(4);
console.log(`array2 after unshift -> ${array2}`);
array1.splice(2, 0, 1.5);
console.log(`array1 after splice -> ${array1}`);

array1.pop();
console.log(`array1 after pop -> ${array1}`);
array2.shift();
console.log(`array2 after shift -> ${array2}`);
array3 = array1.splice(2, 1);
console.log(`array1 after splice -> ${array1}`);
console.log(`array3 after splice -> ${array3}`);

array3 = array1.slice(1, 3);
console.log(`array3 after slice -> ${array3}`);

array1.reverse();
console.log(`array1 after reverse -> ${array1}`);
array1.sort(function(val1, val2) {
    if (val1 < val2) {
        return -1;
    } else if (val1 > val2) {
        return 1;
    } else {
        return 0;
    }
});
console.log(`array1 after sort -> ${array1}`);

array3 = [ 'c', 'A', '3', 'Z', 'f' ];
array3.sort(function(val1, val2) {
    return val1.localeCompare(val2);
});
console.log(`array3 after locale aware sort -> ${array3}`);

array3 = [ 1, 2, 3, 1, 2, 3 ];
console.log(`array3 index of 2 -> ${array3.indexOf(2)}`);
console.log(`array3 index of 2 -> ${array3.lastIndexOf(2)}`);
console.log(`array3 includes 2 -> ${array3.includes(2)}`);

let i = array3.findIndex((element) => {return element % 2 !== 0; });
console.log(`array3 index of odd number -> ${i}`);
i = array3.findIndex((element) => {return element % 2 === 0; });
console.log(`array3 index of even number -> ${i}`);
i = array3.find((element) => {return element % 2 === 0; });
console.log(`array3 first found even number -> ${i}`);

array3.copyWithin(1, 0, 3);
console.log(`array3 after copyWithin -> ${array3}`);

array3 = [ 1, 2, 3, 1, 2, 3 ];
console.log(`array3 to string -> ${array3.toString()}`);
console.log(`array3 to locale string -> ${array3.toLocaleString()}`);
console.log(`array3 valueOf -> ${array3.valueOf()}`);
console.log(`array3 join -> ${array3.join(';')}`);

// string methods:
// length, indexOf, lastIndexOf, slice, substring, substr,
// toLowerCase, toUppercase, charAt, padStart, padEnd

let date = new Date();
console.log(`date exambpe -> ${date}`);

console.log(`math random example -> ${Math.round(Math.random() * 100)}`);

let re = /abc/;  // alternative: new RegEx('abc')
console.log(`regex example -> ${re.test('ABCabcDEF')}`);

// function as an argument ...
// function as a return value ...
// ... is possible

// default function methods:
// apply() - call a method directly within another context (arguments as an
// array)
// call() - call a method directly within another context (arguments as single
// values)
// bind() - bind function to a different context - alternative: anonymous
// functions
