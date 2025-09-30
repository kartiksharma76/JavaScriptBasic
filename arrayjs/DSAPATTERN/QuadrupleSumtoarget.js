function searchQuadruplets(arr, target) {
    const quadruplets = [];


    if (arr.length < 4) return quadruplets;
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 3; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue;
        for (let j = i + 1; j < arr.length - 2; j++) {
            if (j > i + 1 && arr[j] === arr[j - 1]) continue;
            searchPairs(arr, target, i, j, quadruplets);
        }
    }

    return quadruplets;
}

function searchPairs(arr, target, first, second, quadruplets) {
    let left = second + 1;
    let right = arr.length - 1;
    while (left < right) {
        const sum = arr[first] + arr[second] + arr[left] + arr[right];
        if (sum === target) {
            quadruplets.push([arr[first], arr[second], arr[left], arr[right]]);
            left++;
            right--;
            while (left < right && arr[left] === arr[left - 1]) {
                left++;
            }
            while (left < right && arr[right] === arr[right + 1]) {
                right--;
            }
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
}
console.log(searchQuadruplets([4, 1, 2, -1, 1, -3], 1));
console.log(searchQuadruplets([2, 0, -1, 1, -2, 2], 2));
