//Assignment #1
//Write a function sum that finds the sum of two numbers.
function sum(num1, num2) {
  return num1 + num2
}

console.log(sum(4, 5))

//Side quest - Try passing in a string instead of a number and see what happens?

console.log(sum("100x", "devs"))
//output - 100xdevs

//Assignment #2
//Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age) {
  if (age > 18) {
    return true
  }
  return false
}
console.log(canVote(21))
