//Assignment
//Write a function called sum that finds the sum from 1 to a number

function sum(n) {
  let sumOfAll = 0
  for (let i = 1; i <= n; i++) {
    sumOfAll += i
  }
  console.log(sumOfAll)
}
sum(10)
