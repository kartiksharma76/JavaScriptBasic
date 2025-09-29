function findClosestSumToZero(arr) {
    arr.sort((a, b) => a - b);
    let left = 0;
    let right = arr.length - 1;
    let minValue = Number.MAX_VALUE;
    let result = [0, 0];

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (Math.abs(sum) < minValue) {
            minValue = Math.abs(sum);
            result = [arr[left], arr[right]];
        }

        if (sum < 0) {
            left++;
        } else {
            right--;
        }
    }
    return result;
}

let arr = [10, 20, -100, 40, 50];
let closedSumToZero = findClosestSumToZero(arr);
console.log(closedSumToZero[0] + " and " + closedSumToZero[1]);
