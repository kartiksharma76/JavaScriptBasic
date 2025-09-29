function reverseArray(arr) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }
    return arr;
}
let arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr));
