// const box1 = document.querySelector('.box-1')
const box1 = document.querySelector('.box-1')
const box2 = document.querySelector('.box-2')
const items = document.querySelector('ul')

box1.style.backgroundColor = '#f4f4f4'
const inp = document.querySelector('input')

inp.setAttribute('placeholder', 'Enter Some text')

const li = document.querySelector('.item1')
li.classList.add('itm1')
li.classList.remove('item1')

const list = document.querySelectorAll('li')
console.log(list)
list.forEach(item => {
    console.log(item.innerText)
})





