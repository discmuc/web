'use strict';

// for older Browsers: var
let testValue = 1;
console.log(`testValue -> ${testValue}`);

// names are allowed to start with a char, $ and _

const CONST_VALUE = 100;
console.log(`CONST_VALUE -> ${CONST_VALUE}`);

// primitive data types: numbers, strings and booleans
console.log(`min. number -> ${Number.MIN_VALUE}`);
console.log(`max. number -> ${Number.MAX_VALUE}`);
console.log(`infinity neg. -> ${Number.NEGATIVE_INFINITY}`);
console.log(`infinity pos. -> ${Number.POSITIVE_INFINITY}`);

// strings: ' ' or "

// boolean values: true, false

let animals = [ 'tiger', 'duck' ];
console.log(`animals -> ${animals}`);
console.log(`typeof animals -> ${typeof animals}`);

// undefined vs. null

let person = {
    firstName : 'first',
    lastName : 'last'
};
console.log(`person lastname -> ${person.lastName}`);

// operators: + - * / % ++ -- **
// abbrev. with += -= ...

// + for string concat

// && || !

// bit operators: & | ^ ~ << >> >>>

// compare operators: == === != !== < > <= >=

// special ?: delete in instanceof typeof

// flow:
// if..else
// switch..case..default
// for(;;)
// while
// do..while
// break, continue
// function return - functions inside functions possible
// more or less arguments possible compared to the parameters
// ...restArgs -> array
// default values for parameters
// ...array as arguments
// () => {} alternative function definition

// context: global function eval()

// try..catch..finally
// error -> .name and .message
// throw new Error('...')

