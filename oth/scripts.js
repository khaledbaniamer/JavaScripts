"use strict"
/* this code to remove dublicate in Array

        var removeDuplicates = function(nums){
            
            let result=[]
            for(let i=0 ;i<nums.length ;i++){
                if(!result.includes(nums[i])){
                   result.push(nums[i]);
                } 
            }

            return result
        };
        console.log(removeDuplicates([1,1,2]));
        

        function sockMerchant(n, ar) {
    // Write your code here
    let sorted = ar.sort( (a,b) => a - b);
    console.log(sorted)
    let pairs = 0;

    for (let i = 0; i < n - 1; i++) {
        if ( sorted[i] === sorted[i + 1]) {
            pairs++;
            i += 1;
        }
    }

    return pairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]));
    
*/  


/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

var twoSum = function(nums, target) {
    let res=[];
    for(let i = 0 ; i<nums.length-1 ; i++){
        if(nums[i]+nums[i+1]===target){
            
            res.push(i);
            res.push(i+1);
        }

    }
    return res;
};

console.log(twoSum([3,2,4],6));
console.log(twoSum([2,7,11,15],9))
*/

/* You are given two non-empty linked lists representing two non-negative integers.

//let l1 = [2,4,3], l2 = [5,6,4];
let  l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
console.log(l1.reverse().join(''));
console.log(l2.reverse().join(''));
let p = []
let result = Number(l1.reverse().join('')) + Number(l2.reverse().join(''));
let y = result.toString().split('')

for (ite of y ){
    p.push(Number(ite))
}
p=p.reverse()
console.log(p)

*/

/*
//Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

//let nums1 = [1,3], nums2 = [2];
let nums1 =[3,4], nums2 = [1,2] 

let all = nums1.concat(nums2)
console.log(all)
let len = all.length;
if(len%2===0){
    console.log(all.sort((a,b)=>a-b));
    console.log((all[(len/2)-1]+all[len/2])/2)
}else{
    console.log(all.sort((a,b)=>a-b));
    console.log(all[Math.ceil(len/2)-1])
}
*/

//let s = "ababccc";
//let s ="hq";
//let s = "aba"
//let s ="anm"


// let spp =s.split("");

// let  arr=[];

// if(spp.length<3){
//     if (spp[0]===spp[1]){
//         arr.push(arr[0])
//     }else{
//         arr.push(spp[0])
//         arr.push(spp[1])
//     }
// }
// else{
// for(let i= 0 ;i <=spp.length-1;i++){
//     if (!arr.includes(spp[i])){
//         arr.push(spp[i])
//     }
//     else{
        
//         arr.push(spp[i].concat(spp[i+1]))
//         i++;
//     }
    
// }  
    
// }

// console.log(arr)


    // async function loadData(){
    //     const response = await fetch('https://www.breakingbadapi.com/api/characters')
    //     const data = await response.json()
    
    //     for(let i = 0 ; i<data.length ; i ++ ){
    //         document.getElementById("dropList").innerHTML += `<option> ${data[i].name} </option>`;

    //     }

    
    //     document.getElementById("dropList").onchange = function(){
    //             for (let k = 0 ; k<data.length;k++){
    //                 if(data[k].name === document.getElementById("dropList").value){
    //                     document.getElementById("show").innerHTML =data[k].nickname;
    //                 }
    //             }
    //         //document.getElementById("show").innerHTML = document.getElementById("dropList").value;
        
    //     };

    // }
    
    // loadData()   






