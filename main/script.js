//  switch dark mode

// stick header

const header = document.querySelector("header")

const stickHeader = () => {
  const scroll = window.scrollY
  if (scroll > 0) {
    header.classList.add("active")
  } else {
    header.classList.remove("active")
  }
}
window.addEventListener("scroll", stickHeader)

const menuLinks = document.querySelectorAll(".menu_link")
const menu = document.querySelector(".menu")

menuLinks.forEach((link) =>
  link.addEventListener("click", (e) => {
    const key = e.target.dataset.key

    console.log(key)

    const section =
      document.querySelector(`.${key}`).getBoundingClientRect().top +
      window.pageYOffset -
      160

    menu.classList.remove("active")
    window.scrollTo({ top: section, behavior: "smooth" })
  })
)

// hamburger

const hamburger = document.querySelector(".hamburger")
const hamburgerIcon = document.querySelector(".hamburger img")
const dropDownMenu = document.querySelector(".dropdown_menu")

hamburger.onclick = function () {
  dropDownMenu.classList.toggle("open")
}
