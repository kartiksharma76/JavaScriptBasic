function tripletSumCloseToTarget(arr, targetSum) {
    if (arr.length < 3) return 0;

    arr.sort((a, b) => a - b);

    let closetSum = arr[0] + arr[1] + arr[2];

    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            const currentSum = arr[i] + arr[left] + arr[right];

            if (Math.abs(targetSum - currentSum) < Math.abs(targetSum - closetSum)) {
                closetSum = currentSum;

            }
            if (currentSum < targetSum) {
                left++;

            } else {
                right--;
            }

        }
    }
    return closetSum;
}
console.log(tripletSumCloseToTarget([-2, 0, 1, 2], 2)); // Output: 1
console.log(tripletSumCloseToTarget([-3, -1, 1, 2], 1)); // Output: 0
console.log(tripletSumCloseToTarget([1, 0, 1, 1], 100)); // Output: 3
console.log(tripletSumCloseToTarget([-1, 2, 1, -4], 1)); // Output: 2