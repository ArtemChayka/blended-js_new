
const form = document.querySelector('.header-form')
const list = document.querySelector('.tasks-list')
const obj = {}
const LS_KEY = 'obj'


form.addEventListener('submit', (event) => {
    event.preventDefault()
    const inputName = event.target.elements.taskName.value.trim();
    const inputDescrip = event.target.elements.taskDescription.value.trim();
    if (inputName == '' || inputDescrip == '') {
        return
    }

    const item = document.createElement('li')
    const subtitle = document.createElement('h3')
    const p = document.createElement('p')
    const itemBtn = document.createElement('button')

    subtitle.textContent = inputName
    p.textContent = inputDescrip
    itemBtn.textContent = 'Delete'

    itemBtn.classList.add('task-list-item-btn')
    item.classList.add('task-list-item')

    item.append(itemBtn, subtitle, p)
    list.insertAdjacentElement('beforeend', item)

    obj[inputName] = inputDescrip
   
    localStorage.setItem(LS_KEY, JSON.stringify(obj))
console.log(obj);

    form.reset()
})

list.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') { return }
    event.target.closest('.task-list-item').remove()
})


function loadFromStorage() {
    const getLS = localStorage.getItem(LS_KEY)
    if (!getLS) { return }    
    try { 
        const keys = Object.keys(JSON.parse(getLS))
        const values = Object.values(JSON.parse(getLS))

        const h3Els = [...document.querySelectorAll('h3')]
        const pEls = [...document.querySelectorAll('p')]

        keys.forEach((key, index) => {
            h3Els[index].textContent = key
        })
        values.forEach((value, index) => {
            pEls[index].textContent = value
        })
    }
    catch (error) {
        console.log(error.message);
        
    }

}
loadFromStorage()
// localStorage.clear()







