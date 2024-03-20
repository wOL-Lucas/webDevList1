"use strict";
const linearSearch = (array, toFind) => {
    return array.findIndex(element => element === toFind);
};
let numbersArray = [10, 20, 30, 40];
console.log(linearSearch(numbersArray, 10));
