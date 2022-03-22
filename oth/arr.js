/* 
        Array is type of data use to store set of data such as number , string and object etc also we can store array inside array (nested array)

        declear array in js will be with []

        we can get one element in array using index 

        most common method of array is :

    to add element to aarray will use 

    1-push : will add element to end
    2-unshift : will add element to start 

    to remove element from array
    1-pop : will remove element from end
    2-shift : will remove element from start

    -length method  

    The filter() method creates a new array with array elements that passes a test.
*/







/* data for employee
name 
age 
gender
salary
*/

// const arr =["ali" , 25 , "male" , 400]



// arr.push("yes")
// console.log(arr)

// arr.unshift("no")
// console.log(arr)

// arr.pop()
// console.log(arr)

// arr.shift()

// console.log(arr)
// arr[1]=35;
// console.log(arr)
let txt;
const person = {
    fname:" John",
    lname:" Doe",
    age: 25
  };
  console.log(person)
  for (let x in person) {
    txt += person[x];
    console.log(txt)
  }
  















