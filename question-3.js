/** 
 * Let's make a calculation function to solve all calculation issues in one place.
 * 
 * The function should take an array of numbers as the first value, and a string representation of the operator as a second parameter.
 * It returns the result of the calculation.
 * 
 * At the bottom of the file there is some test code that will log the result to the console. You can use this to check that your code is correct.
 */

'use strict';

function add(array) {
    const sum = array.reduce((total, element) => {
        return total + element;
    }, 0);
    return sum;
}

function multiply(array) {
    const sum = array.reduce((total, element) => {
        return total * element;
    }, 1);
    return sum;
}

function divide(array) {
    const sum = array.reduce((total, element) => {
        return total / element;
    });
    return sum;
}

function substract(array) {
    const firstElement = array.shift();
    const sum = array.reduce((total, element) => {
        return total - element;
    }, firstElement);
    return sum;
}

function calculate(array, operator) {
    if (operator === 'add') {
        return add(array);
    };
    if (operator === 'multiply') {
        return multiply(array);
    };
    if (operator === 'divide') {
        return divide(array);
    };
    if (operator === 'subtract') {
        return substract(array);
    };
}

/**
 * TEST CODE. DO NOT EDIT
 */
console.log(calculate([1,2], 'add')); // should be 3
console.log(calculate([3,2,4], 'multiply')); // should be 24
console.log(calculate([6,2], 'divide')); // should be 3
console.log(calculate([100, 23, 21, 4], 'subtract')) // should be 52