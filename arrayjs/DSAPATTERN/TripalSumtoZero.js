function searchTriplets(arr) {
    arr.sort((a, b) => a - b);
    const triplets = [];

    for (let i = 0; i < arr.length - 2; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) {
            continue;
        }
        searchPair(arr, -arr[i], i + 1, triplets);
    }
    return triplets;
}

function searchPair(arr, targetSum, left, triplets) {
    let right = arr.length - 1;

    while (left < right) {
        const currentSum = arr[left] + arr[right];

        if (currentSum === targetSum) {

            triplets.push([-targetSum, arr[left], arr[right]]);

            while (left < right && arr[left] === arr[left + 1]) {
                left++;
            }
            while (left < right && arr[right] === arr[right - 1]) {
                right--;
            }
            left++;
            right--;
        } else if (currentSum < targetSum) {
            left++;
        } else {
            right--;
        }
    }
}

console.log(searchTriplets([-3, 0, 1, 2, -1, 1, -2]));
// Output: [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]

console.log(searchTriplets([-5, 2, -1, -2, 3]));
// Output: [[-5, 2, 3], [-2, -1, 3]]