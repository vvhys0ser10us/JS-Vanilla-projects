const btn = document.querySelector('#btn')
const close = document.querySelector('#close-btn')
const modal = document.querySelector('.modal-overlay')

btn.addEventListener('click', () => {
  modal.classList.add('show')
})

close.addEventListener('click', () => {
  modal.classList.remove('show')
})
