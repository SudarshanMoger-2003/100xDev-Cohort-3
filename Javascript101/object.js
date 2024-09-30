//Assignment #1
//Write a function that takes a user as an input and greets them with their name and age

let user1 = {
  name: "Joker",
  age: 55
}
function greet(user) {
  console.log("Welcome " + user.name + " age is " + user.age)
}
//greet(user1)

//Assignment #2
//Write a function that takes a new object as input which has
// name , age  and gender and greets the user with their gender
// (Hi Mr/Mrs/Others harkirat, your age is 21)

let user2 = {
  name: "Joker",
  age: 18,
  gender: "male"
}
let user3 = {
  name: "Barbie",
  age: 26,
  gender: "female"
}

function assignment(user) {
  if (user.gender == "male") {
    console.log("Hi Mr " + user.name + ", your age is " + user.age)
  } else if (user.gender == "female") {
    console.log("Hi Mrs " + user.name + ", your age is " + user.age)
  } else if (user.gender == "Others") {
    console.log("Hi Others " + user.name + ", your age is " + user.age)
  }
}
//assignment(user3)
//We can use switch statement for better clean code

function assignmentTwo(user) {
  switch (user.gender) {
    case "male":
      console.log("Hi Mr " + user.name + ", your age is " + user.age)
      break
    case "female":
      console.log("Hi Mrs " + user.name + ", your age is " + user.age)
      break
    case "Others":
      console.log("Hi Others " + user.name + ", your age is " + user.age)
      break
  }
}
//assignmentTwo(user3)

let user4 = {
  name: "Barbie",
  age: 11,
  gender: "female"
}
//Assignment #3
//Also tell the user if they are legal to vote or not
function assignmentThree(user) {
  if (user.gender == "male" && user.age >= 18) {
    console.log(
      "Hi Mr " +
        user.name +
        ", your age is " +
        user.age +
        " you are legal to vote"
    )
  } else if (user.gender == "male" && user.age < 18) {
    console.log(
      "Hi Mr " +
        user.name +
        ", your age is " +
        user.age +
        " you are not legal to vote"
    )
  } else if (user.gender == "female" && user.age >= 18) {
    console.log(
      "Hi Mrs " +
        user.name +
        ", your age is " +
        user.age +
        " you are legal to vote"
    )
  } else if (user.gender == "female" && user.age < 18) {
    console.log(
      "Hi Mrs " +
        user.name +
        ", your age is " +
        user.age +
        " you are not legal to vote"
    )
  } else if (user.gender == "Others" && user.age >= 18) {
    console.log(
      "Hi Others " +
        user.name +
        ", your age is " +
        user.age +
        " you are legal to vote"
    )
  } else if (user.gender == "Others" && user.age < 18) {
    console.log(
      "Hi Others " +
        user.name +
        ", your age is " +
        user.age +
        " you are not legal to vote"
    )
  }
}
assignmentThree(user4)
