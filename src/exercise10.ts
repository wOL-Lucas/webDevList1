
const sumArray = (array:number[]):number => {
  return array.reduce((acc, number)=> acc + number)
}

let numbers:number[] = [1,2,3,4,5]
console.log(sumArray(numbers))
