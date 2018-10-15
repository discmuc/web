'use strict';

// manipulating the dom
var headings = document.getElementsByTagName('h1');
console.log(`number of headings -> ${headings.length}`);
for (let i = 0; i < headings.length; i++) {
    headings[i].textContent = headings[i].textContent + ' (manipulated)';
}

// iterating with method borrowing
Array.prototype.forEach.call(headings, (heading) => {
    heading.textContent = heading.textContent + ' (manipulated again)';
});

// DOM methods:
//
// getElementById
// getElementsByClassName
// getElementsByTagName
// getElementsName
// querySelector
// querySelectorAll
// parentElement
// parentNode
// previous-/nextElementSibling
// previous-/nextSibling
// first-/lastElementChild
// first-/lastChild
// childNodes
// children

// document contains information by type (pictures, forms, ...)
// attributes and styles can be manipulated, too

