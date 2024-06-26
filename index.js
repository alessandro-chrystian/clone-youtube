const hamburguerMenu = document.querySelector('.nav-btn')
const input = document.querySelector('input')
const inputButton = document.querySelector('#input-button')
const menuDescription = document.getElementsByName('item-description')
const backgroundSections = document.getElementsByName('section')
const clickChangeMode = document.querySelector('.page-mode')
const sunIcon = document.querySelector('.sunlight')
const moonIcon = document.querySelector('.moonlight')
const form = document.querySelector('form')
const card = document.querySelectorAll('.card-body')
const cardArray = [...card]

let modeIsLight = false;

const changeTextStyle = document.querySelectorAll('i, h2, h5, p')

hamburguerMenu.addEventListener('click', () => {

    if(hamburguerMenu) {
        menuDescription.forEach(item => item.classList.toggle('hidden'))
    }
})

clickChangeMode.addEventListener('click', () => {

    modeIsLight = !modeIsLight

    if(modeIsLight){
        backgroundSections.forEach((section) => {
            section.classList.remove('bg-dark')
            section.classList.add('bg-light')
            inputButton.classList.remove('bg-dark')
            inputButton.classList.add('bg-secondary-subtle')
            moonIcon.classList.remove('hidden')
            sunIcon.classList.add('hidden')
            changeTextStyle.forEach(item => item.classList.add('light-mode'))
            menuDescription.forEach(item => item.classList.add('light-mode'))
        })
    } else {
        backgroundSections.forEach((section) => {
            section.classList.remove('bg-light')
            section.classList.add('bg-dark')
            inputButton.classList.add('bg-dark')
            inputButton.classList.remove('bg-secondary-subtle')
            sunIcon.classList.remove('hidden')
            moonIcon.classList.add('hidden')
            changeTextStyle.forEach(item => item.classList.remove('light-mode'))
            menuDescription.forEach(item => item.classList.remove('light-mode'))
        })
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if(input.value !== ''){
        cardArray.forEach(card =>{
            let title = card.querySelector('h5')
            title = title.textContent.toLowerCase()
            let filteredText = input.value.toLowerCase()
            
            if(title.includes(filteredText)){
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        })
    } else {
        cardArray.forEach(card => {
            card.style.display = 'block';
        })
    }
    input.value = ''
})