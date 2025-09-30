function minimumWindowSort(arr) {
    if (arr.length <= 1) return [-1, -1];

    // Step 1: Find the first element from the left that is out of order
    let low = 0;
    while (low < arr.length - 1 && arr[low] <= arr[low + 1]) {
        low++;
    }

    // If we reached the end, array is already sorted
    if (low === arr.length - 1) return [-1, -1];

    // Step 2: Find the first element from the right that is out of order
    let high = arr.length - 1;
    while (high > 0 && arr[high] >= arr[high - 1]) {
        high--;
    }

    // Step 3: Find min and max values in the subarray [low, high]
    let subarrayMin = Infinity;
    let subarrayMax = -Infinity;

    for (let i = low; i <= high; i++) {
        subarrayMin = Math.min(subarrayMin, arr[i]);
        subarrayMax = Math.max(subarrayMax, arr[i]);
    }

    // Step 4: Extend the subarray to the left to include any elements > subarrayMin
    while (low > 0 && arr[low - 1] > subarrayMin) {
        low--;
    }

    // Step 5: Extend the subarray to the right to include any elements < subarrayMax
    while (high < arr.length - 1 && arr[high + 1] < subarrayMax) {
        high++;
    }

    return [low, high];
}

console.log(minimumWindowSort([1, 2, 5, 3, 7, 10, 9, 12])); // [2, 6]
console.log(minimumWindowSort([1, 3, 2, 0, -1, 7, 10])); // [0, 4]
console.log(minimumWindowSort([1, 2, 3])); // [-1, -1]
console.log(minimumWindowSort([3, 2, 1])); // [0, 2]