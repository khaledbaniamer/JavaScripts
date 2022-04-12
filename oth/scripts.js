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
    



/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.*/
/*
var twoSum = function(nums, target) {
    let res=[];
    for(let i = 0 ; i<nums.length-1 ; i++){
        if(nums[i]+nums[i+1]===target){
            
            res.push(i);
            res.push(i+1);
        }

    }
    for( const [index , num] of nums.entries()){
        
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
//     function minMax(arr) {
//         let a = []
//         arr = arr.sort(function(a,b){
//             return a-b ;
//         })
//         a.push(arr[0]);
//         a.push(arr[arr.length-1])
//        return a
//     }

// console.log(minMax([1, 2, 3, 4, 5]))
// console.log(minMax([2334454, 5]))
// console.log(minMax([1]))

    //sortIt([4, 10, 3])


//     function compareTriplets(a, b) {
//         // Write your code here
//         let x = 0 ;
//         let y = 0 ; 
//         for (let count =0 ; count < a.length ; count++){
//           if(a[count]>b[count]){
//             x++;
//           }else if(a[count]==b[count]){
//             x = x ; 
//             y = y ; 
//           }else{
//             y++;
//           }
//         } 
//         return x +" "+ y 
    
//     }

//     let a = [1, 2, 3]
//    let  b = [3, 2, 1]

//    console.log(compareTriplets(a,b))

//  for(let i = 0 ; a[i]!=undefined ; i++){
//      console.log(a[i])
//  }

// const reverse = function(x){
//     let revNum = 0, lastDigit = 0;
//     while (x!==0) {
//         lastDigit = x % 10; 
//         x = parseInt(x/10); 
//         revNum = revNum * 10 + lastDigit;
//         if (revNum < Math.pow(-2, 31) || revNum > Math.pow(2, 31) - 1) return 0
//     }
//     return revNum
// }
// console.log(reverse(-120));
// let nums1 = [1,2,3]
// let  nums2 = [2,4,6]

// const randomInt = (min , max)=>Math.floor(Math.random()*(max-min+1)+min)


// console.log(`rbg(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`)

// var romanToInt = function(s) {
//     let sum = 0
//     let numbers = {
//         "I": 1,"V": 5,"X": 10,"L": 50,
//         "C": 100,"D": 500,"M": 1000
//     }   
//     for (let i = 0; i < s.length; i++){
//         if(numbers[s[i+1]]>numbers[s[i]]&&i<s.length){
//             sum = sum + (numbers[s[i+1]]-numbers[s[i]]);
//             i++
            
//         }else{
//             sum+=numbers[s[i]]
            
//         }
        
//     }
// return sum;
// };
// // let s = "MCMXCIV";
// // let s = "III";

// let s = "MDCXCV"
// s = "MCMXCIV";
// s = "III";
// s="D"
// console.log(romanToInt(s))

// console.log(s.at(6))

// function sortArray(array) {
//     var temp = 0;
//     for (var i = 0; i < array.length; i++) {
//       for (var j = i; j < array.length; j++) {
//         if (array[j] < array[i]) {
//           temp = array[j];
//           array[j] = array[i];
//           array[i] = temp;
//           //console.log(array[i])
//         }
//       }
//     }
//     return array;
//   }

//   console.log(sortArray([1, 2, 4, 1, 3, 4]));
//   let list1 = [1,2,4], list2 = [1,3,4]
//   for(let i = 0 ; i<list2.length ; i++){
//     list1.push(list2[i])
//     }
//     console.log(list1)

// var addTwoNumbers = function(l1, l2) {
//     let arr =[]
//     let p = 0
//     if(l1[0]==0 && l2[0]==0){
//         arr.push(0)
//     }else{
//     for(let i = 0 ; i<l1.length ; i++){
//         let sum = l1[i]+l2[i]+p
//         if(sum<10 &&sum!=NaN){
//             arr.push(sum)
//         }else if(sum==NaN){
//             sum+=l1[i]+p
//         }
//         else {
//             sum = sum%10 ;
//             arr.push(sum)
//              p = 1;          
//         }
//     }
//     }
//     return arr
// };

// let l1 = [2,4,3], l2 = [5,6,4]
// l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// console.log(addTwoNumbers(l1,l2))


// var mySqrt = function(x) {
//     let numsTest = 0 ; 
//     let y = x

//     while(numsTest<=y){

//         let z = Math.floor((y-numsTest)/2)
//         if(x==z*z)return z;
//         if(x>z*z) numsTest=z+1;
//         if(x<z*z) y=z-1
//     }
//     return numsTest-1
// };

// console.log(mySqrt(12))


// var merge = function(nums1, m, nums2, n) {
//     let totalArray = []
//     nums1.splice(m)
//     for(let i =0 ; i<n; i++){
//         nums1.push(nums2[i])
//     }
   
//    var temp = 0;
//    for (var i = 0; i < nums1.length; i++) {
//      for (var j = i; j < nums1.length; j++) {
//        if (nums1[j] < nums1[i]) {
//          temp = nums1[j];
//          nums1[j] = nums1[i];
//          nums1[i] = temp;
//        }
//      }
//    }
//   return nums1
// };

// let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

// console.log(nums1.slice(0,m))
// nums1.splice(m)
// console.log(nums1)
// console.log(merge(nums1 , m , nums2 , n))

// var maxSubArray = function(nums) {
//     let sum = 0
//     for(let i = 0 ; i<nums.length ; i++){
//         sum+=nums[i]
//     }
//     return sum
// };
// // console.log(maxSubArray(nums))
// let nums = [-2,1,-3,4,-1,2,1,-5,4]
// nums.includes

// let preSum = nums[0]
// let sum = 0 ;
// for(let i = 0 ; i<nums.length ; i++){
//     if(sum<0){
//         sum=0
//     }
//     sum+=nums[i]
//     preSum = Math.max(preSum , sum)
// }
// console.log(preSum)

// var mySqrt = function(x) {
//     let l = 0 ; 
//     let h = x;
//     let sqroot;
//     while (l<=h){
//         sqroot = parseInt((l+h)/2)
        
//         if(x==sqroot*sqroot) return sqroot;
//         if(x>sqroot*sqroot) l = sqroot+1;
//         if(x<sqroot*sqroot) h = sqroot-1;
//     }

    
//     return l-1;
// };

// console.log(mySqrt(1))

// var climbStairs = function(n) {
//     let start = 1 ; 
//     let end = 1 ; 
//     for(let i = 1 ; i<n ; i++){
//         start+=end
//         end = start - end
//     }
//     return start
// };

// console.log(climbStairs(5))
// 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 
// var tribonacci = function(n) {
//     let n1 = 0;
//     let n2 = 1;
//     let n3 = 1; 
//     let totalNumber = 0 ;
//     for(let i = 2 ; i < n ; i++){
//         totalNumber = n1 + n2 + n3
//         n1 = n2 
//         n2=n3 
//         n3= totalNumber;
//     }
//     if(n==1) totalNumber = 1
//     return totalNumber;
// };

// console.log(tribonacci(4))
// console.log(tribonacci(5))
// console.log(tribonacci(25))

// var thirdMax = function(nums) {
//     let arr = []
//     for (let i = 0 ; i<nums.length ; i++){
//         if(!arr.includes(nums[i])){
//             arr.push(nums[i])
//         }
//     }
//     let  t = 0;
//     for(let i = 0 ; i<arr.length ; i++){
//         for(let j = i ; j<arr.length ; j++){
//             if(arr[j]>arr[i]){
//                 t = arr[j];
//                 arr[j] = arr[i]
//                 arr[i] = t 
//             }
//         }
//     }
//     console.log(arr)
//     return arr[2]
// };
// let num1 = "9333852702227987"
// let num2 = "85731737104263"

// num1 = "11"
// num2="12"

// var addStrings = function(num1, num2) {

//     console.log(num1)
//     return `${(+num1) + (+num2) - 2}`
// };

// console.log(addStrings(num1,num2))

// let nums = [1,2,3,6,3] // true

// const contiansDaplicate = function (array){
//     let x = []

//     for(let i = 0 ; i<array.length ; i++){
//         if(!x.includes(array[i])){
//             x.push(array[i])
//         }
//         else{
//             return true
//         }
//     }
//     return false;
// }

// console.log(contiansDaplicate(nums))


// var containsDuplicate = function(nums) {
//     let arr =[];
//     for(let i = 0 ; i<nums.length ; i++){
//         if(!arr.includes(nums[i])){
//             arr[i]=nums[i]
//         }else{
//             return true
//         }
//     }
//     return false
// };

//console.log(containsDuplicate([1,2,3,4,5,6,5]))
// console.log(containsDuplicate([15,25,35 , 25]))

// var isAnagram = function(s, t) {
//     if(s.length!=t.length){
//         return false
//     }
//     let obj = {}
//     let obj1 ={}
//     let flag = true
//     for(let i = 0 ; i<s.length ; i++){
//     if(obj[s[i]] == undefined){
//         obj[s[i]]=1
//     }else{
//         obj[s[i]]++
//     }
//     }
//     for(let i = 0 ; i<t.length ; i++){
//         if(obj1[t[i]] == undefined){
//             obj1[t[i]]=1
//         }else{
//             obj1[t[i]]++
//         }
//         }

   
//     for(let i = 0 ; i<s.length ; i++){
//     if(obj[s[i]]!=obj1[s[i]]){
//         return false
//     }
//     }
    
//     return true
// };
// let t = "anagram", s = "nagaram"
// console.log(isAnagram(s,t))

// let obj = {a: 3, n: 1, g: 1, r: 1, m: 1}
// let obj1 ={n: 1, a: 3, g: 1, r: 1, m: 1}
// console.log(Object.keys(obj).length)
// let flag = true
// for(let i = 0 ; i<s.length ; i++){
//     if(obj[s[i]]!==obj1[s[i]]){
//         flag = false
//         break
//     }

// }
// console.log(flag)
// let g = "b"
// console.log(g.charCodeAt())
// console.log(s.split('').sort().join(''))
// console.log(t.split('').sort().join(''))
// s.split('').sort().join('') == t.split('').sort().join('')

// var numIdenticalPairs = function(nums) {
//     let count =0 ;
//     let arr =[]
//     for(let i = 0 ; i<nums.length ; i++){
//         if(!arr.includes(nums[i])){
//             arr[i]=nums[i]
//         }else{
//             count++
//         }
//     }
//     return count
// };

// let nums = [1,2,3,1,1,3]
// // nums = [1,1,1,1]
// // nums = [1,2,3]
// console.log(numIdenticalPairs(nums))

// var numJewelsInStones = function(jewels, stones) {
//     let count = 0
//     let arr=[]
//     let arr1 = []
//     for(let i = 0 ; i<jewels.length;i++){
//         arr[i]=jewels[i]
//     }
//     for(let i = 0 ; i<stones.length ; i++){
//         if(arr.includes(stones[i])){
//             count++
//         }
//     }
//     return count
// };

// let jewels = "aA", stones = "aAAbbbb"
// // jewels = "ebd"
// // stones = "bbb"
// console.log(numJewelsInStones(jewels,stones))
// let c=0;
// for(let i = 0 ; i<stones.length;i++){
    
//     if(jewels.includes(stones[i])){
//         c++
//     }
// }

// console.log(c)

//1365. How Many Numbers Are Smaller Than the Current Number  -------- hashing OR hash table --- leetcode

// var smallerNumbersThanCurrent = function(nums) {
//     let arr =[]
//     let count = 0 ; 
//     let itration = 0

//     for(let i=0 ; i<nums.length ; i++){
//         for(let j = 0 ; j<nums.length ; j++){
//             if(nums[j]<nums[i]){
//                 count++
//             }
//             if(count == nums.length-1){
//                 nums.splice(i,i+1)
//             }
//         }
//         arr[i]=count
//         count = 0
//     }
//     return arr
// };

// let nums = [8,1,2,2,3]
// // nums = [6,5,4,8]
// console.log(smallerNumbersThanCurrent(nums))

// var smallerNumbersThanCurrent = function(nums) {
//     nums.map(a => {
//         a<a
        
//     })
// };

// let nums = [8,1,2,2,3]
// // nums = [6,5,4,8]
// console.log(smallerNumbersThanCurrent(nums))

//2006. Count Number of Pairs With Absolute Difference K  -------- hashing OR hash table --- leetcode


// var countKDifference = function(nums, k) {
//     let count = 0 ;
//     let arr=[]

//     for(let i = 0 ; i<nums.length ; i++){
//         for(let j =i ; j<nums.length ; j++){
//             if(Math.abs(nums[i]-nums[j]) == k){
//                 count++
//             }
//         }
//     }
//    return count
// };

// let nums = [1,2,2,1], k = 1

// console.log(countKDifference(nums,k))

//1684. Count the Number of Consistent Strings  -------- hashing OR hash table --- leetcode

// var countConsistentStrings = function(allowed, words) {
//     let count = 0 ;
//     let flag = true;
    
//     for(let i = 0 ; i<words.length ; i++){
//         let sp = words[i]
//         for(let j = 0 ; j<sp.length ; j++){
//             if(!allowed.includes(sp[j])){
//               flag=false  
//             }
//         }
//         if(flag){
//             count++
//         }
//         flag = true
//     }
//     return count;
// };



//soluation 2 
// var countConsistentStrings = function(allowed, words) {
//     let objHash = {}
    
//     let count =0;
//     for(let i = 0 ; i<allowed.length ; i++){
        
//         objHash[allowed[i]]=1
//     }
//     for(let i = 0 ; i<words.length ; i++){
//         let arr=[]
//         let sp = words[i].split("")
//         for(let j = 0 ; j<sp.length ; j++){
//             if(objHash[sp[j]]==undefined){
//               arr[j]=false  
//             }else{
//                 arr[j]=true
//             }
//         }
//         if(!arr.includes(false)){
//             count++
//         }
//     }
//     return count;
// };

// let allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// // countConsistentStrings(allowed,words)
// allowed = "abc"
// words = ["a","b","c","ab","ac","bc","abc"]

// allowed = "cad"
// words = ["cc","acd","b","ba","bac","bad","ac","d"]

// allowed = "pwqcdyrjhoizekt"
// words = ["ipeihtzjwq","rwrcci","n","ktrjyhh","zipdehh","cqe","ptwwe","c","cckq","qwdqiddh","kfriwenu","y","evbvg"] //13
// console.log(countConsistentStrings(allowed,words))

//2103. Rings and Rods -------- hashing OR hash table --- leetcode
var countPoints = function(rings) {
    
};

let rings = "B0B6G0R6R0R6G9"
countPoints(rings)
// console.log(countPoints(rings))