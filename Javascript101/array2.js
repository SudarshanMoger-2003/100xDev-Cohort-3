const a = [1,2,3,4,5,6,7]

const evenArray = a.filter((number) =>{
    return number%2 == 0
})

//console.log(evenArray)

const users = [{
    name : "Harkirat",
    age : 21,
    personal : {
        gender : "male",
        favoriteColor : "green"
    }
},{
    name : "raman",
    age : 27,
    personal : {
        gender : "female",
        favoriteColor : "red"
    }
}]
let allUsers = [];
function adult(arrOfObj){
    for(let i=0; i<arrOfObj.length; i++){
        if(arrOfObj[i].age > 18){
            allUsers.push(arrOfObj[i])
        }
    }
    return allUsers
}
//console.log(adult(users))

let allAdultMale = []
function adultMale(objOfObj){
    for(let i=0; i<objOfObj.length; i++){
        if(objOfObj[i].age > 18 && objOfObj[i].personal.gender == 'male'){
            allAdultMale.push(objOfObj[i])
        }
    }
    return allAdultMale
}
console.log(adultMale(users))