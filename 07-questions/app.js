// const btns = document.querySelectorAll('.btn-toggle')

// btns.forEach((button) => {
//   button.addEventListener('click', (e) => {
//     btns.forEach((item) => {
//       if (item !== button) {
//         item.parentElement.parentElement.classList.remove('show')
//       }
//     })

//     e.currentTarget.parentElement.parentElement.classList.toggle('show')
//   })
// })

const cards = document.querySelectorAll('.card')

cards.forEach((card) => {
  card.querySelector('.btn-toggle').addEventListener('click', (e) => {
    cards.forEach((item) => {
      if (item.querySelector('.btn-toggle') != e.currentTarget) {
        item.classList.remove('show')
      }
    })

    card.classList.toggle('show')
  })
})
