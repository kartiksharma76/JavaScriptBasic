function removeDuplicate(nums){
    if(nums.length===0) return 0;

    let writeIndex = 1;
    for (let readIndex = 1; readIndex < nums.length; readIndex++) {
       if (nums[readIndex] != nums[readIndex-1]) {
        nums[writeIndex] = nums [readIndex];
        writeIndex++;        
       }
        
    }
    return writeIndex;
}
let arr1 = [1,1,2,2,3];
let newLength1 = removeDuplicate(arr1);
// console.log(newLength1);
console.log(arr1.slice(0,newLength1));

