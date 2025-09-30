function findSubarrayWithProductLessThanTarget(arr, target) {
    if (target <= 1 || arr.length === 0) return [];

    const result = [];
    let left = 0;
    let product = 1;

    for (let right = 0; right < arr.length; right++) {
        product *= arr[right];

        while (product >= target && left <= right) {
            product /= arr[left];
            left++;
        }
        for (let i = right; i >= left; i--) {
            result.push(arr.slice(i, right + 1));

        }
    }
    return result;
}

console.log(findSubarrayWithProductLessThanTarget([2, 5, 3, 10], 30));
console.log(findSubarrayWithProductLessThanTarget([8, 2, 6, 5], 50));
