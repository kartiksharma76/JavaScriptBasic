function isPalindrome(arr) {
    let n = arr.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        if (arr[i] !== arr[n - 1 - i]) {
            return false;

        }

    }
    return true;

}
let arr = [1, 2, 3, 2, 1];
console.log(isPalindrome(arr));
