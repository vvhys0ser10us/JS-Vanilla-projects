const hex = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
]

const color = document.querySelector('.color')
const btn = document.querySelector('#btn')

btn.addEventListener('click', function () {
  let str = '#'
  for (let i = 0; i <= 5; i++) {
    let x = Math.floor(Math.random() * hex.length)
    str = str.concat(hex[x])
  }
  color.textContent = str
  document.body.style.background = str
})
