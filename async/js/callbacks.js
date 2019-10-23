const informations = (response, callback) => {
    const data = new XMLHttpRequest()

    data.addEventListener('readystatechange', () => {
        if (data.readyState === 4 && data.status === 200){
            // console.log(data.responseText).
            const data_object = JSON.parse(data.responseText)
            // const back_to_json = JSON.stringify(data_object)
            // console.log(typeof back_to_json)
            callback(data_object)
        } else if (data.readyState === 4){
            callback()
        }
    })

    data.open('GET', response)
    data.send()
}
informations('test1.json', (data) => {
    console.log('people send this info: ', data.People[0].name)
})
informations('test2.json', data => {
    data.Players.forEach(player =>{
        console.log(player.name, player.score)
    })
})
