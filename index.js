const countdown = document.getElementById("countdown")
const targetDate = new Date('Jan 18, 2020')
console.log(targetDate)





let date = new Date()


console.log(date.getMonth() === 0 && date.getDate() === 18)
let time = date.getTime()
let minutes = 1000 * 60;
let hours = minutes * 60;
let days = hours * 24;
let years = days * 365
displayDays = Math.round(time / years)
countdown.innerHTML = displayDays
days_left = (Math.round((targetDate.getTime() - date.getTime())/days))
minutes_left = (Math.round((targetDate.getTime() - date.getTime())/minutes))
seconds_left = (Math.round((targetDate.getTime() - date.getTime())/time))

console.log(days_left)
const clockCount = () =>{
    setInterval( () =>{
        time--
        countdown.innerHTML = displayDays
    }, 1000)
}
clockCount()
