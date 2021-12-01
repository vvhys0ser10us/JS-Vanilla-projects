const btns = document.querySelectorAll('.tab-btn')

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    btns.forEach((item) => {
      if (item !== e.currentTarget) {
        item.classList.remove('active')
        let id = item.dataset.id
        let content = document.getElementById(id)
        console.log(id)
        content.classList.remove('active')
      }
    })

    if (!btn.classList.contains('active')) {
      btn.classList.add('active')
      let id = btn.dataset.id
      let content = document.getElementById(id)
      content.classList.add('active')
    }
  })
})
