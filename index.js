let nextBirthdayYear = 2020
const countdown = document.getElementById("countdown")
const targetDate = new Date(`Jan 18, ${nextBirthdayYear}`)
let date = new Date()
seconds_left = (Math.round((targetDate.getTime() - date.getTime())/1000))

const checkBirthday = () =>{
    if (date.getMonth() === 0 && date.getDate() === 18){
        console.log(nextBirthdayYear)
        return "YES!  Happy birthday Joey!"
    } else {
        return `Nope! But only ${seconds_left} seconds to go until the next one!`
    }
}

const clockCount = () =>{
  setInterval( () =>{
    seconds_left--
        if (date.getMonth() !== 0 || date.getDate() !== 18){
          countdown.innerHTML = `Nope! But only ${seconds_left} seconds to go until the next one!`
        }
  }, 1000)
}
countdown.innerHTML = checkBirthday()
clockCount()
