"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
class Calculator {
    constructor() {
        this.rl = readline_1.default.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.multiply = this.multiply.bind(this);
        this.divide = this.divide.bind(this);
        this.substract = this.substract.bind(this);
        this.sum = this.sum.bind(this);
        this.evaluate = this.evaluate.bind(this);
        this.operations = {
            "x": this.multiply,
            "/": this.divide,
            "-": this.substract,
            "+": this.sum
        };
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        return a / b;
    }
    substract(a, b) {
        return a - b;
    }
    sum(a, b) {
        return a + b;
    }
    evaluate(operation, a, b) {
        return this.operations[operation](a, b);
    }
    serve() {
        let exit = false;
        while (!exit) {
        }
    }
}
let calculator = new Calculator();
let operation1 = calculator.evaluate("x", 2, 3);
console.log(operation1);
