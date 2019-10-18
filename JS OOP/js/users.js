class User {
    constructor(name, age, gender){
        this.name = name
        this.age = age
        this.gender = gender
    }
    login(){
        console.log(`${this.name} logged in`)
        return this
    }
    logout(){
        console.log(`${this.name} logged out`)
       
    }
}

const userOne = new User('Bruce', 23, 'Male')
console.log(userOne)
userOne.login().logout()
// userOne.logout()

const userTwo = new User('Clark', 34, 'Male')
console.log(userTwo)
userTwo.login().logout()











// const data = new Array(2,3,4,5)
// console.log(data)

// const s = 'hello'
// const s = new String('hello')
// console.log(s)

/* new

1. It creates an empty object {}.
2. Bind this keyword to scope of object
3. It load the constructor value in objects.
*/


// const userOne = {
//     name: 'Bruce',
//     age: 23,
//     gender: 'Male',
//     login(){
//         console.log(`${this.name} just logged in!`)
//     },
//     logout(){
//         console.log(`${this.name} just logged out!`)
//     }
// }

// console.log(userOne.name)
// userOne.login()