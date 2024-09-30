//Create a function that takes an array of objects as input, and
//returns ther users whose age>18 and are male
const users = [
  {
    name: "Joker",
    age: 15,
    gender: "male"
  },
  {
    name: "Barbie",
    age: 22,
    gender: "female"
  },
  {
    name: "John",
    age: 34,
    gender: "male"
  },
  {
    name: "Karry",
    age: 28,
    gender: "female"
  }
]

function adultMales(arr) {
  const a = arr.filter((number) => {
    return number.age > 18 && number.gender == "male"
  })
  console.log(a)
}
adultMales(users)
