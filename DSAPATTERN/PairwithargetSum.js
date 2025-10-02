function pairWithTargetSum(arr,target){
    const numMap = new Map();

    for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (numMap.has(complement)) {
        return[numMap.get(complement),i];

        
    }
    numMap.set(arr[i], i);
        
 }
 return null;
}
console.log(pairWithTargetSum([1,2,3,4,6],6));
console.log(pairWithTargetSum([2,5,9,11]));
