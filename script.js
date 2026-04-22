const navbar = document.querySelector('.navbar')
const navbarLinks = document.querySelector('.navbar__links')
const button = document.querySelector('.burguer')

button.addEventListener('click', function() {
    navbarLinks.classList.toggle('active')
})

window.addEventListener('scroll', function() {
    if(this.window.pageYOffset > 0) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')
    }
})