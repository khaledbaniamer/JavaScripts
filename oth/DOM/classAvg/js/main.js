const username = document.getElementById("inUsername");
const password = document.getElementById("inPassword");
const btnLogin = document.getElementById("submit");
const labelUsername = document.getElementById("labelUsername");
const labelPassword = document.getElementById("labelPassword");
const all = document.getElementById("all")

const usernamePattern = /^[a-z ]+$/
const passwordPattern = /[A-Z]{1,2}[a-zA-z0-9$!]{7,8}/
let  studentData;

class Student{
    constructor(id , name , math , phy , chim){
        this.id = id;
        this.name = name;
        this.math = math;
        this.pyh = phy;
        this.chim = chim;
    }
}
class showData {
    static displayData(student){
        let welcome = document.createElement("h2")
        
        welcome.innerHTML = `<br> Welcome ${student.name} <br> <br>`

        let table = document.createElement("table")
        table.className = "table"
        table.innerHTML = `
        <tr>
            <th>Student ID</th>
            <th>Math</th>
            <th>Physics</th>
            <th>Chemical</th>
        </tr>

        <tr>
            <td>${student.id}</td>
            <td>${student.math}</td>
            <td>${student.physics}</td>
            <td>${student.chemical}</td>
            
        </tr>
        `
        all.innerHTML = ""
        all.appendChild(welcome)
        all.appendChild(table)
    }
    static calculatAvg (math , phy , ch){
        let avg = (parseInt(math)+parseInt(phy)+parseInt(ch))/3
        console.log(math , phy , ch)
        let label = document.createElement("label")
        label.className = "form-label"

        label.innerHTML = `<br> Your Avarage is : ${avg}`
        all.appendChild(label)
    }

    static clear(){
        username.value = ""
        password.value = ""
    }
    static error(message , className){
        labelPassword.className = `mt-2 alert alert-${className}`
        labelPassword.innerHTML = message
    }
}



btnLogin.addEventListener("click" , function(e){
    e.preventDefault()
    const x = new XMLHttpRequest()
    x.open("GET" , "mark.json")

    x.onload = function(){
    studentData = JSON.parse(x.responseText)
    console.log(studentData)
    
    for(let i of studentData){
        if(username.value == i.name && password.value == i.pin){
            console.log("username exist")
            showData.clear()
            showData.displayData(i)
            showData.calculatAvg(i.math , i.physics , i.chemical)
        }else{
            showData.error("user name or password wrong !" , "danger")
        }
    }


    }
x.send()
})








