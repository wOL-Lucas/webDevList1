"use strict";
const determineMinAndMax = (array) => {
    let min = Math.min(...array);
    let max = Math.max(...array);
    return [min, max];
};
let array = [1, 2, 3, 4, 5];
console.log(determineMinAndMax(array));
