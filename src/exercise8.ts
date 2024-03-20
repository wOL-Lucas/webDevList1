

const countWords = (word:string):number => {
  let words:string[] = word.split(` `);
  return words.length
 }


 console.log(countWords("Hello world"))
