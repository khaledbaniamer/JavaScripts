const fullName = document.getElementById("registerName");
const email = document.getElementById("registerEmail");
const phone = document.getElementById("phone");
const pass = document.getElementById("registerPass");
const passConfirm = document.getElementById("registerConfirmPass");
const registerLoginSubmit = document.getElementById("registerLoginSubmit");

const logName = document.getElementById("logemail");
const logpass = document.getElementById("logpass");

const phonePattern = /[07]{2,3}[7-9]{1,2}[0-9]{7,8}/;
const passPattern =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
const namePattern =  /^[a-z]+$/gi;

registerLoginSubmit.addEventListener("click" , function(){
    if(logName.value != "" && logpass !=""){

    }

    if(fullName.value!="" && email.value != ""&& phone.value!=""&&pass.value!="" && passConfirm!=""){
        if(fullName.matches(namePattern)){
            localStorage.setItem(``)
        }
    }

})

