// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
]

const btns = document.querySelectorAll('button')
let id = 1
let check = 1
const author = document.querySelector('#author')
const job = document.querySelector('#job')
const img = document.querySelector('#person')
const text = document.querySelector('#text')

//load initial
window.addEventListener('DOMContentloaded', () => {
  author.textContent = reviews[id - 1].name
  job.textContent = reviews[id - 1].job
  img.setAttribute('src', reviews[id - 1].img)
  text.textContent = reviews[id - 1].text
})

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    let b = e.currentTarget.classList
    if (b.contains('btn-next')) {
      if (id < reviews.length) {
        id++
      } else {
        id = 1
      }
    } else if (b.contains('btn-prev')) {
      if (id > 1) {
        id--
      } else {
        id = 4
      }
    } else {
      // id = Math.floor(Math.random() * reviews.length + 1)
      while (check == id) {
        id = Math.floor(Math.random() * reviews.length + 1)
      }
    }
    check = id
    console.log(check)
    author.textContent = reviews[id - 1].name
    job.textContent = reviews[id - 1].job
    img.setAttribute('src', reviews[id - 1].img)
    text.textContent = reviews[id - 1].text
  })
})
