console.log('Here is : While')
/*
console.log("Exercises 1")

function subtract(n){
    let i = n ;
    let sub = 0
    while (n!=0) {
        sub -= n-1
        n--;
    }
    return i+sub;
}
console.log(subtract(5))
console.log(subtract(2))
console.log(subtract(6))
console.log(subtract(4))
console.log(subtract(9))

console.log("*************")

console.log("Exercises 2")

function factorial(n){
    let i = n ;
    let fact=1;
    while(i>0){
        fact *=i;
        i--;
        
    }
    return fact
}
console.log(factorial(5))
console.log(factorial(4))

console.log("*************")

console.log("Exercises 3")

function repeatStr(str , n ){
    let i=0;
    let repeat="";
    while (i<n) {
        if(i==n-1){
            repeat+=str;
            break;
        }else if(str.length!=0){
            repeat+=str+" "
        }else{
            repeat = "this is an empty string "
        }
      i++  
    }
    return repeat;
}

console.log(repeatStr("to",4))
console.log(repeatStr("",4))

console.log("*************")

console.log("Exercises 4")

function sum2(a , b ){
    return a+b
}
console.log(sum2(4,5))

console.log("*************")

console.log("Exercises 5")

function repeatStr2(str1 , str2){
    let i = 0 ;
    let repeat = "";
    
    while (i<str2) {
        repeat += str1
        i++
    }
    return repeat;
}
console.log(repeatStr2(("ro","cc")))

console.log("*************")

console.log("Exercises 6")

function multiOf(m , n , t){
    return m*(Math.pow(n,t))
}

console.log(multiOf(4,10,3))
console.log(multiOf(6,2,3))
console.log(multiOf(6,3,2))

console.log("*************")

console.log("Exercises 7")

function muti2(m,n){
    let muitable =1;
    if(m<n){
        while(m<=n){
            muitable *=m
            m++
        }
    }else{
        while(n<=m){
            muitable *=n
            n++
        }
    }
    return muitable;
}
console.log(muti2(4,2))

*/
console.log("*************")

console.log("Exercises 8")

function numberBetweenUs(m, n) {
    let i = 1;
    let count = "";
    if (m !== n - 1) {
        if (m < n) {
            while (i < n - m) {
                count = count + `${m + i}`
                i++
            }
        }
        else {
            while (i < m - n) {

                count = count + `${m - i}`
                i++
            }
        }
    }
    
    return count.split("").join(",");
}
console.log(numberBetweenUs(2,8));
console.log(numberBetweenUs(3,5));
console.log(numberBetweenUs(9,5));

console.log("*************")

console.log("Exercises 9")

function countDown(n){
    let str = n+" " 
    console.log(str)
    if(n-1>0){
        countDown(n-1)
    }
    
    
}
countDown(5)
console.log("*************")

console.log("Exercises 10")
function multiplication2(num1 , num2){
    let i =0;
    let multi = 0
    while(i!=num2){
        multi +=num1

        num2>0?i++:i--;
        
    }
    return multi
}
console.log(multiplication2(5,4))
console.log(multiplication2(2,8))

console.log("*************")

console.log("Exercises 11")

function mod2(m ,n){
    return (m/n-parseInt(m/n))*n
}
console.log(mod2(25,4))
console.log(mod2(2,8))
console.log("*************")

console.log("Exercises 12")
function repeatChar(str,ch){
    let i =0 ;
    let count =0;
    let x = str.split("");
    while (i<x.length) {
        if(str[i]==ch || str[i]==ch.toUpperCase())
        count++
        i++
    }
    return count
}

console.log(repeatChar("sOochOol","o"))
console.log(repeatChar("SchooLl","l") )

