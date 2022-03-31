const wapper = document.getElementById("wrapper");
const form = document.querySelector(".form");
const guess = document.getElementById("guessField");
const submit = document.getElementById("subt");
const previousResult = document.getElementById("guesses");
const remaning = document.querySelector(".lastResult");
const final = document.querySelector(".lowOrHi");
const warning = document.querySelector(".lowOrHi")
const rest = document.querySelector(".resultParas")
let score = 10;
randomNumer = parseInt(Math.random() * (100 - 0) + 0)
submit.addEventListener("click",function(e){
    e.preventDefault();
    warning.innerHTML =""
    console.log(randomNumer)
    if(guess.value<100&&guess.value>0){
    if(guess.value == randomNumer){
        final.innerHTML = `correct ! The number  is ${randomNumer}`
        let btn = document.createElement("button")
        btn.innerHTML = "Rest"
        rest.appendChild(btn);
        rest.addEventListener("click",function(){
        final.innerHTML = ""
        
        })
        submit.disabled=true;
        guess.disabled=true;
    }else if(guess.value !== randomNumer){
        if(score>1){
            score--;
            remaning.innerHTML = score;
        }else{
            final.innerHTML = `You lost ! try again ...`;
            let btn = document.createElement("button")
            btn.innerHTML = "Rest"
            rest.appendChild(btn);
            rest.addEventListener("click",function(){
            final.innerHTML = ""
            remaning.innerHTML='0';
            
            
        })
        submit.disabled=true;
        guess.disabled=true
        }
    }
}else{
    warning.innerHTML = "Number should be between 1 and 100 ! "
    
}
    guess.value="";
    
    guess.focus()


})
