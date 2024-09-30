const time = new Date()

setInterval(()=>{
console.log(time.getHours() +":" + time.getMinutes() +":" + time.getSeconds())
},1000)

