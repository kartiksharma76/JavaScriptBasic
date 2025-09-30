function removeDuplicate(arr){
    return [...new Set(arr)];
}
console.log(removeDuplicate([1,2,2,3,4,4,5]));
console.log(removeDuplicate(['a','b','b','c']));

// function removeDuplicates(arr) {
//     return arr.filter((item, index) => arr.indexOf(item) === index);
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));