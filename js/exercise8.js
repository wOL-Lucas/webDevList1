"use strict";
const countWords = (word) => {
    let words = word.split(` `);
    return words.length;
};
console.log(countWords("Hello world"));
