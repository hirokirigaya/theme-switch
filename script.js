const checkbox = document.getElementById('checkbox')
const body = document.querySelector('body')

checkbox.addEventListener('change', ()=> {
    body.classList.toggle('dark')
})

