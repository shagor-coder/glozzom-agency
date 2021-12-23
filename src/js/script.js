//# sourceMappingURL=script.js.map
const navBar = document.querySelector('.navbar')
window.addEventListener('scroll', function () {
  navBar.classList.toggle('active', scrollY > 50)
})
// Checking The active link
const links = document.querySelectorAll('.nav-item')
const addActive = function () {
  links.forEach((link) => {
    link.classList.remove('active')
    this.classList.add('active')
  })
}
links.forEach((link) => {
  link.addEventListener('click', addActive)
})

$('.slider').slick({ infinite: true, slideToShow: 1, slideToScroll: 1 })
