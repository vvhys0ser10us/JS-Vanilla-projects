const bars = document.getElementById('bars')
const sidebar = document.querySelector('.sidebar')
const cross = document.querySelector('#sidebar-btn')

bars.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar')
})

cross.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar')
})
