// let x = '{"name":"khaled" , "age":"30" , "car":"null"}'

// console.log(eval(JSON.parse(x)))

// let x  = new XMLHttpRequest()
// x.open('GET','data.json')

// x.onload = function(){
//     console.log(x)
//     let data = JSON.parse(x.responseText)

//     document.write(data[0].name)
//     console.log(data)
// }
// x.send()


document.getElementById("show").addEventListener('click',function(event){
    
    
    let x  = new XMLHttpRequest()
    x.open('GET','data.json')
    
    console.log(x)
   
    
    x.onload = function(){
        
        let data = JSON.parse(x.responseText);
        console.log(data)
        //data(data);
        var allData =''
        for(let i = 0 ; i<data.length;i++){
            allData +='<tr>' +
            '<td>'+ i +'</td>'+
            '<td>'+data[i].name +'</td>' +
            '<td>'+ data[i].email+'</td>' +
            '<td>'+ data[i].phoneNumber +'</td>'+
            '<td>'+`<img src=${data[i].url} style = 'width: 100px;height: 100px'>` +'</td>'+
            '</tr>'
        }
        document.getElementById("bodytable").innerHTML += allData
        
        
        document.getElementById("show").disabled = true
    }
    x.send()
});













