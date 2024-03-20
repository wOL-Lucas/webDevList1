"use strict";
const imcCalculator = (weight, height) => {
    const imc = weight / (height * height);
    if (imc < 18.5) {
        return "Underweight";
    }
    else if (imc < 24.9) {
        return "Normal weight";
    }
    else if (imc < 29.9) {
        return "Overweight";
    }
    else {
        return "Obesity";
    }
};
console.log(imcCalculator(70, 1.75));
