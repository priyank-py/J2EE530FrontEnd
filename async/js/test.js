const getTodos = (response) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()

        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState)
            if(request.readyState === 4 && request.status === 200){
                // console.log(request.responseText)
                resolve(request.responseText)
            } else if(request.readyState === 4){
                // console.log('Page not found')
                reject('Data not fetched')
            }
        })
        
        request.open('GET', response)
        request.send()
    })

    
}

getTodos('https://jsonplaceholder.typicode.com/todos/1').then((data) => {
    console.log('data recieved', data)
    return getTodos('https://jsonplaceholder.typicode.com/todos/3')
}).then((data) => {
    console.log('after that we got', data)
}).catch((err) => {
    console.log(err)
})

// getTodos('https://jsonplaceholder.typicode.com/todos/3', (err)=>{
//         console.log(err)
//     })
    







// const do_something = () => {
//     return new Promise((resolve, reject) => {
//         // resolve('Data recieved')
//         reject('page not found')
//     })
// }

// do_something().then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })

