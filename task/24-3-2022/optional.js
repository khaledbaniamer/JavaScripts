console.log("task1")
function objectToArray(obj){
    let arr =[]
    let len = Object.keys(obj)
    for(let i =0 ; i<len.length ; i++){
        arr.push(len[i] , obj[len[i]])
    }
    return arr;
}
console.log(objectToArray({firstName:"Moh",age:24}))

console.log("***************")
console.log("task2")

function arrayToObject(arr){
    let obj ={}
    for(let i =0 ; i<arr.length;i+=2){
        obj[arr[i]]=arr[i+1]
    }
    return obj
}
console.log(arrayToObject(["firstName","Moh","age",24]))
console.log("***************")
console.log("task3")

function onlyNumber(obj){
    let a =Object.keys(obj) 
    
    
    for(let i=0 ;i< a.length;i++){
        if(typeof obj[a[i]]!="number"){
            delete obj[a[i]]
        }
    }
    return obj
}
console.log(onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"] , len:20}))

console.log("***************")
console.log("task4")

function onlyString(obj){
    let a =Object.keys(obj) 
    for(let i=0 ;i< a.length;i++){
        if(typeof obj[a[i]] !="string"){
            delete obj[a[i]]
        }
    }
    return obj
}

console.log(onlyString({firstName:"Moh",age:24,movies:[1,5,"string"] , len:20}))

console.log("***************")
console.log("task5")

function onlyArray(obj){
    let a =Object.keys(obj)
    
    for(let i=0 ;i< a.length;i++){
        if(!Array.isArray(obj[a[i]])){
            delete obj[a[i]]
        }
    }
    return obj
}

console.log(onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]}))

console.log("***************")
console.log("task6")

function keysArray(obj){
    let a =Object.keys(obj)
    return a
}
console.log(keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]}))

console.log("***************")
console.log("task7")

function valuesArray(obj){
    let a =Object.keys(obj)
    let arr = []

    for (let i = 0 ; i<a.length ; i++){
        arr.push(obj[a[i]])
    }
    return arr;
}

console.log(valuesArray({firstName:"Moh",age:24,movies:[1,5,"string"]}))

console.log("***************")
console.log("task8")

console.log("***************")
console.log("task9")

function objectLength(obj){

    return Object.keys(obj).length
}

console.log("***************")
console.log("task9")

console.log(objectLength({a:1,b:2,c:3,d:4}))

function evenValue(obj){
    let a = Object.keys(obj)

    for(let i =0 ; i<a.length ; i+=2){
        delete obj[a[i]]
    }
    return obj
}
console.log(evenValue({a:1, b:2, c:3, d:4}))
console.log("***************")
console.log("task10")

function longestKey(obj){
    let a = Object.keys(obj)
    let len = a[0]
    for(let i=0 ;i< a.length;i++){
        if(len.length<a[i].length){
            len = a[i]
        }
    }
    
}

console.log(longestKey({car:1, school:2, monster:3, alexMercer:4}))
if(x<0){

}else{

}

x<0 ? true :false;
