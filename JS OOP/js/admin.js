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

class Admin extends User{
    constructor(name, age, gender, title){
        super(name, age, gender)
        this.title = title
    }
    removeUser(user){
        const filteredUser = users.filter(u => {
            if(u.name == user.name){
                return false
            } else{
                return true
            }
        })
        return filteredUser
    }
}

const userOne = new User('Matt', 23, 'Male')
const userTwo = new User('Paige', 24, 'Female')

users = [userOne, userTwo]

const userAdminOne = new Admin('Bruce', 32, 'Male', 'Developer')
console.log(userAdminOne)
const remainingUser = userAdminOne.removeUser(userTwo)
console.log(remainingUser)
