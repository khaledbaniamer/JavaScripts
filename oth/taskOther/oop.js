console.log('test')

function User(fname , lname , age){
    this.firstName = fname
    this.lastName = lname
    this.age = age
}

const user1 = new User("khlaed" , "bani amer", 28)
// console.log(user1)

console.log(User.prototype)

User.prototype.gender = "male"
