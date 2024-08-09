const menuBtn = document.getElementById('menu-btn')
const navLinks = document.getElementById('nav-links')
const menuBtnIcon = menuBtn.querySelector('i')

menuBtn.addEventListener('click', (e) => {
    navLinks.classList.toggle('open')

    const isOpen = navLinks.classList.contains('open')
    menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line')
})

navLinks.addEventListener('click', (e) => {
    navLinks.classList.remove('open')
    menuBtnIcon.setAttribute('class', 'ri-menu-line')
})

const scrollRevealOptions = {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
}

ScrollReveal().reveal('.header__image img', {
    ...scrollRevealOptions,
    origin: "right"
})

ScrollReveal().reveal('.header__content h1', {
    ...scrollRevealOptions,
    delay: 500
})

ScrollReveal().reveal('.header__content p', {
    ...scrollRevealOptions,
    delay: 1000
})

ScrollReveal().reveal('.header__links', {
    ...scrollRevealOptions,
    delay: 1500
})

ScrollReveal().reveal('.steps__card', {
    ...scrollRevealOptions,
    interval: 500
})

ScrollReveal().reveal('.service__image img', {
    ...scrollRevealOptions,
    origin: "left"
})

ScrollReveal().reveal('.service__content .section__subheader', {
    ...scrollRevealOptions,
    delay: 500
})

ScrollReveal().reveal('.service__content .section__header', {
    ...scrollRevealOptions,
    delay: 1000
})

ScrollReveal().reveal('.service__list li', {
    ...scrollRevealOptions,
    delay: 1500,
    interval: 500
})

ScrollReveal().reveal('.experience__card', {
    ...scrollRevealOptions,
    duration: 1000,
    interval: 500
})

ScrollReveal().reveal('.download__image img', {
    ...scrollRevealOptions,
    origin: "right"
})

ScrollReveal().reveal('.download__content .section__header', {
    ...scrollRevealOptions,
    delay: 500
})

ScrollReveal().reveal('.download__content p', {
    ...scrollRevealOptions,
    delay: 1000
})

ScrollReveal().reveal('.download__links', {
    ...scrollRevealOptions,
    delay: 1500
})