const colors = [
  'red',
  'blue',
  'green',
  '#f71137',
  'f15025',
  'rgba(133,122,200)',
]

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function () {
  let x = Math.floor(Math.random() * 6)
  document.body.style.background = colors[x]
  color.textContent = colors[x]
})
