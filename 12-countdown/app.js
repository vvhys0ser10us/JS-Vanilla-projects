const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const deadline = new Date('2023-01-01T00:00:00')
const dYear = deadline.getFullYear()
const dMonth = deadline.getMonth()
const dDate = deadline.getDate()
const dDay = deadline.getDay()
const dHour = deadline.getHours()
const dMin = deadline.getMinutes()
// set format for the am or pm
let apm = dHour >= 12 ? 'pm' : 'am'

// set the format for hours and minutes when single digit
let doubleHour = dHour >= 10 ? '' : '0'
let doubleMin = dMin >= 10 ? '' : '0'

const deadlineDate = document.querySelector('#end')
const timer = document.querySelector('.timer')
deadlineDate.textContent = `${weekdays[dDay]}, ${dDate} ${months[dMonth]} ${dYear} ${doubleHour}${dHour}:${doubleMin}${dMin}${apm}`

function getCountdown() {
  let currentTime = new Date()
  let difference = deadline.getTime() - currentTime.getTime()

  if (difference < 0) {
    timer.innerHTML = `<h4>Sorry, the giveway has ended.</h4>`
  } else {
    let days = Math.floor(difference / 1000 / 60 / 60 / 24)
    let hours = Math.floor((difference / 1000 / 60 / 60) % 24)
    let mins = Math.floor((difference / 1000 / 60) % 60)
    let secs = Math.floor((difference / 1000) % 60)

    const day = document.getElementById('day')
    day.textContent = days >= 10 ? `${days}` : `0${days}`

    const hour = document.getElementById('hour')
    hour.textContent = hours >= 10 ? `${hours}` : `0${hours}`

    const min = document.getElementById('min')
    min.textContent = mins >= 10 ? `${mins}` : `0${mins}`

    const sec = document.getElementById('sec')
    sec.textContent = secs >= 10 ? `${secs}` : `0${secs}`
  }
}

let countdown = setInterval(getCountdown, 1000)

getCountdown()
