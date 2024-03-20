"use strict";
const getMultiplicationTable = (num) => {
    let table = '';
    for (let i = 1; i <= 10; i++) {
        table += `${num} x ${i} = ${num * i}\n`;
    }
    return table;
};
console.log(getMultiplicationTable(2));
