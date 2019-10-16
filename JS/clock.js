const div = document.querySelector('.clock');

tick = () =>{
    
    const now = new Date()

    const hours = now.getHours();
    const mins = now.getMinutes();
    const secs = now.getSeconds();

    const result = `
    <span>${hours}</span> : 
    <span>${mins}</span> : 
    <span>${secs}</span>
`;

    div.innerHTML = result;

}

setInterval(tick, 1000)