
const form = document.querySelector('.header-form')
const list = document.querySelector('.tasks-list')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('ok');
    const item = document.createElement('li')
    const itemBtn = document.createElement('button')
    const p = document.createElement('p')
    p.textContent = 'Текст'
    const subtitle = document.createElement('h3')
    subtitle.textContent = 'Заголовок'
    itemBtn.classList.add('task-list-item-btn')
    itemBtn.textContent = 'Delete'
    item.classList.add('task-list-item')
    item.append(itemBtn, subtitle, p)
    list.insertAdjacentElement('beforeend', item)
})

