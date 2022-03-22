console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 => [1,7,9,45]

 ["Str" "alex","moh"

=> ["Str" "alex","moh"]

 'the','fox' 'over' lazy, 'dog',  ]
=> ['the','fox' 'over' lazy, 'dog']
*/


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

Banana : 1
Tomato : 0

*/


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)

const food =["mansf","mskhan" , "shawrma","mansf" , "mansf"]
const sport = ["football" , "pin pong" , "chees"]
const movie = ["The Invisible Guest" , "coach carter" , "Hidden Figures"]
*/
const food =["mansf","mskhan" , "shawrma","mansf" , "mansf"]
const sport = ["football" , "pin pong" , "chees"]
const movie = ["The Invisible Guest" , "coach carter" , "Hidden Figures"]

console.log("Favorite Foods are " , food);
console.log("Favorite sports are " ,sport);
console.log("Favorite movies are " ,movie);
/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
function firstOfArray(parameter){
    return parameter[0];
}
console.log(firstOfArray([1,4,5]))
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastOfArray(parameter){
    return parameter[parameter.length-1];
}
console.log(lastOfArray([1,4,5]))

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9]

array.shift()
array.shift()
array.shift()
array.unshift(1,3,4,6,8)
array.push(10)
console.log(array)

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [5,9,-7,3.5]
array2.push(10) // will add 10 to end of array
console.log(array2)

array2.unshift(20) // will add 20 to start of array
console.log(array2)

array2.pop() // will remove last element in array 
console.log(array2)

array2.shift() // will remove first element in array 
console.log(array2)

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(arr){
    let len = arr.length-1
    if(arr.length==0){
        return `This empty Array`;
    }
    else if(len % 2==0){
        return arr[len/2];
    }else{
        return ` ${arr[Math.floor(len/2)]} and  ${arr[Math.ceil(len/2)]} `;
    }
}
console.log(middleOfArray([1,4,5]) )
console.log(middleOfArray(["t","u","g","x"]))

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird'];
animals[animals.length]='zebra';
animals[animals.length] = 'elephant';
console.log(animals)

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/

function indexOfArray(nums , index){
    return nums[index]
}
console.log(indexOfArray([1,2,3,8,9],4))
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/

function arrayExceptLast(arr){
    arr.pop()
    return arr;
}
console.log(arrayExceptLast([1,2,3,8,9]))
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function addToEnd(arr , n){
    arr.push(n);
    return arr;
}
console.log(addToEnd([1,2,3,8,9],55))
// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

//for loop
function sumArrayFor(arr){
    let summation=0;
    for(let i =0 ; i<arr.length ; i++){
        summation += arr[i];
    }
    return summation;
}
console.log(sumArrayFor([1,2,3,8,9,1]));

//while loop
function sumArrayWhile(arr){
    let summation=0;
    let i=0 ;
    while(i<arr.length){
        summation += arr[i];
        i++
    }
    return summation;
}
console.log(sumArrayWhile([1,2,3,8,9,2]));

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function minInArrayFor(arr){
    let test = arr[0] ;
    
    for(let i = 0 ; i< arr.length ; i ++){
        
            if(arr[i]<test){
                test = arr[i]
            }
    }
    return test;
}
console.log(minInArrayFor([1,2,3,8,9]))
console.log(minInArrayFor([5,9,-7,3.5]))

function minInArrayWhile(arr){
    let test = arr[0] ;
    let i =0 ;

    while(i<arr.length){
        if(arr[i]<test){
            test = arr[i]
        }
        
    i++;
    
    }
    return test;
}
console.log(minInArrayWhile([1,2,3,8,9]))
console.log(minInArrayWhile([5,9,-7,3.5]))



/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArrayFor(arr , n){
    let x =[] ;
    
    for(let i =0 ; i<arr.length;i++){
        if (arr[i]!=n){
            x.push(arr[i])
        }
    }
    return x;
}
console.log(removeFromArrayFor([1,2,3,8,9],8))
console.log(removeFromArrayFor([5,9,-7,3.5],-7))

function removeFromArrayWhile(arr , n){
    let x =[] ;
    let i = 0 ; 
    while(i<arr.length){
        if (arr[i]!=n){
            x.push(arr[i])
        }
        i++;
    }

    return x;
}
console.log(removeFromArrayWhile([1,2,3,8,9],8))
console.log(removeFromArrayWhile([5,9,-7,3.5],9))
/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArrayFor(arr){
    let x = []
    for(let i=0; i<arr.length; i++){
    if(arr[i]%2!=0){
        x.push(arr[i])
    }
    } 
    return x;  
}
console.log(oddArrayFor([1,2,3,8,9]))

function oddArrayFor(arr){
    let x = []
    let i =0 ;
    while(i<arr.length){
        if(arr[i]%2!=0){
            x.push(arr[i])
        }
        i++;
    }

    return x;  
}
console.log(oddArrayFor([1,2,3,8,9]))
/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function aveArrayFor(arr){
    let avg = 0;
    for(let i=0;i<arr.length;i++){
        avg += arr[i]
    }
    return avg/arr.length
}
console.log(aveArrayFor([1,2,3,8,9,77]))

function aveArrayWhile(arr){
    let avg = 0;
    let i =0;
    while(i<arr.length){
        avg += arr[i]
        i++;
    }
    return avg/arr.length
}
console.log(aveArrayFor([1,2,3,8,9,77]))
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function shorterInArrayFor(arr){
    let shortName =arr[0] ;

    for(let i=0;i<arr.length;i++){
        if(arr[i].length<shortName.length){
            shortName=arr[i]
        }
    }
    return shortName;
}
console.log(shorterInArrayFor(["alex","mercer","madrasa","ali","rashed2","emad","hala"]));

function shorterInArrayWhile(arr){
    let shortName =arr[0] ;
    let i =0;

    while(i<arr.length){
        if(arr[i].length<shortName.length){
            shortName=arr[i]
        }
        i++;
    }

    return shortName;
}
console.log(shorterInArrayWhile(["alex","mercer","madrasa","ali","rashed2","emad","hala"]));
/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function repeatCharFor(str , char){
    let count =0 ;
    for(let i=0; i<str.length;i++){
        if(str[i]==char){
            count++;
        }
    }
    return count++;
}
var string= "alex mercer madrasa rashed2 emad hala"
console.log(repeatCharFor(string,"m"))

function repeatCharWhile(str , char){
    let count =0 ;
    let i =0;
    while (i<str.length) {
        if(str[i]==char){
            count++;
        }
        i++;
    }

    
    return count++;
}
var string= "alex mercer madrasa rashed2 emad hala"
console.log(repeatCharFor(string,"m"))

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function evenIndexOddLengthFor(arr){
    let stringArray=[];

    for(let i =0 ; i<arr.length;i+=2){
        if(arr[i].length %2 !=0){
            stringArray.push(arr[i]);
        }
    }
    return stringArray;
}
console.log(evenIndexOddLengthFor(["alex","mercer","madrasa","rashed2","emad","hala"]))
console.log(evenIndexOddLengthFor(["alex","mercer","madrasa","rashed2","emad","hala","rashed2"]))

function evenIndexOddLengthWhile(arr){
    let stringArray=[];
    let i = 0 ;

    while (i<arr.length) {
        if(arr[i].length %2 !=0){
            stringArray.push(arr[i]);
        }
        i+=2;
    }

    return stringArray;
}
console.log(evenIndexOddLengthWhile(["alex","mercer","madrasa","rashed2","emad","hala"]))
console.log(evenIndexOddLengthWhile(["alex","mercer","madrasa","rashed2","emad","hala","rashed2"]))
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function powerElementIndexFor(arr){
   let powNumber=[]
   for(let i=0;i<arr.length;i++){
       powNumber.push(arr[i]**i)
   } 
   return powNumber;
}

console.log(powerElementIndexFor([44, 5, 4, 3, 2, 10]))

function powerElementIndexWhile(arr){
    let powNumber=[];
    let i=0;
    while(i<arr.length){
        powNumber.push(arr[i]**i)
        i++
    }

    return powNumber;
 }
 
 console.log(powerElementIndexWhile([44, 5, 4, 3, 2, 10]))

/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenNumberEvenIndexFor(arr){
    let evenNumberIndex=[];
    for(let i=0 ; i<arr.length ;i+=2){
        if(arr[i] %2 == 0){
            evenNumberIndex.push(arr[i]);
        }
    }
    return evenNumberIndex;
}

console.log(evenNumberEvenIndexWhile([5,2,2,1,8,66,55,77,34,9,55,1]))

function evenNumberEvenIndexWhile(arr){
    let evenNumberIndex=[];
    let i=0;
    while(i<arr.length){
        if(arr[i] %2 == 0){
            evenNumberIndex.push(arr[i]);
        }

        i+=2;
    }

    return evenNumberIndex;
}

console.log(evenNumberEvenIndexWhile([5,2,2,1,8,66,55,77,34,9,55,1]))