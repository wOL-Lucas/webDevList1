"use strict";
const getGradesAverage = (grades) => {
    return (grades.reduce((acc, grade) => acc + grade, 0) / grades.length) >= 7 ? 'Aprovado' : 'Reprovado';
};
console.log(getGradesAverage([5, 5, 5]));
