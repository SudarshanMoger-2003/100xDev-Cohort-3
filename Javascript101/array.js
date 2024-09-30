//Write a function that takes an array of numbers as input,
//and returns new array with only even values.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function evenOnly(arr) {
  const b = arr.filter((number) => {
    return number % 2 == 0
  })
  console.log(b)
}
evenOnly(array)
