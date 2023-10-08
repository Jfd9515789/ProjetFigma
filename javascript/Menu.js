
const toggleButton1 = document.getElementsByClassName('toggle-button1')[0]
const toggleButton2 = document.getElementsByClassName('toggle-button2')[0]
const toggleButton3 = document.getElementsByClassName('toggle-button3')[0]
const toggleButton4 = document.getElementsByClassName('toggle-button4')[0]
const toggleButton5 = document.getElementsByClassName('toggle-button5')[0]
const toggleButton6 = document.getElementsByClassName('toggle-button6')[0]
const toggleButton7 = document.getElementsByClassName('toggle-button7')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton1.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

toggleButton2.addEventListener('click', () => {
    navbarLinks.classList.remove('active')
})

toggleButton3.addEventListener('click', () => {
    navbarLinks.classList.remove('active')
})

toggleButton4.addEventListener('click', () => {
    navbarLinks.classList.remove('active')
})

toggleButton5.addEventListener('click', () => {
    navbarLinks.classList.remove('active')
})

toggleButton6.addEventListener('click', () => {
    navbarLinks.classList.remove('active')
})

toggleButton7.addEventListener('click', () => {
    navbarLinks.classList.remove('active')
})