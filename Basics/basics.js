let m = 10
print(m)
let a = [2,3,5,6,7,1,8,9,4,27,6,5]
let biggest = a[0]
for(let i=0; i<a.length; i++){
    if(a[i]%2 == 0){
        console.log(a[i])
    }
    if(a[i] > biggest){
        biggest = a[i]
    }
    
}
console.log(biggest)

let user = {
    name : "Monty",
    age : 22,
    gender : "Male"
}
console.log(user["name"])
console.log(user.gender)

function print(variable){
    console.log(variable)
}

function sum(num1,num2){
    return num1+num2
}
function displayResult(data){
    console.log("Result is " + data)
}
displayResult(sum(2,3))

function greet(){
    console.log("Hello world")
}

setTimeout(greet, 3000)