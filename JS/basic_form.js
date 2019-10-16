const form = document.querySelector('.myform');
const pattern = /[a-zA-Z0-9_\.\-\$]+@gmail.com/

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(form.userid.value);
    const result = pattern.test(form.userid.value);
    console.log(result);
});

form.userid.addEventListener('keyup', e => {
    const username = e.target.value;
    const result = pattern.test(username);
    
    if(result){
        form.userid.setAttribute('class', 'success')
    } else {
        form.userid.setAttribute('class', 'error')
    }

});