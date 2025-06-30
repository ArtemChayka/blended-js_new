const body = document.querySelector('body')
const changeBtn = document.querySelector('.theme-toggle-button')


changeBtn.addEventListener('click', () => {
    body.classList.toggle('theme-light')
    body.classList.toggle('theme-dark')
    
})
// localStorage.clear()
