
const sortArray = (arr: number[], asc: boolean = true): number[] => {
  return arr.sort((a, b) => (asc ? a - b : b - a));
};

const chadSortArray = (arr: number[], asc: boolean = true): number[] => {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(asc) {
        if(arr[i] < arr[j]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      } else {
        if(arr[i] > arr[j]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
  }

  return arr;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sortArray(arr, false));
console.log(chadSortArray(arr, false));

console.log("sorting again")
console.log(sortArray(arr));
console.log(chadSortArray(arr));
