const inText  = document.getElementById("text");
const btnAdd = document.getElementById("btn")

// const time = document.getElementById("time")
// const action = document.querySelector("delete")
const task = document.getElementById("task")

/*

<P><span id="showTAsk">Task to do</span> <span id="time">Time</span> <span id="delete">&#x000D7;</span> </P>


*/
const date = new Date()
currentTime = date.getHours()+":"+date.getUTCMinutes()
console.log(currentTime)
btnAdd.addEventListener("click",function(){
    let par = document.createElement("span")
    let x = document.createElement("span")
    let y =document.createElement("span")
     y.innerHTML =  "This task added at : "+currentTime
    x.innerHTML = "&#x000D7;"
    par.innerHTML = inText.value
    task.appendChild(par);
    task.appendChild(y)
    task.appendChild(x);
    
    
    inText.value = ""

    x.addEventListener("click",function(){
        task.removeChild(par)
        task.removeChild(x)
        task.removeChild(y)
    })

})



