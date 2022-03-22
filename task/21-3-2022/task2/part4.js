let num1 = window.prompt("please enter first number");
let num2 = window.prompt("please enter Second number");
let num3 = window.prompt("please enter third number");
let num4 = window.prompt("please enter fourth number");
let num5 = window.prompt("please enter fifth number");


let largest = num1;

for(let i = 0 ; i<5;i++){
    if(num2>largest){
        largest=num2;
    }else if(num3>largest){
        largest=num3
    }else if(num4>largest){
        largest = num4
    }else if (num5>largest){
        largest=num5
    }
    
}

window.alert(`this is the largest number : ${largest}`)

