// const qustion = document.querySelector("qust");
// const chooise = document.getElementsByClassName("cho")
// const nextqustion = document.getElementById("nextqustion")
// const card = document.getElementById("card")
// let numberOfQustion = -1;


// nextqustion.addEventListener("click",function(){
// if(numberOfQustion++<19){
// let x = new XMLHttpRequest()

// x.open('GET','qustions.json') 
// x.onload = function(){

//     let qustionArray = JSON.parse(x.responseText);
//     let content = "";
//         content =` 
//         <div class="qust">${qustionArray[numberOfQustion].question}</div>
//         <input type="radio" name="m" class="cho"> <label>${qustionArray[numberOfQustion].a}</label><label class="resl"></label>
//         <input type="radio" name="m" class="cho"> <label>${qustionArray[numberOfQustion].b}</label><label class="resl"></label>
//         <input type="radio" name="m" class="cho"> <label>${qustionArray[numberOfQustion].c}</label><label class="resl"></label>
//         <input type="radio" name="m" class="cho"> <label>${qustionArray[numberOfQustion].d}</label><label class="resl"></label`

//     card.innerHTML = content;
// const choiceSelected = document.getElementsByClassName("cho");
// for(let i = 0 ; i<choiceSelected.length ; i ++){
//     choiceSelected[i].addEventListener("change" , function(){
//         if(choiceSelected[i].checked){
//         localStorage.setItem(`${numberOfQustion}`,`${i}`)
//     }
//    }) 
// }
// }
// x.send()
// numberOfQustion ++ ;
// }else{
//     nextqustion.disabled = true
// }
// })


