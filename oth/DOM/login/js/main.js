const username = document.getElementById("inUsername");
const password = document.getElementById("inPassword");
const btnLogin = document.getElementById("submit");
const labelUsername = document.getElementById("labelUsername");
const labelPassword = document.getElementById("labelPassword");
const all = document.getElementById("all")

const usernamePattern = /^[a-z ]+$/
const passwordPattern = /[A-Z]{1,2}[a-zA-z0-9$!]{7,8}/



btnLogin.addEventListener("click",function(e){
    e.preventDefault()
    
    if(usernamePattern.test(username.value)){
        
        AllPage.connectJson()
    }else{
        UI.showError("- user name should have letter only" +"<br>"+  "- password should beging with capital letter and must be 8 character" , "danger")
    }

    if(passwordPattern.test(password.value)){

    }else{
        UI.showError("- user name should have letter only" +"<br>"+  "- password should beging with capital letter and must be 8 character" , "danger")
    }
})




