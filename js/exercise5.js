"use strict";
class Year {
    constructor(year) {
        this.year = year;
    }
    isLeapYear() {
        return this.year % 4 === 0 && this.year % 100 !== 0 || this.year % 400 === 0;
    }
}
const year = new Year(2024);
console.log(year.isLeapYear());
