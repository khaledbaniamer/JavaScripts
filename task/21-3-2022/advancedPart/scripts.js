console.log("hi")
console.log("****************")
console.log("task1")

function fibon(x){
    let num =0 ;
    let n1 =0 ;
    let n2 = 1;
    if(x==0){
        return 1
    } else{
    for(let i =0 ; i<x ; ++i){
        num = n1+n2
        n1=n2
        n2=num
        
    }
    return num
}
}
console.log(fibon(7))
console.log(fibon(2))
console.log(fibon(1))
console.log(fibon(0))

console.log("****************")
console.log("task2")

function mirror(str){
    let str1=""
    for(let i = str.length-1 ; i>=0 ; i--){
        str1+=str[i]
        
    }
    return str1
}

console.log(mirror("school"))
console.log(mirror("car"))
console.log("****************")
console.log("task3")

function mirrorCaseAlso(str){
    let str1=""
    let str2=""
    for(let i = str.length-1 ; i>=0 ; i--){
        if(str[i]==str[i].toLowerCase()){
            //console.log("this is lower case : ",str[i])
            str1 += str[i].toUpperCase()
            
        }else if(str[i]==str[i].toUpperCase()){
            //console.log("this is upper case : " ,str[i])
            str1 += str[i].toLowerCase()
        }
        
        
    }
    return str1
}

console.log(mirrorCaseAlso("sChOol"))

console.log("****************")
console.log("task4")

function repeatChar2(str , char){
    let c = 0 ;
    for(let i = 0 ; i<str.length ; i ++ ){
        if(str[i]==char){
            c++
        }
    }
    return c ;
}
console.log(repeatChar2("schOol","o"))

console.log("****************")
console.log("task5")

function HiSayHelloTo(n){
    let x = "";
    if(n==1){
        console.log(`hi 1 ${n}`)
    }else{
        
        for(let i = 1 ; i<=n ; i++){
            if(i == 1){
                console.log(`hi ${i}`)
            }else{
                console.log(`hi ${i} Now Pleas Say Hello To ${i-1}`)
            }
        }
    }
}

console.log(HiSayHelloTo(3))