//Assignment #1
function greet(user){
    console.log(`hello ${user.name}, your age is ${user.age}`)
}

const obj = {
    name : "sudarshan",
    age : 21
}

//greet(obj)

//Assignment #2
function greetBasedGender(user){
    if(user.gender == 'male'){
        console.log(`Hi Mr ${user.name}, your age is ${user.age}`)
    }
    if(user.gender == 'female'){
        console.log(`Hi Mrs ${user.name}, your age is ${user.age}`)
    }
    
}

const obj2 = {
    name : "sudarshan",
    age : 21,
    gender : "male"
}
const obj3 = {
    name : "rekha",
    age : 29,
    gender : "female"
}

//greetBasedGender(obj3)

//Assignment #3
function legalToVote(user){
    if(user.age > 18){
        console.log("You are legal to vote")
    }else{
        console.log("You are not legal to vote")
    }
}
legalToVote(obj2)
legalToVote(obj3)
