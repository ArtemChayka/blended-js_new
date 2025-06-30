const body = document.querySelector('body')
const changeBtn = document.querySelector('.theme-toggle-button')
const LS_KEY_2 = 'theme'

changeBtn.addEventListener('click', () => {
    body.classList.toggle('theme-light')
    body.classList.toggle('theme-dark')
    localStorage.setItem(LS_KEY_2, body.getAttribute('class'))
})

const LS = localStorage.getItem(LS_KEY_2)
const getA = body.getAttribute('class')


if (LS) {
    body.classList.replace(getA, LS)
}

// localStorage.clear()
