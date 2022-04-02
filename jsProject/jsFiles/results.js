let congratulation = document.getElementById("congratulation--fail")
let scoreCard = document.getElementById("scoreCard")
let score = document.getElementById("score");
let status = document.getElementById("status")
let showAnalysis = document.getElementById("show-analysis")
let qustionsAnalysis = document.getElementById("qAnalysis")
let singleQustion = document.getElementById("qustionPart")
let choice = document.getElementsByClassName("btn")
let resultCount = 0;
let totalResult = 0;




let x = new XMLHttpRequest()
x.open('GET', 'qustions.json')

x.onload = function () {
    var result = JSON.parse(x.responseText)

    for (let i = 0; i < 20; i++) {
        if (localStorage.getItem(`${i}`) == result[i].correct) {
            resultCount++;
        }
    }
    console.log(resultCount)
    totalResult = (resultCount / 20) * 100;


    if (resultCount < 10) {

        scoreCard.innerHTML = `            
        <div id="congratulation--fail">Hard Luck!</div>
        <div id="score">Your score is: ${totalResult}% </div>
        <div id="fail">Fail</div>`

    } else {
        scoreCard.innerHTML = `            
        <div id="congratulation--fail">congratulation!</div>
        <div id="score">Your score is: ${totalResult}% </div>
        <div id="pass">Pass</div>`
    }

    let qustionData = ""

    for (let i = 0; i < result.length; i++) {

            qustionData += `        
        
            <div id="qustion">Q ${i + 1}:${result[i].question}</div>
            <div id="choices">
                <div class="choice">
                    <input type="button" disabled name="group1" class="btn" value="${result[i].a}">
                </div>
                <div class="choice">
                    <input type="button" disabled name="group1" class="btn" value="${result[i].b}">
                </div>
                <div class="choice">
                    <input type="button" disabled name="group1" class="btn" value="${result[i].c}">
                </div>
                <div class="choice">
                    <input type="button" disabled name="group1" class="btn" value="${result[i].d}">
                </div>
            </div>
          
        `
        qustionsAnalysis.innerHTML = qustionData;
    }
        let c = 0 ;
        for(let i = 0 ; i<20; i++){

            // c++;
            // if(c%4==0){
                    for(let j =0 ; j<4 ; j++){
                    // console.log(localStorage.getItem(`${i}`))
                    if(localStorage.getItem(`${i}`)==j){
                        console.log(choice[j].value)

                    }
                }
            // }
            if(localStorage.getItem(`${i}`) == result[i].correct){

                

            }
        }
  
        



    


       
    showAnalysis.addEventListener("click", function () {
        qustionsAnalysis.style.opacity = 1;
    })

}

x.send()







