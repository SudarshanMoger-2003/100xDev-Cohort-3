//Write a function that takes an array of users as inputs and
//returns only the users who are more than 18 years old

const users = [
  {
    name: "Joker",
    age: 15
  },
  {
    name: "Barbie",
    age: 22
  },
  {
    name: "John",
    age: 8
  },
  {
    name: "Karry",
    age: 28
  }
]

function arrOfObj(arr) {
  const a = arr.filter((number) => {
    return number.age > 18
  })
  console.log(a)
}
arrOfObj(users)
