function removeDuplicate(arr){
    arr.sort((a,b) =>a - b);
    let result = [];

    for(let i =0; i<arr.length;i++){
        if (i===0 || arr[i]!==arr[i - 1]) {
            result.push(arr[i]);
            
        }
    }
    return result;
}
let arr = [1,2,3,4,2,1,2];
let uniqueArr= removeDuplicate(arr);
console.log(uniqueArr);

