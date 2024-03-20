"use strict";
const sumArray = (array) => {
    return array.reduce((acc, number) => acc + number);
};
let numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));
