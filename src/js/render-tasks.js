
const form = document.querySelector('.header-form')
const list = document.querySelector('.tasks-list')


form.addEventListener('submit', (event) => {
    event.preventDefault()
    const inputName = event.target.elements.taskName.value.trim();
    const inputDescrip = event.target.elements.taskDescription.value.trim();
    if (inputName == '' || inputDescrip == '') {
        return
    }

    // console.log(inputName);
    // console.log(inputDescrip);


    const item = document.createElement('li')
    const itemBtn = document.createElement('button')
    const p = document.createElement('p')
    const subtitle = document.createElement('h3')

    p.textContent = inputDescrip
    subtitle.textContent = inputName
    itemBtn.textContent = 'Delete'

    itemBtn.classList.add('task-list-item-btn')
    item.classList.add('task-list-item')

    item.append(itemBtn, subtitle, p)
    list.insertAdjacentElement('beforeend', item)

    localStorage.setItem(inputName, inputDescrip)

    form.reset()
})

// localStorage.clear()

list.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') { return }
    // console.log(event.target.tagName);
    const p = list.querySelector('p')
    const subtitle = list.querySelector('h3')

    // console.log(p);
    // console.log(subtitle);

    p.textContent = ''
    subtitle.textContent = ''

    const item = list.querySelector('.task-list-item')
    item.remove()
})