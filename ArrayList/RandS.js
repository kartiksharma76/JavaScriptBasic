function findMissingAndRepeating(arr) {
    let n = arr.length;
    let freq = new Array(n + 1).fill(0);

    for (let num of arr) {
        freq[num]++;
    }
    let repeating = -1, missing = -1;
    for (let i = 1; i <= n; i++) {
        if (freq[i] === 2) repeating = i;
        else if (freq[i] === 0) missing = i;


    }
    return [repeating, missing];
}
let arr = [1, 3, 5];
let result = findMissingAndRepeating(arr);
console.log(result[0] + "," + result[1]);
