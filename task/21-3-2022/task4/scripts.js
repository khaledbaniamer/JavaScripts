console.log("Exercises 1")

function tellFortune (jTitle ,  gLocation,pName  , nChildren ){
    return `You will be a ${jTitle} in ${gLocation} , and married to ${pName} with ${nChildren}`
}
console.log(tellFortune('software engineer', 'Jordan', 'Alice', 3))

console.log("**********")
console.log("Exercises 2")

function calculateDogAge (n){
    return `Your doggie is ${n*7} years old in dog years!`
}

console.log(calculateDogAge(2))

console.log("**********")
console.log("Exercises 3")

function calculateSupply(age , amountPerDay){
    return `You will need ${(100-age)*amountPerDay*365} to last you until the ripe old age of 100`
}

console.log(calculateSupply(30, 3))

console.log("**********")
console.log("Exercises 4")
function greet (name){
    return `Hello ${name}`;
}
console.log(greet("Adam"))

console.log("**********")
console.log("Exercises 4")

/*
"Exercises 5"
5
what is the error:
function double(cat) {
  return 2 * x;           // x undefiened
}

function double(7) { //the argument can't be number
  return 2 * 7;   
}

function double('7') { the argument can't be string 
  return 2 * 'x';
}
*/

/*
"Exercises 5"
6
fix these functions:
func double1(x {
  return 2 * x ;
}

=> function double1(x) {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

=>function double2 (x){
    return 2 * x;
}

function (x) double3 {
  return 2 * x;

  => function  double3 (x) {
    return 2 * x;
  }

*/

console.log("**********")
console.log("Exercises 7")

function cube (number){
    return parameter * parameter * parameter
}
console.log("**********")
console.log("Exercises 8")

function multiply (num1 , num2 ){
    return num1*num2
}

console.log("**********")
console.log("Exercises 9")

function canIGetADrivingLicense (age){
    if(age<20){
       return `please come back after ${20-age} years to get one` 
    }else{
        return "yes you can";
    }
}
console.log(canIGetADrivingLicense(19))

console.log("**********")
console.log("Exercises 10")

function sameLength(str1 , str2){
    if(str1.length == str2.length){
        return true
    }else{
        return false
    }
}

console.log(sameLength("tree", "ss"))

console.log("**********")
console.log("Exercises 11")

function largerNubmer(num1, num2){
    if(num1>num2){
        return num1
    } else{
        return num2
    }
}

console.log(largerNubmer(7,6))

console.log("**********")
console.log("Exercises 12")

function smallerNubmer(num1 , num2 , num3){
    let first = num1;
    if(num2<first){
        first=num2
    }
    if(num3<first){
        first =num3
    }
    return first;
}

console.log(smallerNubmer(8,6,7))
console.log(smallerNubmer(5,99,34))
console.log(smallerNubmer(5,99,3))
console.log(smallerNubmer(5,-3,3))

console.log("**********")
console.log("Exercises 13")

function shorterString(str1 , str2 ,str3 ,str4, str5){
    let first = str1;
    if(str2.length<first.length){
        first  = str2;
    }if(str3.length<first.length){
        first= str3
    }if(str4.length<first.length){
        first=str4
    }if(str5.length<first.length){
        first = str5
    }

    return first
}

console.log(shorterString("air","school","car","by","github"))
console.log(shorterString("air","tr","car","by","github"))
console.log(shorterString("by","tr","car","air","github"))
console.log(shorterString("air","by","car","school","github"))

console.log("**********")
console.log("Exercises 14")

function longerString(str1 , str2 ,str3 ,str4){
    let first = str1;
    if(str2.length>first.length){
        first  = str2;
    }if(str3.length>first.length){
        first= str3
    }if(str4.length>first.length){
        first=str4
    }
    return first
}

console.log(longerString("air","github","school","car"))

console.log("**********")
console.log("Exercises 15")

function isEven(number){
    if(number%2 == 0){
        return true;
    }else{
        return false
    }

}

console.log(isEven(2))

console.log("**********")
console.log("Exercises 16")

function isOdd(number){
    if(number%2 != 0){
        return true;
    }else{
        return false
    }
}
console.log(isOdd(5))

console.log("**********")
console.log("Exercises 17")

function positive(number){
    if(number<0){
        return number*-1
    }else{
        return number
    }
}

console.log(positive(-3))

console.log("**********")
console.log("Exercises 18")

function fullName(fname,lname){
    return `${fname} ${lname}`
}

console.log("**********")
console.log("Exercises 19")

function average(n1,n2,n3,n4,n5){
    return (n1+n2+n3+n4+n5)/5
}
console.log(average(5,7,9,3,5))

console.log("**********")
console.log("Exercises 20")

function randomNumber(){
    return Math.random()
}

console.log(randomNumber())

console.log("**********")
console.log("Exercises 21")

function randomBetweenNumbers(n1 , n2){
    return Math.random()*(n2-n1)+n1
}

console.log(randomBetweenNumbers(6,8))

console.log("**********")
console.log("Exercises 22")

function scoreInUniversty(score){
    switch(true){
        case score>= 95 && score<=100:
            return 'A'
        case score>= 85 && score<=94:
            return 'B'
        case score>= 70 && score<=84:
            return 'C'
        case score>= 50 && score<=69:
            return 'D'
        case score>= 50 && score<=69:
            return 'F'        
    }
}

console.log(scoreInUniversty(71))

console.log("**********")
console.log("Exercises 23")
let x=0
function counter(){
    
    x++;
    console.log(x)
}

counter()
counter()
counter()
counter()

console.log("**********")
console.log("Exercises 24")

function resetCounter(){
    console.log(`${x} and the counter reset now`)
    x=0;
     
}

resetCounter()
counter()
counter()