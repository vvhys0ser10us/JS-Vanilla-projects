// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const year = document.querySelector('#date')
const date = new Date()
year.textContent = date.getFullYear()

// ********** close links ************
const navbtn = document.querySelector('.nav-btn')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

navbtn.addEventListener('click', () => {
  const containerHeight = linksContainer.getBoundingClientRect().height
  const linksHeight = links.getBoundingClientRect().height

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`
    console.log(linksContainer.style.height)
  } else {
    linksContainer.style.height = 0
  }
})

// ********** fixed navbar ************
const navbar = document.querySelector('nav')

window.addEventListener('scroll', () => {
  let navheight = nav.getBoundingClientRect().height
  if (window.scrollY > navheight) {
    navbar.classList.add('fixed-nav')
  } else {
    navbar.classList.remove('fixed-nav')
  }
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const id = e.currentTarget.getAttribute('href').slice(1)
    const element = document.getElementById(id)

    const navHeight = navbar.getBoundingClientRect().height
    const containerHeight = linksContainer.getBoundingClientRect().height

    const fixedNav = navbar.classList.contains('fixed-nav')
    let position = element.offsetTop - navHeight
    if (!fixedNav) {
      position = position - navHeight
    }

    if (navHeight > 63.98) {
      position = position + containerHeight
    }

    window.scrollTo({
      left: 0,
      top: position,
    })
    linksContainer.style.height = 0
  })
})
