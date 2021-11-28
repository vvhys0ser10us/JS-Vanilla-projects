const bars = document.getElementById('bars')
const sidebar = document.querySelector('.sidebar')
const cross = document.querySelector('#sidebar-btn')

bars.addEventListener('click', () => {
  if (sidebar.classList.contains('show-sidebar')) {
    sidebar.classList.remove('show-sidebar')
    sidebar.classList.add('remove-sidebar')
  } else {
    sidebar.classList.add('show-sidebar')
    sidebar.classList.remove('remove-sidebar')
  }
  // bars.classList.add('disappear')
})

cross.addEventListener('click', () => {
  sidebar.classList.add('remove-sidebar')
  sidebar.classList.remove('show-sidebar')
  bars.classList.remove('disappear')
})
