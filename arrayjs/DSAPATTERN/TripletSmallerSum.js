function tripletWithSmallerSum(arr, target) {
    if (arr.length < 3) return 0;


    arr.sort((a, b) => a - b);
    let count = 0;


    for (let i = 0; i < arr.length; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            const currentSum = arr[i] + arr[left] + arr[right];

            if (currentSum < target) {
                count += right - left;
                left++;

            } else {
                right--;
            }

        }

    }
    return count;
}
console.log(tripletWithSmallerSum([-1, 0, 2, 3], 3));//2
console.log(tripletWithSmallerSum([-1, 4, 2, 1, 3], 5));//4
