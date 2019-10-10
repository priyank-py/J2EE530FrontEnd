const colors = ['blue', 'red', 'green', 'yellow'];

let ul = document.querySelector('ul');

let total = ``
colors.forEach( color => {
  total += `<li>${color}</li>`;
  console.log(total);
})

ul.innerHTML = total;

console.log(total);
