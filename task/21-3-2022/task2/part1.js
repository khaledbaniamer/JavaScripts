let num1 = window.prompt('please enter first number')
let num2 = window.prompt("please enter second number");

if (num1>num2) {
    document.write(`<h1>the larger is ${num1} </h1>`)
}else if(num2>num1){
    document.write(`<h1>the larger is ${num2} </h1>`)
}
else{
    document.write(`<h1>the two number is same </h1>`)
}
