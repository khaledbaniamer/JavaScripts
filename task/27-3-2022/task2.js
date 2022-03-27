let subject = document.getElementById("subject")
let tech = document.getElementById("tech")
let user = document.getElementById("usertype")
let des = document.getElementById("description")

function showCard(){
    sessionStorage.setItem("subject",`${subject.value}`)
    sessionStorage.setItem("tech",`${tech.value}`)
    sessionStorage.setItem("user",`${user.value}`)
    sessionStorage.setItem("des",`${des.value}`)

    sessionStorage.setItem("display" , "block")
}


document.getElementById("cardname").innerHTML=sessionStorage.getItem("subject")
document.getElementById("cardselfDescription").innerHTML=sessionStorage.getItem("des")
document.getElementById('cardtech').innerHTML=sessionStorage.getItem("tech")
document.getElementById("cardusertype").innerHTML=sessionStorage.getItem("user")
document.getElementById("card").style.display=sessionStorage.getItem("display")