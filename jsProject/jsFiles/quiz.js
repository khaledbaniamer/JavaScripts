console.log("hjdhfkj")

const card = document.getElementById("card");
const qustion = document.querySelector(".qust");
const choices = document.getElementById("choices");
const btn = document.getElementsByClassName("btn");
const next = document.getElementById("next");
const section = document.getElementById("sectionTest")
let numberOfQustion =0 ; 
let count = 1;



card.innerHTML = `<div id="sectionTest">IQ Test</div>`

next.addEventListener("click" , function(){
let x = new XMLHttpRequest()
x.open('GET','qustions.json')


x.onload = function(){
let y = JSON.parse(x.responseText)

    let content = `            
    <div class="qust">Q ${count}: ${y[numberOfQustion].question}</div>
    <div id="choices">
   <input type="button" class="btn" value="${y[numberOfQustion].a}" name="b" >
    
    <input type="button" class="btn" value="${y[numberOfQustion].b}" name="b" >
    <input type="button" class="btn" value="${y[numberOfQustion].c}" name="b" >
    <input type="button" class="btn" value="${y[numberOfQustion].d}" name="b" >
</div>`
card.innerHTML = content
if(count==6){
       
        if(numberOfQustion==5){
            card.innerHTML = `<div id="sectionTest">English Test</div>` 
            count = 0;
            numberOfQustion =4
        }
        if(numberOfQustion==10){
            card.innerHTML = `<div id="sectionTest">Technical Test</div>` 
            count = 0;
            numberOfQustion =9
        }
}

for(let i = 0 ; i<btn.length ; i++ ){
    btn[i].addEventListener("click" , function(){
        
        localStorage.setItem(`${numberOfQustion}` , `${i}`)
    })
   
}
count++ ;
numberOfQustion++;
}
if(numberOfQustion==20){
    card.innerHTML=`<p id="viewResult"><a href = "http://127.0.0.1:5500/jsProject/results.html" id="sectionTest">View Results</a></p>`
 
}
x.send()
})


