
const linearSearch = (array:number[], toFind:number):number => {
  return array.findIndex(element => element === toFind)
}

let numbersArray:number[] = [10, 20, 30, 40]
console.log(linearSearch(numbersArray, 10))
