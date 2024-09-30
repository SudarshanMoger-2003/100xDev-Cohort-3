const currentDate = new Date()
console.log(currentDate.getDate())
console.log(currentDate.getMonth()+1)
console.log(currentDate.getFullYear())


//time taken by a function to execute

function calculateSum(){
    let a = 0;
    for(let i=0; i<1000000; i++){
        a+=i
    }
    return a
}

const beforeDate = new Date()
const beforeTimeInMs = beforeDate.getTime()
calculateSum()
const afterDate = new Date()
const afterTimeInMs = afterDate.getTime()

console.log(afterTimeInMs-beforeTimeInMs)

