const toggleButton = document.getElementsByClassName('toggle__button')[0]
const navbarLinks = document.getElementsByClassName('menu')[0]


toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
}) 