const list = document.querySelector('ul')
const items = document.querySelectorAll('li')

const li = document.createElement('li')
li.textContent = 'something'
console.log(li)

const two = document.querySelector('#two')
two.insertAdjacentHTML('beforebegin', '<li>Item 4</li>')