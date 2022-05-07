//74. Search a 2D Matrix  ---- Bainary search 

// var searchMatrix = function(matrix, target) {
//     for(let i = 0 ; i<matrix.length ; i++){
//         if(matrix[i].includes(target)) return true;

//     }
//     return false;
// };

// let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3;

// console.log(searchMatrix(matrix , target))

//206. Reverse Linked List  ---- linked list


// var reverseList = function(head) {
    
//     let arr =[];
//     let index = 0;
//     for(let i = head.length-1 ; i>=0 ; i--){
//         arr[index] = head[i];
//         index++;
//     }
//     return arr;
    
// };

// let head = [1,2,3,4,5];
// head = [1,2];
// console.log(reverseList(head))

//1464. Maximum Product of Two Elements in an Array

// var maxProduct = function(nums) {
//     nums.sort((a,b)=>b-a);
//     let res = (nums[0]-1)* (nums[1]-1);

//     return res;
// };

// let nums = [3,4,5,2];
// console.log(maxProduct(nums))

//1337. The K Weakest Rows in a Matrix

var kWeakestRows = function(mat, k) {
    let arr =[];
    for (let i = 0; i < mat.length; i++) {
        let count =0 ;
        for (let j = 0; j < mat[i].length; j++) {
            if(mat[i][j] == 1){
                count++
            }
        }
        arr.push(count);
    }
    

};

let mat = 
[[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]], 
k = 3;

console.log(kWeakestRows(mat,k));

