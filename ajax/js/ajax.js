const btn = document.querySelector('.btn')
const div = document.querySelector('.box')
counter = 0

// btn.addEventListener('click', () => {

for (i=0; i<2; i++){
setTimeout(doThis, i*2000)
}




function doThis(){
    let request = new XMLHttpRequest()

    request.open('GET', 'books1.json')

    request.onload = function(){

        const ourData = JSON.parse(request.responseText)
        displayInBox(ourData.books[counter])
        counter++;
        if(counter > 1){
            btn.style.display = 'none'
        }
    }

  
    
    request.send()
    
}
// })

 function displayInBox(data){
    htmlString = `<h1>${data.name}</h1>
    <p>${data.synopsis}</p>
    <p>${data.writer}</p>`;
    div.innerHTML = htmlString;

}



