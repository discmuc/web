'use strict';

// jquery
$(document).ready(function() {
    console.log('jquery method1');
});

$(function() {
    console.log('jquery method2');
});

// handler triggered
// eslint-disable-next-line
function showHandlerMessage() { // jshint ignore:line
    console.log('handler');
}

// listener triggered
function showListenerMessage() {
    console.log('listener');
}

document.addEventListener('DOMContentLoaded', showListenerMessage);

// script triggered
console.log('script');
