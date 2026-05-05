const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".navbar__links");
const button = document.querySelector(".burguer");
const links = document.querySelectorAll(".navbar__links a");
const items = document.querySelectorAll('.carousel__item')

button.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

links.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("active");
  });
});

window.addEventListener(
  "scroll",
  function () {
    if (this.window.pageYOffset > 0) {
      navbar.classList.add("active");
    } else {
      navbar.classList.remove("active");
    }
  },
  { passive: true },
);

items.forEach(function(item) {
  const icon = item.querySelector('i')
  const color = icon.getAttribute('data-color')

  item.addEventListener('mouseenter', function() {
    item.style.setProperty('--tech-color', color)
  })
})
