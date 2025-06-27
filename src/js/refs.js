const body = document.querySelector('.theme-dark')
const changeBtn = document.querySelector('.theme-toggle-button')


changeBtn.addEventListener('click', () => {
    body.classList.toggle('theme-light')
    body.classList.toggle('theme-dark')
})
