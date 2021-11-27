const btn = document.querySelector('#nav-btn')
const list = document.querySelector('.links')

btn.addEventListener('click', () => {
  if (list.classList.contains('show-links')) {
    list.classList.remove('show-links')
  } else {
    list.classList.add('show-links')
  }
})
