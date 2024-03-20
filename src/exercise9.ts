
const determineMinAndMax = (array:number[]):[min:number, max:number] => {
  let min:number = Math.min(...array)
  let max: number = Math.max(...array)

  return [min, max]
}

let array: number[] = [1,2,3,4,5]
console.log(determineMinAndMax(array))
