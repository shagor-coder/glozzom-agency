//# sourceMappingURL=script.js.map
const navBar = document.querySelector('.navbar')
window.addEventListener('scroll', function () {
  navBar.classList.toggle('active', scrollY > 50)
})
console.log(navBar)
$('.slider').slick({ infinite: !0, slideToShow: 1, slideToScroll: 1 })
