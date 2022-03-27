let namevalue = document.getElementById("name")
let age = document.getElementById("age")
let majorun = document.getElementById("major")
let description = document.getElementById("description")
let date = document.getElementById("date")
let brothers = document.getElementById("brothers")
let lang = document.getElementsByClassName("lang")
let x ="";





function showCard(){
    //let name = document.getElementById("name")
    // let age = document.getElementById("age")
    // let majorun = document.getElementById("major")
    // let description = document.getElementById("description")
    // let date = document.getElementById("date")
    // let brothers = document.getElementById("brothers")

    localStorage.setItem("name",`${namevalue.value}`)
    localStorage.setItem("age" ,`${age.value}`)
    localStorage.setItem("majorun" ,`${majorun.value}`)
    localStorage.setItem("description" ,`${description.value}`)
    localStorage.setItem("date" ,`${date.value}`)
    localStorage.setItem("brothers" ,`${brothers.value}`)
    localStorage.setItem("pic" , "pic222.png")
    localStorage.setItem("display","block")

    if(document.getElementsByClassName("gender")[0].value ==1){
        localStorage.setItem("gender","Male")
    }else{
        localStorage.setItem("gender","Female")
    }
    
    for(let i = 0 ; i<lang.length ; i++){
        if(lang[i].checked){
            x+=" "+lang[i].value
        }
    }
    localStorage.setItem("languge" , `${x}`)
    
    
}
document.getElementById("card").style.display=localStorage.getItem("display")
document.getElementById("cardname").innerHTML=localStorage.getItem("name")
document.getElementById("cardage").innerHTML=localStorage.getItem("age")
document.getElementById("cardselfDescription").innerHTML=localStorage.getItem("description")
document.getElementById("cardmajorUn").innerHTML=localStorage.getItem("majorun")
document.getElementById("cardbd").innerHTML=localStorage.getItem("date")
document.getElementById("cardpl").innerHTML=localStorage.getItem("languge")
document.getElementById("cardbrothers").innerHTML=localStorage.getItem("brothers")
document.getElementById("pic").src = localStorage.getItem("pic")
document.getElementById("cardgender").innerHTML = localStorage.getItem("gender")

localStorage.clear()


