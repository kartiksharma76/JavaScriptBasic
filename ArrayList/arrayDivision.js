function arrayDivision(){
    let arr =  [1, 2, 3, 4, 5, 6, 7, 8, 9];


 
let mid = Math.floor(arr.length/2);
let firstHalf =arr.slice (0,mid);
let secondHalf = arr.slice(mid);

// print halves

console.log("First Half:", firstHalf);
console.log("Second Half:", secondHalf);

}
arrayDivision();