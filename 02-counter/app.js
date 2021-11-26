// const decrease = document.querySelector('#btn-decrease')
// const reset = document.querySelector('#btn-reset')
// const increase = document.querySelector('#btn-increase')
const btns = document.querySelectorAll('.btn')
let counter = document.querySelector('#number')
let number = counter.textContent

// decrease.addEventListener('click', function () {
//   number--
//   document.querySelector('#number').textContent = number
//   color()
// })

// increase.addEventListener('click', function () {
//   number++
//   document.querySelector('#number').textContent = number
//   color()
// })

// reset.addEventListener('click', function () {
//   number = 0
//   document.querySelector('#number').textContent = number
//   color()
// })

function color() {
  counter.style.color = number > 0 ? 'green' : 'red'
  if (number == 0) {
    counter.style.color = '#222'
  }
}

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    if (e.currentTarget.classList.contains('decrease')) {
      number--
    } else if (e.currentTarget.classList.contains('increase')) {
      number++
    } else {
      number = 0
    }
    counter.textContent = number
    color()
  })
})
