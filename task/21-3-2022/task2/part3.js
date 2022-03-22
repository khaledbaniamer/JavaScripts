let num1 = window.prompt("please enter first number")
let num2 = window.prompt("please enter second number")
let num3=  window.prompt("please enter third number")


    if(num1>num2){
        if(num1>num3){
            if(num2>num3){
                console.log(num1,num2,num3)
                window.alert(`${num1} , ${num2}, ${num3}`)
            }else{
               console.log(num1,num3,num2)
               window.alert(`${num1} , ${num3}, ${num2}`)
            }
        }else{
           console.log(num3,num1,num2)
           window.alert(`${num3} , ${num1}, ${num2}`)
        }
    }else{
        if(num2>num3){
            if(num3>num1){
               console.log(num2,num3,num1)
               window.alert(`${num2} , ${num3}, ${num1}`)
            }else{
                console.log(num2,num1,num3)
                window.alert(`${num2} , ${num1}, ${num3}`)
            }
        }else{
            console.log(num3,num2,num1)
            window.alert(`${num3} , ${num2}, ${num1}`)
        }
    }
